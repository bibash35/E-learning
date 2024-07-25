const express = require("express");
const router = express.Router();
const { upload } = require("../Middleware/multer.middleware");
const {
  createCourse,
  getAllCourses,
  deleteCourse,
  updateCourse,

} = require("../Controllers/CourseController");
router
  .post(
    "/create-course",
   
    upload.fields([
      {
        name: "thumbnail",
        maxCount: 1,
      },
    ]),
    createCourse
  )
  .get("/getcourses", getAllCourses)
  .delete("/delete-course/:id", deleteCourse)
  .put('/update-course/:id', upload.fields([{ name: 'thumbnail', maxCount: 1 }]), updateCourse);



exports.router = router;
