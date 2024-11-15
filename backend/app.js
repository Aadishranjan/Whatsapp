const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const path = require('path');
const http = require('http');
const { Server } = require('socket.io');

// Initialize Express app
const app = express();

// Create an HTTP server to use with WebSocket
const server = http.createServer(app);

// Initialize Socket.io with CORS support
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

// Set up express-session middleware
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'KsB6~1YZ5Y@@UHoMQox-aUBCU~l&ppr^0pVU;9'
}));

// Middleware to parse incoming request bodies
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// WebSocket connection handling
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('sendMessage', (messageData) => {
    io.emit('receiveMessage', messageData);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id);
  });
});

// Route Imports
const userRoutes = require('./src/db/user'); // User routes
const indexRouter = require('./src/routes/index');

// Set up routes
app.use('/', indexRouter);
app.use('/api/users', userRoutes); // User-related routes

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
