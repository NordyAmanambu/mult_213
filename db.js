import fs from "fs";

const DB_FOLDER = "./data/";

/**
 * Reads and parses JSON from a file.
 * @param {string} filename - Path to the JSON file.
 * @returns {any} Parsed JSON object.
 */
const readData = (filename) => {
  try {
    const filepath = DB_FOLDER + filename;
    const data = fs.readFileSync(filepath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading file:", err);
    return null;
  }
}

/**
 * Stringifies and writes JSON to a file.
 * @param {string} filename - Path to the JSON file.
 * @param {any} payload - Data to be written.
 */
const writeData = (filename, payload) => {
  try {
    const jsonStr = JSON.stringify(payload, null, 2); // pretty print
    
    const filepath = DB_FOLDER + filename;
    
    fs.writeFileSync(filepath, jsonStr, "utf8");
    console.log("Data written to", filename);
  } catch (err) {
    console.error("Error writing file:", err);
  }
}

export { readData, writeData };