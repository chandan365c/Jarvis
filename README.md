# Jarvis

Jarvis is a full-stack AI assistant prototype that combines a React frontend, a Node.js/Express backend, and Google Gemini for conversational responses. The project is designed as a lightweight personal assistant with login/signup, profile management, and a chat interface that can answer questions using Gemini.

This app is a front-end-first project with a simple local backend and MongoDB persistence for user accounts. It is best suited for learning how to integrate a React app, Express API, MongoDB, and an LLM into a single workflow.

## Project Overview

Jarvis includes:

- User authentication with signup and login flows
- A chat dashboard with a sidebar and main response area
- AI-generated answers from Google Gemini
- User profile viewing and editing
- Local MongoDB-backed user storage for credentials and profile data

## Tech Stack

- Frontend: React 18, JavaScript, React Router, CSS
- State management: React Context API
- Backend: Node.js, Express
- Database: MongoDB with Mongoose
- AI integration: Google Generative AI SDK
- HTTP client: Axios
- App bootstrapping: Create React App

## Architecture

The application is organized into two main layers:

1. Frontend application
   - The root React app is bootstrapped in [src/index.js](src/index.js)
   - Routing is handled in [src/App.jsx](src/App.jsx)
   - The app exposes routes for:
     - `/` — login screen
     - `/signup` — registration screen
     - `/page2` — main chat UI
     - `/user-profile` — account/profile page
   - Global user state lives in [src/UserContext.jsx](src/UserContext.jsx)
   - Chat state and AI request flow are managed by the context provider in [src/context/Context.jsx](src/context/Context.jsx)
   - The Gemini integration lives in [src/config/gemini.js](src/config/gemini.js)

2. Backend API
   - The Express server listens on port 3001 and exposes endpoints for login, registration, profile lookup, and updates in [server/index.js](server/index.js)
   - The data model for user records is defined in [server/models/Signup.js](server/models/Signup.js)
   - User credentials and profile info are stored in MongoDB through Mongoose models

### Runtime flow

- A user signs up or logs in from the React app
- The frontend sends requests to the Express API at http://localhost:3001
- The backend validates user credentials and queries MongoDB
- Once a user is authenticated, the main dashboard sends prompts to Gemini using the configured model
- The AI response is transformed into a chat-style display and rendered in the UI

## Repository Structure

```text
Jarvis/
├─ public/
│  ├─ index.html
│  ├─ manifest.json
│  └─ robots.txt
├─ server/
│  ├─ models/
│  │  └─ Signup.js
│  ├─ index.js
│  └─ package.json
├─ src/
│  ├─ assets/
│  ├─ components/
│  │  ├─ Main/
│  │  ├─ Sidebar/
│  │  └─ Particle.jsx
│  ├─ config/
│  │  └─ gemini.js
│  ├─ context/
│  │  └─ Context.jsx
│  ├─ App.jsx
│  ├─ index.css
│  ├─ index.js
│  ├─ Login.jsx
│  ├─ Page2.jsx
│  ├─ Signup.jsx
│  ├─ UserContext.jsx
│  ├─ UserProfile.css
│  └─ UserProfile.jsx
├─ package.json
├─ README.md
└─ .gitignore
```

## Features

- AI-powered chat experience using Google Gemini
- Modern authentication flow with email/password registration and login
- User profile retrieval and update functionality
- Sidebar-based navigation for chat history and account access
- Responsive UI with animated background effects and custom styling

## Prerequisites

Before running the project, make sure you have:

- Node.js 18+ installed
- npm installed
- A local MongoDB instance running
- A Google Gemini API key
- Internet access for Gemini calls

## Environment Variables

Create a `.env` file in the project root with the following values:

```env
REACT_APP_GEMINI_API_KEY=your_google_gemini_api_key
MONGODB_URI=mongodb://localhost:27017/jarvis
```

Notes:

- The frontend reads the Gemini key from the React environment variable `REACT_APP_GEMINI_API_KEY`
- The backend is intended to connect to MongoDB using `MONGODB_URI`
- For a local development setup, MongoDB should be running on your machine before starting the server

## Getting Started

### 1. Install dependencies

From the project root:

```bash
npm install
```

Then install the backend dependencies:

```bash
cd server
npm install
```

### 2. Start MongoDB

Make sure your local MongoDB service is running before launching the app.

### 3. Start the backend server

In one terminal:

```bash
cd server
npm start
```

This starts the Express API on port 3001.

### 4. Start the frontend

In a second terminal from the project root:

```bash
npm start
```

This starts the React development server on port 3000.

Open http://localhost:3000 in your browser to use the app.

## Current Implementation Notes

This project is a prototype and not yet production-ready. Some important caveats:

- Passwords are stored as plain strings rather than hashed values
- The authentication model is simple and local-only
- The app relies on a local MongoDB instance instead of a cloud database
- The API key is expected to be passed through environment variables
- The backend and frontend are separate processes and must both be running

## Suggested Improvements

- Add password hashing with bcrypt
- Move authentication to JWT-based sessions
- Add validation and error handling improvements
- Store chat history per user
- Add cloud deployment support for MongoDB and frontend hosting
- Replace the local-only flow with a more robust production-ready architecture

## License

This project is distributed under the repository license included in the project root.

## Summary

Jarvis is a practical demonstration of a small full-stack AI application: React for the user experience, Express for backend services, MongoDB for persistence, and Gemini for AI-powered responses. It is a good starting point for building a more advanced personal AI assistant or chatbot product.
