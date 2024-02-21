import Membership from "../models/Membership.js";

// Create a new membership
export const createMembership = async (userId, planId, startDate, endDate) => {
  try {
    const newMembership = new Membership({
      userId,
      currentPlan: planId,
      startDate,
      endDate,
    });
    const savedMembership = await newMembership.save();
    return savedMembership;
  } catch (error) {
    throw new Error(`Error creating membership: ${error.message}`);
  }
};

export const getAllMemberships = async () => {
  try {
    const memberships = await Membership.find();
    return memberships;
  } catch (error) {
    throw new Error(`Error getting memberships: ${error.message}`);
  }
};


export const getMembershipById = async (membershipId) => {
  try {
    const membership = await Membership.findById(membershipId);
    return membership;
  } catch (error) {
    throw new Error(`Error getting membership: ${error.message}`);
  }
};

export const updateMembershipById = async (membershipId, newPlanId, newEndDate) => {
  try {
    const membership = await Membership.findById(membershipId);
    if (!membership) {
      throw new Error("No membership found with the provided ID.");
    }

    membership.planHistory.push({ previousPlan: membership.currentPlan });
    membership.currentPlan = newPlanId;
    membership.endDate = newEndDate;

    await membership.save();
    return membership;
  } catch (error) {
    throw new Error(`Error updating membership: ${error.message}`);
  }
};

export const deleteMembershipById = async (membershipId) => {
  try {
    const deletedMembership = await Membership.findByIdAndDelete(membershipId);
    return deletedMembership;
  } catch (error) {
    throw new Error(`Error deleting membership: ${error.message}`);
  }
};

export const getPlanHistoryById = async (membershipId) => {
  try {
    const membership = await Membership.findById(membershipId);
    if (!membership) {
      throw new Error("No membership found with the provided ID.");
    }
    const planHistory = membership.planHistory;
    return planHistory;
  } catch (error) {
    throw new Error(`Error getting plan history of membership: ${error.message}`);
  }
};
