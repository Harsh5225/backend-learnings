const express = require("express");
const app = express();
const main = require("./database");
const User = require("./Models/users");
const validUser = require("./utils/validateuser");
const bcrypt = require("bcrypt");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/register", async (req, res) => {
  try {
    // Validate kya uske andar firstName
    validUser(req.body);

    //  converting password into hashing
    req.body.password = await bcrypt.hash(req.body.password, 10);

    await User.create(req.body);
    res.send("User Registered Successfully");
  } catch (err) {
    return res.status(500).send("Error " + err.message);
  }
});

app.post("/login", async (req, res) => {
  try {
    // validate karna
    const people = await User.findById(req.body._id);

    if (!(req.body.emailId === people.emailId))
      throw new Error("Invalid credentials");

    const IsAllowed = await bcrypt.compare(req.body.password, people.password);

    if (!IsAllowed) throw new Error("Invalid credentials");

    res.status(200).send("Login Successfully");
  } catch (err) {
    res.send("Error: " + err.message);
  }
});

app.get("/info", async (req, res) => {
  try {
    const result = await User.find();
    res.send(result);
  } catch (err) {
    res.send("Error" + err.message);
  }
});

app.get("/user/:id", async (req, res) => {
  try {
    // code likhna padege, user ko authenticate kar paauon

    const result = await User.findById(req.params.id);
    res.send(result);
  } catch (err) {
    res.send("Error" + err.message);
  }
});

app.delete("/user/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send("Deleted Succesfully");
  } catch (err) {
    res.send("Error" + err.message);
  }
});

// {
//     "_id":"67ec0a8bffe09233dc9c93fc",
//     "age": 12,
//     "emailId": "mohan@gmail.com"
// }

//!   runValidators: true, //
// * Runs schema validation on update
//!  new: true
//* Returns the updated document instead of the original
app.patch("/user", async (req, res) => {
  try {
    const { _id, ...update } = req.body;

    await User.findByIdAndUpdate(_id, update, { runValidators: true });
    res.send("Update Succesfully");
  } catch (err) {
    res.send("Error " + err.message);
  }
});

main()
  .then(async () => {
    console.log("Connected to DB");
    app.listen(3000, () => {
      console.log("Listening at port 3000");
    });
  })
  .catch((err) => console.log(err));
