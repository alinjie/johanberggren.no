import { motion, useAnimation, HTMLMotionProps } from "framer-motion"
import { useEffect, useRef } from "react"

export default function Section({
  children,
  ...props
}: HTMLMotionProps<"section">) {
  const ref = useRef<HTMLElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries.find((entry) => entry.target === ref.current)

        if (entry && entry.isIntersecting) {
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
          })
        }
      },
      { threshold: 0.2 }
    )

    if (!ref.current) return

    observer.observe(ref.current)
  }, [])

  return (
    <motion.section
      {...props}
      initial={{ y: 50, opacity: 0 }}
      animate={controls}
      ref={ref}
    >
      {children}
    </motion.section>
  )
}
