/**
 * Formats a date using the specified Intl.DateTimeFormatOptions pattern.
 *
 * @param date - The date to format, as a string or Date object.
 * @param pattern - Intl.DateTimeFormatOptions to control formatting (default: { dateStyle: "medium" }).
 * @returns The formatted date string.
 * @throws {RangeError} If the date is invalid.
 */
export function format(
  date: string | Date,
  pattern: Intl.DateTimeFormatOptions = { dateStyle: "medium" }
): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat(undefined, pattern).format(d);
}

/**
 * Combines a date and a time string into an ISO 8601 string in UTC.
 *
 * @param date - The date as a string or Date object.
 * @param time - The time in "HH:mm" format (24-hour).
 * @returns The ISO 8601 string representing the combined date and time in UTC.
 * @throws {RangeError} If the date or time is invalid.
 */
export function toISO(date: string | Date, time: string): string {
  const d = new Date(date);
  const [hours, minutes] = time.split(":").map(Number);
  d.setHours(hours, minutes, 0, 0);
  return d.toISOString();
}

/**
 * Extracts the UTC time (hours and minutes) from a date.
 *
 * @param date - The date as a string or Date object.
 * @returns The UTC time in "HH:mm" format.
 * @throws {RangeError} If the date is invalid.
 */
export function toUTCTime(date: string | Date): string {
  const d = typeof date === "string" ? new Date(date) : date;
  const hours = d.getUTCHours().toString().padStart(2, "0");
  const minutes = d.getUTCMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}
