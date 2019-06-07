/**
 * Trigger native share popup
 */
declare function shareContent(onSuccess: () => void, onError: () => void): (config: Partial<IShareConfig>) => void;
export default shareContent;
