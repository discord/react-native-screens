import React from 'react';
import { findNodeHandle } from 'react-native';
import { RNSLog } from '../../../private';
export function useTabsScreen({
  componentNodeRef,
  onDidAppear,
  onDidDisappear,
  onWillAppear,
  onWillDisappear,
  screenKey
}) {
  const componentNodeHandle = React.useRef(-1);
  React.useEffect(() => {
    if (componentNodeRef.current != null) {
      componentNodeHandle.current = findNodeHandle(componentNodeRef.current) ?? -1;
    } else {
      componentNodeHandle.current = -1;
    }
  }, []);
  const onWillAppearCallback = React.useCallback(event => {
    RNSLog.log(`TabsScreen [${componentNodeHandle.current}] onWillAppear received`);
    onWillAppear?.(event);
  }, [onWillAppear]);
  const onDidAppearCallback = React.useCallback(event => {
    RNSLog.log(`TabsScreen [${componentNodeHandle.current}] onDidAppear received`);
    onDidAppear?.(event);
  }, [onDidAppear]);
  const onWillDisappearCallback = React.useCallback(event => {
    RNSLog.log(`TabsScreen [${componentNodeHandle.current}] onWillDisappear received`);
    onWillDisappear?.(event);
  }, [onWillDisappear]);
  const onDidDisappearCallback = React.useCallback(event => {
    RNSLog.log(`TabsScreen [${componentNodeHandle.current}] onDidDisappear received`);
    onDidDisappear?.(event);
  }, [onDidDisappear]);
  RNSLog.log(`TabsScreen [${componentNodeHandle.current ?? -1}] render; screenKey: ${screenKey}`);
  return {
    componentNodeRef,
    lifecycleCallbacks: {
      onWillAppear: onWillAppearCallback,
      onDidAppear: onDidAppearCallback,
      onWillDisappear: onWillDisappearCallback,
      onDidDisappear: onDidDisappearCallback
    }
  };
}
//# sourceMappingURL=useTabsScreen.js.map