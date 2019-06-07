/**
 * Use native web share dialog when available
 * @param onSuccess function called on successfully sharing content
 * @param onError callback function called on error sharing content
 */
declare function useWebShare(args?: Partial<IShareConfig>, onSuccess?: () => void, onError?: () => void): {
    loading: boolean;
    isSupported: boolean;
    config: IShareConfig;
    share: () => void;
};
export default useWebShare;
