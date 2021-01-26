import { NextApiRequest, NextApiResponse } from "next"
import mailgun from "mailgun-js"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { MAILGUN_API_KEY, MAILGUN_DOMAIN } = process.env

  if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN) {
    console.error("Mailgun API or domain key is undefined")
    return res.status(500).json({ error: "Internal server error" })
  }

  const { name, email, message } = req.body

  const mg = mailgun({
    apiKey: MAILGUN_API_KEY,
    domain: MAILGUN_DOMAIN,
  })

  mg.messages().send({
    to: email,
    text: message,
    from: `info@${MAILGUN_DOMAIN}`,
    subject: `Melding fra: ${name} (${email})`,
  })

  return res.status(200).json({ message: "Success" })
}
