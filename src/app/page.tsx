import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Image src="/circle.svg" alt="the circle" className="fixed top-0 left-0" width={150} height={150} />
        <Image src="/Blops.svg" alt="the Blops" className="fixed bottom-0 left-0" width={300} height={300} />
        <Image src="/Plus.svg" alt="the plus or cross" className="fixed top-0 right-0" width={150} height={150} />
        <Image src="/Polygon.svg" alt="the polygon" className="fixed bottom-0 right-0" width={150} height={150} />
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex flex-col gap-5">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-700 from-0% via-purple-600 via-50% to-red-800 to-100% text-transparent bg-clip-text">Aftaza</h1>
        <h1 className="text-4xl font-semibold">Welcome To My Portofolio Website</h1>
        <h3 className="text-xl">Everything about me is on this one website</h3>
        <button className="mt-10 px-5 py-2 rounded-lg font-bold text-lg bg-gradient-to-r from-indigo-700 from-0% hover:from-0% hover:from-cyan-500 via-purple-600 via-50% to-red-800 hover:to-indigo-700 to-100% hover:to-100% transition-all ease-in-out duration-1000">
            Let`s Goo
        </button>
      </div>
    </main>
  );
}
