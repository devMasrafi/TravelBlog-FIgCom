import React from "react";

const Sidebody = () => {
  return (
    <div className="mt-20 space-y-6 px-4">
      {/* Title Card */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <img className="h-10 mx-auto block" src="public/TravelBlog.png" alt="" />

        <p className="text-gray-600 text-center mt-2">
          Your Adventure Starts Here
        </p>
      </div>

      {/* location and placess */}
      <div className="">
        <p className="text-md text-center opacity-40 capitalize">
          this if the locaition, someplace, post 0011
        </p>
      </div>

      {/* contacts and buttons */}
      <div>
        <ul className="flex items-center justify-center gap-x-3">
          <li>
            <a href="#" className="text-blue-500">
              contacts
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500">
              message
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebody;
