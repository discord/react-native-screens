import type { FormSheetProps } from './FormSheet.types';
export declare function resolveNativeDetents(detents?: number[] | 'fitToContents'): number[] | undefined;
export declare function resolveInitialDetentIndex(initialDetentIndex: FormSheetProps['initialDetentIndex'], detentsCount?: number): number;
export declare function resolveNativeCornerRadius(radius?: number | 'systemDefault'): number | undefined;
/**
 * Resolves the JS `largestUndimmedDetentIndex` prop to a native numeric value.
 *
 * @param largestUndimmedDetent The prop value passed from the FormSheet.
 * @param detentsCount Length of the `detents` array as seen from JS.
 * @returns A value to pass to the native component:
 * - `-1` (`FORM_SHEET_ALWAYS_DIMMED`),
 * - `-2` (`FORM_SHEET_NEVER_DIMMED`),
 * - a non-negative index.
 */
export declare function resolveLargestUndimmedDetentIndex(largestUndimmedDetent: FormSheetProps['largestUndimmedDetentIndex'], detentsCount?: number): number;
//# sourceMappingURL=FormSheetUtils.d.ts.map