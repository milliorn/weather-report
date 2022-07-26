import React from "react";

export const Top = (props) => {
  const data = [props.city, props.currentTime];

  const BuildTop = () =>
    data.map((e, i) => {
      return (
        <div
          key={i}
          className="flex justify-between text-xs capitalize section-row drop-shadow-md"
        >
          <span className="flex justify-between text-lg font-semibold capitalize drop-shadow-md sm:text-2xl md:text-3xl section-row">
            {e}
          </span>
        </div>
      );
    });

  return (
    <div className="flex items-center justify-between top">
      <BuildTop />
    </div>
  );
};
