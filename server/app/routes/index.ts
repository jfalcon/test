import { Application } from 'express';
import homeRoutes from './home';

export function registerRoutes(app: Application): void {
  app.use('/', homeRoutes);
}
