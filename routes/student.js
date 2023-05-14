import express from 'express';
const router = express.Router()
import myLogger from "../middleware/logger-middleware.js";
import { studentController } from "../controllers/studentController.js"

router.use(myLogger)
router.get('/student', studentController)
export default router