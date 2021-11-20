import Container from "../Container";
import { BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import cx from "classnames";
import { useEffect, useState } from "react";

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

export default function Hedaer() {
  const [scrollY, setScrollY] = useState(
    typeof window !== "undefined" && window.scrollY
  );
  const router = useRouter();

  useEffect(() => {
    const listener = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", listener);

    return () => window.removeEventListener("scroll", listener);
  }, []);
  return (
    <header
      className={cx("w-screen flex justify-center fixed z-50", {
        "-top-full": scrollY > 0,
      })}
    >
      <Container className="flex w-full mx-auto text-white  justify-between">
        <Link href="/">
          <a className="font-black text-2xl">Johan Berggren</a>
        </Link>
        <nav>
          <ul className="flex gap-4 text-gray-50">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>
                  <a
                    className={cx("pb-1", {
                      "border-b": router.pathname === link.href,
                    })}
                  >
                    {link.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-4 text-lg">
          <a href="">
            <BsInstagram />
          </a>
          <a href="">
            <BsFacebook />
          </a>
          <a href="">
            <BsYoutube />
          </a>
        </div>
      </Container>
    </header>
  );
}
