export const SCREENSHOT_FILES = [
  "01-dashboard.webp",
  "02-projects.webp",
  "03-project-overview.webp",
  "04-workforce-pointage.webp",
  "05-subcontractors.webp",
  "06-suppliers.webp",
  "07-logistics.webp",
  "08-customer-advances.webp",
  "09-cash-balance.webp",
  "10-invoices.webp",
  "11-import.webp",
  "12-company-settings.webp",
  "13-login.webp",
] as const;

export type ScreenshotFile = (typeof SCREENSHOT_FILES)[number];

export function screenshotPath(file: string) {
  return `/screenshots/${file}`;
}
