import Container from "components/Container";
import { SOCIAL_ICONS } from "components/Header";
import Image from "next/image";

export default function Kontakt() {
  return (
    <div>
      <div className="relative h-[350px] lg:h-[600px]">
        <Image src="/img/contact-banner.jpg" layout="fill" objectFit="cover" />
      </div>
      <Container>
        <h2 className="font-bold text-2xl mb-8">Kontakt</h2>
        <div className="flex flex-col gap-10 justify-between">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-8">
            <div className="flex flex-col">
              <span className="font-medium text-lg mb-2">
                Presse og booking
              </span>
              <span className="text-gray-500 font-light">Vibeke Sjøvold</span>
              <a
                href="mailto:vibeke@rootsy.no"
                className="text-gray-500 font-light"
              >
                vibeke@rootsy.no
              </a>
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-lg mb-2">Distribusjon</span>
              <span className="text-gray-500 font-light">Border Music</span>
              <a
                href="mailto:info@border.se"
                className="text-gray-500 font-light"
              >
                info@border.se
              </a>
            </div>
            <div>
              <span className="font-medium text-lg mb-2 block">Sosialt</span>
              <div className="flex gap-2">
                {SOCIAL_ICONS.map(({ Icon, href }) => (
                  <a
                    key={href}
                    href={href}
                    className="text-gray-500 hover:text-gray-900 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <label
                  className="text-gray-700 mb-2 block font-medium text-sm"
                  htmlFor="given-name"
                >
                  Fornavn
                </label>
                <input
                  type="text"
                  id="given-name"
                  className="w-full border-gray-300 rounded-sm"
                  autoComplete="given-name"
                />
              </div>
              <div className="flex-1">
                <label
                  className="text-gray-700 mb-2 block font-medium text-sm"
                  htmlFor="family-name"
                >
                  Etternavn
                </label>
                <input
                  type="text"
                  id="family-name"
                  autoComplete="family-name"
                  className="w-full border-gray-300 rounded-sm"
                />
              </div>
            </div>
            <div>
              <label
                className="text-gray-700 mb-2 block font-medium text-sm"
                htmlFor="email"
              >
                E-post
              </label>
              <input
                type="text"
                id="email"
                autoComplete="email"
                className="w-full border-gray-300 rounded-sm"
              />
            </div>
            <div>
              <label
                className="text-gray-700 mb-2 block font-medium text-sm"
                htmlFor="message"
              >
                Melding
              </label>
              <textarea
                id="message"
                className="w-full border-gray-300 rounded-sm"
              />
            </div>
            <button
              className="rounded bg-gray-900 text-white  py-3 px-8 hover:bg-gray-600 transition-colors"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
}
