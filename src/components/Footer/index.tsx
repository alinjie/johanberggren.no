import Logo from "components/Logo"
import { SOCIAL_LINKS } from "consts"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container">
        <div className="grid grid-cols-2 items-ce md:flex justify-between mb-4  space-y-4">
          <div className="space-y-2">
            <h4 className="text-xl">Kontakt</h4>
            <div>
              <h5>Presse / Booking</h5>
              <a
                href="mailto:vibeke@rootsy.se"
                className="text-gray-500 font-light"
              >
                vibeke@rootsy.se
              </a>
            </div>
            <div>
              <h5>Distribusjon</h5>
              <a
                href="mailto:info@rootsy.se"
                className="text-gray-500 font-light"
              >
                info@rootsy.se
              </a>
            </div>
          </div>
          <div className="space-y-1">
            <h4 className="text-xl">Lenker</h4>
            <ul className="text-gray-500 leqading-relaxed font-light">
              <li>
                <Link href="/kontakt">
                  <a>Kontakt</a>
                </Link>
              </li>
              <li>
                <a href="http://rootsymusic.se/" target="_blank" rel="noopener">
                  Rootsy Music
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl">Sosialt</h4>
            <ul className="flex space-x-1 items-center text-gray-500">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener">
                    <i className={link.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Link href="/">
          <a className="cursor-pointer self-end">
            <Logo />
          </a>
        </Link>
      </div>
    </footer>
  )
}
