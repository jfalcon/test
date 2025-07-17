import { Router } from 'express';
import * as priceControllers from '@/controllers/price';

const priceRouter = Router();

priceRouter.get('/', priceControllers.index);

export default priceRouter;
