import express, { Request, Response } from 'express';
import infosController from '../controller/infosController';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'health check!!',
  });
});

// save position data
router.post('/infos', infosController.createInfo);

// search position data
router.get('/infos', infosController.getInfos);

export default router;
