// Import express to define the routes and functions for the application
const express = require("express");
// Import controller functions for handling routes related to words
const { getRandomWord, getAllWords } = require("../controller/word");

// Initialize a new router instance using express
const router = express();

// Route to get a random word (typically for the game)
router.get("/", getRandomWord);

/**
 * API Call: GET /
 * This route will return a random 5-letter word from the list of words for the Wordle game.
 * Example API call: curl http://localhost:3000/
 * Example response:
 * {
 *   "status": "SUCCESS",
 *   "payload": "apple", // Random word (5-letter word)
 *   "message": "Wordle word generated successfully!"
 * }
 */

// Route to get all words (used for testing or fetching all words)
router.get("/allWords", getAllWords);

/**
 * API Call: GET /allWords
 * This route will return the entire list of words available in the game.
 * Example API call: curl http://localhost:3000/allWords
 * Example response:
 * {
 *   "status": "SUCCESS",
 *   "payload": ["apple", "crane", "table", ...], // List of all words in the words array
 *   "message": "All words fetched successfully!"
 * }
 */

// Export the router to be used in the main application (app.js or similar)
module.exports = router;
