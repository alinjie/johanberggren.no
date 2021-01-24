import { Variants } from "framer-motion"

export const CMS_URL =
  "https://api-eu-central-1.graphcms.com/v2/ckk5lzvs9075r01z119848rd1/master"

export const SOCIAL_LINKS = [
  {
    href: "https://www.youtube.com/channel/UCVqzymO-c1r2x3lD4c5lh2g",
    icon: "fab fa-youtube",
  },
  {
    href:
      "https://open.spotify.com/artist/1fZoJIDMgXCEflsjR2KJ42?si=MDn6vRJBQoes8xExCbjGsw",
    icon: "fab fa-spotify",
  },
  {
    href: "https://soundcloud.com/jbwolsen",
    icon: "fab fa-soundcloud",
  },
  {
    href: "https://itunes.apple.com/no/artist/johan-berggren/599668517",
    icon: "fab fa-apple",
  },
  {
    href: "https://music.youtube.com/channel/UClK1mQM4PnI4T5bxrNnZuiw",
    icon: "fab fa-google-play",
  },
  {
    href: "https://www.facebook.com/johanberggrenmusic",
    icon: "fab fa-facebook",
  },
  {
    href: "https://www.instagram.com/jbberggren/",
    icon: "fab fa-instagram",
  },
  {
    href:
      "https://www.amazon.com/s?k=Johan+Berggren&i=digital-music&search-type=ss&ref=ntt_srch_drd_B00BBJQS2I",
    icon: "fab fa-amazon",
  },
]

export const LINK_VARIANTS: Variants = {
  hover: {
    y: -2,
    x: 2,
    boxShadow: "-2px 2px 0px 0px #000000",
  },
}
