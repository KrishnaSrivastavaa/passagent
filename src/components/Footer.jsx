import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-800 text-white flex flex-col justify-center items-center   w-full">
      <div className="logo font-bold text-xl">
        <span className="text-green-500"> &lt; </span>
        Pass
        <span className="text-green-500">agent / &gt; </span>
      </div>
      <div className="flex justify-center items-center">
        Created with{" "}
        <lord-icon
          src="https://cdn.lordicon.com/xyboiuok.json"
          trigger="morph"
          state="morph-heart"
          colors="primary:#e83a30"
          
        ></lord-icon>{" "}
        by Krishna Srivastava
      </div>
    </div>
  );
};

export default Footer;
