const jwt = require('jsonwebtoken');
const key = "Rohit222";  // You should ideally move this to an environment variable

// Generate JWT token for the user
function setuser(user) {
    const payload={ ...user}
    return jwt.sign(payload, key)
}

// Get user from the JWT token
function getuser(token) {
    if (!token) return null;

    try {
        return jwt.verify(token, key);
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            console.log('JWT expired, prompt user to log in again.');
            return null;  // You can return null or handle as needed
        }
        console.error('JWT Error:', error.message);
        return null;
    }
}


module.exports = { setuser, getuser };
