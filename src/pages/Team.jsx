import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Team = () => {
  return (
    <div className="bg-black">
      <div className="max-w-3xl mx-auto px-4 py-8 min-h-screen   text-white">
        <div className="grid grid-cols-1 gap-6">
          <div className="rounded-lg shadow-md p-6 flex flex-col max-w-full">
            <h3 className="text-sm lg:text-lg font-semibold mb-2 text-[#5CC2BC]">
              Gautam Singh Rathore
            </h3>
            <p className=" mb-2">Email: gautamsingh25062005@gmail.com</p>
            <a
              href="https://www.linkedin.com/in/gautam-singh-rathore-74967428b/"
              className="text-blue-500"
            >
             <FaLinkedin className="text-white" size={30}/>
            </a>
          </div>

          <div className="rounded-lg shadow-md p-6 flex flex-col max-w-full">
            <h3 className="text-sm lg:text-lg font-semibold mb-2 text-[#5CC2BC]">
              Harshit Bansal
            </h3>
            <p className=" mb-2">Email: harshitbansalboy@gmail.com</p>
            <a
              href="http://linkedin.com/in/harshit-bansal-b58962298"
              className="text-blue-500"
            >
              <FaLinkedin className="text-white" size={30}/>
            </a>
          </div>

          <div className="rounded-lg shadow-md p-6 flex flex-col max-w-full">
            <h3 className="text-sm lg:text-lg font-semibold mb-2 text-[#5CC2BC]">
              Garvit Godara
            </h3>
            <p className=" mb-2">Email: garvitgodara04@gmail.com</p>
            <a
              href="http://linkedin.com/in/garvit-godara-695ba02a4"
              className="text-blue-500"
            >
              <FaLinkedin className="text-white" size={30}/>
            </a>
          </div>

          <div className="rounded-lg shadow-md p-6 flex flex-col max-w-full">
            <h3 className="text-sm lg:text-lg font-semibold mb-2 text-[#5CC2BC]">
              Harsh Lawania
            </h3>
            <p className=" mb-2">Email: harshlawania10@gmail.com</p>
            <a
              href="http://linkedin.com/in/harsh-lawania-300b96310"
              className="text-blue-500"
            >
              <FaLinkedin className="text-white" size={30}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
