import { useState } from "react";

export default function EduBackground({ onNext, onBack }) {
  const [formData, setFormData] = useState({
    educationLevel: "",
    grade: "",
    institution: "",
    course: "",
    graduationDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData); // Pass data to parent (MultiForm)
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <form 
          onSubmit={handleSubmit} 
          className="bg-white shadow-md rounded-lg p-6 sm:p-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Educational Background
          </h2>

          {/* Highest Level of Education */}
          <div className="mb-6 space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Highest level of education
            </label>
            <select
              name="educationLevel"
              value={formData.educationLevel}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Select</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="High School">High School</option>
              <option value="Postgraduate">Postgraduate</option>
            </select>
          </div>

          {/* Grade */}
          <div className="mb-6 space-y-2">
            <label htmlFor="grade" className="block text-sm font-medium text-gray-700">
              Grade
            </label>
            <input
              type="text"
              id="grade"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              placeholder="Field text goes here"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* Institution Name */}
          <div className="mb-6 space-y-2">
            <label htmlFor="institution" className="block text-sm font-medium text-gray-700">
              Institution name
            </label>
            <input
              type="text"
              id="institution"
              name="institution"
              value={formData.institution}
              onChange={handleChange}
              placeholder="Enter Input"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* Course */}
          <div className="mb-6 space-y-2">
            <label htmlFor="course" className="block text-sm font-medium text-gray-700">
              Course
            </label>
            <input
              type="text"
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              placeholder="Enter Input"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* Expected Graduation Date */}
          <div className="mb-6 space-y-2">
            <label htmlFor="graduationDate" className="block text-sm font-medium text-gray-700">
              Expected graduation date
            </label>
            <input
              type="date"
              id="graduationDate"
              name="graduationDate"
              value={formData.graduationDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={onBack}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Previous
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}