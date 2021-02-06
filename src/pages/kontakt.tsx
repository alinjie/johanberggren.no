import Header from "components/Header"
import Footer from "components/Footer"
import { motion } from "framer-motion"
import { LINK_VARIANTS } from "consts"
import Image from "next/image"
import { ErrorMessage, Form, Formik, FormikHelpers } from "formik"
import * as yup from "yup"

const initialValues = {
  name: "",
  email: "",
  message: "",
}

const validationSchema = yup.object({
  name: yup.string().required("Navn mangler"),
  email: yup.string().required("E-post mangler").email("Ugyldig e-post"),
  message: yup.string().required("Melding mangler"),
})

type FormValues = yup.InferType<typeof validationSchema>

export default function Contact() {
  const handleSubmit = async (
    values: FormValues,
    helpers: FormikHelpers<FormValues>
  ) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })

    if (!response.ok) {
      return helpers.setStatus({
        type: "error",
        message: "Det skjedde en feil ved sending av meldingen.",
      })
    }

    helpers.resetForm()
    helpers.setStatus({ message: "Meldingen ble sendt!" })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container flex-1">
        <Image
          priority
          className="object-cover object-top "
          src="/assets/img/concert.jpg"
          layout="intrinsic"
          height={400}
          width={1000}
          alt="Johan Berggren sitter i sofaen og ser inn i kameraet"
        />
        <div className="grid md:grid-cols-2 space-y-4 md:flex-row mt-4">
          <div className="md:order-2 md:ml-6">
            <h2 className="title mb-4">Kontakt oss</h2>
            <p className="text-gray-500 font-light">
              Har du spørsmål til nettsiden, tilbakemelding eller lurer på noe
              annet? Send en melding så tar vi kontakt så fort som mulig.
            </p>
          </div>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ getFieldProps, status }) => (
              <Form className="space-y-6 flex-1">
                {status && (
                  <span
                    className={
                      status.type === "error"
                        ? "text-red-400"
                        : "text-green-400"
                    }
                  >
                    {status.message}
                  </span>
                )}
                <div>
                  <label htmlFor="name" className="block">
                    Navn
                  </label>
                  <input
                    {...getFieldProps("name")}
                    type="text"
                    className="w-full border-0 border-b-2 border-gray-400 focus:ring-0 focus:border-black"
                  />
                  <span className="text-red-500">
                    <ErrorMessage name="name" />
                  </span>
                </div>
                <div>
                  <label htmlFor="email" className="block">
                    E-post
                  </label>
                  <input
                    {...getFieldProps("email")}
                    type="text"
                    className="w-full border-0 border-b-2 border-gray-400 focus:ring-0 focus:border-black"
                  />
                  <span className="text-red-500">
                    <ErrorMessage name="email" />
                  </span>
                </div>
                <div>
                  <label htmlFor="name" className="block">
                    Melding
                  </label>
                  <textarea
                    {...getFieldProps("message")}
                    className="w-full border-0 border-b-2 border-gray-400 focus:ring-0 focus:border-black"
                  />
                  <span className="text-red-500">
                    <ErrorMessage name="message" />
                  </span>
                </div>
                <motion.button
                  className="button"
                  variants={LINK_VARIANTS}
                  whileHover="hover"
                  type="submit"
                >
                  Send
                </motion.button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Footer />
    </div>
  )
}
