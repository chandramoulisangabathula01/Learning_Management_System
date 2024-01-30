const express = require('express');
const router = express.Router();
const passport = require('passport');
const Users = require('../models/users');

// Registration route
router.post('/register', async (req, res) => {
    try {
      const { firstName, lastName, email, password, role } = req.body;
  
      // Check if the email is already registered
      const existingUser = await Users.findOne({ where: { email} });
      if (existingUser) {
        return res.redirect('/register'); // Redirect back to registration page with an error message
      }
  
      // Create a new user with the selected role
      const newUser = await Users.create({ firstName, lastName, email, password, role });
  
      // Log in the user after registration
      req.login(newUser, (err) => {
        if (err) {
          console.error(err);
          return res.redirect('/register'); // Redirect back to registration page with an error message
        }
  
        // Redirect based on user role
        if (role === 'teacher') {
          return res.redirect('/teacher/dashboard'); // Redirect to teacher dashboard
        } else if (role === 'student') {
          return res.redirect('/student/dashboard'); // Redirect to student dashboard
        } else {
          return res.redirect('/dashboard'); // Default redirection if role is not specified
        }
      });
    } catch (error) {
      // Handle registration error
      console.error(error);
      res.redirect('/register'); // Redirect back to registration page with an error message
    }
  });

// Login route


router.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',  // Default redirect on successful login
    failureRedirect: '/login',      // Redirect to login on failed login
    failureFlash: true               // Enable flash messages for login failures
  }));

// Logout route
router.get('/logout', (req, res) => {
  req.logout();  // Passport method to remove the user from the session
  res.redirect('/');
});

module.exports = router;