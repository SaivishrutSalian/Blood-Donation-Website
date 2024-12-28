
const express = require('express');
const { createProspect, getAllProspects, updateProspect, deleteProspect, getOneProspect } = require('../controllers/prospect');
const router = express.Router();

// Add Prospect

router.post('/', createProspect);

// Get all Prospects

router.get('/',getAllProspects);

// Update Prospects

router.put('/:id', updateProspect);

// Delete Prospects

router.delete('/:id', deleteProspect);

// Get one Prospect

router.get('/find/:id', getOneProspect);

module.exports = router;