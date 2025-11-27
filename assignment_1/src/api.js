// API function to integrate with Open-Meteo Geocoding and Weather APIs
// Reference: https://open-meteo.com/

// export async function searchCity(city) {
  // testing with arlin
  // 4.6 https:/ / online.saskpolytech.ca / d2l / le / content / 439129 / viewContent / 17138750 / View
  // console.log("arlin - SEARCH CITY 1 ------------------------------------------------");
  // console.log("arlin - SEARCH CITY 2 ------------------------------------------------");
  // const response = await fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=7tlmGglNfRI6ZzZmwvMa0PV1KOYaMOTI');
  // console.log("arlin - SEARCH CITY 3 ------------------------------------------------");
  // const temp = await response.json();
  // console.log("arlin - SEARCH CITY 4 ------------------------------------------------");
  // console.log(temp);
// code from class
  // const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${api_key}`);
  
  // const temp = await response.json();
  // console.log("");

  // jesse code below
//   const res = await fetch(
//     `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`
//   );

//   const data = await res.json();

//   console.log(data);

//   return data.results || [];
// }

// export async function fetchWeather(lat, lon) {
//   // Hardcode coordinates or use a simple free API.
//   const res = await fetch(
//     `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
//   );

//   const data = await res.json();

//   console.log(data);

//   return data.current_weather ?? "N/A";
// }

// getting the data from the API
  const api_key = '7tlmGglNfRI6ZzZmwvMa0PV1KOYaMOTI';
  const EVENTS_API_URL = 'https://app.ticketmaster.com/discovery/v2/events.json';
const VENUES_API_URL = 'https://app.ticketmaster.com/discovery/v2/venues.json';

//   /**
//  * Fetches events from the Ticketmaster API based on city name. (Endpoint 1)
//  * @param {string} city - The city tos search for events in.
//  * @returns {Promise<Array>} A promise that resolves with an array of event objects, or null if none are found.
//  * @throws {Error} Throws an error if the API request fails.
//  */

export const fetchEvents = async (city) => {
    // Construct the API URL for events search
    const url = new URL(EVENTS_API_URL);
    url.searchParams.append('apikey', API_KEY);
    url.searchParams.append('city', city);
    url.searchParams.append('sort', 'date,asc'); 
    url.searchParams.append('countryCode', 'US'); // Scope to US for easier testing
    

