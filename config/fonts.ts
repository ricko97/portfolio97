import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Overlock,
  Comic_Neue,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const OverlockStatic = Overlock({
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-overlock-static",
});

export const ComicNeueStatic = Comic_Neue({
  weight: ["400", "700", "300"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-comicNeue-static",
});
