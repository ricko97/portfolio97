export function formatMonthYear(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  };

  return date.toLocaleDateString("en-US", options);
}
