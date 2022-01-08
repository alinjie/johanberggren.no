import {
  GetStaticPathsContext,
  GetStaticPathsResult,
  GetStaticPropsContext,
  InferGetServerSidePropsType,
} from "next"
import { ALBUMS } from "pages"
import process from "process"
import path from "path"
import fs from "fs"
import { marked } from "marked"
import frontmatter from "front-matter"
import Container from "components/Container"
import Link from "next/link"
import { Track } from "."
import Image from "next/image"

export default function SongText({
  html,
  album,
  song,
  next,
  prev,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
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
            <span className="text-xs text-gray-300 uppercase tracking-wider mb-2 block">
              {album.name}
            </span>
            <h2 className="text-white font-bold text-5xl">
              {song.number}. {song.name}
            </h2>
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
      <Container className="mt-10">
        <Link href={`/tekster/${album.slug}`}>
          <a className="mb-6 flex items-center text-gray-500 text-sm">
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-1">Tilbake</span>
          </a>
        </Link>
        <div dangerouslySetInnerHTML={{ __html: html }} className="prose" />
        <div className="grid grid-cols-2 mt-8 border-t pt-4">
          <div>
            {prev && (
              <Link href={`/tekster/${album.slug}/${prev.number}`}>
                <a className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span>&lsaquo;</span>
                    <span className="block font-medium">Forrige</span>
                  </div>
                  <div>
                    <span className="text-gray-500">
                      {prev.number}. {prev.name}
                    </span>
                  </div>
                </a>
              </Link>
            )}
          </div>
          <div className="flex justify-end">
            {next && (
              <Link href={`/tekster/${album.slug}/${next.number}`}>
                <a className=" flex flex-col space-y-1">
                  <div className="flex items-center space-x-2 self-end">
                    <span className="block font-medium text-right">Neste</span>
                    <span>&rsaquo;</span>
                  </div>

                  <span className="text-gray-500">
                    {next.number}. {next.name}
                  </span>
                </a>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const slug = ctx.params.slug.toString()
  const number = ctx.params.number.toString()
  const album = ALBUMS.find(
    (album) => album.getSlug() === ctx.params.slug.toString()
  )
  const file = path.join(process.cwd(), "/public/lyrics", slug, number + ".md")
  const content = fs.readFileSync(file)
  const fm = frontmatter<Track>(content.toString())
  const html = marked(fm.body)

  const nextPath =
    path.join(
      process.cwd(),
      "/public/lyrics",
      slug,
      (parseInt(number) + 1).toString()
    ) + ".md"
  const prevPath =
    path.join(
      process.cwd(),
      "/public/lyrics",
      slug,
      (parseInt(number) - 1).toString()
    ) + ".md"

  const hasNext = fs.existsSync(nextPath)
  const hasPrev = fs.existsSync(prevPath)

  let next: Track = null
  let prev: Track = null

  if (hasNext) {
    const content = fs.readFileSync(nextPath).toString()
    next = frontmatter<Track>(content).attributes
  }

  if (hasPrev) {
    const content = fs.readFileSync(prevPath).toString()
    prev = frontmatter<Track>(content).attributes
  }

  return {
    props: {
      html,
      song: fm.attributes,
      next,
      prev,
      album: {
        image: album.image,
        alt: album.alt,
        name: album.name,
        slug: album.getSlug(),
      },
    },
  }
}

export async function getStaticPaths() {
  const albums = await Promise.all(
    ALBUMS.map(async (album) => {
      const slug = album.getSlug()
      const songs = fs.readdirSync(
        path.join(process.cwd(), `/public/lyrics/${slug}`)
      )

      return { slug, songs }
    })
  )

  const paths = albums.reduce<GetStaticPathsResult["paths"]>((acc, cur) => {
    cur.songs.forEach((song) => {
      acc.push({ params: { number: song.split(".")[0], slug: cur.slug } })
    })
    return acc
  }, [])

  return { paths: paths, fallback: false }
}
