export async function fetchApi(url, setState) {
  // set path based on the environment
  // const path = process.env.NEXT_PUBLIC_API_PATH;
  const path = process.env.NEXT_PUBLIC_API_PATH;
  // const path = "/";

  try {
    const response = await fetch(`${path}${url}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    setState(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
