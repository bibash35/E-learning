// const express = require("express");
// const router = express.Router();
// const { verifyJWT } = require("../Middleware/auth.middleware");
// const { upload } = require("../Middleware/multer.middleware");
// const {
//   createTeam,
//   deletTeam,
//   getAllTeams,
//   updateTeam,
//   getownTeam,

// } = require("../Controllers/TeamContoller");
// router
//   .post(
//     "/create-team",
   
//     upload.fields([
//       {
//         name: "thumbnail",
//         maxCount: 1,
//       },
//     ]),
//     createTeam
//   )
//   .get("/getTeams", getAllTeams)
//   .delete("/delete/:id", verifyJWT, deletTeam)
//   .patch(
//     "/update/:id",
//     verifyJWT,
//     upload.fields([
//       {
//         name: "thumbnail",
//         maxCount: 1,
//       },
//     ]),

//     updateTeam
//   )
//   .get("/getownBlog", verifyJWT, getownTeam);

// exports.router = router;
const express = require("express");
const router = express.Router();
const { upload } = require("../Middleware/multer.middleware");
const {
  createTeam,
  getAllTeams,
  deleteTeam,
  updateTeam,

} = require("../Controllers/TeamContoller");
router
  .post(
    "/create-team",
   
    upload.fields([
      {
        name: "thumbnail",
        maxCount: 1,
      },
    ]),
    createTeam
  )
  .get("/getTeams", getAllTeams)
  .delete("/:id", deleteTeam)
  .put(
    "/update-team/:id",
    upload.fields([
      {
        name: "thumbnail",
        maxCount: 1,
      },
    ]),
    updateTeam
  );

  module.exports = router; // Ensure correct export

