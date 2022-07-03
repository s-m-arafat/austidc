// external import modules
const { MongoClient, ServerApiVersion } = require("mongodb");
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();

// initiate app
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

// initiate mongodb
const uri =
  "mongodb+srv://idc-db:tthFcA9Fi0pULwPL@cluster0.m4plz.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

// connecting to mongo
client.connect((err) => {
  console.log("db on");
  const collection = client.db("idcDB").collection("users");

  //   handle new user
  app.post("/addUser", async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 2);
      const newUser = {
        name: req.body.name,
        username: req.body.username,
        password: hashedPassword,
      };
      console.log("Adding New User ", newUser);
      collection.insertOne(newUser).then((response) => {
        res.status(200).json({
          message: "Signup was successful!",
        });
      });
    } catch {
      res.status(501).json({
        message: "Signup Failed!",
      });
    }
  });

  //   find user by username
  app.post("/login", async (req, res) => {
    collection.findOne({ username: req.body.username }, async (err, user) => {
      if (user) {
        const isValidPassword = await bcrypt.compare(
          req.body.password,
          user.password
        );

        if (isValidPassword) {
          // generate token
          const token = jwt.sign(
            {
              username: user.username,
              userId: user._id,
            },
            "aust-idc",
            {
              expiresIn: "1h",
            }
          );

          res.status(200).json({
            access_token: token,
            message: "Login successful!",
          });
        } else {
          res.status(401).json({
            error: "Authetication failed!",
          });
        }
      } else {
        res.status(401).json({
          error: "Authetication failed!",
        });
      }
    });
  });
});

app.get("/", (req, res) => {
  res.send("IDC server is online");
});
app.listen(5000, () => {
  console.log("idc listening to port 5000");
});
