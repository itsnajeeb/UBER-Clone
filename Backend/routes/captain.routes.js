const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const captainController = require('../controllers/captain.controller')

router.post('/register', [
    
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('Firstname must be at least 3 character '),
    body('password').isLength({ min: 6 }).withMessage('Password Length must be at least 6 character '),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be at least 3 character '),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be at least 3 character'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Capacity must be at least 3 character'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid Vehicle Type')
],
    captainController.registerCaptain
)
module.exports = router;