package com.swmansion.rnscreens

import com.facebook.react.bridge.JSApplicationIllegalArgumentException
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.ReactStylesDiffMap
import com.facebook.react.uimanager.StateWrapper
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewGroupManager
import com.facebook.react.uimanager.ViewManagerDelegate
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.viewmanagers.RNSScreenStackHeaderSubviewManagerDelegate
import com.facebook.react.viewmanagers.RNSScreenStackHeaderSubviewManagerInterface

@ReactModule(name = ScreenStackHeaderSubviewManager.REACT_CLASS)
class ScreenStackHeaderSubviewManager :
    ViewGroupManager<ScreenStackHeaderSubview>(),
    RNSScreenStackHeaderSubviewManagerInterface<ScreenStackHeaderSubview> {
    private val delegate: ViewManagerDelegate<ScreenStackHeaderSubview>

    init {
        delegate = RNSScreenStackHeaderSubviewManagerDelegate<ScreenStackHeaderSubview, ScreenStackHeaderSubviewManager>(this)
    }

    override fun getName() = REACT_CLASS

    override fun createViewInstance(context: ThemedReactContext) = ScreenStackHeaderSubview(context)

    @ReactProp(name = "type")
    override fun setType(
        view: ScreenStackHeaderSubview,
        type: String?,
    ) {
        view.type =
            when (type) {
                "left" -> ScreenStackHeaderSubview.Type.LEFT
                "center" -> ScreenStackHeaderSubview.Type.CENTER
                "right" -> ScreenStackHeaderSubview.Type.RIGHT
                "back" -> ScreenStackHeaderSubview.Type.BACK
                "searchBar" -> ScreenStackHeaderSubview.Type.SEARCH_BAR
                else -> throw JSApplicationIllegalArgumentException("Unknown type $type")
            }
    }

    override fun updateState(
        view: ScreenStackHeaderSubview,
        props: ReactStylesDiffMap?,
        stateWrapper: StateWrapper?,
    ): Any? {
        if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
            view.setStateWrapper(stateWrapper)
        }
        return super.updateState(view, props, stateWrapper)
    }

    protected override fun getDelegate(): ViewManagerDelegate<ScreenStackHeaderSubview> = delegate

    companion object {
        const val REACT_CLASS = "RNSScreenStackHeaderSubview"
    }
}
