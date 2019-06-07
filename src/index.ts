import { useState, useEffect, useRef } from 'react';

import shareContent from "./share-content";

/**
 * Use native web share dialog when available
 * @param args Arguments to be passed to share
 * @param onSuccess function called on successfully sharing content
 * @param onError callback function called on error sharing content
 */
function useWebShare(args: Partial<IShareConfig> = {}, onSuccess = () => { }, onError = () => { }) {
  const [loading, setLoading] = useState(true);
  const [isSupported, setSupport] = useState(false);
  const config = useRef<IShareConfig>({
    url: '',
    title: '',
    text: '',
  });

  useEffect(
    () => {
      const canonicalEl = document.querySelector('link[rel=canonical]') as HTMLLinkElement;
      const url = canonicalEl ? canonicalEl.href : window.location.href;
      const title = args.title || document.title;
      const text = args.text || undefined;
      config.current = { title, text, url };

      if (!!navigator.share) {
        setSupport(true);
      } else {
        setSupport(false);
      }
      setLoading(false);
    },
    [args, onSuccess, onError]
  );

  return {
    loading,
    isSupported,
    config: config.current,
    share: shareContent(config.current, onSuccess, onError),
  };
}

export default useWebShare;
