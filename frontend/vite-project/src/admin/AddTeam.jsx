

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';

const AddTeam = () => {
  const [teamData, setTeamData] = useState({
    name: '',
    position: '',
    thumbnail: null,
  });
  const [teamMembers, setTeamMembers] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [selectedMemberId, setSelectedMemberId] = useState(null);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/team/getTeams');
      setTeamMembers(response.data.teams);
    } catch (error) {
      toast.error('Failed to fetch team members.');
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'thumbnail') {
      setTeamData({ ...teamData, [name]: files[0] });
    } else {
      setTeamData({ ...teamData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    for (let key in teamData) {
      formData.append(key, teamData[key]);
    }

    try {
      if (editMode) {
        await axios.put(`http://localhost:8081/api/team/update-team/${selectedMemberId}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        toast.success('Team member updated successfully!');
      } else {
        await axios.post('http://localhost:8081/api/team/create-team', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        toast.success('Team member added successfully!');
      }
      setTeamData({ name: '', position: '', thumbnail: null });
      setEditMode(false);
      setSelectedMemberId(null);
      fetchTeamMembers();
    } catch (error) {
      toast.error('Failed to save team member. Please try again.');
    }
  };

  const handleEdit = (member) => {
    setTeamData({
      name: member.name,
      position: member.position,
      thumbnail: null, // Optionally handle thumbnail preview
    });
    setSelectedMemberId(member._id);
    setEditMode(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/api/team/${id}`);
      toast.success('Team member deleted successfully!');
      fetchTeamMembers(); // Fetch updated team members list
    } catch (error) {
      toast.error('Failed to delete team member.');
    }
  };

  return (
    <div>
      <Toaster />
      <div className="ml-80 flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <form className="py-6 px-9" onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="mb-5">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={teamData.name}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                name="position"
                id="position"
                placeholder="Position"
                value={teamData.position}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-6 pt-4">
              <label className="mb-5 block text-xl font-semibold text-[#07074D]">Upload File</label>
              <div className="mb-8">
                <input
                  type="file"
                  name="thumbnail"
                  id="thumbnail"
                  onChange={handleChange}
                  className="sr-only"
                />
                <label
                  htmlFor="thumbnail"
                  className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                >
                  <div>
                    <span className="mb-2 block text-xl font-semibold text-[#07074D]">Drop files here</span>
                    <span className="mb-2 block text-base font-medium text-[#6B7280]">Or</span>
                    <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                      Browse
                    </span>
                  </div>
                </label>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                {editMode ? 'Update' : 'Add'} Team Member
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* update and delete */}
      
<div className="mt-12">
        <h1 className="text-2xl font-bold mb-4">Team Members</h1>
        <div>
          {teamMembers.map((member) => (
            // <div key={member._id} className="flex items-center justify-between 
            // p-4 mb-4 border rounded-md">
            <div key={member._id} className="flex items-center justify-between
      p-4 mb-8 border border-black rounded-md shadow-lg">
              <div>
                <p className="font-semibold">{member.name}</p>
              </div>
              <div>
                <button
                  onClick={() => handleEdit(member)}
                  className="mr-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(member._id)}
                  className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddTeam;
