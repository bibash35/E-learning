import React from 'react';

export default function Category({ course }) {
  if (!course) return null; // Guard clause to handle undefined or null course

  return (
    <div className="design-box">
      <div className="design-images">
        <div className="price">
          <h6>{course.price}</h6>
        </div>
        <div className="choices">
          <span>{course.course}</span>
        </div>
        <img src={course.thumbnail}  /> {/* Adjusted alt attribute */}
      </div>
      <p>{course.name}</p>
      <h4 className="hover:text-[#7a6ad8]">{course.involved}</h4>
    </div>
  );
}

const [filters, setFilter] = useState("All");
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/getcourses');
        setCourses(response.data.courses); // Assuming the response structure is { courses: [...] }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

<div className="latestcourses" id="courses">
  <span> LATEST COURSES </span>
  <h1> Latest Courses </h1>
  <div className="list-options">
    <ul>
      <button
        className="hover:text-[#7a6ad8] font-semibold"
        onClick={() => setFilter("All")}
      >
        Show All
      </button>
      <button
        className="hover:text-[#7a6ad8] font-semibold cursor-pointer"
        onClick={() => setFilter("WEBDESIGN")}
      >
        Webdesign
      </button>
      <button
        className="hover:text-[#7a6ad8] font-semibold cursor-pointer"
        onClick={() => setFilter("DEVELOPMENT")}
      >
        Development
      </button>
      <button
        className="hover:text-[#7a6ad8] font-semibold cursor-pointer"
        onClick={() => setFilter("WORDPRESS")}
      >
        Wordpress
      </button>
    </ul>
  </div>

  <div className="flex flex-wrap justify-center items-center gap-7 mx-auto max-w-6xl">
    {courses.length === 0 ? ( // Check if courses array is empty
      <p>Loading...</p> // Or some other loading indicator
    ) : (
      <>
        {filters === "All" &&
          courses.map((course, index) => (
            <Category key={index} course={course} /> // Adjusted prop name to 'course'
          ))}
        {filters === "WEBDESIGN" &&
          courses
            .filter((course) => course.category === filters)
            .map((course, index) => (
              <Category key={index} course={course} /> // Adjusted prop name to 'course'
            ))}
        {filters === "DEVELOPMENT" &&
          courses
            .filter((course) => course.category === filters)
            .map((course, index) => (
              <Category key={index} course={course} /> // Adjusted prop name to 'course'
            ))}
        {filters === "WORDPRESS" &&
          courses
            .filter((course) => course.category === filters)
            .map((course, index) => (
              <Category key={index} course={course} /> // Adjusted prop name to 'course'
            ))}
      </>
    )}
  </div>
</div>

