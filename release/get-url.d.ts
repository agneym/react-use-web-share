/**
 * Get the URL to be shared.
 * If the site uses canonical URL, then use that URL otherwise the current URL
 * @param url URL that might be passed on by the user
 */
declare function getUrl(url?: string): string;
export default getUrl;
