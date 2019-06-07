/**
 * Use native web share dialog when available
 * @param onSuccess function called on successfully sharing content
 * @param onError callback function called on error sharing content
 * @example
 * const { isSupported, isLoading, share } = useWebShare(successFn, errorFn);
 */
declare function useWebShare(onSuccess?: () => void, onError?: () => void): {
    loading: boolean;
    isSupported: boolean;
    share: (config: Partial<IShareConfig>) => void;
};
export default useWebShare;
