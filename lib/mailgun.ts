import mg from "mailgun-js"

const DOMAIN = "mail.johanberggren.no"

export const mailgun = mg({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: DOMAIN,
})
