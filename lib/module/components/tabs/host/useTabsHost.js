import React from 'react';
import { findNodeHandle } from 'react-native';
import { RNSLog } from '../../../private';
export function useTabsHost({
  componentNodeRef,
  onTabSelected
}) {
  const componentNodeHandle = React.useRef(-1);
  React.useEffect(() => {
    if (componentNodeRef.current != null) {
      componentNodeHandle.current = findNodeHandle(componentNodeRef.current) ?? -1;
    } else {
      componentNodeHandle.current = -1;
    }
  }, []);
  const onTabSelectedCallback = React.useCallback(event => {
    RNSLog.log(`TabsHost [${componentNodeHandle.current ?? -1}] onTabSelected: ${JSON.stringify(event.nativeEvent)}`);
    onTabSelected?.(event);
  }, [onTabSelected]);
  return {
    onTabSelected: onTabSelectedCallback
  };
}
//# sourceMappingURL=useTabsHost.js.map