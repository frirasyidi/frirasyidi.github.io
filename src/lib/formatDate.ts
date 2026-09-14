const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

// Matches Jekyll's `date: "%Y %b %d"` listing-table format.
export function formatListingDate(date: Date): string {
  const year = date.getUTCFullYear();
  const month = MONTHS[date.getUTCMonth()];
  const day = String(date.getUTCDate()).padStart(2, '0');
  return `${year} ${month} ${day}`;
}
