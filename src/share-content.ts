import getUrl from "./get-url";

/**
 * Trigger native share popup
 */
function shareContent(onSuccess: () => void, onError: () => void) {
  return function (config: Partial<IShareConfig>) {
    const url = getUrl(config.url);
    const title = config.title || document.title;
    const text = config.text;
    navigator
      .share({ text, title, url })
      .then(onSuccess)
      .catch(onError);
  };
}

export default shareContent;