import Cookies from 'js-cookie'

export function getCookieAuth() {
  const cookieAuth = Cookies.get('cookieAccepted')
  if (cookieAuth) {
    const expDate = new Date(parseInt(cookieAuth))
    const dateNow = new Date()
    if (expDate > dateNow) {
      return false
    }
  }
  return true
}

export function addCookieAuth() {
  const date = new Date()
  const cookieExpiresInSeconds = 60 * 60 * 24 * 30
  Cookies.set('cookieAccepted', date.getTime() + cookieExpiresInSeconds, {
    path: '/',
    expires: cookieExpiresInSeconds,
  })
  return false
}

export function getCookieLanguage() {
  const cookieLanguage = Cookies.get('language')
  if (cookieLanguage) {
    return cookieLanguage
  } else {
    addCookieLanguage('en')
    return 'en'
  }
}

export function addCookieLanguage(language) {
  const cookieExpiresInSeconds = 60 * 60 * 24 * 7 * 1000
  Cookies.set('language', language, {
    path: '/',
    expires: cookieExpiresInSeconds,
  })
}
