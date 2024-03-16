import React from "react";

const Entry = ({ value, func, placeholder }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={func}
        placeholder={placeholder}
        className="m-1 p-1 text-center w-[20rem] rounded-lg outline-none bg-gradient-to-r from-red-400 to-amber-500 placeholder-slate-200 font-bold text-lg shadow-2xl shadow-slate-500 text-white"
      />
    </div>
  );
};

export default Entry;
