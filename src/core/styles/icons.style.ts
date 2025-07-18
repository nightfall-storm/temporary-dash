/**
 * Basic icon style - Used for static icons without interactions
 * Provides consistent sizing and color using primaryColor
 */
export const basicIconStyle = "h-4 w-4 text-primaryColor-600";

/**
 * Interactive icon style - Used for clickable/hoverable icons
 * Includes hover and focus states with smooth transitions
 */
export const interactiveIconStyle = [
  "h-4 w-4",
  "text-primaryColor-600",
  "transition-colors duration-200",
  "hover:text-primaryColor-700",
  "group-hover:text-primaryColor-700",
  "[&>path]:stroke-[1.5px]",
  "[&>path]:transition-all",
  "group-hover:[&>path]:stroke-[2px]",
].join(" ");

/**
 * Large icon style - Used for feature or empty state icons
 * Provides larger size with the same color scheme
 */
export const largeIconStyle = "h-8 w-8 text-primaryColor-600";

/**
 * Icon container style - Used for wrapping icons with background
 * Creates a subtle background effect with hover states
 */
export const iconContainerStyle = [
  "rounded-full",
  "bg-primaryColor-50",
  "p-4",
  "transition-colors duration-200",
  "group",
  "hover:bg-primaryColor-100",
].join(" ");
