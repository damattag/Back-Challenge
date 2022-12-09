import express from 'express';
import UserController from '@controllers/UserController'
import PostController from '@controllers/PostController';

const routesUser = express.Router();
const userController = new UserController();

routesUser.post('/user', userController.create);


const routesPost = express.Router();
const postController = new PostController();

routesPost.post('/post', postController.create);

export default routesPost; 