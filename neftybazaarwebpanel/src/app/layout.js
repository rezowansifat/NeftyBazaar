import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, NavBar } from "@/components/componentsindex";
import { NeftyBazaarProvider } from "../../Context/NeftyBazaarContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NeftyBazaar",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NeftyBazaarProvider>
          <NavBar />
          {children}
          <Footer />
        </NeftyBazaarProvider>
      </body>
    </html>
  );
}
