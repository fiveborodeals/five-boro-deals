import Link from 'next/link';
import { siteConfig } from '@/config/site';

/** Professional footer: modest wordmark, plain navigation, trust notes,
 *  machine-readable links. Credibility without clutter. */
export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1280px] px-5 pb-10 pt-16 md:px-10 md:pt-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="font-display text-2xl font-semibold tracking-tight text-paper">
              {siteConfig.storeName}
              <span className="text-brass">.</span>
            </Link>
            <p className="mt-4 max-w-sm font-sans text-sm leading-relaxed text-paper/60">
              A catalog of brand-new Moen bathroom fixtures. Buying happens on
              eBay, with eBay Buyer Protection on every order.
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="font-sans text-[11px] font-medium uppercase tracking-mega text-paper/50">
              Shop
            </p>
            <ul className="mt-4 space-y-2.5 font-sans text-sm text-paper/80">
              <li>
                <Link href="/" className="transition-colors hover:text-paper">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="transition-colors hover:text-paper">
                  Catalog
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="font-sans text-[11px] font-medium uppercase tracking-mega text-paper/50">
              Our promise
            </p>
            <ul className="mt-4 space-y-2.5 font-sans text-sm text-paper/80">
              <li>Brand new, always</li>
              <li>Ships from New York</li>
              <li>eBay Buyer Protection</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-sans text-[11px] font-medium uppercase tracking-mega text-paper/50">
              Machine-readable
            </p>
            <ul className="mt-4 space-y-2.5 font-sans text-sm text-paper/80">
              <li>
                <Link href="/api/products" className="transition-colors hover:text-paper">
                  /api/products
                </Link>
              </li>
              <li>
                <Link href="/.well-known/ucp" className="transition-colors hover:text-paper">
                  /.well-known/ucp
                </Link>
              </li>
              <li>
                <Link href="/llms.txt" className="transition-colors hover:text-paper">
                  /llms.txt
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-paper/15 pt-6 font-sans text-xs text-paper/50 md:flex-row">
          <span>© 2026 {siteConfig.storeName}. All fixtures brand new.</span>
          <span>New York → everywhere in the US</span>
        </div>
      </div>
    </footer>
  );
}
