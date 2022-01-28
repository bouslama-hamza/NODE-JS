const express = require('express');
const userController = require('../controllers/userController');

// create our express router
const router = express.Router();

// managing our routes
router.get('/' , userController.user_index);

router.get('/about' , userController.user_about);

router.get('/contact' , userController.user_contact_get);

// this is a route to the POST method
router.post('/contact' , userController.user_contact_post);

module.exports = router;