// Simple cn utility — replace with clsx + tailwind-merge once installed
// Run: npm install clsx tailwind-merge
// Then replace with:
// import { clsx, type ClassValue } from "clsx";
// import { twMerge } from "tailwind-merge";
// export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }

export function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(" ");
}
