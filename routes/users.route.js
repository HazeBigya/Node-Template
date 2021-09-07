import express from "express";
import userController from "../controller/user.controller.js";

const router = express();
router.route("/").get(userController.getUpayaUser);

export default router;
