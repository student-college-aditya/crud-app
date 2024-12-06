const express = require('express');
const router = express.Router();

// Import controllers
const { homecontroller, CreateController } = require('../controllers/homecontroller');
const readcontroller = require('../controllers/readcontroller');
const { editcontroller, updatecontroller, deletecontroller } = require('../controllers/editcontroller');  

// Define routes
router.get('/', homecontroller);
router.post('/', CreateController);
router.get('/read', readcontroller);
router.get('/edit/:_id', editcontroller);
router.post('/update/:_id', updatecontroller);  
router.get('/delete/:_id', deletecontroller);  


module.exports = router;
