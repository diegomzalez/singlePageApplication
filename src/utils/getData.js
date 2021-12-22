const API = process.env.API;

const getData = async (id) => {
  const apiUrl = id ? `${API}${id}` : API;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch {
    console.log(`Fetch Error ${error.message}`);
  }
}

export default getData;