import { Manrope, Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],

});

export const metadata = {
  title: "Les Calistung",
  description: "Pusat belajar calistung dan mengaji terbaik untuk anak usia dini",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${manrope.variable} ${inter.variable} antialiased`}
      >
        <Navbar />
        <main className="pt-10 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
