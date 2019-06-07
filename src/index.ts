import { useState, useEffect, RefObject } from "react";

import toggle from "./toggle";

/**
 * React custom hook to use Picture-in-Picture functionality
 * @param videoRef Reference to the video element
 *
 * @example
 * const { loading, error, toggle } = usePip(videoRef);
 */
function usePip(videoRef: RefObject<HTMLVideoElement>) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(
    function checkSupport() {
      const video = videoRef.current;
      if (!video) {
        return;
      }
      if (!document.pictureInPictureEnabled || video.disablePictureInPicture) {
        setError("NotSupportedError");
        setLoading(false);
        return;
      }
      if (video.readyState === 0) {
        video.addEventListener("loadedmetadata", checkSupport);
        video.addEventListener("emptied", checkSupport);
        return;
      }
      setLoading(false);
      return () => {
        video.removeEventListener("loadeddata", checkSupport);
        video.removeEventListener("emptied", checkSupport);
      };
    },
    [videoRef]
  );

  return {
    error,
    loading,
    toggle: toggle(videoRef, setError),
  };
}

export default usePip;
