import React, { useState } from "react";

function Activity2() {
  const [istoggle, setIsToggle] = useState(false);

  const [firstname, setFirstname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleToggle = () => {
    setIsToggle(!istoggle);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    alert(`
        You're successfully registered!
        firstname: ${firstname}
        username: ${username},
        password: ${password}
        `);
  };

  return (
    <div
      className={`${
        istoggle ? "bg-[#212121]" : ""
      } flex items-center justify-center h-screen`}
    >
      <button
        type="button"
        onClick={handleToggle}
        className={`${
          istoggle ? "bg-white shadow shadow-gray-400 " : "bg-black text-white"
        } text-sm absolute top-0 right-0 m-4 px-4 py-2 rounded-lg`}
      >
        {istoggle ? "light mode" : "dark mode"}
      </button>
      <form
        onSubmit={handleSubmitForm}
        className="flex flex-col space-y-4 p-4 rounded-lg border border-gray-400 w-[360px]"
      >
        <div>
          <span className={`text-xl font-bold ${istoggle ? "text-white" : "text-zinc-700"}`}>
            Register Form
          </span>
        </div>
        <div className="flex flex-col">
          <label
            className={`${istoggle ? "tex" : ""} text-sm text-gray-400`}
            htmlFor="firstname"
          >
            First Name
          </label>
          <input
            className={`${
              istoggle ? "bg-[#303030]" : "bg-gray-100"
            } p-2  rounded-lg`}
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            placeholder={`${istoggle ? "" : "Enter your first name..."}`}
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-gray-400" htmlFor="username">
            Username
          </label>
          <input
            className={`${
              istoggle ? "bg-[#303030]" : "bg-gray-100"
            } p-2  rounded-lg`}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder={`${istoggle ? "" : "Enter your username..."}`}
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-gray-400" htmlFor="username">
            Password
          </label>
          <input
            className={`${
              istoggle ? "bg-[#303030]" : "bg-gray-100"
            } p-2  rounded-lg`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={`${istoggle ? "" : "Enter your password..."}`}
            type="password"
          />
        </div>
        <button
          type="submit"
          className="p-2 rounded-lg bg-blue-400 text-white font-medium"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Activity2;
