import { Router } from 'express';
import productsController from '../controllers/products.controller';
import usersController from '../controllers/users.controller';
import ordersController from '../controllers/orders.controller';

const routers = Router();

routers.post('/products', productsController.createProduct);

routers.get('/products', productsController.getAll);

routers.post('/users', usersController.createUser);

routers.post('/login', usersController.login);

routers.get('/orders', ordersController.getAll);

export default routers;