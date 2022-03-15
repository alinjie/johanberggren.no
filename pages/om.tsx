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
          Spellemannsnominerte Johan Berggren har siden debuten i 2019 vokst til
          å bli en av de mest folkekjære artistene på den norske
          visesangerfronten. <br /> <br /> “Ei hytte foran loven” er Berggrens
          tredje utgivelse og med den kritikerroste forgjengeren
          “Lilyhamericana” etablerte han seg raskt som en av de med aller mest
          pondus og autoritet innenfor den stadig voksende Americana-bølgen.
          Dabladet mente han var “Arven etter Prøysen” og Stavanger Aftenblad
          kalte han “Lillehammers svar på Bjella og Hellbillies”.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 my-8">
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
              className="object-top"
            />
          </div>
        </div>

        <p className="!mt-0">
          Berggren gjør køntri på sitt eget vis og har forstått dens sjel og
          hjerte. Han behersker både det musikalske uttrykket og
          låtskriverkunsten fullt ut. Musikken i seg selv er like behagelig som
          et par gode, inngåtte boots.
        </p>
      </Container>
    </div>
  )
}
