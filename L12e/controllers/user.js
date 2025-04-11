export const postdata = (req, res) => {
  const { name, email } = req.body;
  console.log(name, email);
  res.status(200).json({
    success: true,
    message: "data is recieved",
    info: { name, email },
  });
};

export const getdata = (req, res) => {
  res.send("data is fetched");
};
