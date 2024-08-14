
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';

const AddEvent = () => {
  const [eventData, setEventData] = useState({
    course: '',
    price: '',
    thumbnail: '',
    task: '',
    date: '',
    duration: ''
  });
  const [events, setEvents] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/getevents');
      setEvents(response.data.Events);
    } catch (error) {
      toast.error('Failed to fetch events. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'thumbnail') {
      setEventData({ ...eventData, [name]: files[0] });
    } else {
      setEventData({ ...eventData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    for (let key in eventData) {
      formData.append(key, eventData[key]);
    }

    try {
      if (isEditing) {
        await axios.put(`http://localhost:8081/api/updateEvent/${editingId}`, formData);
        toast.success('Event updated successfully!');
        setIsEditing(false);
        setEditingId(null);
      } else {
        await axios.post('http://localhost:8081/api/create-event', formData);
        toast.success('Event added successfully!');
      }
      setEventData({
        course: '',
        price: '',
        thumbnail: '',
        task: '',
        date: '',
        duration: ''
      });
      fetchEvents();
    } catch (error) {
      toast.error('Failed to save event. Please try again.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/api/deleteEvent/${id}`);
      toast.success('Event deleted successfully!');
      fetchEvents();
    } catch (error) {
      toast.error('Failed to delete event. Please try again.');
    }
  };

  const handleEdit = (event) => {
    setEventData({
      course: event.course,
      price: event.price,
      thumbnail: '',
      task: event.task,
      date: event.date,
      duration: event.duration
    });
    setIsEditing(true);
    setEditingId(event._id);
  };

  return (
    <div>
      <Toaster />

      <div className="ml-80 flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <form
            className="py-6 px-9"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="mb-5">
              <input
                type="text"
                name="course"
                id="course"
                placeholder="Course"
                value={eventData.course}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                name="task"
                id="task"
                placeholder="Task"
                value={eventData.task}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                name="date"
                id="date"
                placeholder="Date"
                value={eventData.date}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                name="duration"
                id="duration"
                placeholder="Duration"
                value={eventData.duration}
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
                value={eventData.price}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-6 pt-4">
              <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                Upload File
              </label>
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
                    <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                      Drop files here
                    </span>
                    <span className="mb-2 block text-base font-medium text-[#6B7280]">
                      Or
                    </span>
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
                {isEditing ? 'Update Event' : 'Add Event'}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-12">
        <h1 className="text-2xl font-bold mb-4">Events</h1>
        <div>
          {events.map((event) => (
            <div key={event._id} className="flex items-center justify-between
      p-4 mb-8 border border-black rounded-md shadow-lg">
              <div>
                <p className="font-semibold">{event.course}</p>
              </div>
              <div>
                <button
                  onClick={() => handleEdit(event)}
                  className="mr-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(event._id)}
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

export default AddEvent;
