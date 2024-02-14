import React from 'react';
import { GHContext } from '../native-stack/contexts/GHContext';
import ScreenGestureDetector from './ScreenGestureDetector';
import type { GestureProviderProps } from '../native-stack/types';
import type { PanGesture } from 'react-native-gesture-handler';

function GHWrapper(props: GestureProviderProps) {
  return <ScreenGestureDetector {...props} />;
}

export default function GestureDetectorProvider(props: {
  children: React.ReactNode;
  gestureRef?: React.MutableRefObject<PanGesture | undefined>;
}) {
  return (
    <GHContext.Provider
      value={{
        ScreenGestureDetector: GHWrapper,
        gestureRef: props.gestureRef,
      }}>
      {props.children}
    </GHContext.Provider>
  );
}
