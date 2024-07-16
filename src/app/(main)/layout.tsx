import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loading from "@/components/loading";
import { Suspense } from "react";

export default function mainLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return (
        <>
            <Header />
            <Suspense fallback={<Loading />}>
                <main className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
                    {children}
                </main>
            </Suspense>
            <Footer />
        </>
    )
}