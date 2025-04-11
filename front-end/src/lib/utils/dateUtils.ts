import dayjs from './dayjsConfig'

export const getAge = (birthDate: string): number => {
  return dayjs().diff(birthDate, 'year')
}

export const getTimeSinceLastBirthday = (birthDate: string): string => {
  const birth = dayjs(birthDate)
  const now = dayjs()

  const nextBirthday = birth.set('year', now.year())
  const lastBirthday = nextBirthday.isAfter(now)
    ? nextBirthday.subtract(1, 'year')
    : nextBirthday

  return dayjs().to(lastBirthday)
}

export const formatBirthDate = (birthDate: string): string => {
  return dayjs(birthDate).format('DD/MM/YY')
}