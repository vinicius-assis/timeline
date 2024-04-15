const isValidYear = (date) => {
  const year = Number(date.split('-')[0])

  return year === 2021
}

const isValidEndDate = (startDate, endDate) => {
  const startMillis = new Date(startDate).getTime();
  const endMillis = new Date(endDate).getTime();

  return endMillis <= startMillis;
}

const invalidDate = (start, end) => {
  const invalidStartDate = !isValidYear(start)
  const invalidEndDate = !isValidYear(end)
  const startBiggerThanEnd = isValidEndDate(start, end)
  if (invalidStartDate || invalidEndDate) {
    return "Unfortunately we are late and just work with 2021's events."
  } else if (startBiggerThanEnd) {
    return "Unfortunately we don't go back in time to finalize events."
  }
  return undefined
}

export default invalidDate
