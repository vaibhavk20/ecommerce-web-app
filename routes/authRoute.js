import express from "express";
import {
  registerController,
  loginController,
  testMiddleware,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing

//register
router.post("/register", registerController);

// login
router.post("/login", loginController);

//test
router.get("/test", requireSignIn, isAdmin, testMiddleware);

export default router;
