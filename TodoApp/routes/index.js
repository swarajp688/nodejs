const express= require('express');

const router = express.Router();

const homecontroller = require('../controllers/homeController');

router.get('/',homecontroller.home);
router.post('/add-task',homecontroller.addTask);
router.get('/delete-task/:id',homecontroller.deleteTask);
router.get('/update-task/:id',homecontroller.deleteTask);



module.exports = router;