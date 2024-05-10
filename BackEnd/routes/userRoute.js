const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const secret = "asdfe45we45w34";
const cookieParser = require("cookie-parser");
const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);




app.use(express.json());
app.use(cookieParser());

app.post("/register", async (req, res) => {
  const userInfo = req.body;
  try {
    if (
      userInfo.username === " " &&
      (userInfo.email === "") & (userInfo.password === "")
    ) {
      return res.status(404).send("Field are empty");
    }
    if (userInfo.password < 5) {
      return res.status(404).send("Short password");
    }
    let foundUser = await userModel.findOne({ email: userInfo.email }).exec();
    if (foundUser) {
      return res.status(400).send("This user exist");
    } else {
      let newUser = new userModel({
        username: userInfo.username,
        email: userInfo.email,
        password: bcrypt.hashSync(userInfo.password, salt),
      });
      console.log(newUser);
      await newUser.save();
      return res.status(200).send("User Created " + newUser);
    }
  } catch (err) {
    console.log("Something is wrong " + err);
    res.status(500).send("Something is wrong " + err);
  }
});

app.post("/login", async (req, res) => {
  const userData = req.body;
  const findUser = await userModel.findOne({ email: userData.email }).exec();
  try {
    if (findUser) {
      const passOk = bcrypt.compareSync(userData.password, findUser.password);
      if (passOk) {
        jwt.sign(
          { email: findUser.email, id: findUser._id },
          secret,
          {},
          (err, token) => {
            if (err) {
              console.error("Error generating token:", err);
              res.status(500).send("Something is wrong");
            } else {
              console.log("Generated token:", token);
              res.cookie("token", token, { httpOnly: true }).json({
                id: findUser._id,
                email: findUser.email,
              });
            }
          }
        );
      } else {
        res.status(400).send("Invalid credentials");
      }
    } else {
      res.status(404).send("User not found");
    }
  } catch (err) {
    res.status(500).send("Something is wrong " + err);
  }
});

app.get("/user", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) {
      console.log("Unauthorized");
      return res.status(401).send("Unauthorized");
    }
    res.json(info);
  });
});

app.post("/logout", (req, res) => {
  console.log("Logout request received");
  res.cookie("token", "", { expires: new Date(0), httpOnly: true }).json("ok");
});
module.exports = app;
