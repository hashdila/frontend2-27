import React, { useState } from 'react';
import axios from 'axios';
import api from '../api.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Insert = () => {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    topic: '',
    description: '',
    type: '',
    priority: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${api.defaults.baseURL}/crs/`, formData);
      console.log('Data inserted successfully:', response.data);
  
      toast.success('You have successfully made a change request!');
      setFormData({
        name: '',
        department: '',
        topic: '',
        description: '',
        type: '',
        priority: '',
      });
  
      // Reset placeholder values for input fields
      document.getElementById("name").placeholder = "John";
      document.getElementById("department").placeholder = "Select Department";
      document.getElementById("topic").placeholder = "Change class color";
      document.getElementById("description").placeholder = "Description";
      document.getElementById("type").placeholder = "Type";
      document.getElementById("priority").placeholder = "Priority";
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  };
  

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
              <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department:</label>
              <select id="department" name="department" value={formData.department} onChange={handleChange} className="mt-1 p-2.5 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                <option value="Select">Select Department</option>
                <option value="IT">IT</option>
                <option value="Sales">Sales</option>
                <option value="SAP">SAP</option>
              </select>
            </div>
            <div>
              <label htmlFor="topic" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Topic</label>
              <input type="text" id="topic" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Change class color" value={formData.topic} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
              <input type="text" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description" value={formData.description} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
              <input type="text" id="type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type" value={formData.type} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="priority" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Priority</label>
              <input type="number" id="priority" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Priority" value={formData.priority} onChange={handleChange} />
            </div>
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Insert;
