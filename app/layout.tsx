import "./globals.css";
import { Inter } from "next/font/google";

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
        <div id="app-container">
          <header id="global-header">
            <h1 id="logo">Team 20, but #1 🏆</h1>
          </header>
          <main id="global-main">{children}</main>
          <footer id="global-footer">Made with 🌳 by Team 20, Berlin</footer>
        </div>
      </body>
    </html>
  );
}
