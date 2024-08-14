const { uploadOnCloudinary } = require("../utils/cloudinary");
const {Team} =require("../models/Team")
exports.createTeam = async (req, res) => {
  try {
    const { name,position} = req.body;
    console.log(req.body)
    
    const thumbnailLocalPath = req.files?.thumbnail[0]?.path;
    if (!thumbnailLocalPath) {
      return res.status(400).json({
        message: "Thumbnail is required",
      });
    }

    const thumbnail = await uploadOnCloudinary(thumbnailLocalPath);
     console.log(thumbnail)
    const blog = new Team({
      
      name: name,
      position: position,
      thumbnail: thumbnail.url || "",
    });
    await blog.save();
    return res.status(200).json({ message: "Team Added SuccessFully", blog });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

exports.getAllTeams = async (req, res) => {
  try {
    const teams = await Team.find({});
    return res.status(200).json({ teams });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
exports.deleteTeam = async (req, res) => {
  try {
    const { id } = req.params;
    const teamMember = await Team.findByIdAndDelete(id);

    if (!teamMember) {
      return res.status(404).json({ message: "Team member not found" });
    }

    return res.status(200).json({ message: "Team member deleted successfully", teamMember });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.updateTeam = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, position } = req.body;

    let teamMember = await Team.findById(id);
    if (!teamMember) {
      return res.status(404).json({ message: "Team member not found" });
    }

    // Update fields
    teamMember.name = name;
    teamMember.position = position;

    // Check if new thumbnail is provided
    if (req.files?.thumbnail) {
      const thumbnailLocalPath = req.files.thumbnail[0].path;
      const newThumbnail = await uploadOnCloudinary(thumbnailLocalPath);
      teamMember.thumbnail = newThumbnail.url || teamMember.thumbnail;
    }

    // Save updated team member
    await teamMember.save();

    return res.status(200).json({ message: "Team member updated successfully", teamMember });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

