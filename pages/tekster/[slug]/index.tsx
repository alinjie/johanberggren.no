import fs from "fs"
import path from "path"
import process from "process"
import { GetStaticPropsContext, InferGetStaticPropsType } from "next"
import frontmatter from "front-matter"
import Container from "components/Container"
import { ALBUMS } from "pages"
import Link from "next/link"
import Image from "next/image"
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
        <Container className="absolute z-20 inset-x-0 my-auto  flex  flex-col md:flex-row space-x-8 items-center">
          <Image
            src={album.image}
            alt={album.alt}
            height={300}
            width={300}
            layout="intrinsic"
          />
          <div>
            <h2 className="text-white font-bold text-4xl md:text-4xl mb-2 mt-6 md:mt-0">
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
      <Container className="mt-10 ">
        <div className="mb-10 space-x-1 font-medium flex text-sm text-gray-800">
          <Link href="/">
            <a>
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </a>
          </Link>
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <Link href="/tekster">
            <a className="hover:underline">Tekster</a>
          </Link>
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>

          <span className="text-gray-500">{album.name}</span>
        </div>
        <div className="divide-y">
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
        </div>
      </Container>
    </div>
  )
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const slug = ctx.params.slug.toString()
  let tracks: Track[] = []
  const songs = fs.readdirSync(
    path.join(process.cwd(), `${LYRICS_DIR}/${slug}`)
  )

  await Promise.all(
    songs.map(async (song) => {
      const file = path.join(process.cwd(), `${LYRICS_DIR}/${slug}`, song)

      const content = fs.readFileSync(file).toString()

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
  const albums = fs.readdirSync(path.join(process.cwd(), LYRICS_DIR))

  return {
    paths: albums.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}
