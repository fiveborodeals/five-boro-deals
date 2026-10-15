import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import { formatPrice } from '@/lib/money';
import { Reveal } from '@/components/motion/Reveal';

/** Editorial hero: calm headline on the left, one featured product on a clean
 *  solid panel on the right. Nothing overlaps, nothing floats, nothing shouts. */
export function Hero() {
  const heroProduct = products.find(
    (p) => p.id === 'moen-verso-magnetix-showerhead-black-220c2epbl',
  )!;

  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col justify-center lg:col-span-6">
          <Reveal>
            <p className="font-sans text-[11px] font-medium uppercase tracking-mega text-brass">
              The Yorkshire Collection · By Moen
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 font-display text-5xl font-medium leading-[1.05] tracking-tight text-ink md:text-6xl">
              Bathroom fixtures,
              <br />
              chosen well.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-lg font-sans text-lg leading-relaxed text-stone">
              Nine brand-new Moen fixtures — eight from the Yorkshire line, plus
              two Verso showerheads. Every piece is new, every price is the
              eBay price, and every order ships from New York.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Link
                href="/catalog"
                className="rounded-full bg-ink px-7 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-brassdark"
              >
                Browse the collection
              </Link>
              <Link
                href="#how-it-works"
                className="link-draw font-sans text-sm font-medium text-ink"
              >
                How buying works
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-2 border-t border-line pt-6 font-sans text-[13px] text-stone">
              <span>Brand new</span>
              <span>Ships from New York</span>
              <span>eBay Buyer Protection</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="lg:col-span-6">
          <div className="rounded-2xl border border-line bg-card p-8 md:p-10">
            <div className="bg-imgpanel">
              <Image
                src={heroProduct.images[0]}
                alt={heroProduct.name}
                width={800}
                height={800}
                priority
                className="aspect-square h-auto w-full object-contain"
              />
            </div>
            <div className="mt-6 flex items-start justify-between gap-4">
              <div>
                <p className="font-sans text-[11px] font-medium uppercase tracking-mega text-stone">
                  Featured piece · {heroProduct.finish}
                </p>
                <p className="mt-1.5 font-display text-xl font-medium leading-snug text-ink">
                  {heroProduct.name}
                </p>
              </div>
              <span className="shrink-0 font-sans text-lg font-semibold tabular-nums text-ink">
                {formatPrice(heroProduct.price)}
              </span>
            </div>
            <div className="mt-5">
              <Link
                href={`/product/${heroProduct.slug}`}
                className="link-draw font-sans text-sm font-medium text-brassdark"
              >
                View this piece →
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
