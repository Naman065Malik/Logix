import React from "react";

const Button = ({ height, width, value }) => {
  return (
    <button
      className="bg-purple-500 text-white font-semibold rounded-lg border-2 border-purple-500 shadow-md neon-purple-shadow hover:bg-purple-700 transition duration-300 w-full sm:w-auto flex items-center justify-center"
      style={{
        height: height,
        width: width,
      }}
    >
      {value}
    </button>
  );
};

export default Button;