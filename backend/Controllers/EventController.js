// const { Blog } = require("../models/Blog.model");
const { uploadOnCloudinary } = require("../utils/cloudinary");
const {Event} =require("../models/Event")
exports.createEvent = async (req, res) => {
  try {
    const { course,task,date,duration,price} = req.body;
    console.log(req.body)
    
    const thumbnailLocalPath = req.files?.thumbnail[0]?.path;
    if (!thumbnailLocalPath) {
      return res.status(400).json({
        message: "Thumbnail is required",
      });
    }

    const thumbnail = await uploadOnCloudinary(thumbnailLocalPath);
     console.log(thumbnail)
    const blog = new Event({
      
      course:course,
      task: task,
      date:date,
      duration:duration,
      price:price,
      thumbnail: thumbnail.url || "",
    });
    await blog.save();
    return res.status(200).json({ message: "Blog Added SuccessFully", blog });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

exports.getAllEvents = async (req, res) => {
  try {
    const Events = await Event.find({});
    return res.status(200).json({ Events });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findByIdAndDelete(id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    return res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { course, task, date, duration, price } = req.body;

    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    if (req.files?.thumbnail) {
      const thumbnailLocalPath = req.files.thumbnail[0].path;
      const thumbnail = await uploadOnCloudinary(thumbnailLocalPath);
      event.thumbnail = thumbnail.url;
    }

    event.course = course || event.course;
    event.task = task || event.task;
    event.date = date || event.date;
    event.duration = duration || event.duration;
    event.price = price || event.price;

    await event.save();
    return res.status(200).json({ message: "Event updated successfully", event });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


