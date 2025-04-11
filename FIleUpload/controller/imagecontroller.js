export const imageControllers =  (req, res) => {
  const { name, email } = req.body;
  const image = req.file?.path;

  // Validate image
  if (!image) {
    return res.status(400).json({
      message: "Image not found",
    });
  }

  // Validate name and email
  if (!name || !email) {
    return res.status(400).json({
      message: "Name and email are required",
    });
  }

  console.log(req.file);
  console.log(name, email);

  res.status(200).json({
    message: "Image uploaded successfully",
    image: image,
    name: name,
    email: email,
  });
};
