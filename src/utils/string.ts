export const formatDateString = (dateString: string) => {
  const dateObject = new Date(dateString)
  const day = dateObject.getDate()
  const month = dateObject.getMonth() + 1
  const year = dateObject.getFullYear()

  return `${day <= 9 ? "0" + day : day}.${
    month <= 9 ? "0" + month : month
  }.${year}` // Weird if else check because Javascript returns months in a werid way.
}

export function replaceNorwegianCharacters(input: string) {
  return input.replace(/æ/i, "ae").replace(/ø/i, "o").replace(/å/i, "aa")
}

export function sanitizeString(input: string) {
  return replaceNorwegianCharacters(input)
    .replace(/ /g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "")
    .toLowerCase()
}
