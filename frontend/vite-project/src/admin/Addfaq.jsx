
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';

const Addfaq = () => {
  const [data, setData] = useState({
    question: "",
    answer: "",
  });
  const [formError, setFormError] = useState({});
  const [faqs, setFaqs] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchFaqs();
  }, []);

  const fetchFaqs = async () => {
    try {
      const res = await axios.get("http://localhost:8081/api/getfaqs");
      setFaqs(res.data);  // Ensure this matches the response structure
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch FAQs.");
    }
  };

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setFormError({
      ...formError,
      [e.target.name]: '', // Clear the error message on input change
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    if (!data.question) {
      errors.question = "Please fill in the question.";
      toast.error("Please fill question");
    }

    if (!data.answer) {
      errors.answer = "Please fill in the answer.";
      toast.error("Please fill answer.");
    }

    setFormError(errors);

    if (Object.keys(errors).length === 0) {
      const apiCall = editId 
        ? axios.put(`http://localhost:8081/api/update-faqs/${editId}`, data) 
        : axios.post("http://localhost:8081/api/create-faq", data);
      
      apiCall
        .then((res) => {
          toast.success(editId ? "FAQ updated successfully" : "FAQ added successfully");
          fetchFaqs();
          setData({ question: "", answer: "" });
          setEditId(null);
        })
        .catch((err) => {
          console.error(err);
          toast.error("An error occurred. Please try again.");
        });
    }
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8081/api/delete-faqs/${id}`)
      .then(() => {
        toast.success("FAQ deleted successfully");
        fetchFaqs();
      })
      .catch((err) => {
        console.error(err);
        toast.error("An error occurred. Please try again.");
      });
  };

  const handleEdit = (faq) => {
    setData({
      question: faq.question,
      answer: faq.answer,
    });
    setEditId(faq._id);
  };

  return (
    <div>
      <Toaster />
      <div className="ml-72 flex items-center justify-center p-12">
        <div className="mx-auto w-full min-w-[550px] min-h-[350px] bg-white">
          <form
            className="py-6 px-9"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="mb-5">
              <input
                type="text"
                name="question"
                id="question"
                placeholder="Question"
                value={data.question}
                onChange={handleOnChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none"
              />
            </div>
            <div className="mb-5 mt-8">
              <textarea
                name="answer"
                id="answer"
                placeholder="Answer"
                value={data.answer}
                onChange={handleOnChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white h-32 py-3 px-6 text-base font-medium text-[#6B7280] outline-none"
              />
            </div>
            <div className="pt-8">
              <button
                type="submit"
                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                {editId ? "Update" : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-12">
        <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions</h1>
        <div>
          {faqs.map((faq) => (
            <div key={faq._id} className="flex items-center justify-between
      p-4 mb-8 border border-black rounded-md shadow-lg">
              <div>
                <p className="font-semibold">{faq.question}</p>
              </div>
              <div>
                <button
                  className="mr-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                  onClick={() => handleEdit(faq)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                  onClick={() => handleDelete(faq._id)}
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

export default Addfaq;
