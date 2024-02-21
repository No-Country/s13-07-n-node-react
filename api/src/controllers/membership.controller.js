import {
  createMembership as createMembershipService,
  getAllMemberships as getAllMembershipsService,
  getMembershipById as getMembershipByIdService,
  updateMembershipById as updateMembershipByIdService,
  deleteMembershipById as deleteMembershipByIdService,
  getPlanHistoryById as getPlanHistoryByIdService,
} from "../services/membership.service.js";

export const createMembership = async (req, res) => {
  try {
    const { userId, planId, startDate, endDate } = req.body;
    const newMembership = await createMembershipService(userId, planId, startDate, endDate);
    res.status(201).json({ error: "membership created succesfully", newMembership });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAllMemberships = async (req, res) => {
  try {
    const memberships = await getAllMembershipsService();
    res.status(200).json(memberships);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getMembershipById = async (req, res) => {
  try {
    const { membershipId } = req.params;
    const membership = await getMembershipByIdService(membershipId);
    res.status(200).json(membership);
  } catch (error) {
    res.statsu(500).json({ error: "Internal Server Error" });
  }
};

export const updateMembershipById = async (req, res) => {
  try {
    const { membershipId } = req.params;
    const { newPlanId, newEndDate } = req.body;
    const updatedMemmbership = await updateMembershipByIdService(membershipId, newPlanId, newEndDate);
    res.status(200).json(updatedMemmbership)
  } catch (error) {
    res.statsu(500).json({ error: "Internal Server Error" });
  }
};

export const deleteMembershipById = async (req, res) => {
  try {
    const { membershipId } = req.params;
    const deletedMembership = await deleteMembershipByIdService(membershipId);
res.status(200).json(deletedMembership)
} catch (error) {
    res.statsu(500).json({ error: "Internal Server Error" });
  }
};


export const getPlanHistoryById = async (req,res)=>{
    try {
        const {membershipId} = req.params
const planHistory = await getPlanHistoryByIdService(membershipId)
res.status(200).json(planHistory)
    } catch (error) {
        
    }
}