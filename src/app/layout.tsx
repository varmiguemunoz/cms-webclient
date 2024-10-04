import type { Metadata } from "next";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Next Js Ecommerce | Building vision and software",
  description: "Building with love by varmiguemunoz. ⚡️",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-0 p-0 bg-gray-200">
        <main className="w-full max-w-[1114px] mx-auto container h-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
