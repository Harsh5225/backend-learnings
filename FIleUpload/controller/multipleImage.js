export const mulitpleImages = (req, res) => {
  const files = req.files;
  if (!files || files.length === 0) {
    return res.status(400).json({ message: "No files uploaded" });
  }

  const filePaths = files.map((file) => file.path);
  res
    .status(200)
    .json({ message: "Files uploaded successfully", files: filePaths });
};
