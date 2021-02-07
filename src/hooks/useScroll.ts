import { useEffect, useState } from "react"

type State = {
  currentScroll: number
  scrollDirection: "UP" | "DOWN"
}

export function useScroll() {
  const [scroll, setScroll] = useState({
    currentScroll: typeof window !== "undefined" ? window.pageYOffset : 0,
    scrollDirection: undefined,
  })

  useEffect(() => {
    const handler = () => {
      setScroll((previousState) => ({
        scrollDirection:
          window.pageYOffset > previousState.currentScroll ? "DOWN" : "UP",
        currentScroll: window.pageYOffset,
      }))
    }

    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return scroll
}
