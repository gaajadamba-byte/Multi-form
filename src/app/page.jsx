"use client";

import React, { useState } from "react";
import { Logo } from "./components/Logo";
import { TextField } from "./components/TextField";

const page = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const isFirstNameValid = () => {
    if (firstname === "") return "fist name cannot be empty";
  };

  return (
    <div>
      <div className="w-full h-screen bg-gray-300 flex justify-center items-center">
        <div className="w-[480px] min-h-[655px] bg-white rounded-lg p-8">
          <div className="space-y-2">
            <Logo />
            <h1 className="font-semibold text-2xl">Join Us! 😎</h1>
            <p className="text-lg text-[#8E8E8E]">
              Please provide all current information accurately.
            </p>
            <TextField
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              error={isFirstNameValid()}
              required={true}
              label="First name"
              placeholder="John ... "
            />
            <TextField
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              required={true}
              label="Last name"
              placeholder="Doe ... "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
