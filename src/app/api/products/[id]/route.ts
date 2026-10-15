import { NextResponse } from 'next/server';
import { getProductById } from '@/data/products';

/** GET /api/products/[id] — single product as JSON. */
export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const product = getProductById(params.id);
  if (!product) {
    return NextResponse.json({ error: 'product_not_found', id: params.id }, { status: 404 });
  }
  return NextResponse.json({
    id: product.id,
    slug: product.slug,
    name: product.name,
    brand: product.brand,
    blurb: product.blurb,
    description: product.description,
    price: product.price,
    currency: product.currency,
    condition: product.condition,
    category: product.category,
    finish: product.finish,
    images: product.images,
    ebayUrl: product.ebayUrl,
    productPage: `/product/${product.slug}`,
  });
}
