import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";

export default function HomePage() {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-black sm:text-7xl">
          Coming soon! Ontwerp jouw interieur{" "}
          <span className="relative whitespace-nowrap text-teal-600">
            <span className="relative">met behulp</span>
          </span>{" "}
          van A.I.
        </h1>
        <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-black text-black leading-7">
          Neem een foto van een kamer en bekijk deze in verschillende design
          stijlen. 3 gratis designs per dag.
        </h2>
        <Link
          className="bg-teal-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-teal-500 transition"
          href="/dream">
          Ontwerp jouw interieur
        </Link>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-8 sm:flex-row flex-col">
              <div>
                <h3 className="mb-1 font-medium text-lg">
                  Oorspronkelijke kamer
                </h3>
                <Image
                  alt="Original photo of a room with roomGPT.io"
                  src="/original-pic.jpg"
                  className="w-full object-cover h-96 rounded-2xl"
                  width={400}
                  height={400}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h3 className="mb-1 font-medium text-lg">
                  A.I Gegenereerde kamer
                </h3>
                <Image
                  alt="Generated photo of a room with roomGPT.io"
                  width={400}
                  height={400}
                  src="/generated-pic-2.jpg"
                  className="w-full object-cover h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
