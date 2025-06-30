import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
const Services = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  
  const handleToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
      setActiveIndex(null);
    } else {
      setExpandedIndex(index);
      setActiveIndex(index);
    }
  };
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get('https://e-learning-udys.onrender.com/api/getfaqs');
        setFaqData(response.data);
      } catch (error) {
        console.error('Error fetching FAQ data:', error);
      }
    };

    fetchFaqs();
  }, []);
    



  return (
    <>
    <div className="services " id="services" >
        <div className="course-box">
          <h1>Online Degrees</h1>
          <p>
            Whenever you need free templates in HTML CSS, you just remember
            TemplateMo website.
          </p>
          <button>Read More</button>
          <div className="course-image">
            <img src="https://themewagon.github.io/scholar/assets/images/service-01.png" />
          </div>
        </div>
        <div className="course-box">
          <h1>Short Courses</h1>
          <p>
            You can browse free templates based on different tags such as
            digital marketing, etc.
          </p>
          <button>Read More</button>
          <div className="course-image">
            <img src="https://themewagon.github.io/scholar/assets/images/service-02.png" />
          </div>
        </div>
        <div className="course-box">
          <h1>Web Experts</h1>
          <p>
            You can start learning HTML CSS by modifying free templates from our
            website too.
          </p>
          <button>Read More</button>
          <div className="course-image">
            <img src="https://themewagon.github.io/scholar/assets/images/service-03.png" />
          </div>
        </div>
      </div>

      <div className="aboutus">
        <div className="aboutus-faq">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item" onClick={() => handleToggle(index)}>
              <p className={`question ${activeIndex === index ? "active" : ""}`}>
                {item.question}
                {expandedIndex === index ? (
                  <FiMinus className="icon" />
                ) : (
                  <FaPlus className="icon" />
                )}
              </p>
              {expandedIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="aboutus-des">
          <span>ABOUT US</span>
          <h1>What Makes Us The Best Academy Online?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida risus commodo.
          </p>
          <button>Discover More</button>
        </div>
      </div>

  
    </>
  )
}

export default Services