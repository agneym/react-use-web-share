function shareContent(config: IShareConfig, onSuccess: () => void, onError: () => void) {
  return function () {
    navigator
      .share(config)
      .then(onSuccess)
      .catch(onError);
  };
}

export default shareContent;