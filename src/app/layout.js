import "./globals.css";
import Head from "next/head";
import { Poppins } from "next/font/google";

const roboto = Poppins({
  weight: ["100", "300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
