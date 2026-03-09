export function formatCurrency(
  amount: number,
  currency: string = 'USD',
): string {
  if (!Number.isFinite(amount)) {
    return 'Invalid amount';
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}
