/**
 * Reads and parses JSON from localStorage.
 * @param {string} dataKey - Unique key / label for the JSON data.
 * @returns {any} Parsed JSON object.
 */
const readLocalData = (dataKey) => {
    try {
        // Get the string data out of localstorage
        const strData = localStorage.getItem(dataKey);
        
        // If no data, return null
        if (!strData) {
            return null;
        }

        // If there is data, parse it into a JSON object
        return JSON.parse(strData);

    } catch (err) {
        console.error("Error reading data from localStorage:", err);
        return null;
    }
}

/**
 * Encodes JSON into a string and saves it to localStorage
 * @param {string} dataKey - Unique key / label for the JSON data
 * @param {any} payload - The data to be saved to localStorage
 * @returns {boolean} - Indicating success or failure to persist data 
 */
const writeLocalData = (dataKey, payload) => {
    let success = false;
    try {
        const jsonStr = JSON.stringify(payload, null, 2); // pretty print

        localStorage.setItem(dataKey, jsonStr);

        console.log("Data written to localStorage under key:", dataKey);

        success = true;
    } catch (err) {
        console.error("Error writing file:", err);
    }

    return success;
}

export { readLocalData, writeLocalData };