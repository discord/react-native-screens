package com.swmansion.rnscreens.bottomsheet

import android.animation.ValueAnimator
import android.util.Log
import android.view.View
import android.view.ViewGroup
import com.facebook.react.uimanager.ThemedReactContext
import com.google.android.material.bottomsheet.BottomSheetBehavior
import com.google.android.material.bottomsheet.BottomSheetBehavior.BottomSheetCallback
import com.swmansion.rnscreens.Screen
import com.swmansion.rnscreens.ScreenStackFragment

class DimmingDelegate(val reactContext: ThemedReactContext, screen: Screen) {

    internal val dimmingView: DimmingView = initDimmingView(screen)
    internal val maxAlpha: Float = 0.3f
    private var dimmingViewCallback: BottomSheetCallback? = null


    /**
     * DELEGATE METHOD
     */
    fun onViewHierarchyCreated(screen: Screen, root: ViewGroup) {
        root.addView(dimmingView, 0)
        if (screen.sheetInitialDetentIndex <= screen.sheetLargestUndimmedDetentIndex) {
            dimmingView.alpha = 0.0f
        } else {
            dimmingView.alpha = maxAlpha
        }
    }

    /**
     * DELEGATE METHOD
     */
    fun onBehaviourAttached(screen: Screen, behavior: BottomSheetBehavior<Screen>) {
        behavior.addBottomSheetCallback(initBottomSheetCallback(screen))
    }

    /**
     * This bottom sheet callback is responsible for animating alpha of the dimming view.
     */
    private class AnimateDimmingViewCallback(
        val screen: Screen,
        val viewToAnimate: View,
        val maxAlpha: Float,
    ) : BottomSheetCallback() {
        // largest *slide offset* that is yet undimmed
        private var largestUndimmedOffset: Float =
            computeOffsetFromDetentIndex(screen.sheetLargestUndimmedDetentIndex)

        // first *slide offset* that should be fully dimmed
        private var firstDimmedOffset: Float =
            computeOffsetFromDetentIndex(
                (screen.sheetLargestUndimmedDetentIndex + 1).coerceIn(
                    0,
                    screen.sheetDetents.count() - 1,
                ),
            )

        // interval that we interpolate the alpha value over
        private var intervalLength = firstDimmedOffset - largestUndimmedOffset
        private val animator =
            ValueAnimator.ofFloat(0F, maxAlpha).apply {
                duration = 1 // Driven manually
                addUpdateListener {
//                    Log.w("DIMMINGDELEGATE", "ANIMATION UPDATE")
                    viewToAnimate.alpha = it.animatedValue as Float
                }
            }

        override fun onStateChanged(
            bottomSheet: View,
            newState: Int,
        ) {
            if (newState == BottomSheetBehavior.STATE_DRAGGING || newState == BottomSheetBehavior.STATE_SETTLING) {
                largestUndimmedOffset =
                    computeOffsetFromDetentIndex(screen.sheetLargestUndimmedDetentIndex)
                firstDimmedOffset =
                    computeOffsetFromDetentIndex(
                        (screen.sheetLargestUndimmedDetentIndex + 1).coerceIn(
                            0,
                            screen.sheetDetents.count() - 1,
                        ),
                    )
                assert(firstDimmedOffset >= largestUndimmedOffset) {
                    "[RNScreens] Invariant violation: firstDimmedOffset ($firstDimmedOffset) < largestDimmedOffset ($largestUndimmedOffset)"
                }
                intervalLength = firstDimmedOffset - largestUndimmedOffset
            }
        }

        override fun onSlide(
            bottomSheet: View,
            slideOffset: Float,
        ) {
//            Log.w("DIMMINGDELEGATE", "ON SLIDE")
            if (largestUndimmedOffset < slideOffset && slideOffset < firstDimmedOffset) {
                val fraction = (slideOffset - largestUndimmedOffset) / intervalLength
                animator.setCurrentFraction(fraction)
            }
        }

        /**
         * This method does compute slide offset (see [BottomSheetCallback.onSlide] docs) for detent
         * at given index in the detents array.
         */
        private fun computeOffsetFromDetentIndex(index: Int): Float =
            when (screen.sheetDetents.size) {
                1 -> // Only 1 detent present in detents array
                    when (index) {
                        -1 -> -1F // hidden
                        0 -> 1F // fully expanded
                        else -> -1F // unexpected, default
                    }

                2 ->
                    when (index) {
                        -1 -> -1F // hidden
                        0 -> 0F // collapsed
                        1 -> 1F // expanded
                        else -> -1F
                    }

                3 ->
                    when (index) {
                        -1 -> -1F // hidden
                        0 -> 0F // collapsed
                        1 -> screen.sheetBehavior!!.halfExpandedRatio // half
                        2 -> 1F // expanded
                        else -> -1F
                    }

                else -> -1F
            }
    }

    private fun initDimmingView(screen: Screen): DimmingView {
            return DimmingView(reactContext, maxAlpha).apply {
                // These do not guarantee fullscreen width & height, TODO: find a way to guarantee that
                layoutParams =
                    ViewGroup.LayoutParams(
                        ViewGroup.LayoutParams.MATCH_PARENT,
                        ViewGroup.LayoutParams.MATCH_PARENT,
                    )
                setOnClickListener {
                    if (screen.sheetClosesOnTouchOutside) {
                        (screen.fragment as ScreenStackFragment).dismissSelf()
                    }
                }
            }
    }

    private fun initBottomSheetCallback(screen: Screen): BottomSheetCallback {
        dimmingViewCallback = AnimateDimmingViewCallback(screen, dimmingView, maxAlpha)
        return dimmingViewCallback!!
    }

//    private fun requireDecorView(): View =
//        checkNotNull(screen.reactContext.currentActivity) { "[RNScreens] Attempt to access activity on detached context" }
//            .window.decorView
}