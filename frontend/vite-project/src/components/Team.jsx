import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Team = () => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/team/getTeams');
        if (response.data && Array.isArray(response.data.teams)) {
          setTeamData(response.data.teams);
        } else {
          console.error('Unexpected response format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching team data', error);
      }
    };

    fetchTeamData();
  }, []);

  return (
    <div className="flex gap-7 mt-44 justify-center" id="team">
      {teamData.slice(0, 4).map((member, index) => (
        <div key={index} className="group max-h-screen relative shadow-lg w-64 h-65 pb-6 bg-[#f1f0fe] flex items-center flex-col rounded-3xl">
          <div className="absolute -top-20">
            <img
              className="h-48 w-48 rounded-full object-cover group-hover:-translate-y-3 transition duration-300"
              src={member.thumbnail}
              alt={member.name}
            />
          </div>
          <div className="mt-16 flex items-center flex-col justify-center">
            <p className="text-md mt-16 text-[#7a6ad8]">{member.position}</p>
            <h1 className="text-xl text-center font-bold mt-1">{member.name}</h1>
          </div>
          <div className="relative flex flex-row space-x-4 mt-3">
            <div>
              <FaFacebook className="bg-white text-[#7a6ad8] hover:bg-[#7a6ad8] hover:text-white w-10 h-10 p-3 text-center leading-10 rounded-full" />
            </div>
            <div>
              <FaTwitter className="bg-white text-[#7a6ad8] hover:bg-[#7a6ad8] hover:text-white w-10 h-10 p-3 text-center leading-10 rounded-full" />
            </div>
            <div>
              <FaLinkedin className="bg-white text-[#7a6ad8] hover:bg-[#7a6ad8] hover:text-white w-10 h-10 p-3 text-center leading-10 rounded-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
