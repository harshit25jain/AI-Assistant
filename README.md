# AI Assistant

A full-stack AI chatbot application with user authentication and conversation management capabilities.

## Features

- User authentication (register, login, logout)
- Secure JWT-based authentication with token management
- Real-time chat interface with AI responses
- Conversation history storage and retrieval
- Responsive design for desktop and mobile devices

## Tech Stack

### Frontend
- React.js for UI components
- Context API for state management
- Axios for API requests
- Modern CSS with responsive design

### Backend
- Node.js and Express.js for the server
- MongoDB for database storage
- Redis for token blacklisting and session management
- JWT for secure authentication
- Middleware for request validation and authorization

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Redis

### Setup Instructions

1. Clone the repository
```bash
git clone https://github.com/harshit25jain/AI-Assistant.git
cd AI-Assistant
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Install frontend dependencies
```bash
cd ../frontend
npm install
```

4. Set up environment variables

Create a `.env` file in the backend directory with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
REDIS_URL=your_redis_url
PORT=3000
```

Create a `.env` file in the frontend directory:
```
VITE_API_URL=http://localhost:3000
```

5. Start the application

Backend:
```bash
cd backend
npm run dev
```

Frontend:
```bash
cd frontend
npm run dev
```

## API Endpoints

### Authentication
- `POST /users/register` - Register a new user
- `POST /users/login` - User login
- `GET /users/logout` - User logout

### Chat
- `POST /chat/message` - Send a message to the AI
- `GET /chat/history` - Get user's chat history

## Project Structure

```
AI-Assistant/
├── backend/
│   ├── middlewares/      # Authentication and validation middlewares
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API endpoints
│   ├── services/         # Business logic
│   ├── app.js            # Express application
│   └── package.json
│
└── frontend/
    ├── public/           # Static files
    ├── src/
    │   ├── components/   # React components
    │   ├── context/      # React context for state management
    │   ├── services/     # API service functions
    │   └── App.jsx       # Main application component
    └── package.json
```

## Future Enhancements

- Add multi-model AI support
- Implement conversation summarization
- Add voice input capability
- Create mobile application using React Native

---

Created by [Harshit Jain](https://github.com/harshit25jain)
