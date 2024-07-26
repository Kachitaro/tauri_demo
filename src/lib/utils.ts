import { COLOR_MAPPING } from "@/constant";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function hashCode(str: string) {
  let hash = 0,
    i,
    chr;
  if (!str || str.length === 0) return hash;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  return hash;
}

export function getColorFromString(str: string) {
  const colorIndex = Math.abs(hashCode(str)) % COLOR_MAPPING.length;
  return COLOR_MAPPING[colorIndex];
}

export function formatCurrency(value: number) {
  const currency = Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "VND",
  });
  return currency.format(value);
}
