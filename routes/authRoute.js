import express from "express";
import {regsiterController} from "../controllers/authController.js";


// router object
const router = express.Router();

// routing
// register || METHOD POST
router.post('/register',regsiterController);

export default router;
 