package com.swmansion.rnscreens

import android.annotation.SuppressLint
import android.icu.util.Measure
import android.util.Log
import com.facebook.react.bridge.ReactContext
import com.facebook.react.views.view.ReactViewGroup

/**
 * When we wrap children of the Screen component inside this component in JS code,
 * we can later use it to get the enclosing frame size of our content as it is rendered by RN.
 *
 * This is useful when adapting form sheet height to its contents height.
 */
@SuppressLint("ViewConstructor")
class ScreenContentWrapper(
    reactContext: ReactContext,
) : ReactViewGroup(reactContext) {
    internal var delegate: OnLayoutCallback? = null

    interface OnLayoutCallback {
        fun onContentWrapperLayout(
            changed: Boolean,
            left: Int,
            top: Int,
            right: Int,
            bottom: Int,
        )
    }

    override fun onMeasure(widthMeasureSpec: Int, heightMeasureSpec: Int) {
        val width = MeasureSpec.getSize(widthMeasureSpec)
        val height = MeasureSpec.getSize(heightMeasureSpec)
        Log.i("ScreenContentWrapper", "[ContentWrapper] measured $width $height")
        super.onMeasure(widthMeasureSpec, heightMeasureSpec)
    }

    override fun onLayout(
        changed: Boolean,
        left: Int,
        top: Int,
        right: Int,
        bottom: Int,
    ) {
        Log.i("ScreenContentWrapper", "[ContentWrapper] received layout: ${right - left}, ${bottom - top}")
        delegate?.onContentWrapperLayout(changed, left, top, right, bottom)
    }
}
