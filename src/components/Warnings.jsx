import React from "react";
/**
 * https://stackoverflow.com/a/20940191/11986604
 */
export const Warnings = (props) => {
  const { alert } = props;

  if (Array.isArray(alert) && alert.length) {
    const weather = alert[0];
    const finish = new Date(weather.end * 1000);

    const begin = new Date(weather.start * 1000);
    const dateBegin = begin.toLocaleDateString();
    const dateEnd = finish.toLocaleDateString();
    const sender_name = weather.sender_name;
    const tag = weather.tags[0];
    const timeEnd = finish.toLocaleTimeString();
    const timeStart = begin.toLocaleTimeString();

    return (
      <div className="my-4">
        <div className="pb-2">
          <p className="uppercase tase sm:text-2xl drop-shadow-md">
            Warning: <span className="capitalize">{tag}</span>
          </p>
          <p className="sm:text-lg md:text-xl drop-shadow-md">
            Issued by {sender_name} at {timeStart} {dateBegin} until {timeEnd}{" "}
            {dateEnd}.
          </p>
          <p className="xl:text-lg 2xl:text-xl drop-shadow-md">
            {weather.description}
          </p>
        </div>
      </div>
    );
  }
};
