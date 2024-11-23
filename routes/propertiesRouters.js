import express from "express";
import uploads from "../middlewares/upload.js";
import { createProperty, getAllProperties, updateProperty, deleteProperty, filterProperties } from "../controllers/propertiesController.js";

const router = express.Router();

router.get("/allproperties", getAllProperties);

router.get("/filterproperties", filterProperties);
router.post("/upload", uploads.single("image"), createProperty);
router.put("/updateproperty", uploads.single("image"), updateProperty);
router.delete("/deleteproperty", deleteProperty);


export default router;
