# Wordle Clone - Backend API Starter Kit

## Overview

This project is the backend for a **Wordle clone** game. It serves a simple API that provides the necessary data for users to play the game. The backend is designed to work with a **React.js** frontend, which allows users to interact with the game.

The backend handles the basic functionality for generating and serving words, which can then be used in a Wordle game. It currently provides endpoints to retrieve random words and a full list of valid words.

The backend is lightweight, efficient, and can be easily extended to support features like guess validation, tracking guesses, and multiplayer capabilities.

---

## Challenge Overview

This project is a **coding challenge** designed to create the backend for a Wordle clone game. Wordle is a popular word guessing game where players have six attempts to guess a five-letter word. The backend needs to support:
- Serving random words for each game.
- Returning feedback based on the player's guesses.
- Allowing multiple users to play independently without affecting each other's game state.

Currently, the basic backend API is functional and ready to be used for Wordle, but the features mentioned (guess validation, tracking guesses, multiplayer) **are not yet implemented**. These features can be added as extensions to the current system.

### Current Features (Implemented)
- **Random Word Generation**: The backend generates a random 5-letter word each time a new game starts.
- **Fetch All Words**: The backend provides an endpoint to fetch all the available words for the game.

### Potential Future Features (Not Implemented Yet)
- **Guess Validation**: Checking whether a player's guess is correct and giving feedback about correct and incorrect letters.
- **Tracking of Guesses**: Allowing multiple attempts per user and providing feedback after each guess.
- **Multiplayer Capability**: Enabling multiple users to play simultaneously, with separate game states for each user.

These features are **not yet implemented** in the current backend. They can be added as the next steps in the development process.

---

## Project Structure

The project consists of two main parts:
1. **Backend** (API)
2. **Frontend** (React.js starter template)

### Folder Structure

```plaintext
wordle-backend/
│
├── backend/
│   ├── controller/           // Contains the logic for handling requests
│   │   └── word.js           // Handles word generation and API responses
│   ├── data/                 // Contains the list of valid words
│   │   └── words.js          // List of valid words for the game
│   ├── routes/               // Contains the routing logic for the API
│   │   └── word.js           // API routes for the game
│   └── app.js                // Main entry point for the backend server
│
├── frontend/                 // Starter code for the React.js frontend (Wordle game)
│   └── ...
│
├── README.md                 // This documentation
└── package.json               // Backend dependencies
```

## Project Structure

### Breakdown of the `backend/` Folder

1. **`controller/word.js`**: 
   - This file contains the logic for handling the requests to generate a random word and retrieve all available words. The main logic is encapsulated here, including the `getRandomWord` function and `getAllWords` function.
   
2. **`data/words.js`**: 
   - This file holds an array of valid words that are used by the API to generate random words. Each word must be 5 letters long, as required by the Wordle game.

3. **`routes/word.js`**: 
   - This file defines the API routes for handling the word-related requests (random word and all words) and delegates them to the appropriate controller functions.

4. **`app.js`**: 
   - The entry point of the backend application. It initializes the Express server, sets up the routes, and listens for incoming requests.

---

## Getting Started

### Prerequisites

Before you can get the application up and running locally, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)

### Backend Setup

Follow the steps below to set up the backend locally:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd wordle-backend
   ```
2. **Install dependencies: Navigate to the backend folder and install the required dependencies using npm:**

  ```bash
  cd backend
  npm install
  ```
3. **Start the backend server: To start the backend server, run the following command:**

  ```bash
  npm start  
  ```
  The backend will now be running locally on http://localhost:3000 (or http://localhost:8000 depending on port availability).

### Frontend Setup (Optional)
The repository also includes a starter template for the frontend. If you'd like to try out the full game with the React frontend:

1. **Navigate to the frontend directory:**

  ```bash
  cd frontend
  ```
2. **Install frontend dependencies:**
  
  ```bash
  npm install
  ```
3. **Run the frontend application:**

  ```bash
  npm start
  ```
  The React app will now be running locally on http://localhost:3001 (or another available port).
---

## Backend API Endpoints
The backend exposes the following API routes:

1. **GET /word**
Description: This route returns a random 5-letter word from the list of valid words (used to generate the Wordle word for the game).
Example API Call:
  ```bash
  curl http://localhost:3000/word
  ```
Response:
```json
{
  "status": "SUCCESS",
  "payload": "apple", // Example of the randomly selected 5-letter word
  "message": "Wordle word generated successfully!"
}
```

2. GET /word/allWords
Description: This route returns a list of all available words from the words dataset.
Example API Call:
```bash
curl http://localhost:3000/word/allWords
```
Response:
```json
{
  "status": "SUCCESS",
  "payload": ["apple", "crane", "table", "stone", "light", ...], // List of all words
  "message": "All words fetched successfully!"
}
```
---

## How to Extend the Backend
You can extend this backend to include additional features for a fully functional multiplayer Wordle game. Below are some potential features you may want to implement:

1. **Guess Validation**
You can add a route to validate if the user's guess is correct. This could involve comparing the guess with the randomly selected word and providing feedback for each letter (correct, incorrect, or in the wrong position).
```js
app.post("/validateGuess", (req, res) => {
  const guess = req.body.guess;
  const word = req.body.word; // The randomly generated word

  // Implement validation logic here
  const feedback = provideFeedback(guess, word); // A function to give feedback based on the guess

  res.status(200).json({
    status: "SUCCESS",
    feedback: feedback,
    message: "Guess validated successfully."
  });
});
```

2. **Tracking Guesses**
You can store the guesses made by the player and give feedback after each guess, such as:
- Green: Correct letter in the correct position.
- Yellow: Correct letter in the wrong position.
- Gray: Letter not in the word.

3. **Multiplayer Capability**
To support multiple users playing simultaneously:
- Create a session for each player to track their guesses.
- Store each player's game state (word, guesses, attempts) in a temporary database or in-memory object.

Technologies Used
- Node.js: A JavaScript runtime for building the backend API.
- Express.js: A minimal and flexible Node.js web application framework used to handle routing and API requests.
- React.js with Vite.js (Frontend): A JavaScript library for building user interfaces (included as a starter template).

---
## Screenshots
Here are some screenshots of the project in action:
![image](https://github.com/user-attachments/assets/cbeb02d8-0ae8-4054-8e21-a378d52d2ddf)
![image](https://github.com/user-attachments/assets/1bbfa36c-8792-4134-872f-b74e54738fb6)
![image](https://github.com/user-attachments/assets/399549bb-dd4b-4463-a86e-6f71a5fdd82b)

---
## Contributing
This project is open source and contributions are welcome! If you'd like to improve this project, feel free to:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes.
Submit a pull request.
