import { useState, useEffect } from "react";
import countiesData from './Counties_SubCounties_Wards.json';

export default function PersonalInfo({ onNext }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    idNo: "",
    phone: "",
    address: "",
    county: "",
    subCounty: "",
    ward: "",
    location: "",
  });

  const [subCounties, setSubCounties] = useState([]);
  const [wards, setWards] = useState([]);

  useEffect(() => {
    if (formData.county) {
      const selectedCountyData = countiesData[formData.county];
      if (selectedCountyData) {
        setSubCounties(Object.keys(selectedCountyData));
        setFormData(prev => ({ ...prev, subCounty: "", ward: "" }));
      } else {
        setSubCounties([]);
      }
    } else {
      setSubCounties([]);
    }
  }, [formData.county]);

  useEffect(() => {
    if (formData.county && formData.subCounty) {
      const selectedCountyData = countiesData[formData.county];
      if (selectedCountyData && selectedCountyData[formData.subCounty]) {
        setWards(selectedCountyData[formData.subCounty]);
        setFormData(prev => ({ ...prev, ward: "" }));
      } else {
        setWards([]);
      }
    } else {
      setWards([]);
    }
  }, [formData.county, formData.subCounty]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData); // Pass data to parent (MultiForm)
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 outline-none">
      <div className="w-full max-w-md">
        <form 
          onSubmit={handleSubmit} 
          className="bg-white shadow-md rounded-lg p-6 sm:p-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Personal Information
          </h2>

          {/* Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter First Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter Last Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Gender */}
          <div className="mb-6 space-y-2 py-3">
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700 pl-1">Male</span>
              </label>
              <label className="inline-flex items-center pl-2">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700 pl-1">Female</span>
              </label>
            </div>
          </div>

          {/* Email */}
          <div className="mb-6 space-y-2 py-3">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* ID and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 py-3">
            <div className="space-y-2">
              <label htmlFor="idNo" className="block text-sm font-medium text-gray-700">
                ID Number
              </label>
              <input
                type="text"
                id="idNo"
                name="idNo"
                value={formData.idNo}
                onChange={handleChange}
                placeholder="Enter ID Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Phone number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Address */}
          <div className="mb-6 space-y-2 py-3">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Physical Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter Physical Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* Location Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 py-3">
            <div className="space-y-2">
              <label htmlFor="county" className="block text-sm font-medium text-gray-700">
                County
              </label>
              <select
                id="county"
                name="county"
                value={formData.county}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select County</option>
                {Object.keys(countiesData).map((county) => (
                  <option key={county} value={county}>
                    {county}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="subCounty" className="block text-sm font-medium text-gray-700">
                Sub-County
              </label>
              <select
                id="subCounty"
                name="subCounty"
                value={formData.subCounty}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                disabled={!formData.county}
              >
                <option value="">Select Sub-County</option>
                {subCounties.map((subCounty) => (
                  <option key={subCounty} value={subCounty}>
                    {subCounty}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="ward" className="block text-sm font-medium text-gray-700">
                Ward
              </label>
              <select
                id="ward"
                name="ward"
                value={formData.ward}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                disabled={!formData.subCounty}
              >
                <option value="">Select Ward</option>
                {wards.map((ward) => (
                  <option key={ward} value={ward}>
                    {ward}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter Location"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6 pt-8">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}