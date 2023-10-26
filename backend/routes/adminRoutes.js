
const express = require('express');
const adminController = require('../controllerAdmin/adminController')
const AdminApproveController = require('../controllerAdmin/AdminApproveController')


const router = express.Router();

//          ADMIN CONTROLLER


// Login
router.post('/admin-login', adminController.adminLogin);
// Admin Approve
router.post('/admin-approve-request', AdminApproveController.adminApproveRequest);
// Fetch all requests for the admin
router.get('/all-requests', adminController.getAllRequests);





module.exports = router;

