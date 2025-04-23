#  LLM Chatbot with User Authentication
This is a web-based chatbot application built with React.js, JavaScript and HTML/CSS. It integrates with powerful Large Language Model (LLM) APIs to provide intelligent, conversational interactions directly in the browser. 
It features a login system backed by MongoDB to store user credentials.

*⚠️ This project currently uses a locally hosted MongoDB server, so the server must be running for login functionality to work.*

## Features

- Interactive chatbot UI using LLM APIs.
- User registration and login system.
- Passwords are securely stored in MongoDB.
- Clean and responsive frontend using React and CSS.
- Modular codebase for easy scalability.

## Running the project

### Prerequisites:
- Node.js installed
- MongoDB installed and running locally
- npm or yarn
- Internet access for LLM API usage
- Google gemini API key

### Setup:
1. Clone the repository
```bash
git clone <repository_url>
cd <repository_name>
```
2. Install dependencies:
```bash
npm install
```
3. Start the backend server:
```bash
cd server
npm start
```
4. Start the react app:
```bash
#Run the following in your project directory
npm start
```

### Environment Variables

- MongoDB Connection String: Ensure MongoDB is installed and setup locally. Navigate to `./server/index.js` and replace *`"YOUR_MONGODB_URI"`* with your local mongodb compass connection URI.

- API Key: The project includes an API key for Google Gemini that must be set as an environment variable. This key is required for generating response but will not be shared publicly. Navigate to `./src/config/gemini.js` and replace *`"YOUR_API_KEY"`* with your actual API Key.


**NOTE:** *This project uses Google gemini 1.0 pro.*

## Future Improvements
- Deploy MongoDB to the cloud (MongoDB Atlas or similar) for production use.
- Implement JWT-based authentication.
- Add support for OAuth or social logins.
- Enhance chatbot UX with persistent history, file uploads, etc.



<br> <br> <br>

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
