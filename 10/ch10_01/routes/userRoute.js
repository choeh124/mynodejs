const express = require('express');
const userController = require('../controllers/userController') //import하는방법
const {check} = require('express-validator');

const router = express.Router();

router.get('/', userController.findAll); //app.get("/users", (req, res) =>{})
//호출안할땐 findAll뒤에 ()없앰, 등록의 의미
//router.post('/', userController.createUser); //app.post("/users", (req, res) => {})
router.post('/', [
    check('name').notEmpty().withMessage("Name is required"),
    check('email').notEmpty().withMessage("Email is required").isEmail().withMessage("invalid email format")
], userController.createUser); //app.post("/users", (req, res) => {})

module.exports = router;
