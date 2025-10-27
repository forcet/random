import { Router } from "express";

const router = Router();

router.get('/startup', (_req, res) => {
    res.sendStatus(200);
  });

export default router;