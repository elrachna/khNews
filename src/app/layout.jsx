import localFont from "next/font/local";
import { Bayon } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const sfProText = localFont({
  src: "./fonts/SFProTextRegular.otf",
  weight: "400",
  variable: "--font-sf-pro-text-regular",
});

const bayon = Bayon({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bayon",
});

export const metadata = {
  title: "Khmer News",
  description: "Khmer News",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Khmer:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`antialiased`}>
        <div className="flex flex-col h-screen">
          <Header />
          <main className="flex flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
