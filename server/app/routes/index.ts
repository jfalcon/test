import { Application } from 'express';
import priceRoutes from './price';

export function registerRoutes(app: Application): void {
  app.use('/', priceRoutes);
}
