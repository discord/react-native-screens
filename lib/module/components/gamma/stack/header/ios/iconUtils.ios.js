import { Image } from 'react-native';
export function resolveIconAssetSources(icon) {
  if (icon == null) {
    return undefined;
  }
  if (icon.type === 'imageSource') {
    const resolvedImageSource = Image.resolveAssetSource(icon.imageSource);
    if (!resolvedImageSource) {
      return undefined;
    }
    return {
      type: 'imageSource',
      imageSource: resolvedImageSource
    };
  }
  if (icon.type === 'templateSource') {
    const resolvedTemplateSource = Image.resolveAssetSource(icon.templateSource);
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