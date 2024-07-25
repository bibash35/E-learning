// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Toaster, toast } from 'react-hot-toast';


// const Addcourses = () => {
//   const [teamData, setTeamData] = useState({
//     course: '',
//     price: '',
//     thumbnail: '',
//      name:'',
//     involved:''
//   });

//   const [courses, setCourses] = useState([]); 
  
//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const fetchCourses = async () => {
//     try {
//       const response = await axios.get('http://localhost:8081/api/getcourses');
//       setCourses(response.data.Courses|| []); // Handle the case where courses might be undefined
//     } catch (error) {
//       toast.error('Failed to fetch courses.');
//     }
//   };


//   function handleChange(e) {
//     const { name, value, files } = e.target;
//     if (name === 'thumbnail') {
//       setTeamData({ ...teamData, [name]: files[0] });
//     } else {
//       setTeamData({ ...teamData, [name]: value });
//     }
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     let formData = new FormData();
//     for (let key in teamData) {
//       formData.append(key, teamData[key]);
//     }

//     try {
//       await axios.post('http://localhost:8081/api/create-course', formData);
//       toast.success('Course added successfully!');
//       setTeamData({
//         course: '',
//     price: '',
//     thumbnail: '',
//      name:'',
//     involved:''
//       });
//     } catch (error) {
//       toast.error('Failed to add courses. Please try again.');
//     }
//   }

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8081/api/delete-course/${id}`);
//       toast.success('Course deleted successfully!');
//       fetchCourses(); // Fetch updated courses list
//     } catch (error) {
//       toast.error('Failed to delete course.');
//     }
//   };

//   return (
//     <div>
// <Toaster />

//     <div className=" ml-80 flex items-center justify-center p-12">
//       <div className="mx-auto w-full max-w-[550px] bg-white">
//         <form
//           className="py-6 px-9"
//           onSubmit={handleSubmit}
//           encType="multipart/form-data"
//         >
//           <div className="mb-5">
//             <input
//               type="text"
//               name="course"
//               id="course"
//               placeholder="Course"
//               value={teamData.course}
//               onChange={handleChange}
//               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//             />
//           </div>
//           <div className="mb-5">
//             <input
//               type="text"
//               name="price"
//               id="price"
//               placeholder="Price"
//               value={teamData.price}
//               onChange={handleChange}
//               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//             />
//           </div>
//           <div className="mb-5">
//             <input
//               type="text"
//               name="name"
//               id="name"
//               placeholder="Name"
//               value={teamData.name}
//               onChange={handleChange}
//               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//             />
//           </div>
//           <div className="mb-5">
//             <input
//               type="text"
//               name="involved"
//               id="involved"
//               placeholder="Involved"
//               value={teamData.involved}
//               onChange={handleChange}
//               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//             />
//           </div>
//           <div className="mb-6 pt-4">
//             <label className="mb-5 block text-xl font-semibold text-[#07074D]">
//               Upload File
//             </label>
//             <div className="mb-8">
//               <input
//                 type="file"
//                 name="thumbnail"
//                 id="thumbnail"
//                 onChange={handleChange}
//                 className="sr-only"
//               />
//               <label
//                 htmlFor="thumbnail"
//                 className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
//               >
//                 <div>
//                   <span className="mb-2 block text-xl font-semibold text-[#07074D]">
//                     Drop files here
//                   </span>
//                   <span className="mb-2 block text-base font-medium text-[#6B7280]">
//                     Or
//                   </span>
//                   <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
//                     Browse
//                   </span>
//                 </div>
//               </label>
//             </div>
//           </div>
//           <div>
//             <button
//               type="submit"
//               className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
//             >
//               Send File
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>

//     <div className="mt-12">
//         <h1 className="text-2xl font-bold mb-4">Courses</h1>
//         <ul>
//           {courses.map((course) => (
//             <li key={course._id} className="mb-4">
//               <span>{course.name}</span>
//               <button
//                 onClick={() => handleDelete(course._id)}
//                 className="ml-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default Addcourses

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';

const AddCourse = () => {
  const [courseData, setCourseData] = useState({
    course: '',
    price: '',
    name: '',
    involved: '',
    thumbnail: null,
  });
  const [courses, setCourses] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/getcourses');
      setCourses(response.data.Courses);
    } catch (error) {
      toast.error('Failed to fetch courses.');
      console.error('Fetch courses error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'thumbnail') {
      setCourseData({ ...courseData, [name]: files[0] });
    } else {
      setCourseData({ ...courseData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    for (let key in courseData) {
      if (courseData[key] !== null && courseData[key] !== '') {
        formData.append(key, courseData[key]);
      }
    }

    try {
      if (editMode) {
        const response = await axios.put(`http://localhost:8081/api/update-course/${selectedCourseId}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        toast.success('Course updated successfully!');
        console.log('Update response:', response.data);
      } else {
        const response = await axios.post('http://localhost:8081/api/create-course', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        toast.success('Course added successfully!');
        console.log('Create response:', response.data);
      }
      setCourseData({
        course: '',
        price: '',
        name: '',
        involved: '',
        thumbnail: null,
      });
      setEditMode(false);
      setSelectedCourseId(null);
      fetchCourses();
    } catch (error) {
      toast.error('Failed to save course. Please try again.');
      console.error('Save course error:', error.response ? error.response.data : error.message);
    }
  };

  const handleEdit = (course) => {
    setCourseData({
      course: course.course,
      price: course.price,
      name: course.name,
      involved: course.involved,
      thumbnail: null, // Optionally handle thumbnail preview
    });
    setSelectedCourseId(course._id);
    setEditMode(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/api/delete-course/${id}`);
      toast.success('Course deleted successfully!');
      fetchCourses(); // Fetch updated courses list
    } catch (error) {
      toast.error('Failed to delete course.');
      console.error('Delete course error:', error.response ? error.response.data : error.message);
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
                name="course"
                id="course"
                placeholder="Course"
                value={courseData.course}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price"
                value={courseData.price}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={courseData.name}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                name="involved"
                id="involved"
                placeholder="Involved"
                value={courseData.involved}
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
                {editMode ? 'Update' : 'Add'} Course
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-12">
        <h1 className="text-2xl font-bold mb-4">Courses</h1>
        <div>
          {courses.map((course) => (
            <div key={course._id} className="flex items-center justify-between
      p-4 mb-8 border border-black rounded-md shadow-lg">
              <div>
              <p className="font-semibold">{course.name}</p>
              </div>
              <div>
              <button
                onClick={() => handleEdit(course)}
                className="ml-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(course._id)}
                className="ml-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
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

export default AddCourse;
