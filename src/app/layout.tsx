import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "aargonGPT",
  description: "a simple GPT-3 powered text generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
