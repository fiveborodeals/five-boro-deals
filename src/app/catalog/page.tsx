import type { Metadata } from 'next';
import { Header } from '@/components/chrome/Header';
import { Footer } from '@/components/chrome/Footer';
import { CatalogGrid } from '@/components/catalog/CatalogGrid';
import { Reveal } from '@/components/motion/Reveal';

export const metadata: Metadata = {
  title: 'Catalog — Five boro deals',
  description: 'Browse all nine brand-new Moen bathroom fixtures. Filter by category or finish.',
};

export default function CatalogPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1280px] px-5 pb-24 pt-14 md:px-10 md:pt-20">
        <Reveal>
          <p className="font-sans text-[11px] font-medium uppercase tracking-mega text-brass">
            Catalog
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-4 font-display text-5xl font-medium leading-[1.05] tracking-tight text-ink md:text-6xl">
            The collection
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-5 max-w-xl font-sans text-base leading-relaxed text-stone">
            Nine brand-new Moen pieces from a single pallet. Filter by what you
            need — towel bars, rings, holders, hooks, showerheads — or by the
            finish that matches your bathroom.
          </p>
        </Reveal>
        <div className="mt-12">
          <CatalogGrid />
        </div>
      </main>
      <Footer />
    </>
  );
}
