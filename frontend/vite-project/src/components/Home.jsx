import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-scroll";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosPlay } from "react-icons/io";

import "./style.css";
import Category from "./Category";
import Signup from "./Signup";
import Team from "./Team";
import Events from "./Events";
import Services from "./Services";
export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeLink, setActiveLink] = useState("home");

  const data = [
    {
      courses: "OUR COURSES",
      heading: "With Scholar Teachers, Everything Is Easier",
      desc: "Scholar is free CSS template designed by TemplateMo for online educational related websites. This layout is based on the famous Bootstrap v5.3.0 framework.",
      img: "https://themewagon.github.io/scholar/assets/images/banner-item-01.jpg",
    },
    {
      courses: "BEST RESULT",
      heading: "Get the best result out of your effort",
      desc: " You are allowed to use this template for any educational or commercial purpose. You are not allowed to re-distribute the template ZIP file on any other website.",
      img: "https://themewagon.github.io/scholar/assets/images/banner-item-02.jpg",
    },
    {
      courses: "ONLINE LEARNING",
      heading: "Online Learning helps you save the time",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporious incididunt ut labore et dolore magna aliqua suspendisse.",
      img: "https://themewagon.github.io/scholar/assets/images/banner-item-03.jpg",
    },
  ];

  const [positionIndex, setPositionIndex] = useState(0);
  const position = [
    {
      desc: "“Please tell your friends or collegues about TemplateMo website. Anyone can access the website to download free templates. Thank you for visiting.”",
      pos: "Full Stack Master",
      name: "Claude David",
      img: "https://themewagon.github.io/scholar/assets/images/testimonial-author.jpg",
    },
    {
      desc: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravid.”",
      pos: "UI Expert",
      name: "Thomas Jeffreson",
      img: "https://themewagon.github.io/scholar/assets/images/testimonial-author.jpg",
    },

    {
      desc: "“Scholar is free website template provided by TemplateMo for educational related websites. This CSS layout is based on Bootstrap v5.3.0 framework.”",
      pos: "Digital Animator",
      name: "Stella Blair",
      img: "https://themewagon.github.io/scholar/assets/images/testimonial-author.jpg",
    },
  ];

  // const [filters, setFilter] = useState("All");

  // const courses = [
  //   {
  //     category: "WEBDESIGN",
  //     price: "$160",
  //     name: "Stella Blair",
  //     involved: "Online Learning Steps",
  //     img: "https://themewagon.github.io/scholar/assets/images/course-01.jpg",
  //   },
  //   {
  //     category: "DEVELOPMENT",
  //     price: "$340",
  //     name: "Cindy Walker",
  //     involved: "Web Development Tips",
  //     img: "https://themewagon.github.io/scholar/assets/images/course-02.jpg",
  //   },
  //   {
  //     category: "WORDPRESS",
  //     price: "$640",
  //     name: "David Hutson",
  //     involved: "Latest Web Trends",
  //     img: "https://themewagon.github.io/scholar/assets/images/course-03.jpg",
  //   },
  //   {
  //     category: "DEVELOPMENT",
  //     price: "$450",
  //     name: "Sophia Rose",
  //     involved: "Online Learning Steps",
  //     img: "https://themewagon.github.io/scholar/assets/images/course-04.jpg",
  //   },
  //   {
  //     category: "WORDPRESS",
  //     price: "$320",
  //     name: "Stella Blair",
  //     involved: "Online Learning Steps",
  //     img: "https://themewagon.github.io/scholar/assets/images/course-05.jpg",
  //   },
  //   {
  //     category: "WEBDESIGN",
  //     price: "$240",
  //     name: "Stella Blair",
  //     involved: "Online Learning Steps",
  //     img: "https://themewagon.github.io/scholar/assets/images/course-06.jpg",
  //   },
  // ];

  const [filter, setFilter] = useState("ALL");
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8081/api/getcourses"
        );
        console.log(response.data.Courses);
        setCourses(response.data.Courses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const filterOptions = ["ALL", "WEBDESIGN", "DEVELOPMENT", "WORDPRESS"];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handlePositionPrevClick = () => {
    setPositionIndex((prevIndex) =>
      prevIndex === 0 ? position.length - 1 : prevIndex - 1
    );
  };

  const handlePositionNextClick = () => {
    setPositionIndex((prevIndex) =>
      prevIndex === position.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-title">
          <h1>SCHOLAR</h1>
          <div className="relative">
            <input type="text" placeholder="Type Something" className="" />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>
        <div className="navbar-options">
          <ul className="cursor-pointer">
 <Link to="home" spy={true} smooth={true} offset={-50} duration={500} className={activeLink === "home" ? "home-link" : ""}
       onClick={() => setActiveLink("home")}> Home </Link>
  <Link to="services" spy={true} smooth={true} offset={-200} duration={500} className={activeLink === "services" ? "home-link" : ""}
     onClick={() => setActiveLink("services")}> Services</Link>
  <Link to="courses" spy={true} smooth={true} offset={-100} duration={500} className={activeLink === "courses" ? "home-link" : ""}
   onClick={() => setActiveLink("courses")}> Courses</Link>
   <Link to="team" spy={true} smooth={true} offset={-200} duration={500} className={activeLink === "team" ? "home-link" : ""}
       onClick={() => setActiveLink("team")}> Team</Link>
  <Link to="events" spy={true} smooth={true} offset={-100} duration={500} className={activeLink === "events" ? "home-link" : ""}
       onClick={() => setActiveLink("events")}> Events</Link>
  <Link to="register" spy={true} smooth={true} offset={-50} duration={500} className={activeLink === "register" ? "home-link" : ""}
       onClick={() => setActiveLink("register")}>Register Now! </Link>
          </ul>
        </div>
      </div>

      <div className="banner" id="home">
        <div className="banner-icons">
          <button type="button" onClick={handlePrevClick} className="flex">
            <IoIosArrowBack className="w-12 h-12 py-3 bg-[#ffffff33] rounded-full text-white text-center font-bold leading-10 hover:bg-[#ffffff80] hover:cursor-pointer" />
          </button>
          <button type="button" onClick={handleNextClick}>
            <IoIosArrowForward className="w-12 h-12 py-3 mt-3 bg-[#ffffff33] rounded-full text-white text-center font-bold leading-10 hover:bg-[#ffffff80] hover:cursor-pointer" />
          </button>
        </div>

        <div className="flex overflow-hidden">
          {data.map((item, index) => (
            <div
              key={index}
              className={`banner-img ${
                index === currentIndex ? "block" : "hidden"
              }`}
            >
              <img src={item.img} alt={item.title} />
              <div className="overlay">
                <div className="overlay-content">
                  <div>
                    <button className="mt-12 text-sm">{item.courses}</button>
                  </div>
                  <div>
                    <h1>{item.heading}</h1>
                  </div>
                  <div className="text-sm">{item.desc}</div>

                  <div className="banner-buttons">
                    <div>
                      <p className="bg-white">Request Demo</p>
                    </div>

                    <div className="play justify-center">
                      <IoIosPlay className="text-5xl py-3 bg-white text-[#7a6ad8] text-bold rounded-full" />
                      <a href="#" className="ml-4">
                        What's Scholar?
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* services part */}

      <div id="services">
        <Services />
      </div>

      {/* courses part */}
      <div className="latestcourses" id="courses">
        <span>LATEST COURSES</span>
        <h1>Latest Courses</h1>
        <div className="list-options">
          <ul>
            {filterOptions.map((option) => (
              <button
                key={option}
                className="hover:text-[#7a6ad8] font-semibold cursor-pointer"
                onClick={() => setFilter(option)}
              >
                {option}
              </button>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-7 mx-auto max-w-6xl">
          {courses
            .filter((course) =>
              filter === "ALL" ? true : course.course === filter
            )
            .map((course, index) => (
              <Category key={index} courses={course} />
            ))}
        </div>
      </div>

      <div className="fun-facts">
        <img src="https://themewagon.github.io/scholar/assets/images/banner-bg.jpg" />
        <div className="counter flex justify-evenly ">
          <div>
            <h2>150+</h2>
            <p>Happy Students</p>
          </div>
          <div>
            <h2>804+</h2>
            <p>Course Hours</p>
          </div>
          <div>
            <h2>50+</h2>
            <p>Employed Students</p>
          </div>
          <div>
            <h2>15+</h2>
            <p>Years Experience</p>
          </div>
        </div>
      </div>

      {/* team part */}

      <div id="team">
        <Team />
      </div>

      {/* testinomial part  */}

      <div className="flex justify-center mt-36 items-center p-3  h-screen relative">
        <div className="bg-[#7A6AD8] text-white p-8 rounded-3xl flex left-64 w-[45%] flex-col absolute h-[400px] z-50 mt-32">
          <div>
            <p className="text-lg top-[40px] relative italic">
              {position[positionIndex].desc}
            </p>
            <div className="flex items-center relative top-[150px] ">
              <img
                src={position[positionIndex].img}
                alt={position[positionIndex].name}
                className="w-24 h-24 rounded-full mr-4"
              />
              <div>
                <p className="">{position[positionIndex].pos}</p>
                <p className="font-bold text-2xl">
                  {position[positionIndex].name}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center ml-[550px] mt-28 items-center gap-4 absolute">
            <button
              onClick={handlePositionPrevClick}
              aria-label="Previous Position"
            >
              <IoIosArrowBack className="h-10 w-10 bg-white rounded-full text-[#7a6ad8] text-sm" />
            </button>
            <button
              onClick={handlePositionNextClick}
              aria-label="Next Position"
            >
              <IoIosArrowForward className="h-10 w-10 bg-white rounded-full text-[#7a6ad8] text-sm" />
            </button>
          </div>
        </div>

        <div className="bg-[#F1F0FE] p-20 mt-36 rounded-l-full justify-center relative z-10 w-[60%] h-[600px] flex items-center ml-auto">
          <div className="flex flex-col justify-end items-center ml-24">
            <h6 className="text-base font-semibold text-[#7a6ad8]">
              TESTIMONIAL
            </h6>
            <h2 className="text-2xl font-bold mb-2 ml-44 mt-4">
              What They Say About Us?
            </h2>
            <p className="text-sm mt-12 ml-56">
              You can search free CSS templates on Google using different
              keywords such as templatemoo portfolio, templatemoo gallery,
              templatemoo blue color, etc.
            </p>
          </div>
        </div>
      </div>

      {/* events part */}

      <div id="events">
        <Events />
      </div>

      {/* register part */}
      <div id="register">
        <Signup />
      </div>

      <div className="footer">
        <div className="image-container">
          <img src="https://themewagon.github.io/scholar/assets/images/banner-bg.jpg" />
          <div className="footer-desc">
            <p className="text-sm mb-8 ml-20">
              Copyright © 2036 Scholar Organization. All rights reserved.
              Design:TemplateMo Distribution:ThemeWagon
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
