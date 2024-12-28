
const Donor = require('../models/Donor');


// Create Donor

const createDonor = async (req, res) => {
    try {
        const newDonor = Donor(req.body);
        const donor = await newDonor.save();
        res.status(201).json(donor);
    } catch (error) {
        res.status(500).json(error);
    }
}

// Get all Donors

const getAlldonors = async (req, res) => {
    try {
        const donors = await Donor.find().sort({createdAt: -1});
        res.status(200).json(donors);

    } catch (error) {
        res.status(500).json(error);
    }
}

// Update Donor

const updateDonor = async (req, res) => {
    try {
        const updateDonor = await Donor.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            {new:true}
        )
        res.status(201).json(updateDonor)
    } catch (error) {
        res.status(500).json(error);
    }
}

// Get one Donor

const getOneDonor = async (req, res) => {
    try {
        const donor = await Donor.findById(req.params.id);
        res.status(201).json(donor);
    } catch (error) {
        res.status(500).json(error);
    }
}

// Delete Donor 

const deleteDonor = async(req, res) => {
    try {
        await Donor.findByIdAndDelete(req.params.id);
        res.status(201).json("Donor Deleted successfully");
    } catch (error) {
        res.status(500).json(error);
    }
}

// Stats

const getDonorsStats = async (req, res) => {
    try {
        const status = await Donor.aggregate([
            {
                $group: {
                    _id: "$bloodgroup",
                    count: {$sum:1}
                }
            }
        ]);
        res.status(201).json(stats)
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {deleteDonor, getOneDonor, getAlldonors, getDonorsStats, updateDonor, createDonor}
