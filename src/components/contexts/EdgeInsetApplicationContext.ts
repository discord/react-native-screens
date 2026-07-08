import * as React from 'react';

/**
 * Carries the inset-application state down the stack hierarchy for every edge.
 *
 * `left/right/bottomDisabled`: these insets are applied per-header (every header spans the
 * full width and needs the inset on its own edges, and a custom `SafeAreaView` may consume
 * them for a part of the subtree). The flags therefore only propagate the opt-out down the
 * subtree: `true` means an ancestor header opted out, so the whole subtree should skip it.
 * This context does NOT coordinate which header applies these insets — every header applies
 * them on its own edges unless opted out.
 */
export interface EdgeInsetApplicationState {
  leftDisabled: boolean;
  rightDisabled: boolean;
  bottomDisabled: boolean;
}

const DEFAULT_STATE: EdgeInsetApplicationState = {
  leftDisabled: false,
  rightDisabled: false,
  bottomDisabled: false,
};

export const EdgeInsetApplicationContext =
  React.createContext<EdgeInsetApplicationState>(DEFAULT_STATE);

export function useEdgeInsetApplication(
  disableLeftInsetApplication: boolean,
  disableRightInsetApplication: boolean,
  disableBottomInsetApplication: boolean,
) {
  const { leftDisabled, rightDisabled, bottomDisabled } = React.useContext(
    EdgeInsetApplicationContext,
  );

  // Once disabled anywhere up the chain, an edge stays disabled for the whole subtree.
  const nextLeftDisabled = leftDisabled || disableLeftInsetApplication;
  const nextRightDisabled = rightDisabled || disableRightInsetApplication;
  const nextBottomDisabled = bottomDisabled || disableBottomInsetApplication;

  const nextContextValue = React.useMemo<EdgeInsetApplicationState>(
    () => ({
      leftDisabled: nextLeftDisabled,
      rightDisabled: nextRightDisabled,
      bottomDisabled: nextBottomDisabled,
    }),
    [nextLeftDisabled, nextRightDisabled, nextBottomDisabled],
  );

  return {
    consumeLeftInset: !nextLeftDisabled,
    consumeRightInset: !nextRightDisabled,
    consumeBottomInset: !nextBottomDisabled,
    nextContextValue,
  };
}
