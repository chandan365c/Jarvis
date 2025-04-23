#  LLM Chatbot

A responsive, web-based chatbot app built using React.js, JavaScript, and HTML/CSS, integrated with Google Gemini (LLM 1.0 Pro) for intelligent, real-time conversations. The app features user login functionality using a locally hosted MongoDB database for managing user credentials

*⚠️ This project currently uses a locally hosted MongoDB server, so the server must be running for login functionality to work.*

## Features

- Interactive chatbot UI using LLM APIs.
- User registration and login system.
- Passwords are securely stored in MongoDB.
- Clean and responsive frontend using React and CSS.
- Modular codebase for easy scalability.

## Tech Stack

- **Frontend:** React.js, JavaScript, HTML, CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB (Local instance)
- **API Integration:** Google Gemini 1.0 Pro


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

Create a `.env` file in the root of your project and add:
```
REACT_APP_GEMINI_API_KEY = your-google-gemini-api-key 
MONGODB_URI = mongodb://localhost:27017/your-db-name
```

- MongoDB Connection String: Ensure MongoDB is installed and setup locally. Navigate to `./server/index.js` and replace *`"YOUR_MONGODB_URI"`* with *`process.env.MONGODB_URI`*.

- API Key: The project includes an API key for Google Gemini that must be set as an environment variable. This key is required for generating response but will not be shared publicly. Navigate to `./src/config/gemini.js` and replace *`"YOUR_API_KEY"`* with *`process.env.REACT_APP_GEMINI_API_KEY`*.


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
