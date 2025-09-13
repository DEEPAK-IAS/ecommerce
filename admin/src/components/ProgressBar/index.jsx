import React from "react";

const Progress = (props) => {
  return (
    <div className="w-[100px] h-auto overflow-hidden bg-[#f1f1f1] rounded-md">
      <span
        className={`flex items-center w-[${props.value}%] h-[8px] 
          ${ props.type === "success" && "bg-green-500" }
          ${ props.type === "error" && "bg-red-500" }
          ${ props.type === "warning" && "bg-orange-500" }
        `}
      ></span>
    </div>
  );
};

export default Progress;
