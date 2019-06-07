/**
 * Get the URL to be shared.
 * If the site uses canonical URL, then use that URL otherwise the current URL
 * @param url URL that might be passed on by the user
 */
function getUrl(url?: string) {
  if(!!url) {
    return url;
  } else {
    const canonicalEl = document.querySelector('link[rel=canonical]') as HTMLLinkElement;
    return canonicalEl ? canonicalEl.href : window.location.href;
  }
}

export default getUrl;