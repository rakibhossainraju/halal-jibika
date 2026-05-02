import type { Metadata } from "next";
import { Inter, El_Messiri, Open_Sans, Playfair_Display_SC } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import FooterComponent from "@/components/footer/FooterComponent";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const elMessiri = El_Messiri({ subsets: ["latin"], variable: "--font-el-messiri" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" });
const playfairDisplay = Playfair_Display_SC({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-playfair-display" });

export const metadata: Metadata = {
  title: "Halal Jibika",
  description: "Find your dream job",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${elMessiri.variable} ${openSans.variable} ${playfairDisplay.variable}`}>
      <body className="antialiased">
        <NavbarComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
