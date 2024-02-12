import React, { PropsWithChildren } from 'react';
import { GestureProviderProps } from '../types';
import { PanGesture } from 'react-native-gesture-handler';

// context to be used when the user wants full screen swipe (see `gesture-handler` folder in repo)
export const GHContext = React.createContext({
  ScreenGestureDetector: (props: PropsWithChildren<GestureProviderProps>) => (
    <>{props.children}</>
  ),
  gestureRef: { current: undefined } as
    | React.MutableRefObject<PanGesture | undefined>
    | undefined,
});
