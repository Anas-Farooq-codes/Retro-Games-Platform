import { Inter, Dela_Gothic_One } from "next/font/google";
import "./globals.css";

const InterBodyFont = Inter({
  subsets: ["latin"],
  variable: "--body-font",
});
const DelaHeadingFont = Dela_Gothic_One({
  subsets: ["latin"],
  variable: "--heading-font",
  weight: "400",
});

export const metadata = {
  title: "Retro Games Platform",
  description: "Play Classic Retro Games Of your childhood",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${InterBodyFont.variable} ${DelaHeadingFont.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}