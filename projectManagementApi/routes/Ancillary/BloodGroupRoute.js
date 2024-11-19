const express = require('express');
const BloodGroupController = require('../../controller/Ancillary/Bloodgroup.Controller');
const router = express.Router();

router.post('/bloodGroup', BloodGroupController.addBloodGroup);
router.get('/bloodGroups', BloodGroupController.findBloodGroups);
router.get('/bloodGroup/:id', BloodGroupController.findBloodGroupById);
router.put('/bloodGroup/:id', BloodGroupController.updateBloodGroup);
router.delete('/bloodGroup/:id', BloodGroupController.deleteById);

module.exports = router;
