import { Router } from 'express';

const router = new Router();

import openFEC from './openFEC';

router.use('/openFEC', openFEC);


export default router;
