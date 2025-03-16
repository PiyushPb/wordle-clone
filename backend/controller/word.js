// Import the words array, which contains the list of possible words for the game
const words = require("../data/words");

// Function to generate a random word of exactly 5 letters
const generateRandomWord = () => {
  let word;
  do {
    // Generate a random index to pick a word from the words array
    const randomInt = Math.floor(Math.random() * words.length);
    word = words[randomInt];
  } while (word.length !== 5); // Ensure the word is exactly 5 letters long (Wordle word length)

  console.log(word); // Log the generated word (for debugging purposes)
  return word; // Return the random 5-letter word
};

// Controller function to handle the GET request for a random word
const getRandomWord = async (req, res) => {
  // Generate a random word
  const word = generateRandomWord();

  // Send a JSON response with the word and a success status
  res.status(200).json({
    status: "SUCCESS", // Status of the request
    payload: word, // The randomly selected word
    message: "Wordle word generated successfully!", // Success message
  });
};

// Controller function to handle the GET request to fetch all words
const getAllWords = async (req, res) => {
  const payload = words; // Fetch all words from the `words` array

  // Send a JSON response with all words and a success status
  res.status(200).json({
    status: "SUCCESS", // Status of the request
    payload: payload, // The entire list of words
    message: "All words fetched successfully!", // Success message
  });
};

// Export the controller functions to be used in the router
module.exports = { getRandomWord, getAllWords };
