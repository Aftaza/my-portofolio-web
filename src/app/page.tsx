import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Image src="/circle.svg" alt="the circle" width={180} height={180} className="fixed -top-8 -left-8 animate-wiggle hover:h-[200px] hover:w-[200px] transition-all ease-in-out duration-700" />
        <Image src="/Blops.svg" alt="the Blops" width={300} height={300} className="fixed -bottom-10 -left-4 animate-wiggle" />
        <Image src="/Plus.svg" alt="the plus or cross" width={150} height={150} className="fixed -top-6 -right-6 animate-wiggle" />
        <Image src="/Polygon.svg" alt="the polygon" width={150} height={150} className="fixed -bottom-7 right-0 animate-wiggle hover:rotate-180 hover:w-[200px] hover:h-[200px] transition-all ease-in-out duration-700" />
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex flex-col gap-5">
        {/* <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-700 from-0% via-purple-600 via-50% to-red-800 to-100% text-transparent bg-clip-text">Aftaza</h1> */}
        <div className="flex items-center justify-center animate-bounce">
            <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none">
                Aftaza
            </span>
            <h1 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
                Aftaza
            </h1>
        </div>
        <h1 className="text-4xl font-semibold">Welcome To My Portofolio Website</h1>
        <h3 className="text-xl">Everything about me is on this one website</h3>
        <button className="mt-10 px-5 py-2 rounded-lg font-bold text-lg bg-gradient-to-r from-indigo-700 from-0% hover:from-0% hover:from-cyan-500 via-purple-600 via-50% to-red-800 hover:to-indigo-700 to-100% hover:to-100% transition-all ease-in-out duration-1000">
            Let`s Goo
        </button>
      </div>
    </main>
  );
}
