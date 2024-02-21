import express from 'express';
import {
  createPlan,
  getAllPlans,
  getPlanById,
  updatePlanById,
  deletePlanById
} from '../controllers/plan.controller.js';

const router = express.Router();

router.post('/plan', createPlan);
router.get('/plan', getAllPlans);
router.get('/plan/:planId', getPlanById);
router.put('/plan/:planId', updatePlanById);
router.delete('/plan/:planId', deletePlanById);

export default router;
