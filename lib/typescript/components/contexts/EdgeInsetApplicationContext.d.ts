import * as React from 'react';
/**
 * Carries the inset-application state down the stack hierarchy for every edge.
 *
 * The semantics differ between the top edge and the rest:
 * - `topAlreadyApplied`: the top inset is coordinated "consume-once" across nested headers,
 *   so `true` means an ancestor header already applied it and the subtree should skip it.
 * - `left/right/bottomDisabled`: these insets are applied per-header (every header spans the
 *   full width and needs the inset on its own edges, and a custom `SafeAreaView` may consume
 *   them for a part of the subtree). The flags therefore only propagate the opt-out down the
 *   subtree: `true` means an ancestor header opted out, so the whole subtree should skip it.
 *   This context does NOT coordinate which header applies these insets — every header applies
 *   them on its own edges unless opted out.
 */
export interface EdgeInsetApplicationState {
    topAlreadyApplied: boolean;
    leftDisabled: boolean;
    rightDisabled: boolean;
    bottomDisabled: boolean;
}
export declare const EdgeInsetApplicationContext: React.Context<EdgeInsetApplicationState>;
export declare function useEdgeInsetApplication(headerVisible: boolean, disableTopInsetApplication: boolean, disableLeftInsetApplication: boolean, disableRightInsetApplication: boolean, disableBottomInsetApplication: boolean): {
    appliesTopInset: boolean;
    consumeLeftInset: boolean;
    consumeRightInset: boolean;
    consumeBottomInset: boolean;
    useLegacyBehavior: boolean;
    nextContextValue: EdgeInsetApplicationState;
};
//# sourceMappingURL=EdgeInsetApplicationContext.d.ts.map