const express = require('express');
const { createDonor, getAlldonors, updateDonor, getOneDonor, deleteDonor, getDonorsStats } = require('../controllers/donor');
const { verifyTokenAndAuthorization } = require('../middlewares/verifyToken');
const router = express.Router();

// Add Donor

router.post('/', verifyTokenAndAuthorization, createDonor);

// Get all Donors

router.get('/', getAlldonors);

// Update Donor

router.put('/:id', updateDonor);

// Get one Donor

router.get('/find/:id', getOneDonor);

// Delete Donor

router.delete('/:id', deleteDonor);

// Donor Stats

router.get('/stats', getDonorsStats);


module.exports = router;