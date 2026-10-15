import { NextResponse } from 'next/server';
import { siteConfig } from '@/config/site';

/**
 * GET /api/ucp — Universal Commerce Protocol capability manifest.
 * Served at /.well-known/ucp via a rewrite in next.config.mjs.
 *
 * This store is CATALOG ONLY: it exposes discovery endpoints. Purchase
 * happens off-site through each product's `ebayUrl` (eBay handles payment,
 * buyer protection, and shipping). There is no on-site checkout capability.
 */
export async function GET() {
  return NextResponse.json({
    ucp_version: '1.0',
    merchant: {
      name: siteConfig.storeName,
      location: siteConfig.location,
      currency: siteConfig.currency,
    },
    capabilities: {
      discovery: {
        catalog: { method: 'GET', href: '/api/products' },
        product: { method: 'GET', href: '/api/products/{id}' },
      },
      checkout: null,
      purchase: {
        method: 'offsite_deep_link',
        description:
          'Each product carries an ebayUrl. Agents should direct the buyer to that URL to complete purchase on eBay.',
        field: 'ebayUrl',
      },
    },
    catalogOnly: true,
    llmsTxt: '/llms.txt',
  });
}
