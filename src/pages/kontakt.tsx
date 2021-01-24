import Header from "components/Header"
import Footer from "components/Footer"
import { motion } from "framer-motion"
import { LINK_VARIANTS } from "consts"
import Image from "next/image"
import { ErrorMessage, Form, Formik } from "formik"
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

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container flex-1">
        <Image
          className="object-cover object-top "
          src="/assets/img/concert.jpg"
          layout="intrinsic"
          height={400}
          width={1000}
        />
        <div className="grid md:grid-cols-2 space-y-4 md:flex-row mt-4">
          <div className="md:order-2 md:ml-6">
            <h2 className="title mb-4">Kontakt oss</h2>
            <p className="text-lg text-gray-500">
              Har du spørsmål til nettsiden, tilbakemelding eller lurer på noe
              annet? Send en melding så tar vi kontakt så fort som mulig.
            </p>
          </div>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
          >
            {({ getFieldProps }) => (
              <Form className="space-y-6 flex-1">
                <div>
                  <label htmlFor="name" className="block text-lg">
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
                  <label htmlFor="email" className="block text-lg">
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
                  <label htmlFor="name" className="block text-lg">
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
