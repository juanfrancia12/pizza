export function formatPrice(amount: number, currency = "S/") {
  return `${currency} ${amount.toFixed(2).replace(/\.00$/, "")}`;
}
