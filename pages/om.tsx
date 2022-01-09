import Container from "components/Container"
import Image from "next/image"
import AboutBanner from "public/img/about-banner.jpg"

export default function Om() {
  return (
    <div>
      <div className="relative h-[350px] lg:h-[600px]">
        <Image
          src={AboutBanner}
          layout="fill"
          objectFit="cover"
          className="xl:object-[50%-30%] 2xl:object-[50%_40%]"
          priority
          placeholder="blur"
          alt="Johan Berggren spiller gitar i en bar"
        />
      </div>
      <Container className="prose !max-w-3xl">
        <h2>Om Johan Berggren</h2>

        <p className="!mt-0">
          Berggren gjør norsk køntrimusikk. Nei, forresten - Berggren gjør
          køntri på sitt eget vis. Og synger på norsk. Visst forstår man at han
          har ei Merle Haggard-plate eller to, men han imiterer aldri.
          <br />
          <br />
          Intuitivt har Berggren forstått køntriens sjel og hjerte. Han
          behersker både det musikalske uttrykket og låtskriverkunsten fullt ut.
          Musikken i seg selv er like behagelig som et par gode, inngåtte boots.
          Han finner kanskje ikke opp hjulet på nytt, men trenger man det når
          det køntrihjulet allerede ruller så bra?
        </p>

        <div className="grid lg:grid-cols-2 gap-8 my-10">
          <div className="relative h-[500px]">
            <Image
              src="/img/about-image-1.jpg"
              layout="fill"
              objectFit="cover"
              alt="Johan Berggren spiller el-gitar konsert"
            />
          </div>
          <div className="relative h-[500px]">
            <Image
              src="/img/about-image-2.jpg"
              layout="fill"
              objectFit="cover"
              alt="Johan Berggren stemmer utstyr mellom låter"
            />
          </div>
        </div>

        <p className="!mt-0">
          Ei hytte foran loven” er Berggrens tredje album. Med den
          spellemannsnominerte forgjengeren ”Lilyhamericana” etablerte
          låtskriveren seg som et av de mest interessante navnene på den norske
          musikkscenen og det ble trukket paralleller til både Stein Torleif
          Bjella og John Prine.
          <br />
          <br />
          På oppfølgeren tar Berggren ytterligere et steg fremover. Her er det
          pondus og autoritet i kombinasjon med en gedigen musikalitet og sterk
          låtskriving som gjør skiven til en usedvanlig kraftig plate.
          Dagbladets Øyvind Rønning fant fram femmeren og ei helside og skrek
          ”Arven etter Prøysen!” Stavanger Aftenblad gav også skiva en femmer og
          sa ”Berggren er en mester når det kommer til det hverdagslige.
        </p>
      </Container>
    </div>
  )
}
