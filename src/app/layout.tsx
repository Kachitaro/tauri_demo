import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header, ThemeProvider } from "@/components";

const inter = Inter({ subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: "Nexpando",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          {/* <Header /> */}
          <section className="flex-1">{children}</section>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
