import dayjs from "dayjs"

export default function Footer() {
  return (
    <footer className="w-full py-6 flex justify-center text-sm text-gray-500 mt-10">
      © Copyright Johan Berggren {dayjs().format("YYYY")}
    </footer>
  )
}
