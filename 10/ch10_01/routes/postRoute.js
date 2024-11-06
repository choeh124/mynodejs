const express = require('express');
const postController = require('../controllers/postController') //import하는방법
const {check} = require('express-validator');
const {authenticate} = require('../middleware/auth_middleware');
const router = express.Router();

//router.post('/', postController.createPost);
//http://localhost:3000/posts
router.post('/', authenticate, postController.createPost);
router.get('/:id', postController.findPostById);
router.get('/', postController.findAll);
router.put('/:id', postController.updatePost); 
router.delete('/:id', postController.deletePost); 


/*router.post('/', [
    check('name').notEmpty().withMessage("Name is required"),
    check('email').notEmpty().withMessage("Email is required").isEmail().withMessage("invalid email format")
], userController.createUser); //app.post("/users", (req, res) => {})*/

module.exports = router;