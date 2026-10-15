import { Header } from '@/components/chrome/Header';
import { Footer } from '@/components/chrome/Footer';
import { Hero } from '@/components/home/Hero';
import { FinishStory } from '@/components/home/FinishStory';
import { Spotlight } from '@/components/home/Spotlight';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal';
import { ProductCard } from '@/components/catalog/ProductCard';
import { products } from '@/data/products';
import { siteConfig } from '@/config/site';

export default function HomePage() {
  // Anchoring: lead with the premium pieces, highest price first.
  const featured = [...products].sort((a, b) => b.price - a.price).slice(0, 6);

  return (
    <>
      <Header />
      <main>
        <Hero />

        {/* The collection */}
        <section className="border-b border-line">
          <div className="mx-auto max-w-[1280px] px-5 py-20 md:px-10 md:py-28">
            <Reveal>
              <p className="font-sans text-[11px] font-medium uppercase tracking-mega text-brass">
                The collection
              </p>
            </Reveal>
            <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Reveal delay={0.08}>
                <h2 className="max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight text-ink md:text-5xl">
                  Eight pieces, chosen with intent.
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="max-w-sm font-sans text-base leading-relaxed text-stone">
                  {siteConfig.fulfillmentNote} Every piece is brand new, and
                  every price is the eBay price.
                </p>
              </Reveal>
            </div>

            <Stagger className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((p) => (
                <StaggerItem key={p.id}>
                  <ProductCard product={p} />
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal className="mt-12 text-center">
              <a
                href="/catalog"
                className="link-draw font-sans text-sm font-medium text-ink"
              >
                View all eight pieces →
              </a>
            </Reveal>
          </div>
        </section>

        <FinishStory />
        <Spotlight />

        {/* How buying works */}
        <section id="how-it-works" className="scroll-mt-24">
          <div className="mx-auto max-w-[1280px] px-5 py-20 md:px-10 md:py-28">
            <Reveal>
              <p className="font-sans text-[11px] font-medium uppercase tracking-mega text-brass">
                How it works
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight text-ink md:text-5xl">
                Simple, the way it should be.
              </h2>
            </Reveal>
            <Stagger className="mt-12 grid gap-10 md:grid-cols-3">
              {[
                ['01', 'Browse', 'Look through the catalog. Filter by finish or fixture type until something fits your bathroom.'],
                ['02', 'Buy on eBay', 'Every piece has one button: Buy on eBay. It opens the live eBay listing in a new tab.'],
                ['03', 'Check out safe', 'Payment, buyer protection, and shipping all run through eBay — the way it should be.'],
              ].map(([num, title, copy]) => (
                <StaggerItem key={title} className="border-t-2 border-ink pt-6">
                  <span className="font-sans text-xs font-medium tracking-mega text-brass">
                    {num}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-medium text-ink">{title}</h3>
                  <p className="mt-3 font-sans text-[15px] leading-relaxed text-stone">{copy}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
