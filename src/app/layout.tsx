import type { Metadata } from "next";
import { workSans } from "./ui/fonts";
import "./globals.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "BatuBlog",
  description: "Blog Web App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.className} antialiased`}>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
