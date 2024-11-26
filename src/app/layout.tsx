import type { Metadata } from "next";
import { workSans } from "./ui/fonts";
import "./globals.css";

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
      <body
        className={`${workSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
