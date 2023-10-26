//routes/authRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController'); 
 const forgotPasswordController = require('../controllers/forgotPasswordController');
const storeWalletDataController = require('../controllers/storeWalletDataController');
const buyEnfiController = require('../controllers/buyEnfiController');
const withdrawalController = require('../controllers/withdrawalController');
const referralController = require('../controllers/referralController');
const directMemberController = require('../controllers/directMemberController');
const userApproveController = require('../controllers/userApproveController');


//          USER CONTROLLER

// User registration route
router.post('/register', UserController.registerUser);
// Login
router.post('/login', UserController.loginUser);
// update use data
router.post('/update-profile/:LoginId', UserController.updateUserByLoginId);
// Logout
router.post('/log-out', (req, res) => {
    res.status(200).json({ message: 'Logout successful' });
  });
// forgot password
router.post('/forgot-password', forgotPasswordController.forgotPassword);
// veryfyOTP
router.post('/verify-otp', forgotPasswordController.verifyOTP);
// reset-new-password
router.post('/reset-password', forgotPasswordController.resetPassword);
// EnFi BNB Data store in Database
router.post('/store-wallet-data', storeWalletDataController.walletEnfiBnbData);
//Buy EnFi token
router.post('/buy-enfi-token', buyEnfiController.buyEnfiBalance);
//  stacking EnFi
router.post('/withdrawal-enfi-token', withdrawalController.stackingEnfi);
// get Package
router.get('/get-package', buyEnfiController.getPackageQty);
//  get EnfiPrice
router.get('/get-enfi-price', buyEnfiController.getEnfiPrice);
// get Referral
router.get('/get-referral-link/:MemberId' , referralController.getReferralLink);
//get user data
router.get('/get-member-data/:FK_MemId', referralController.getMemberData);
//get direct member list
router.get('/get-direct-list/:LoginId', directMemberController.getDirectData);
//get downlinw List
router.get('/get-downline-list/:LoginId', directMemberController.getDownlineData);
// user approve list for withdral
router.get('/user-approve-list/:FK_MemId', userApproveController.getUserApproveRequests)





module.exports = router;

