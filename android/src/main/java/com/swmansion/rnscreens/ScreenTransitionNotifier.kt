package com.swmansion.rnscreens

import android.util.Log

// Seam letting code outside react-native-screens observe screen arrival, on the UI thread.
object ScreenTransitionNotifier {
    private const val TAG = "ScreenTransitionNotifier"

    interface Listener {
        fun onScreenDidAppear(screenId: String?)

        fun onScreenBecameTopMost(screenId: String?)
    }

    @Volatile
    var listener: Listener? = null

    // Routed through here rather than called directly: a listener exception must never propagate into
    // react-native-screens' own lifecycle dispatch, since every screen transition in the app hits this.
    fun notifyDidAppear(screenId: String?) {
        try {
            listener?.onScreenDidAppear(screenId)
        } catch (e: Exception) {
            Log.e(TAG, "listener.onScreenDidAppear threw", e)
        }
    }

    fun notifyBecameTopMost(screenId: String?) {
        try {
            listener?.onScreenBecameTopMost(screenId)
        } catch (e: Exception) {
            Log.e(TAG, "listener.onScreenBecameTopMost threw", e)
        }
    }
}
