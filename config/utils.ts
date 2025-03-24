import { Resend } from "resend";
import EmailTemplate from "@/components/email-template";

export function formatMonthYear(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  };

  return date.toLocaleDateString("en-US", options);
}

export const validateEmail = (value: string) =>
  !!value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

export const validatePhoneNumber = (value: string) =>
  !!value.match(/^\+(\d{1,4})[-.\s]?(\d{10,15})$/i);

