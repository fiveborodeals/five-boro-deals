import Image from 'next/image';
import Link from 'next/link';
import { getProductById } from '@/data/products';
import { formatPrice } from '@/lib/money';
import { Reveal } from '@/components/motion/Reveal';
import { BuyOnEbay } from '@/components/product/BuyOnEbay';

/** Featured piece: the priciest item on the pallet, presented like a
 *  showroom centerpiece — large photo on a clean panel, calm spec table,
 *  price, and a Buy on eBay button. */
export function Spotlight() {
  const product = getProductById('moen-verso-magnetix-showerhead-black-220c2epbl')!;

  const facts = [
    ['Function', '8-function spray'],
    ['Diameter', '7-inch rainshower'],
    ['Dock', 'Magnetic handshower'],
    ['Finish', 'Matte Black'],
    ['Condition', 'Brand new'],
  ];

  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="rounded-2xl border border-line bg-card p-8 md:p-12">
            <div className="bg-imgpanel">
              <Link href={`/product/${product.slug}`} aria-label={product.name}>
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="aspect-square h-auto w-full object-contain"
                />
              </Link>
            </div>
          </div>
          <p className="mt-4 text-center font-sans text-xs text-faint">Actual item photo</p>
        </Reveal>

        <div className="flex flex-col justify-center">
          <Reveal>
            <p className="font-sans text-[11px] font-medium uppercase tracking-mega text-brass">
              Featured piece
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h3 className="mt-4 font-display text-4xl font-medium leading-tight tracking-tight text-ink md:text-5xl">
              {product.name}
            </h3>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 max-w-lg font-sans text-base leading-relaxed text-stone">
              {product.blurb} The priciest piece on the pallet — and the one
              that makes the whole bathroom feel renovated.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <dl className="mt-8 divide-y divide-line border-y border-line">
              {facts.map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between py-3.5">
                  <dt className="font-sans text-[11px] font-medium uppercase tracking-mega text-stone">
                    {k}
                  </dt>
                  <dd className="font-sans text-sm font-medium text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.26}>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <span className="font-sans text-3xl font-semibold tabular-nums text-ink">
                {formatPrice(product.price)}
              </span>
              <BuyOnEbay ebayUrl={product.ebayUrl} price={product.price} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
