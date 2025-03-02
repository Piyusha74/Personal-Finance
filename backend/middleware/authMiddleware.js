const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async(req, res, next) => {
    let token;

    // Step 1: Get the token from the Authorization header
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1]; // Extract the token
        console.log('Token received:', token); // Debugging: Log the token
    }

    if (!token) {
        console.log('No token provided'); // Debugging: Log if no token is provided
        return res.status(401).json({ message: 'Not authorized, no token' });
    }

    try {
        // Step 2: Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('Decoded token:', decoded); // Debugging: Log the decoded token

        // Step 3: Find the user in the database
        req.user = await User.findById(decoded.id).select('-password');
        console.log('User found:', req.user); // Debugging: Log the user object

        if (!req.user) {
            console.log('User not found'); // Debugging: Log if user is not found
            return res.status(401).json({ message: 'Not authorized, user not found' });
        }

        next(); // Proceed to the next middleware/route
    } catch (error) {
        console.error('Token verification failed:', error); // Debugging: Log the error
        res.status(401).json({ message: 'Not authorized, token failed' });
    }
};

module.exports = { protect };