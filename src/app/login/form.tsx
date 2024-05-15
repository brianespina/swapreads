"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { signIn } from "next-auth/react";

interface FormData {
  email: string;
  password: string;
}
export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | undefined>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const authData = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });
    if (authData.status === 401) {
      setError(authData.error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 border shadow-lg rounded-2xl p-5 md:w-[360px]">
          <div>{error || ""}</div>
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
              className="border rounded-lg p-2 text-gray-900"
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
              className="border rounded-lg p-2 text-gray-900"
            />
          </div>
          <button
            type="submit"
            className="bg-gray-600 rounded-lg text-white p-2 mt-4"
          >
            Sign In
          </button>
        </div>
      </form>
    </>
  );
}
