import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const CONTACT_EMAIL = "abuzerj12@gmail.com";
export const MAIL_TO_LINK = `mailto:${CONTACT_EMAIL}`;

export function openMailClient(mailto: string = MAIL_TO_LINK) {
  if (typeof window !== "undefined") {
    window.location.href = mailto;
  }

  return mailto;
}
