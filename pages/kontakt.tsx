import Container from "components/Container"
import { SOCIAL_ICONS } from "components/Header"
import { Formik, Form, Field, FormikHelpers } from "formik"
import Image from "next/image"
import ContactBanner from "public/img/contact-banner.jpg"
import * as yup from "yup"
import cx from "classnames"

export const validationSchema = yup.object({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required(),
})

type FormValues = yup.InferType<typeof validationSchema>

const INITIAL_VALUES: FormValues = {
  email: "",
  firstname: "",
  lastname: "",
  message: "",
}

async function onSubmit(
  values: FormValues,
  helpers: FormikHelpers<FormValues>
) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
  })

  if (!response.ok) {
    return helpers.setStatus({
      error:
        "Ops! En uventet feil oppsto ved sending. Vennlig forsøk igjen senere eller kontakt Johan igjennom andre plattformer (Instagram, Facebook, etc.)",
    })
  }

  helpers.resetForm()
  helpers.setStatus({ message: "Meldingen ble sendt!" })
}

export default function Kontakt() {
  return (
    <div>
      <div className="relative h-[350px] lg:h-[600px]">
        <Image
          src={ContactBanner}
          layout="fill"
          objectFit="cover"
          priority
          placeholder="blur"
          className="2xl:object-[50%_40%]"
          alt="Johan Berggren avbildet i sofa"
        />
      </div>
      <Container>
        <h2 className="font-bold text-2xl mb-8">Kontakt</h2>
        <div className="flex flex-col space-y-10 justify-between">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div className="flex space-x-2 text-lg">
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
          {/* <Formik
            initialValues={INITIAL_VALUES}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {({ errors, status, isSubmitting, touched }) => (
              <Form className="flex flex-col space-y-4">
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <label
                      className="text-gray-700 mb-2 block font-medium text-sm"
                      htmlFor="given-name"
                    >
                      Fornavn
                    </label>
                    <Field
                      type="text"
                      name="firstname"
                      c
                      className={cx("w-full border-gray-300 rounded-sm", {
                        "ring-1 ring-red-500":
                          errors.firstname && touched.firstname,
                      })}
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
                    <Field
                      type="text"
                      name="lastname"
                      autoComplete="family-name"
                      className={cx("w-full border-gray-300 rounded-sm", {
                        "ring-1 ring-red-500":
                          errors.lastname && touched.lastname,
                      })}
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
                  <Field
                    type="text"
                    name="email"
                    autoComplete="email"
                    className={cx("w-full border-gray-300 rounded-sm", {
                      "ring-1 ring-red-500": errors.email && touched.email,
                    })}
                  />
                </div>
                <div>
                  <label
                    className="text-gray-700 mb-2 block font-medium text-sm"
                    htmlFor="message"
                  >
                    Melding
                  </label>
                  <Field
                    as="textarea"
                    name="message"
                    className={cx("w-full border-gray-300 rounded-sm", {
                      "ring-1 ring-red-500": errors.message && touched.message,
                    })}
                  />
                </div>
                <button
                  className="rounded bg-gray-900 text-white  py-3 px-8 hover:bg-gray-700 transition-colors disabled:bg-gray-700"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sender" : "Send"}
                </button>
                {status?.error && !status.message && (
                  <span className="text-red-500">{status.error}</span>
                )}
                {status?.message && (
                  <span className="text-gray-500">{status.message}</span>
                )}
              </Form>
            )}
          </Formik> */}
        </div>
      </Container>
    </div>
  )
}
