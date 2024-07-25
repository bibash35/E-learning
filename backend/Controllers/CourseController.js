// const { Blog } = require("../models/Blog.model");
const { uploadOnCloudinary } = require("../utils/cloudinary");
const {Course} =require("../models/Course")
exports.createCourse = async (req, res) => {
  try {
    const { course,price,name,involved} = req.body;
    console.log(req.body)
    
    const thumbnailLocalPath = req.files?.thumbnail[0]?.path;
    if (!thumbnailLocalPath) {
      return res.status(400).json({
        message: "Thumbnail is required",
      });
    }

    const thumbnail = await uploadOnCloudinary(thumbnailLocalPath);
     console.log(thumbnail)
    const blog = new Course({
      
      course: course,
      price: price,
      name:name,
      involved:involved,
      thumbnail: thumbnail.url || "",
    });
    await blog.save();
    return res.status(200).json({ message: "Blog Added SuccessFully", blog });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const Courses = await Course.find({});
    return res.status(200).json({ Courses });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
exports.deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findByIdAndDelete(id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    return res.status(200).json({ message: "Course deleted successfully", course });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
exports.updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const { course, price, name, involved } = req.body;

    // Fetch the existing course details
    const existingCourse = await Course.findById(id);
    if (!existingCourse) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Handle thumbnail update
    let thumbnailUrl = existingCourse.thumbnail;
    const thumbnailLocalPath = req.files?.thumbnail?.[0]?.path;

    if (thumbnailLocalPath) {
      // Upload new thumbnail and get the URL
      const uploadedThumbnail = await uploadOnCloudinary(thumbnailLocalPath);
      thumbnailUrl = uploadedThumbnail.url || existingCourse.thumbnail;
    }

    // Update course details
    existingCourse.course = course !== undefined ? course : existingCourse.course;
    existingCourse.price = price !== undefined ? price : existingCourse.price;
    existingCourse.name = name !== undefined ? name : existingCourse.name;
    existingCourse.involved = involved !== undefined ? involved : existingCourse.involved;
    existingCourse.thumbnail = thumbnailUrl;

    // Save updated course
    await existingCourse.save();
    
    return res.status(200).json({ message: "Course updated successfully", course: existingCourse });
  } catch (error) {
    console.error('Update course error:', error);
    return res.status(500).json({ message: error.message });
  }
};
