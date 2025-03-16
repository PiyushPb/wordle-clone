// Import required modules
const express = require("express"); // Import the express module to create the web server
const words = require("./data/words"); // Import the words array from the local data file (assumed to contain a list of words)
const wordRoute = require("./routes/word"); // Import a separate route module for handling word-related requests

// Define the port the application will listen to
const PORT = 3000;

// Create an instance of the express application
const app = express();

// Root route: This will respond with a random word from the words array (index 100 in this case)
app.get("/", (req, res) => {
  // Respond with a random word from the 'words' data
  res.send(words[100]);
});

// Use the wordRoute module for handling routes related to words (e.g., adding or getting words)
app.use("/word", wordRoute);

// Start the server, listening on the specified port or fallback to 8000
app.listen(PORT || 8000, () => {
  // Log a message to indicate the server has started successfully
  console.log(
    `Wordle backend has started on port: http://localhost:${PORT || 8000}`
  );
});
