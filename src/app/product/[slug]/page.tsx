import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductBySlug, products } from '@/data/products';
import { formatPrice } from '@/lib/money';
import { siteConfig } from '@/config/site';
import { Header } from '@/components/chrome/Header';
import { Footer } from '@/components/chrome/Footer';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal';
import { BuyOnEbay } from '@/components/product/BuyOnEbay';
import { ProductCard } from '@/components/catalog/ProductCard';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: 'Not found' };
  return {
    title: `${product.name} — ${siteConfig.storeName}`,
    description: product.blurb,
    openGraph: { title: product.name, description: product.blurb, images: [product.images[0]] },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = products.filter((p) => p.id !== product.id && p.finish === product.finish).slice(0, 3);
  const fallbackRelated = products.filter((p) => p.id !== product.id).slice(0, 3);
  const showRelated = related.length > 0 ? related : fallbackRelated;

  const specs: [string, string][] = [
    ['Brand', product.brand],
    ['Condition', product.condition],
    ['Category', product.category],
    ['Finish', product.finish],
    ['Ships from', siteConfig.location],
  ];

  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1280px] px-5 pb-24 pt-12 md:px-10 md:pt-16">
        <Reveal>
          <Link
            href="/catalog"
            className="link-draw font-sans text-[13px] font-medium text-stone hover:text-ink"
          >
            ← Back to catalog
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <div className="rounded-2xl border border-line bg-card p-8 md:p-12">
              <div className="bg-imgpanel">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={900}
                  height={900}
                  priority
                  className="aspect-square h-auto w-full object-contain"
                />
              </div>
            </div>
            <p className="mt-4 text-center font-sans text-xs text-faint">
              Actual item photo
            </p>
          </Reveal>

          {/* Details */}
          <div>
            <Reveal>
              <p className="font-sans text-[11px] font-medium uppercase tracking-mega text-brass">
                {product.brand} — {product.category}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-4 font-display text-4xl font-medium leading-tight tracking-tight text-ink md:text-5xl">
                {product.name}
              </h1>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-3 font-sans text-sm uppercase tracking-mega text-stone">
                {product.finish}
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-stone">
                {product.description}
              </p>
            </Reveal>

            <Reveal delay={0.22} className="mt-9 flex flex-wrap items-center gap-6">
              <span className="font-sans text-4xl font-semibold tabular-nums text-ink">
                {formatPrice(product.price)}
              </span>
              <span className="rounded-full border border-line bg-card px-4 py-2 font-sans text-[11px] font-medium uppercase tracking-mega text-stone">
                {product.condition}
              </span>
            </Reveal>

            <Reveal delay={0.26} className="mt-8">
              <BuyOnEbay ebayUrl={product.ebayUrl} price={product.price} size="lg" />
              <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-stone">
                Secure checkout with eBay Buyer Protection. {siteConfig.fulfillmentNote}
              </p>
            </Reveal>

            <Stagger className="mt-10 divide-y divide-line border-y border-line">
              {specs.map(([k, v]) => (
                <StaggerItem key={k} className="flex items-baseline justify-between py-4">
                  <span className="font-sans text-[11px] font-medium uppercase tracking-mega text-stone">
                    {k}
                  </span>
                  <span className="font-sans text-sm font-medium text-ink">{v}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>

        {/* Related */}
        <div className="mt-24">
          <Reveal>
            <div className="flex items-end justify-between">
              <h2 className="font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
                You may also like
              </h2>
              <Link
                href="/catalog"
                className="link-draw hidden font-sans text-sm font-medium text-stone hover:text-ink md:block"
              >
                All pieces →
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {showRelated.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
