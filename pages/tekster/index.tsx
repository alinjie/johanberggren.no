import Link from "next/link"
import Image from "next/image"
import { ALBUMS } from "pages"
import slugify from "slugify"
import Container from "components/Container"

export default function Lyrics() {
  return (
    <Container>
      <h2 className="text-xl mb-6 font-bold">Tekster</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {ALBUMS.map((album) => (
          <Link href={`/tekster/${slugify(album.name, { lower: true })}`}>
            <a className="group">
              <Image
                src={album.image}
                alt={album.alt}
                height={300}
                width={300}
                layout="intrinsic"
                className="group-hover:opacity-95 transition-opacity"
              />
              <span className="uppercase text-gray-70 text-sm font-medium block">
                {album.name}
              </span>
            </a>
          </Link>
        ))}
      </div>
    </Container>
  )
}
