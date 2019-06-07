function getUrl(url?: string) {
  if(!!url) {
    return url;
  } else {
    const canonicalEl = document.querySelector('link[rel=canonical]') as HTMLLinkElement;
    return canonicalEl ? canonicalEl.href : window.location.href;
  }
}

export default getUrl;