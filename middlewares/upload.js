import multer from "multer";
import path from "path";

const storage = multer.diskStorage(
    {destination: (req, file, cb)=>{
        cb(null, "uploads/");
    },
    filename: (req, file, cb)=>{
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const fileExtension = path.extname(file.originalname);
        cb(null, uniqueSuffix + fileExtension);
    }
}
);

const uploads = multer({ storage });
export default uploads;