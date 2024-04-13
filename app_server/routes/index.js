const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/list');

/* Locations pages */
router.get('/', ctrlLocations.index);
router.get('/aboutme', ctrlLocations.aboutme);
router.get('/certification', ctrlLocations.certification);
router.get('/contact', ctrlLocations.contact);
router.get('/projects', ctrlLocations.projects);
router.get('/resume', ctrlLocations.resume);
/* Other pages */

module.exports = router;