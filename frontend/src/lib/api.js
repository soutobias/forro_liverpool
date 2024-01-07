export async function fetchApi(url, setState) {
  // const path = 'http://localhost:3000/'
  const path = '/'

  try {
    const response = await fetch(`${path}${url}`)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json()
    setState(data)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
