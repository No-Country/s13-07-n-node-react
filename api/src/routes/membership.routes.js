import { Router } from 'express'
import {
    getAllMemberships,
    getMembershipById,
    createMembership,
    deleteMembershipById,
    updateMembershipById,
    getPlanHistoryById,


} from '../controllers/membership.controller.js'

const router = Router()

router.post("/", createMembership)
router.put("/:membershipId", updateMembershipById)
router.get("/", getAllMemberships)
router.get("/:membershipId", getMembershipById)
router.delete("/:membershipId", deleteMembershipById)
router.get('/:membershipId/plan-history', getPlanHistoryById);


export default router;