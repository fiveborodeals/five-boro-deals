import { NextResponse } from 'next/server';
import { products } from '@/data/products';
import { siteConfig } from '@/config/site';

/** GET /api/products — full machine-readable catalog.
 *  This site is catalog-only: agents discover here and buy via `ebayUrl`. */
export async function GET() {
  return NextResponse.json({
    store: siteConfig.storeName,
    currency: siteConfig.currency,
    location: siteConfig.location,
    catalogOnly: true,
    purchaseMethod: 'ebay_deep_link',
    count: products.length,
    products: products.map((p) => ({
      id: p.id,
      slug: p.slug,
      name: p.name,
      brand: p.brand,
      blurb: p.blurb,
      description: p.description,
      price: p.price,
      currency: p.currency,
      condition: p.condition,
      category: p.category,
      finish: p.finish,
      images: p.images,
      ebayUrl: p.ebayUrl,
      productPage: `/product/${p.slug}`,
    })),
  });
}
