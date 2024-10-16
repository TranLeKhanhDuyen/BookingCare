import { format, formatDistanceToNow, getTime } from 'date-fns'

export const fDate = (date: Date) => {
  return format(new Date(date), 'dd MMM yyyy')
}

export const fDateTime = (date: Date) => {
  return format(new Date(date), 'dd MMM yyyy HH:mm')
}

export const fTimestamp = (date: Date) => {
  return getTime(new Date(date))
}

export const fDateTimeSuffix = (date: Date) => {
  return format(new Date(date), 'dd/MM/yyyy hh:mm p')
}

export const fToNow = (date: Date) => {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true
  })
}
