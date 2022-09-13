import { Router } from 'express';
import productsController from '../controllers/products.controller';

const routers = Router();

routers.post('/products', productsController.createProduct);

routers.get('/products', productsController.getAll);

export default routers;