import fs from "fs/promises"
import path from "path"
import process from "process"
import { GetStaticPropsContext, InferGetStaticPropsType } from "next"
import frontmatter from "front-matter"
import Container from "components/Container"
import { ALBUMS } from "pages"
import Link from "next/link"
import Image from "next/image"
import slugify from "slugify"
import cx from "classnames"

const LYRICS_DIR = "/public/lyrics"

export type Track = {
  name: string
  number: number
}

export default function AlbumLyrics({
  tracks,
  album,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <div className="w-full relative h-[450px] flex items-center">
        <Container className="absolute z-20 inset-x-0 my-auto  flex  space-x-8 items-center">
          <Image
            src={album.image}
            alt={album.alt}
            height={300}
            width={300}
            layout="intrinsic"
          />
          <div>
            <h2 className="text-white font-bold text-5xl mb-2 ">
              {album.name}
            </h2>
            <span className="text-gray-200">Johan Berggren</span>
          </div>
        </Container>
        <div className="h-full w-full bg-black z-10 absolute opacity-40" />
        <Image
          src={album.image}
          alt={album.alt}
          layout="fill"
          objectFit="cover"
          className="filter blur-xl scale-105 transform"
        />
      </div>
      <Container className="mt-10 divide-y">
        {tracks
          .sort((a, b) => a.number - b.number)
          .map((track, index) => (
            <Link href={`/tekster/${album.slug}/${track.number}`}>
              <a
                className={cx(
                  "block py-4",
                  index === 0 && "pt-0",
                  index === tracks.length - 1 && "pb-0"
                )}
              >
                <h2 className="font-medium mb-1">
                  {track.number}. {track.name}
                </h2>
                <span className="text-gray-600  text-sm block">
                  {album.name}
                </span>
              </a>
            </Link>
          ))}
      </Container>
    </div>
  )
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const slug = ctx.params.slug.toString()
  let tracks: Track[] = []
  const songs = await fs.readdir(
    path.join(process.cwd(), `${LYRICS_DIR}/${slug}`)
  )

  await Promise.all(
    songs.map(async (song) => {
      const file = path.join(process.cwd(), `${LYRICS_DIR}/${slug}`, song)

      const content = (await fs.readFile(file)).toString()

      const fm = frontmatter<Track>(content)

      tracks.push(fm.attributes)
    })
  )

  const album = ALBUMS.find((album) => album.getSlug() === slug)

  return {
    props: {
      tracks,
      album: {
        name: album.name,
        image: album.image,
        alt: album.alt,
        slug: album.getSlug(),
      },
    },
  }
}

export async function getStaticPaths() {
  const albums = await fs.readdir(path.join(process.cwd(), LYRICS_DIR))

  return {
    paths: albums.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}
