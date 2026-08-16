import express from 'express';
const router = express.Router();
import UserController from '../controllers/userControllers/userControllers.js';
//import checkUserAuth from '../middlewares/auth-middleware.js';
import addCustomer from '../controllers/addCustomerController/addCustomerControllers.js';
import customer_alls from '../controllers/getCustomers/getCustomers.js'
import updateone from '../controllers/updateCustomer/updateCustomes.js'

// ROute Level Middleware - To Protect Route
// router.use('/changepassword', checkUserAuth)
// router.use('/loggeduser', checkUserAuth)

// Public Routes
router.post('/register', UserController.userRegistration)
router.post('/login', UserController.userLogin)
router.post('/addcustomers',addCustomer.customerSave)
router.get('/allCustomers', customer_alls.customer_all)
router.put('/updateSingleCustomer/:id',updateone.updateCustomer)
router.get('/getsingleCustomer/:id',customer_alls.customer_one)
router.delete('/deleteCustomer/:id',customer_alls.delete_oneCustomer)
// router.post('/send-reset-password-email', UserController.sendUserPasswordResetEmail)
// router.post('/reset-password/:id/:token', UserController.userPasswordReset)

// Protected Routes
// router.post('/changepassword', UserController.changeUserPassword)
// router.get('/loggeduser', UserController.loggedUser)


export default router