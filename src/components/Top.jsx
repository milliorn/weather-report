import React from "react";

export const Top = (props) => {
  const { city, currentTime } = props;

  return (
    <div className="flex items-center justify-between top">
      <div className="flex justify-between text-xs capitalize section-row">
        <span className="flex justify-between text-lg font-semibold capitalize sm:text-2xl md:text-3xl section-row">
          {city}
        </span>
      </div>
      <div className="flex justify-between text-xs capitalize section-row">
        <span className="flex justify-between text-lg font-semibold capitalize sm:text-2xl md:text-3xl section-row">
          {currentTime}
        </span>
      </div>
    </div>
  );
};
