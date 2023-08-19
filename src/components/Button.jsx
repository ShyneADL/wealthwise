import React from "react";

const Button = ({ styles, text}) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-white shadow-lg shadow-sky-500/40 bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    {text}
  </button>
);

export default Button;
