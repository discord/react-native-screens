"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EdgeInsetApplicationContext = void 0;
exports.useEdgeInsetApplication = useEdgeInsetApplication;
var React = _interopRequireWildcard(require("react"));
var _flags = require("../../flags");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
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

const DEFAULT_STATE = {
  topAlreadyApplied: false,
  leftDisabled: false,
  rightDisabled: false,
  bottomDisabled: false
};
const EdgeInsetApplicationContext = exports.EdgeInsetApplicationContext = /*#__PURE__*/React.createContext(DEFAULT_STATE);
function useEdgeInsetApplication(headerVisible, disableTopInsetApplication, disableLeftInsetApplication, disableRightInsetApplication, disableBottomInsetApplication) {
  const {
    topAlreadyApplied,
    leftDisabled,
    rightDisabled,
    bottomDisabled
  } = React.useContext(EdgeInsetApplicationContext);
  const useLegacyBehavior = _flags.featureFlags.experiment?.androidLegacyTopInsetBehavior ?? false;

  // We want to apply the top inset if:
  // - legacy mode (androidLegacyTopInsetBehavior)
  // - or when no ancestor applied it yet and our header is visible
  const wantsToApplyTopInset = useLegacyBehavior || !topAlreadyApplied && headerVisible;

  // We apply the top padding only if we want to apply the inset and haven't been told to suppress it.
  const appliesTopInset = wantsToApplyTopInset && !disableTopInsetApplication;

  // Once disabled anywhere up the chain, an edge stays disabled for the whole subtree.
  const nextLeftDisabled = leftDisabled || disableLeftInsetApplication;
  const nextRightDisabled = rightDisabled || disableRightInsetApplication;
  const nextBottomDisabled = bottomDisabled || disableBottomInsetApplication;
  const nextContextValue = React.useMemo(() => ({
    // Once a header that may apply the top padding is found, mark it as consumed for the subtree.
    topAlreadyApplied: topAlreadyApplied || wantsToApplyTopInset,
    leftDisabled: nextLeftDisabled,
    rightDisabled: nextRightDisabled,
    bottomDisabled: nextBottomDisabled
  }), [topAlreadyApplied, wantsToApplyTopInset, nextLeftDisabled, nextRightDisabled, nextBottomDisabled]);
  return {
    appliesTopInset,
    consumeLeftInset: !nextLeftDisabled,
    consumeRightInset: !nextRightDisabled,
    consumeBottomInset: !nextBottomDisabled,
    useLegacyBehavior,
    nextContextValue
  };
}
//# sourceMappingURL=EdgeInsetApplicationContext.js.map