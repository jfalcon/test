import { Router } from 'express';
import * as priceControllers from '@/controllers/price';

const priceRouter = Router();

// showing an index example with barrel imports
priceRouter.get('/', priceControllers.index);

export default priceRouter;
