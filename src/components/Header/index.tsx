import Logo from "components/Logo"
import cx from "classnames"
import { AnimatePresence, motion, Variants } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/dist/client/router"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

type Props = {
  transparent?: boolean
}

type NavProps = {
  setNavOpen: Dispatch<SetStateAction<boolean>>
}

const variants: Variants = {
  hidden: {
    y: "-100%",
  },
  visible: {
    y: 0,
    transition: {
      ease: "anticipate",
      duration: 0.6,
    },
  },
  exit: {
    y: "-100%",
    transition: {
      ease: "anticipate",
      duration: 0.6,
    },
  },
}

const navLinks = [
  {
    href: "/",
    name: "Hjem",
  },
  {
    href: "/konserter",
    name: "Konserter",
  },
  {
    href: "/kontakt",
    name: "Kontakt",
  },
]

function Nav({ setNavOpen }: NavProps) {
  const { pathname } = useRouter()
  return (
    <motion.nav
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed bg-white z-50 h-screen w-full"
    >
      <button onClick={() => setNavOpen(false)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="text-black m-4"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <ul className=" h-full text-gray-900 text-4xl flex flex-col space-y-6 items-center justify-center">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>
              <a className={cx({ "text-gray-300": pathname !== link.href })}>
                {link.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}

export default function Header({ transparent }: Props) {
  const [navOpen, setNavOpen] = useState(false)
  useEffect(() => {
    navOpen ? (document.body.style.overflow = "hidden") : "unset"
  }, [navOpen])
  return (
    <header
      className={cx("bg-white duration-150 w-full shadow", {
        "text-white bg-transparent shadow-none": transparent,
      })}
    >
      <AnimatePresence>
        {navOpen && <Nav setNavOpen={setNavOpen} />}
      </AnimatePresence>

      <div className="container flex justify-between">
        <Link href="/">
          <a className="cursor-pointer">
            <Logo />
          </a>
        </Link>
        <button onClick={() => setNavOpen(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  )
}
