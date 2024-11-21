import express from "express";
import uploads from "../middlewares/upload.js";
import { createProperty, getAllProperties, updateProperty, deleteProperty } from "../controllers/propertiesController.js";

const router = express.Router();

router.get("/allproperties", getAllProperties);
router.post("/upload", uploads.single("image"), createProperty);
router.put("/updateproperty", uploads.single("image"), updateProperty);
router.delete("/deleteproperty", deleteProperty);

export default router;
