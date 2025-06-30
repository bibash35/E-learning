require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectToDb } = require("./Db/connection");
const app = express();
const path=require("path");
connectToDb();


const faq = require("./Router/Faq");
const teamRouter = require("./Router/team"); 
const course = require("./Router/course");
const event = require("./Router/event");
const user = require("./Router/user");
const adminRouter = require("./Router/adminroutes");


// middleware
app.use(cors({
  exposedHeaders:"X-TOTAL-COUNT",
  origin:true,
  credentials:true
}));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');  // Allow all domains, or specify a specific one
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(express.json());

app.use("/api", faq.router);
app.use("/api/team", teamRouter); 
app.use("/api", course.router);
app.use("/api", event.router);
app.use("/api", user.router);
app.use("/api", adminRouter.router);



app.listen(process.env.PORT, () => {
  console.log(`App is Running on Port:http://localhost:${process.env.PORT}`);
});
