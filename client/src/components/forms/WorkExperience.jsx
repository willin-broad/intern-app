import { useState } from "react";

export default function WorkExperience({ onNext, onBack }) {
  const [formData, setFormData] = useState({
    hasExperience: "",
    companyName: "",
    position: "",
    startDate: "",
    endDate: "",
    responsibilities: "",
    portfolioUrl: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <form 
          onSubmit={handleSubmit} 
          className="bg-white shadow-md rounded-lg p-6 sm:p-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Work Experience (if any)
          </h2>

          {/* Has Experience Dropdown */}
          <div className="mb-6 space-y-2">
            <label htmlFor="hasExperience" className="block text-sm font-medium text-gray-700">
              Do you have any previous work experience?
            </label>
            <select
              id="hasExperience"
              name="hasExperience"
              value={formData.hasExperience}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          {formData.hasExperience === "yes" && (
            <>
              {/* Company Name */}
              <div className="mb-6 space-y-2">
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                  Company name:
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Enter Input"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Position */}
              <div className="mb-6 space-y-2">
                <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                  Position:
                </label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  placeholder="Enter Input"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Date Range */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-2">
                  <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                    From:
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <p className="text-xs text-gray-500">Beginning date</p>
                </div>
                <div className="space-y-2">
                  <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                    To:
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <p className="text-xs text-gray-500">Ending period</p>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mb-6 space-y-2">
                <label htmlFor="responsibilities" className="block text-sm font-medium text-gray-700">
                  Responsibilities and Achievements:
                </label>
                <textarea
                  id="responsibilities"
                  name="responsibilities"
                  value={formData.responsibilities}
                  onChange={handleChange}
                  placeholder="List of all responsibilities and achievements"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Portfolio Website */}
              <div className="mb-6 space-y-2">
                <label htmlFor="portfolioUrl" className="block text-sm font-medium text-gray-700">
                  Portfolio Website
                </label>
                <div className="flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    https://
                  </span>
                  <input
                    type="text"
                    id="portfolioUrl"
                    name="portfolioUrl"
                    value={formData.portfolioUrl}
                    onChange={handleChange}
                    placeholder="Link goes here"
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </>
          )}

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