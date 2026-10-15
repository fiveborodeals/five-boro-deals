import Image from 'next/image';
import Link from 'next/link';
import { products, finishes, type ProductFinish } from '@/data/products';
import { Reveal } from '@/components/motion/Reveal';

const finishMeta: Record<ProductFinish, { note: string; swatch: string; copy: string }> = {
  'Satin Nickel': {
    note: 'Brushed, cool, quietly reflective',
    swatch: '#B9BEC7',
    copy: 'The everyday luxury finish — soft sheen, fingerprint-shy, pairs with everything.',
  },
  'Old World Bronze': {
    note: 'Dark, oil-rubbed, old-money warmth',
    swatch: '#9A6B3D',
    copy: 'Drama for the bathroom — deep bronze tones that make white tile glow.',
  },
  'Matte Black': {
    note: 'Flat, architectural, absolute',
    swatch: '#1C1B18',
    copy: 'The statement finish. Bold geometry, zero glare, all confidence.',
  },
};

/** Finishes, presented like a showroom guide: one calm card per finish,
 *  a real product photo on a clean panel, and honest notes on the material. */
export function FinishStory() {
  return (
    <section className="border-b border-line bg-cream">
      <div className="mx-auto max-w-[1280px] px-5 py-20 md:px-10 md:py-28">
        <Reveal>
          <p className="font-sans text-[11px] font-medium uppercase tracking-mega text-brass">
            Finishes
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight text-ink md:text-5xl">
            Three finishes, one standard.
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-4 max-w-xl font-sans text-base leading-relaxed text-stone">
            Every piece is solid Moen craftsmanship in one of three finishes.
            Pick the one your bathroom already wants.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {finishes.map((finish, i) => {
            const meta = finishMeta[finish];
            const items = products.filter((p) => p.finish === finish);
            const sample = items[0];
            return (
              <Reveal key={finish} delay={i * 0.08}>
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card">
                  <div className="bg-imgpanel p-8">
                    <Image
                      src={sample.images[0]}
                      alt={`${finish} finish example: ${sample.name}`}
                      width={480}
                      height={480}
                      loading="lazy"
                      className="aspect-square h-auto w-full object-contain"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3">
                      <span
                        className="h-4 w-4 rounded-full border border-line"
                        style={{ backgroundColor: meta.swatch }}
                        aria-hidden
                      />
                      <h3 className="font-display text-[22px] font-medium text-ink">{finish}</h3>
                    </div>
                    <p className="mt-2 font-sans text-[13px] text-stone">{meta.note}</p>
                    <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-stone">
                      {meta.copy}
                    </p>
                    <p className="mt-5 border-t border-line pt-4 font-sans text-[13px] text-stone">
                      {items.length} piece{items.length === 1 ? '' : 's'} in this finish ·{' '}
                      <Link
                        href="/catalog"
                        className="link-draw font-medium text-brassdark"
                      >
                        Browse the catalog
                      </Link>
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
