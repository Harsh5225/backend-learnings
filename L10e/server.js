const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 8000;

// Create the uploads folder if it doesn't exist
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // Save files in the 'uploads' folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    }
});

const upload = multer({ storage: storage });

// Serve static files
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));

// File upload route
app.post("/upload", upload.array("images", 10), (req, res) => {
    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: "No files uploaded." });
    }

    const fileUrls = req.files.map(file => ({
        fileName: file.filename,
        fileUrl: `/uploads/${file.filename}`
    }));

    res.json({ message: "Images uploaded successfully!", files: fileUrls });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
