/**
 * @param hourString
 * hourStrToMinutes("12:00") -> 720
 */
export function convertHourStringToMinutes(hourString: string) {
  const [hours, minutes] = hourString.split(':').map(Number)
  return (hours * 60) + minutes
}

/**
 * @param minutesNumber
 * minutesToHourString(720) -> "12:00"
 */
export function convertMinutesToHourString(minutesNumber: number) {
  const hours = String(Math.floor(minutesNumber / 60)).padStart(2, '0')
  const minutes = String(minutesNumber % 60).padStart(2, '0')
  return `${hours}:${minutes}`
}