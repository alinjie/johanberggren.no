import { useCallback, useEffect, useState } from "react"

export function useScrollDirection() {
  const [lastPosition, setLastPosition] = useState(0)
  const [scrollDirection, setScrollDirection] = useState<"UP" | "DOWN">()

  const handler = useCallback(() => {
    const scrollDirection = window.scrollY < lastPosition ? "UP" : "DOWN"
    setLastPosition(window.scrollY)
    setScrollDirection(scrollDirection)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handler)

    return () => window.removeEventListener("scroll", handler)
  }, [])

  return scrollDirection
}
