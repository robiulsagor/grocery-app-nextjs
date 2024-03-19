import { Lato } from "next/font/google";
import Nav from "./_components/nav/Nav";
import "./globals.css";

const lato = Lato({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Grocery Store",
  description: "Developed by Sagor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
