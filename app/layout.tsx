import { ChakraProvider } from "@chakra-ui/react";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Header from "./header";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Team 20 🏆",
  description: "Hello world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div id="app-container">
            <Header />
            <main id="global-main">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
