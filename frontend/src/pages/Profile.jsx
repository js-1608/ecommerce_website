import React from "react";
import Myorder from "./Myorder";

const Profile = () => {
  return (
    <div className="min-h-screen conatiner mx-auto p-4 md:p-6">
      <div className="grow container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:space-x-6">
            {/* left section */}
            <div className="w-full md:w-1/3 lg:w-1/4 shadow rounded-lg p-6">
                <h1 className="text-3xl font-bold mb-4 ">John Doe</h1>
                <p className="text-lg text-gray-200 mb-4">John@example.com</p>
                <p className="text-lg bg-red-600 text-white py-2 text-center rounded-md">Logout</p>
            </div>

            {/* right section */}
            <div className="w-full md:2/3 lg:w-3/4">
                <Myorder/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
