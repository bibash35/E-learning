require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const cookieParser = require("cookie-parser");
// const session = require("express-session");
const { connectToDb } = require("./Db/connection");
const app = express();
const path=require("path");
connectToDb();

// const userRouter = require("./Router/users.routes");
// const blogRouter = require("./Router/blog.routes");
const faq = require("./Router/Faq");
const teamRouter = require("./Router/team"); // Corrected import
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
app.use(express.json());
// app.use(cookieParser());
// app.use(session({ secret: "keyboard cat", cookie: { maxAge: 60000 } }));
//
// app.use("/api", userRouter.router);
// app.use("/api", blogRouter.router);
app.use("/api", faq.router);
app.use("/api/team", teamRouter); // Corrected path
app.use("/api", course.router);
app.use("/api", event.router);
app.use("/api", user.router);
app.use("/api", adminRouter.router);



app.listen(process.env.PORT, () => {
  console.log(`App is Running on Port:http://localhost:${process.env.PORT}`);
});
