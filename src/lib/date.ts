export function getRelativeDateTimeDifference (dateString: string) {
  const date = new Date(dateString)

  const currentDate = new Date()

  const timeDifference = currentDate.getTime() - date.getTime()

  const differenceDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
  const differenceHours = Math.floor(timeDifference / (1000 * 60 * 60)) % 24
  const differenceMinutes = Math.floor(timeDifference / (1000 * 60)) % 60

  return {
    days: differenceDays,
    hours: differenceHours,
    minutes: differenceMinutes
  }
}
