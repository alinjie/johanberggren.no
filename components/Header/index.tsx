import Container from "../Container";
import { BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import cx from "classnames";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { AnimatePresence, motion, Variants } from "framer-motion";
import classNames from "classnames";

const SCROLL_TRHESHOLD = 0;

const NAV_LINKS = [
  {
    name: "Hjem",
    href: "/",
  },
  {
    name: "Om",
    href: "/om",
  },
  {
    name: "Kontakt",
    href: "/kontakt",
  },
];

export const SOCIAL_ICONS = [
  {
    Icon: BsInstagram,
    href: "https://www.instagram.com/jbberggren/",
  },
  {
    Icon: BsFacebook,
    href: "https://www.facebook.com/johanberggrenmusic/",
  },
  {
    Icon: BsYoutube,
    href: "https://www.youtube.com/channel/UCVqzymO-c1r2x3lD4c5lh2g",
  },
];

// cubic-bezier(0.4, 0, 0.2, 1);

const VARIANTS: Variants = {
  hidden: {
    opacity: 0,
    transition: { duration: 0.3, ease: "linear" },
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: "linear" },
  },
};

function MobileNav() {
  const router = useRouter();
  return (
    <motion.div
      // Height of this element should be header height (80px) + 1px to account for header border
      className="bg-white w-full flex flex-col fixed mt-px flex-1 bottom-0 h-[calc(100%-81px)]"
      variants={VARIANTS}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <ul className="p-4 flex flex-col items-center justify-center gap-y-6 flex-1">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>
              <a
                className={classNames(
                  "font-medium text-2xl text-gray-900 border-b pb-1",
                  router.pathname === link.href
                    ? "border-gray-900"
                    : "border-transparent"
                )}
              >
                {link.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="p-4 flex items-center justify-center border-t border-gray-200 gap-x-4  text-gray-900 z-50">
        {SOCIAL_ICONS.map(({ Icon, href }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600"
          >
            <Icon />
          </a>
        ))}
      </div>
    </motion.div>
  );
}

export default function Hedaer() {
  const [scrollY, setScrollY] = useState(
    typeof window !== "undefined" && window.scrollY
  );
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const listener = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", listener);

    return () => window.removeEventListener("scroll", listener);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileNavOpen ? "hidden" : "unset";
  }, [mobileNavOpen]);

  useEffect(() => {
    setMobileNavOpen(false);
  }, [router.pathname]);

  return (
    <header
      className={cx(
        "w-screen z-40 transition-colors ease-linear duration-300 border-b max-w-full",
        scrollY > SCROLL_TRHESHOLD || mobileNavOpen || router.pathname !== "/"
          ? "bg-white text-gray-900  border-gray-200"
          : "bg-transparent text-white border-transparent",
        router.pathname === "/" ? "fixed" : "sticky"
      )}
    >
      <Container className="flex flex-1 w-full mx-auto items-center justify-between h-[80px]">
        <Link href="/">
          <a className="font-black text-lg lg:text-2xl z-40">Johan Berggren</a>
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>
                  <a
                    className={cx(
                      "pb-1 border-b transition-colors font-medium",
                      {
                        "border-transparent": router.pathname !== link.href,
                        "hover:border-white": router.pathname === "/",
                        "hover:border-gray-900": router.pathname !== "/",
                        "border-gray-900":
                          (router.pathname === link.href &&
                            router.pathname !== "/") ||
                          scrollY > SCROLL_TRHESHOLD,
                      }
                    )}
                  >
                    {link.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden gap-4 text-lg lg:flex">
          {SOCIAL_ICONS.map(({ Icon, href }) => (
            <a
              href={href}
              key={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-colors ease-linear duration-300"
            >
              <Icon />
            </a>
          ))}
        </div>
        <button
          className="text-xl z-40 lg:hidden"
          onClick={() => setMobileNavOpen((s) => !s)}
        >
          {mobileNavOpen ? <FiX /> : <FiMenu />}
        </button>
      </Container>
      <AnimatePresence>{mobileNavOpen && <MobileNav />}</AnimatePresence>
    </header>
  );
}
