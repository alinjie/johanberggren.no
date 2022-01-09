import { mailgun } from "lib/mailgun"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstname, lastname, email, message } = req.body
  const result = await mailgun.messages().send({
    to: "ali.k.njie@gmail.com",
    from: `${firstname} ${lastname} <${email}>`,
    subject: `Ny melding fra johanberggren.no`,
    text: message,
  })

  return res.json(result)
}
