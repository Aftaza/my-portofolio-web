import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./styles/globals.css";
import Image from "next/image";

const poppins = Poppins({
    subsets: ["latin"],
    weight : ["200"]
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
            <Image src="/bg_aftaza.png" alt="Bg aftaza web" className="fixed top-1 -right-32 opacity-10" width={600} height={600} />
            {children}
        </body>
    </html>
  );
}
