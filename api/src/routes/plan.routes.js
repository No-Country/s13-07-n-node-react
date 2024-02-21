import express from 'express';
import {
  createPlan,
  getAllPlans,
  getPlanById,
  updatePlanById,
  deletePlanById
} from '../controllers/plan.controller.js';

const router = express.Router();

router.post('/', createPlan);
router.get('/', getAllPlans);
router.get('/:planId', getPlanById);
router.put('/:planId', updatePlanById);
router.delete('/:planId', deletePlanById);

export default router;