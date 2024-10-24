export const formatDateToGerman = (dateString) => {
  const date = new Date(dateString)
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'Europe/Berlin',
    timeZoneName: 'short'
  }
  return new Intl.DateTimeFormat('de-DE', options).format(date)
}

export const formatDateOnly = (dateString) => {
  const date = new Date(dateString)
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'Europe/Berlin'
  }
  return new Intl.DateTimeFormat('de-DE', options).format(date)
}

export const formatDateWithTime = (dateString) => {
  const date = new Date(dateString)
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'Europe/Berlin'
  }
  return new Intl.DateTimeFormat('de-DE', options).format(date)
}
