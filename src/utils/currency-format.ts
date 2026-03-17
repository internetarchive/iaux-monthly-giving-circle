const currencyToLocale: Record<string, string> = {
  USD: 'en-US',
};

export const currencyToSymbol: Record<string, string> = {
  USD: '$',
};

export function formatCurrency(
  amount: number,
  currency: string = 'USD',
): string {
  if (!Number.isFinite(amount)) {
    return 'Invalid amount';
  }
  const locale = currencyToLocale[currency] ?? 'en-US';
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}
