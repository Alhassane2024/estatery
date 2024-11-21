
import express from "express";
import router from "./routes/propertiesRouters.js";

const app = express();

app.use(express.json());

app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));

// ROUTES
app.use("/api/properties", router)

const PORT = 3000;
app.listen(PORT, ()=> {console.log(`Server listening on port ${PORT}`);
} )
