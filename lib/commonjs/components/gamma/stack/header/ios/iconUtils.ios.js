"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveIconAssetSources = resolveIconAssetSources;
var _reactNative = require("react-native");
function resolveIconAssetSources(icon) {
  if (icon == null) {
    return undefined;
  }
  if (icon.type === 'imageSource') {
    const resolvedImageSource = _reactNative.Image.resolveAssetSource(icon.imageSource);
    if (!resolvedImageSource) {
      return undefined;
    }
    return {
      type: 'imageSource',
      imageSource: resolvedImageSource
    };
  }
  if (icon.type === 'templateSource') {
    const resolvedTemplateSource = _reactNative.Image.resolveAssetSource(icon.templateSource);
    if (!resolvedTemplateSource) {
      return undefined;
    }
    return {
      type: 'templateSource',
      templateSource: resolvedTemplateSource
    };
  }
  return icon;
}
//# sourceMappingURL=iconUtils.ios.js.map