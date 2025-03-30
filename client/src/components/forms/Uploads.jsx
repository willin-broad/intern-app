import React, { useState } from 'react';
import FormContainer from '../FormContainer';

export default function Uploads({ onNext, onBack, initialData }) {
  const [formData, setFormData] = useState({
    department: "",
    subDepartment: "",
    applicationReason: "",
    passportPhoto: null,
    transcripts: null,
    cv: null,
    recommendationLetter: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      [field]: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  // Sample departments - replace with your actual data
  const departments = ["ICT", "Finance", "HR", "Marketing"];
  const subDepartments = {
    ICT: ["Networking", "Software Development", "Cybersecurity"],
    Finance: ["Accounting", "Investment", "Audit"],
    HR: ["Recruitment", "Training", "Employee Relations"],
    Marketing: ["Digital Marketing", "Brand Management", "Market Research"]
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 outline-none">
      <div className="w-full max-w-md">
        <form 
          onSubmit={handleSubmit} 
          className="bg-white shadow-md rounded-lg p-6 sm:p-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Additional Information
          </h2>

          {/* Department */}
          <div className="mb-6 space-y-2">
            <label htmlFor="department" className="block text-sm font-medium text-gray-700">
              Department:
            </label>
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Select Department</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>

          {/* Sub-department */}
          <div className="mb-6 space-y-2">
            <label htmlFor="subDepartment" className="block text-sm font-medium text-gray-700">
              Sub-department:
            </label>
            <select
              id="subDepartment"
              name="subDepartment"
              value={formData.subDepartment}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
              disabled={!formData.department}
            >
              <option value="">Select Sub-department</option>
              {formData.department && subDepartments[formData.department]?.map(subDept => (
                <option key={subDept} value={subDept}>{subDept}</option>
              ))}
            </select>
          </div>

          {/* Application Reason */}
          <div className="mb-6 space-y-2">
            <label htmlFor="applicationReason" className="block text-sm font-medium text-gray-700">
              Reason for application
            </label>
            <textarea
              id="applicationReason"
              name="applicationReason"
              value={formData.applicationReason}
              onChange={handleChange}
              placeholder="In a few words...."
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* Passport Photo Upload */}
          <div className="mb-6 space-y-2">
            <label htmlFor="passportPhoto" className="block text-sm font-medium text-gray-700">
              Passport photo (.jpg)
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="passportPhoto"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="passportPhoto"
                      name="passportPhoto"
                      type="file"
                      accept=".jpg,.jpeg"
                      className="sr-only"
                      onChange={(e) => handleFileChange(e, 'passportPhoto')}
                      required
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">Max size: 5GB</p>
              </div>
            </div>
            {formData.passportPhoto && (
              <p className="mt-2 text-sm text-gray-500">
                Selected file: {formData.passportPhoto.name}
              </p>
            )}
          </div>

          {/* Academic Transcripts Upload */}
          <div className="mb-6 space-y-2">
            <label htmlFor="transcripts" className="block text-sm font-medium text-gray-700">
              Academic Transcripts (.pdf)
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="transcripts"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="transcripts"
                      name="transcripts"
                      type="file"
                      accept=".pdf"
                      className="sr-only"
                      onChange={(e) => handleFileChange(e, 'transcripts')}
                      required
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">Max size: 10MB</p>
              </div>
            </div>
            {formData.transcripts && (
              <p className="mt-2 text-sm text-gray-500">
                Selected file: {formData.transcripts.name}
              </p>
            )}
          </div>

          {/* CV Upload */}
          <div className="mb-6 space-y-2">
            <label htmlFor="cv" className="block text-sm font-medium text-gray-700">
              CV (.pdf)
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="cv"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="cv"
                      name="cv"
                      type="file"
                      accept=".pdf"
                      className="sr-only"
                      onChange={(e) => handleFileChange(e, 'cv')}
                      required
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">Max size: 5GB</p>
              </div>
            </div>
            {formData.cv && (
              <p className="mt-2 text-sm text-gray-500">
                Selected file: {formData.cv.name}
              </p>
            )}
          </div>

          {/* Letter of Recommendation Upload */}
          <div className="mb-6 space-y-2">
            <label htmlFor="recommendationLetter" className="block text-sm font-medium text-gray-700">
              Letter of Recommendation
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="recommendationLetter"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="recommendationLetter"
                      name="recommendationLetter"
                      type="file"
                      accept=".pdf"
                      className="sr-only"
                      onChange={(e) => handleFileChange(e, 'recommendationLetter')}
                      required
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">Max size: 100mb</p>
              </div>
            </div>
            {formData.recommendationLetter && (
              <p className="mt-2 text-sm text-gray-500">
                Selected file: {formData.recommendationLetter.name}
              </p>
            )}
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
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}