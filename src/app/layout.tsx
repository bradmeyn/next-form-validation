import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "@/app/_components/Header";

export const metadata: Metadata = {
  title: "Supabudget",
  description: "Save your wallet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-tremor-brand-muted flex min-h-screen flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
