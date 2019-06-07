function shareContent(config, onSuccess, onError) {
  return function () {
    navigator
      .share(config)
      .then(onSuccess)
      .catch(onError);
  };
}

export default shareContent;