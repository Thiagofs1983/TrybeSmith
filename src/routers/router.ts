import { Router } from 'express';
import productsController from '../controllers/products.controller';
import usersController from '../controllers/users.controller';

const routers = Router();

routers.post('/products', productsController.createProduct);

routers.get('/products', productsController.getAll);

routers.post('/users', usersController.createUser);

export default routers;