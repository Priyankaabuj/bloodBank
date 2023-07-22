import express from "express";

import { BloodBankModel } from "../../database/allModels";
import {
    ValidateBloodBank,
    ValidateSearchString,
} from "../../validation/bloodbank.validation";

const Router = express.Router();

/**
 * Route     /
 * Des       Add new donor
 * Params    none
 * Access    Public
 * Method    POST
 */
Router.post("/", async (req, res) => {
    try {
        const donor = await BloodDonateModel?.create?.(req.body.bloodDonations);
        return res.status(200).json({ bloodDonations });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

/**
 * Route     /
 * Des       Get all the Donors details based on the BloodGroup
 * Params    none
 * Access    Public
 * Method    GET
 */
Router.get("/bloodGroup", async (req, res) => {
    try {
        const { bloodGroup } = req.params;

        // await ValidateDonor(req.query);

        const bloodGroup = await BloodDonateModel.find({ bloodGroup });
        if (bloodGroup.length === 0) {
            return res
                .status(404)
                .json({ error: "No Blood Donor found for selected options." });
        }
        return res.json({ bloodGroup });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;
