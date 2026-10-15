import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/data/products';
import { formatPrice } from '@/lib/money';

/** Clean retail card: product on a calm solid panel, clear name, calm price,
 *  and a Buy on eBay button. Nothing overlaps the image; nothing sits on text. */
export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card transition-all duration-300 hover:border-ink/25 hover:shadow-[0_16px_40px_-20px_rgba(28,27,24,0.25)]">
      <Link href={`/product/${product.slug}`} className="block bg-imgpanel p-8 md:p-10" aria-label={product.name}>
        <Image
          src={product.images[0]}
          alt={product.name}
          width={600}
          height={600}
          loading="lazy"
          className="aspect-square h-auto w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-sans text-[11px] font-medium uppercase tracking-mega text-stone">
          {product.finish} · {product.category}
        </p>
        <h3 className="mt-2 font-display text-[21px] font-medium leading-snug text-ink">
          <Link href={`/product/${product.slug}`} className="transition-colors hover:text-brassdark">
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 font-sans text-sm leading-relaxed text-stone">{product.blurb}</p>
        <div className="mt-auto pt-6">
          <div className="flex items-center justify-between gap-3 border-t border-line pt-5">
            <span className="font-sans text-lg font-semibold tabular-nums text-ink">
              {formatPrice(product.price)}
            </span>
            <a
              href={product.ebayUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink/25 px-4 py-2 font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-white"
            >
              Buy on eBay
            </a>
          </div>
          <p className="mt-3 font-sans text-xs text-faint">
            {product.condition} · Ships from New York
          </p>
        </div>
      </div>
    </article>
  );
}
