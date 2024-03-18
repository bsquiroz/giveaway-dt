import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface FormatDateParams {
  date: string,
  withHour?: boolean,
}

export function formatDate({date, withHour = false}: FormatDateParams) {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }
  if (withHour) {
    options.hour = 'numeric';
    options.minute = '2-digit';
  }
  return new Date(date).toLocaleDateString('es-CO', options);
}
