import { Router } from "express";

const router = Router();

router.get('/readiness', (_req, res) => {
    res.sendStatus(200);
  });

export default router;