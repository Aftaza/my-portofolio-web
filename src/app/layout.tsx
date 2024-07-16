import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./styles/globals.css";
import Image from "next/image";

const poppins = Poppins({
    subsets: ["latin"],
    weight : ["700"]
});

export const metadata: Metadata = {
  title: "Aftaza | Portofolio",
  description: "Aftaza Portofolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={poppins.className}>
            {children}
            <Image src="/bgAftaza.png" alt="Bg aftaza web" className="fixed top-2 -right-32 opacity-10 pointer-events-none" width={630} height={630} />
        </body>
    </html>
  );
}
