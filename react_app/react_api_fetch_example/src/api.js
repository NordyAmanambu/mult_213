/*

Return data like:

[
    {
      "id": 6141256,
      "name": "Saskatoon",
      "latitude": 52.13238,
      "longitude": -106.66892,
      "elevation": 484,
      "feature_code": "PPL",
      "country_code": "CA",
      "admin1_id": 6141242,
      "admin2_id": 12823371,
      "timezone": "America/Regina",
      "population": 198958,
      "country_id": 6251999,
      "country": "Canada",
      "admin1": "Saskatchewan",
      "admin2": "Saskatoon"
    },
    {
      "id": 6141265,
      "name": "Saskatoon Mountain",
      "latitude": 49.66672,
      "longitude": -114.50201,
      "elevation": 1640,
      "feature_code": "MT",
      "country_code": "CA",
      "admin1_id": 5883102,
      "admin2_id": 6084215,
      "timezone": "America/Edmonton",
      "country_id": 6251999,
      "country": "Canada",
      "admin1": "Alberta",
      "admin2": "Municipal District of Ranchland No. 66"
    }
]
*/

export function searchCity(city, setterCallbackFunction) {
    // Start our call across the internet, using city as a parameter
    fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`
    ).then(resp => resp.json()) // Convert the response into JSON;
        .then(dataJSON => {
            // Log the dataJSON to look at it
            console.log(dataJSON);

            // Pass the dataJSON.results into the setter callback function
            // Calling .results is API specific / might be different for you
            setterCallbackFunction(dataJSON.results || []);
        });
}
