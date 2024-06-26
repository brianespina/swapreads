"use client";
import { ChangeEvent, FormEvent, useState } from "react";

import { Message } from "primereact/message";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string | undefined>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.confirmPassword !== formData.password) {
      setError("Password do not match");
      return;
    }
    const response = await fetch(`/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data.message);
    setError(
      data.message.issues ? data.message.issues[0].message : data.message
    );

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="flex flex-col gap-2 border shadow-lg rounded-2xl p-5 bg-white md:w-[360px]">
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
        {error ? <Message className="text-red-500 gap-2" text={error} /> : null}
      </div>
    </form>
  );
}
