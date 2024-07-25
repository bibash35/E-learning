const express = require("express");
const router = express.Router();
const { upload } = require("../Middleware/multer.middleware");
const {
  createEvent,
  getAllEvents,
  deleteEvent,
  updateEvent,

} = require("../Controllers/EventController");
router
  .post(
    "/create-event",
   
    upload.fields([
      {
        name: "thumbnail",
        maxCount: 1,
      },
    ]),
    createEvent
  )
  .get("/getevents", getAllEvents)
  .delete("/deleteEvent/:id", deleteEvent)
.put("/updateEvent/:id", upload.fields([{ name: 'thumbnail', maxCount: 1 }]), updateEvent);


exports.router = router;
