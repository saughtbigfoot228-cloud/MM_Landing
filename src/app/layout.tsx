import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marcelo Miracles — AI Brand Renaissance",
  description: "Как AI превращает стритвир в культурное явление",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="bg-white text-black antialiased">
        {children}
      </body>
    </html>
  );
}
