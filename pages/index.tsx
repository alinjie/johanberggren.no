import Image from "next/image";
import Container from "../components/Container";

export default function Home() {
  return (
    <div>
      <div className="h-screen w-screen relative flex max-w-full">
        <div className="m-auto z-30 flex flex-col lg:flex-row gap-10 p-8">
          <Image
            src="/img/ehfl.png"
            layout="intrinsic"
            objectFit="contain"
            height={450}
            width={450}
          />

          <div className="flex flex-col max-w-3xl lg:mt-0">
            <span className="text-[#c99b1e] uppercase mx-auto lg:mx-0 text-sm mb-2">
              Nytt album
            </span>
            <h2 className="text-white text-5xl text-center lg:text-left lg:text-5xl xl:text-6xl font-black">
              Ei hytte foran loven
            </h2>
            <p className="text-white leading-tight mt-8 text-center lg:text-left ">
              <q className="leading-relaxed font-light text-gray-200">
                Johan Berggren fra Lillehammer følger opp fjorårets album på
                morsmålet med en ny fulltreffer,{" "}
                <span className="whitespace-nowrap">
                  &#171;Ei hytte foran loven&#187;.
                </span>
              </q>
              <span className="block mt-2 font-medium text-lg">
                - Dagbladet
              </span>
            </p>
            <a
              className="z-50 bg-white w-max mt-12 py-3 px-10 rounded-sm uppercase text-gray-900 transition-colors hover:bg-gray-200 mx-auto lg:mx-0 text-sm"
              href="https://songwhip.com/johanberggren/eihytteforanloven"
            >
              Lytt nå
            </a>
          </div>
        </div>
        <div className="absolute h-screen w-screen max-w-full bg-black z-10 opacity-30" />
        <video
          src="/video/valgt-det-sjol.mp4"
          muted
          autoPlay
          loop
          className="h-full w-full object-cover absolute"
        />
      </div>

      <Container>
        <h2 className="font-black text-3xl leading-relaxed">Konserter</h2>
        <span className="text-gray-500">Ingen kommende konserte</span>
      </Container>
    </div>
  );
}
