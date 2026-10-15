/**
 * Product catalog — REAL inventory for "Five boro deals".
 *
 * Source of truth: the eBay store (seller shlshl_0). All items are brand-new
 * Moen bathroom fixtures. Images are local files under /public/images
 * (copied from the eBay CDN — never hotlink eBay images, they break).
 *
 * To add a product: copy an entry, give it a unique `id` + `slug`, drop the
 * photo into public/images/, point `images` at it, and set `ebayUrl` to the
 * eBay listing. Descriptions must stay factual — only what the listing states.
 */

export type ProductFinish = 'Satin Nickel' | 'Old World Bronze' | 'Matte Black';

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  /** Short editorial line for cards and heroes (factual, no invented specs). */
  blurb: string;
  /** One or two factual sentences for the detail page. */
  description: string;
  price: number;
  currency: string;
  condition: 'Brand New';
  category: 'Towel Bar' | 'Towel Ring' | 'Toilet Paper Holder' | 'Robe Hook' | 'Showerhead';
  finish: ProductFinish;
  /** Local paths under /public/images. */
  images: string[];
  /** Buying happens here — external link, opens in a new tab. */
  ebayUrl: string;
}

export const products: Product[] = [
  {
    id: 'moen-yorkshire-towel-bar-24-satin-nickel',
    slug: 'moen-yorkshire-24-towel-bar-satin-nickel',
    name: 'Moen Yorkshire 24" Towel Bar',
    brand: 'Moen',
    blurb: 'Yorkshire collection, 24-inch bar in brushed Satin Nickel.',
    description:
      'Brand-new Moen Yorkshire 24-inch towel bar (model BP5324SN) in Satin Nickel. Never used, sold as listed on eBay.',
    price: 26.99,
    currency: 'USD',
    condition: 'Brand New',
    category: 'Towel Bar',
    finish: 'Satin Nickel',
    images: ['/images/moen-yorkshire-towel-bar-24-satin-nickel.webp'],
    ebayUrl: 'https://www.ebay.com/itm/298573848496',
  },
  {
    id: 'moen-yorkshire-towel-bar-24-owb',
    slug: 'moen-yorkshire-24-towel-bar-old-world-bronze',
    name: 'Moen Yorkshire 24" Towel Bar',
    brand: 'Moen',
    blurb: 'Yorkshire collection, 24-inch bar in Old World Bronze.',
    description:
      'Brand-new Moen Yorkshire 24-inch towel bar (model BP5324OWB) in Old World Bronze. Never used, sold as listed on eBay.',
    price: 26.99,
    currency: 'USD',
    condition: 'Brand New',
    category: 'Towel Bar',
    finish: 'Old World Bronze',
    images: ['/images/moen-yorkshire-towel-bar-24-owb.webp'],
    ebayUrl: 'https://www.ebay.com/itm/298573853352',
  },
  {
    id: 'moen-yorkshire-towel-ring-satin-nickel',
    slug: 'moen-yorkshire-towel-ring-satin-nickel',
    name: 'Moen Yorkshire Towel Ring',
    brand: 'Moen',
    blurb: 'Yorkshire collection towel ring in Satin Nickel.',
    description:
      'Brand-new Moen Yorkshire towel ring (model BP5386SN) in Satin Nickel. Never used, sold as listed on eBay.',
    price: 18.99,
    currency: 'USD',
    condition: 'Brand New',
    category: 'Towel Ring',
    finish: 'Satin Nickel',
    images: ['/images/moen-yorkshire-towel-ring-satin-nickel.webp'],
    ebayUrl: 'https://www.ebay.com/itm/298573795181',
  },
  {
    id: 'moen-yorkshire-towel-ring-owb',
    slug: 'moen-yorkshire-towel-ring-old-world-bronze',
    name: 'Moen Yorkshire Towel Ring',
    brand: 'Moen',
    blurb: 'Yorkshire collection towel ring in Old World Bronze.',
    description:
      'Brand-new Moen Yorkshire towel ring (model BP5386OWB) in Old World Bronze. Never used, sold as listed on eBay.',
    price: 18.99,
    currency: 'USD',
    condition: 'Brand New',
    category: 'Towel Ring',
    finish: 'Old World Bronze',
    images: ['/images/moen-yorkshire-towel-ring-owb.webp'],
    ebayUrl: 'https://www.ebay.com/itm/298573790377',
  },
  {
    id: 'moen-yorkshire-tp-holder-owb',
    slug: 'moen-yorkshire-toilet-paper-holder-old-world-bronze',
    name: 'Moen Yorkshire European Toilet Paper Holder',
    brand: 'Moen',
    blurb: 'European-style pivoting holder in Old World Bronze.',
    description:
      'Brand-new Moen Yorkshire European toilet paper holder in Old World Bronze. Never used, sold as listed on eBay.',
    price: 21.0,
    currency: 'USD',
    condition: 'Brand New',
    category: 'Toilet Paper Holder',
    finish: 'Old World Bronze',
    images: ['/images/moen-yorkshire-tp-holder-owb.webp'],
    ebayUrl: 'https://www.ebay.com/itm/298573296066',
  },
  {
    id: 'moen-yorkshire-tp-holder-satin-nickel',
    slug: 'moen-yorkshire-toilet-paper-holder-satin-nickel',
    name: 'Moen Yorkshire European Toilet Paper Holder',
    brand: 'Moen',
    blurb: 'Single-post European holder in Satin Nickel.',
    description:
      'Brand-new Moen Yorkshire European single-post toilet paper holder (model BP5380SN) in Satin Nickel. Never used, sold as listed on eBay.',
    price: 21.0,
    currency: 'USD',
    condition: 'Brand New',
    category: 'Toilet Paper Holder',
    finish: 'Satin Nickel',
    images: ['/images/moen-yorkshire-tp-holder-satin-nickel.webp'],
    ebayUrl: 'https://www.ebay.com/itm/298573301898',
  },
  {
    id: 'moen-yorkshire-robe-hook-2pack-owb',
    slug: 'moen-yorkshire-double-robe-hook-2-pack-old-world-bronze',
    name: 'Moen Yorkshire Double Robe Hook — Set of 2',
    brand: 'Moen',
    blurb: 'Pair of double robe hooks in Old World Bronze.',
    description:
      'Brand-new set of 2 Moen Yorkshire double robe hooks (model BP5303OWB) in Old World Bronze. Never used, sold as listed on eBay.',
    price: 23.99,
    currency: 'USD',
    condition: 'Brand New',
    category: 'Robe Hook',
    finish: 'Old World Bronze',
    images: ['/images/moen-yorkshire-robe-hook-2pack-owb.webp'],
    ebayUrl: 'https://www.ebay.com/itm/298573805516',
  },
  {
    id: 'moen-verso-magnetix-showerhead-black-220c2epbl',
    slug: 'moen-verso-magnetix-showerhead-matte-black',
    name: 'Moen Verso Magnetix 8-Function Showerhead',
    brand: 'Moen',
    blurb: '7" rainshower with magnetic handshower, Matte Black.',
    description:
      'Brand-new Moen Verso Magnetix 8-function 7-inch showerhead with handshower (model 220C2EPBL) in Matte Black. Never used, sold as listed on eBay.',
    price: 94.99,
    currency: 'USD',
    condition: 'Brand New',
    category: 'Showerhead',
    finish: 'Matte Black',
    images: ['/images/moen-verso-magnetix-showerhead-black-220c2epbl.webp'],
    ebayUrl: 'https://www.ebay.com/itm/298554427245',
  },
  {
    id: 'moen-verso-magnetix-showerhead-black',
    slug: 'moen-verso-magnetix-showerhead-matte-black-2',
    name: 'Moen Verso Magnetix 8-Function Showerhead',
    brand: 'Moen',
    blurb: '7" rainshower with magnetic handshower, Matte Black.',
    description:
      'Brand-new Moen Verso Magnetix 8-function 7-inch showerhead with handshower in Matte Black. Never used, sold as listed on eBay.',
    price: 79.99,
    currency: 'USD',
    condition: 'Brand New',
    category: 'Showerhead',
    finish: 'Matte Black',
    images: ['/images/moen-verso-magnetix-showerhead-black.webp'],
    ebayUrl: 'https://www.ebay.com/itm/298593797941',
  },
];

export const finishes: ProductFinish[] = ['Satin Nickel', 'Old World Bronze', 'Matte Black'];

export const categories = [
  'Towel Bar',
  'Towel Ring',
  'Toilet Paper Holder',
  'Robe Hook',
  'Showerhead',
] as const;

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
