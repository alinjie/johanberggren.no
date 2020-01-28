export const formatDateString = dateString => {
  const dateObject = new Date(dateString)
  const day = dateObject.getDate()
  const month = dateObject.getMonth() + 1
  const year = dateObject.getFullYear()

  return `${day <= 9 ? "0" + day : day}.${
    month <= 9 ? "0" + month : month
  }.${year}` // Weird if else check because Javascript returns months in a werid way.
}
