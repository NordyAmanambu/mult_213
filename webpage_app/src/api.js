// API functions to integrate with Open-Meteo Geocoding and Weather APIs
// Reference: https://open-meteo.com/

export async function searchCity(city) {
  // Start our call across the internet, using city as a parameter
  const res = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`
  );

  // Get the JSON from the HTTP request response
  const data = await res.json();

  // Log the data to look at it
  console.log(data);

  // Return whatever data is in the 'results' key
  return data.results || [];
}

export async function fetchWeather(lat, lon) {
  // Start our call across the internet, using lat and long as a parameters
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
  );

  // Get the JSON from the HTTP request response
  const data = await res.json();
  
  // Log the data to look at it
  console.log(data);
  
  // Return whatever data is in the 'results' key
  return data.current_weather ?? "N/A";
}

/*
  Show off Fake / Stub API Services
*/
export async function searchCityStub(city) {
  const fakeCityData = {
    results: [
      {
        "id": 1,
        "name": "Winnipeg",
        "latitude": 49.8844,
        "longitude": -97.14704
      },
      {
        "id": 2,
        "name": "Saskatoon",
        "latitude": 52.123,
        "longitude": -106.123
      },
    ]
  };

  console.log(fakeCityData);

  /*
    Synchronous Version, just return the data
  */
  // return fakeCityData.results || [];

  
  /*
    To make it asynchronous, we have to return a new Promise object
    
    The Promise object takes a function into its constructor:
    - The function defines 2 parameters, each one is a callback function
    - 1st parameter, "resolve", the happy / successful path
    - 2nd parameter, "reject", the unhappy / exception / error path
  */
  return new Promise(
    (resolve, reject) => {
      // Simple happy always say yes promise
      
      // We will wait 2 seconds to simulate a delay, then return the fake data
      setTimeout(() => {
        if (city == 'asdf') {
          // Mock an empty result case
          resolve([]);
        } else if (city == 'error') {
          // Mock an error / reject case
          reject("MOCK API FAILURE");
        } else {
          resolve(fakeCityData.results || []);
        }
      }, 2000);
    }
  );
}
