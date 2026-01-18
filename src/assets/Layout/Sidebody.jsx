import React, { useState } from "react";
import ThemeBtn from "../codeSnipets/ThemeBtn";
import { CardModal } from "../codeSnipets/Modal";
import ContactPage from "../Pages/Contact"; 

const Sidebody = () => {
  const [open, setOpen] = useState(false); // Fixed: Corrected typo in setter name

  return (
    <div className="mt-20 space-y-6 px-4">
      {/* Title Card */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        <img
          className="h-10 mx-auto block"
          src="/TravelBlog.png" // Fixed: Removed "public/" prefix
          alt=""
        />
        <p className="text-gray-600 dark:text-gray-300 text-center mt-2">
          Your Adventure Starts Here
        </p>
      </div>

      {/* location and places */}
      <div className="">
        <p className="text-md text-center opacity-40 capitalize text-gray-600 dark:text-gray-400">
          this is the location, someplace, post 0011
        </p>
      </div>

      {/* contacts and buttons */}
      <div className="mt-30">
        <ul className="flex items-center justify-center gap-x-3">
          <li>
            <button onClick={() => setOpen(!open)}>
              <a className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                contacts
              </a>
            </button>
          </li>
          <li>
            <a
              href="#"
              className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
            >
              message
            </a>
          </li>
        </ul>
      </div>

      <CardModal isOpen={open} onClose={() => setOpen(false)}>
        <ContactPage />
      </CardModal>

      {/* Theme */}
      <div className="flex justify-center">
        <ThemeBtn />
      </div>
    </div>
  );
};

export default Sidebody;
