type ApiUser = {
  login: {
    uuid: string
    username: string
  }
  name: {
    first: string
    last: string
  }
  email: string
  phone: string
  location: {
    city: string
    state: string
    country: string
  }
  dob: {
    date: string
  }
  picture: {
    large: string
  }
}
