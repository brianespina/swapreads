"use client";
import { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here, such as sending data to the server for registration
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="page w-full h-screen bg-brown-50 justify-center items-center flex">
      <div className="signup">
        <div className="card">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 border shadow-lg rounded-2xl p-5 bg-white">
              <div className="flex flex-col">
                <label htmlFor="name" className="font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border rounded-lg p-2 w-100"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border rounded-lg p-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="border rounded-lg p-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="confirmPassword" className="font-semibold">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="border rounded-lg p-2"
                />
              </div>
              <button
                type="submit"
                className="bg-gray-600 rounded-lg text-white p-2 mt-4"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
