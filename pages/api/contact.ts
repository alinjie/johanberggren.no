import { mailgun } from "lib/mailgun"
import { NextApiRequest, NextApiResponse } from "next"
import { validationSchema } from "pages/kontakt"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstname, lastname, email, message } = req.body
  const isValid = await validationSchema.isValid(req.body)

  if (!isValid) {
    const validationResult = await validationSchema.validate(req.body)
    console.error("Yup validation result:", validationResult)
    return res.status(400).json({ error: "Invalid input values" })
  }

  try {
    const result = await mailgun.messages().send({
      to: "ali.k.njie@gmail.com",
      from: `${firstname} ${lastname} <${email}>`,
      subject: `Ny melding fra johanberggren.no`,
      text: message,
    })

    return res.json(result)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: "internal server error" })
  }
}
