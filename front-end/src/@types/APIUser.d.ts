type ApiUser = {
  login: { uuid: string }
  name: { first: string; last: string }
  email: string
  location: { country: string }
  dob: { date: string }
  picture: { large: string }
}