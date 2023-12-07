const url = "https://randomuser.me/api/";
const optionsRandom = {
  method: "GET",
};

const optionsTime = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "08a027701fmsh81e6d4c9fe56b68p10afc8jsn1f83d9b96d7e",
    "X-RapidAPI-Host": "world-time-by-api-ninjas.p.rapidapi.com",
  },
};

export async function consultRandomUser() {
  try {
    const response = await fetch(url, optionsRandom);
    const result = await response.json();
    return result.results[0];
  } catch (error) {
    console.error(error);
  }
}

export async function consultTimeCity(ciudad) {
  const params = new URLSearchParams({
    city: ciudad,
  });
  const url = `https://world-time-by-api-ninjas.p.rapidapi.com/v1/worldtime?${params}`;
  try {
    const response = await fetch(url, optionsTime);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}