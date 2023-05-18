import express from "express";
import {
  registerController,
  loginController,
  testMiddleware,
  forgetPasswordController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing

//register
router.post("/register", registerController);

// login
router.post("/login", loginController);

// forget password
router.post("/forget-password", forgetPasswordController);

//test
router.get("/test", requireSignIn, isAdmin, testMiddleware);

// protected uset route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

// admin route 
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
