const express = require('express');
const router = express.Router();
const userModel = '../db/user.js';

const SECRET_KEY = process.env.JWT_SECRET

function getEmailFromToken(req) {
  const token = req.headers.authorization;

  if (token) {
    try {
      const decoded = jwt.verify(token, SECRET_KEY); 
      const email = decoded.email; 
      return email;
    } catch (error) {
      console.error("Invalid token:", error);
      return null;
    }
  }

  return null;
}

// Root route

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  const existingUser = await userModel.findOne({ email: email });
    if (!existingUser) {
      return res.json('Email not found');
    }

    // Verify password
    const isPasswordValid = await existingUser.comparePassword(password);
    if (!isPasswordValid) {
      return res.json('Invalid password');
    }
    
    const token = jwt.sign({ email: existingUser.email }, SECRET_KEY, { expiresIn: '10d' });
    return res.json({ message:'successful', token});
})

router.post('/signup', async (req, res) => {
  
  const { email, username, password } = req.body;
  const existingUser = await userModel.findOne({ email: email });
  
  if (existingUser) {
      return res.json('Email already exists');
    }
  else{
    const newUser = new userModel({ email, username, password });
    await newUser.save();
    res.json('success')
  }

});


module.exports = router;
