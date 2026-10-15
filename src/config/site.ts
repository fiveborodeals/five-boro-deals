/**
 * Central store configuration — "Five boro deals".
 *
 * CATALOG ONLY: this site never takes payment. Every product links out to
 * its eBay listing via `ebayUrl`. There is no cart, no checkout, no Stripe.
 */
export const siteConfig = {
  /** Display name of the store (header, footer, metadata, agent manifest). */
  storeName: 'Five boro deals',
  tagline: 'Brand-new Moen bath fixtures, straight from the pallet',
  /** ISO 4217 currency code used across the storefront and APIs. */
  currency: 'USD',
  /** Locale used for price formatting. */
  locale: 'en-US',
  /** Where inventory ships from. */
  location: 'New York, USA',
  /** Fulfillment promise shown across the site. */
  fulfillmentNote: 'Ships everywhere in the US from New York.',
  /** Catalog mode — the site is a showcase; buying happens on eBay. */
  catalogOnly: true,
  /** Machine-readable endpoints (also mirrored in /.well-known/ucp). */
  agentEndpoints: {
    catalog: '/api/products',
    manifest: '/.well-known/ucp',
    llmsTxt: '/llms.txt',
  },
} as const;

export type SiteConfig = typeof siteConfig;
