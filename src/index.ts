import { useState, useEffect } from 'react';

import shareContent from "./share-content";

/**
 * Use native web share dialog when available
 * @param onSuccess function called on successfully sharing content
 * @param onError callback function called on error sharing content
 */
function useWebShare(onSuccess = () => { }, onError = () => { }) {
  const [loading, setLoading] = useState(true);
  const [isSupported, setSupport] = useState(false);

  useEffect(
    () => {
      if (!!navigator.share) {
        setSupport(true);
      } else {
        setSupport(false);
      }
      setLoading(false);
    },
    [onSuccess, onError]
  );

  return {
    loading,
    isSupported,
    share: shareContent(onSuccess, onError),
  };
}

export default useWebShare;
