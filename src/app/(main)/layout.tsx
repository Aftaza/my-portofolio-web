import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function mainLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return (
        <main className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
            <Header />
            {children}
            <Footer />
        </main>
    )
}