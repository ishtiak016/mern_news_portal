import React from "react";
import { Link } from "react-router-dom";
function AddWritter() {
  return (
    <div className="bg-white rounded-md">
      <div className="flex justify-between p-4">
        <h2 className="text-xl font-medium">Writter</h2>
        <Link
          className="px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-600"
          to="/dashboard/writter/add"
        >
          Add Writter
        </Link>
      </div>
      <div className="p-4">
        <form>
          <div className="grid grid-cols-2 gap-x-8 mb-3">
            <div className="flex flex-col gap-y-2">
              <label
                className="text-md font-medium text-gray-600"
                htmlFor="name"
              >
                Name
              </label>
              <input
                name="name"
                id="name"
                type="text"
                placeholder="seach"
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 
        focus:border-green-500 h-10"
              />
            </div>

            <div className="flex flex-col gap-y-2">
              <label
                className="text-md font-medium text-gray-600"
                htmlFor="name"
              >
                Category
              </label>
              <select
                name="category"
                id="category"
                type="text"
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 
        focus:border-green-500 h-10"
              >
                <option value="">--Select Category--</option>
                <option value="edication">Edication</option>
                <option value="edication">Edication</option>
                <option value="edication">Edication</option>
                <option value="edication">Edication</option>
                <option value="edication">Edication</option>
                <option value="edication">Edication</option>
                <option value="edication">Edication</option>
                <option value="edication">Edication</option>
                <option value="edication">Edication</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 mb-3">
            <div className="flex flex-col gap-y-2">
              <label
                className="text-md font-medium text-gray-600"
                htmlFor="email"
              >
                Email
              </label>
              <input
                name="email"
                id="email"
                type="email"
                placeholder="Email"
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 
        focus:border-green-500 h-10"
              />
            </div>

            <div className="flex flex-col gap-y-2">
              <label
                className="text-md font-medium text-gray-600"
                htmlFor="password"
              >
                Password
              </label>
              <input
                name="password"
                id="password"
                type="password"
                placeholder="*******"
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 
        focus:border-green-500 h-10"
              />
            </div>
          </div>
          <div className="mt-4">
          <button
          className="px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-600"
          
        >
          Add Writter
        </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddWritter;
