'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { categories, finishes, products, type Product } from '@/data/products';
import { ProductCard } from '@/components/catalog/ProductCard';

type Filter = 'All' | (typeof categories)[number] | (typeof finishes)[number];

const filterGroups: { label: string; options: Filter[] }[] = [
  { label: 'Category', options: ['All', ...categories] },
  { label: 'Finish', options: ['All', ...finishes] },
];

/** Filterable catalog grid. Premium pieces first; calm fade on filter change. */
export function CatalogGrid() {
  const [category, setCategory] = useState<Filter>('All');
  const [finish, setFinish] = useState<Filter>('All');

  const filtered = useMemo(() => {
    const list = products.filter(
      (p) =>
        (category === 'All' || p.category === category) &&
        (finish === 'All' || p.finish === finish),
    );
    return [...list].sort((a, b) => b.price - a.price);
  }, [category, finish]);

  return (
    <div>
      <div className="space-y-4">
        {filterGroups.map((group) => {
          const active = group.label === 'Category' ? category : finish;
          const set = group.label === 'Category' ? setCategory : setFinish;
          return (
            <div key={group.label} className="flex flex-wrap items-center gap-2">
              <span className="mr-1 w-20 font-sans text-[11px] font-medium uppercase tracking-mega text-stone">
                {group.label}
              </span>
              {group.options.map((opt) => {
                const isActive = active === opt;
                return (
                  <button
                    key={opt}
                    onClick={() => set(opt)}
                    className={`rounded-full border px-4 py-2 font-sans text-xs font-medium transition-colors duration-300 ${
                      isActive
                        ? 'border-ink bg-ink text-white'
                        : 'border-line bg-card text-stone hover:border-ink/30 hover:text-ink'
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>

      <p className="mt-8 font-sans text-sm text-stone" aria-live="polite">
        Showing {filtered.length} of {products.length} pieces
      </p>

      <motion.div layout className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p: Product) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <ProductCard product={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="mt-16 rounded-2xl border border-line bg-card p-16 text-center">
          <p className="font-display text-2xl font-medium text-ink">Nothing in this combination.</p>
          <p className="mt-3 font-sans text-sm text-stone">Try widening the filters.</p>
        </div>
      )}
    </div>
  );
}
