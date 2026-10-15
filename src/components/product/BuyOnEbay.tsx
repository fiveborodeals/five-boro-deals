import { formatPrice } from '@/lib/money';

/** The single conversion element on the site: a calm brass button that opens
 *  the product's eBay listing in a new tab. No cart, no checkout — by design. */
export function BuyOnEbay({
  ebayUrl,
  price,
  size = 'md',
}: {
  ebayUrl: string;
  price: number;
  size?: 'md' | 'lg';
}) {
  const pad = size === 'lg' ? 'px-8 py-4 text-sm' : 'px-6 py-3 text-xs';
  return (
    <a
      href={ebayUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-2.5 rounded-full bg-brass font-sans font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-brassdark ${pad}`}
    >
      Buy on eBay — {formatPrice(price)}
      <svg
        width="13"
        height="13"
        viewBox="0 0 14 14"
        fill="none"
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        aria-hidden
      >
        <path
          d="M2 12L12 2M12 2H4M12 2V10"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
