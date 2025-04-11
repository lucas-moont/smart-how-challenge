import dayjs from "./dayjsConfig";

export const getAge = (birthDate: string): number => {
  return dayjs().diff(birthDate, "year");
};

export const getTimeSinceLastBirthday = (
  birthDate: string
): { value: number; unit: "day" | "month" } => {
  const birth = dayjs(birthDate);
  const now = dayjs();

  const nextBirthday = birth.set("year", now.year());
  const lastBirthday = nextBirthday.isAfter(now)
    ? nextBirthday.subtract(1, "year")
    : nextBirthday;

  const daysDiff = now.diff(lastBirthday, "day");
  const monthsDiff = now.diff(lastBirthday, "month");

  return monthsDiff >= 1
    ? { value: monthsDiff, unit: "month" }
    : { value: daysDiff, unit: "day" };
};

export const formatBirthDate = (birthDate: string): string => {
  return dayjs(birthDate).format("DD/MM/YY");
};
