import React from "react";

function Card({ img }) {
  return (
    <div className="card text-left">
      <a
        href="#"
        className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl "
      >
        <img
          className="object-contain w-full h-40 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={img}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-cyan-500">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="mb-3 font-normal text-gray-600">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </a>
    </div>
  );
}

export default Card;
