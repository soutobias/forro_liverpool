import Cookies from 'js-cookie'

export function getCookieAuth() {
  const cookieAuth = Cookies.get('cookieAccepted')
  console.log(cookieAuth, 'cookieAuth')
  if (cookieAuth) {
    const expDate = new Date(parseInt(cookieAuth))
    console.log(expDate)
    console.log(new Date())
    const dateNow = new Date()
    if (expDate > dateNow) {
      return false
    }
  }
  return true
}

export function addCookieAuth() {
  const date = new Date()
  const cookieExpiresInSeconds = 60 * 60 * 24 * 7
  Cookies.set(
    'cookieAccepted',
    date.getTime() + cookieExpiresInSeconds * 1000,
    {
      path: '/',
      expires: cookieExpiresInSeconds / (60 * 60 * 24),
    },
  )
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
  const cookieExpiresInSeconds = 60 * 60 * 24 * 30
  Cookies.set('language', language, {
    path: '/',
    expires: cookieExpiresInSeconds / (60 * 60 * 24),
  })
}
