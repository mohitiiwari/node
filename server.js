import express from "express";
import mongoose from "mongoose";
const app = express();
import db from "./db.js";

import bodyParser from "body-parser";
app.use(bodyParser.json());

import Person from "./models/person.js";
import MenuItem from "./models/menu.js";


app.get("/", (req, res) => {
  res.send("welcome to my hotel");  
})

// import routes files
import personRoutes from "./routes/personRoutes.js";
import menuItemRoutes from "./routes/menuItemRoutes.js";

app.use("/person", personRoutes);
app.use("/menu", menuItemRoutes);

// connect to mongodb

app.listen(3000, () => {
  console.log("listening to port 3000");
});
