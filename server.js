
import express from "express";
import router from "./routes/propertiesRouters.js";
import { dirname } from "path";
import { fileURLToPath } from "url";


const app = express();

app.use(express.json());

app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/addproperties", (req, res)=>{
    res.sendFile(__dirname + "/public/addProperties.html")
})

app.get("/filterproperties", (req, res)=>{
    res.sendFile(__dirname + "/public/searchResults.html")
})



// ROUTES
app.use("/api/properties", router)

const PORT = 3000;
app.listen(PORT, ()=> {console.log(`Server listening on port ${PORT}`);
} )
