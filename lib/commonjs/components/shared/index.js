"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseAndroidIconToNativeProps = parseAndroidIconToNativeProps;
var _reactNative = require("react-native");
function parseAndroidIconToNativeProps(icon) {
  if (!icon) {
    return {};
  }
  let parsedIconResource;
  if (icon.type === 'imageSource') {
    parsedIconResource = _reactNative.Image.resolveAssetSource(icon.imageSource);
    if (!parsedIconResource) {
      console.error('[RNScreens] Failed to resolve an asset.');
    }
    return {
      // I'm keeping undefined as a fallback if `Image.resolveAssetSource` has failed for some reason.
      // It won't render any icon, but it will prevent from crashing on the native side which is expecting
      // ReadableMap. Passing `iconResource` directly will result in crash, because `require` API is returning
      // double as a value.
      imageIconResource: parsedIconResource || undefined
    };
  } else if (icon.type === 'drawableResource') {
    return {
      drawableIconResourceName: icon.name
    };
  } else {
    throw new Error('[RNScreens] Incorrect icon format for Android. You must provide `imageSource` or `drawableResource`.');
  }
}
//# sourceMappingURL=index.js.map