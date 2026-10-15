import { siteConfig } from '@/config/site';

/** Format a major-unit amount (e.g. 34.99) as a localized currency string. */
export function formatPrice(amount: number, currency: string = siteConfig.currency): string {
  return new Intl.NumberFormat(siteConfig.locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(amount);
}
