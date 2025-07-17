import { Router } from 'express';
import * as controllers from '@/controllers';

const router = Router();

// showing an index example with barrel imports
router.get('/', controllers.home.index);

export default router;
