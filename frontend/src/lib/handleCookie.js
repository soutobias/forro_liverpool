import Cookies from 'js-cookie'

export function getToken() {
  const token = Cookies.get('cookieAccepted')
  if (token) {
    const expDate = new Date(parseInt(token))
    const dateNow = new Date()
    if (expDate > dateNow) {
      return false
    }
  }
  return true
}

export function addToken() {
  const date = new Date()
  const cookieExpiresInSeconds = 60 * 60 * 1000
  Cookies.set('cookieAccepted', date.getTime() + cookieExpiresInSeconds, {
    path: '/',
    expires: cookieExpiresInSeconds,
  })
  return false
}
