import React from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
function NewComponent() {
  return (
    <div>
      <div className="px-4 py-3 flex gap-x-3">
        <select
          name=""
          className="px-3 py-2 rounded-md outline-0 border border-gray-300  focus:border-green-500 h-10"
          id=""
        >
          <option value="">Select Type</option>
          <option value="pending">Pending</option>
          <option value="active">Active</option>
          <option value="deactive">Deactive</option>
        </select>
        <input
          type="text"
          placeholder="seach News"
          className="px-3 py-2 rounded-md outline-0 border border-gray-300 
        focus:border-green-500 h-10"
        />
      </div>
      <div className="relative overflow-x-auto p-4">
        <table className="w-full text-sm text-left text-slate-600">
          <thead className="text-xs text-gray-700  uppercase bg-gray-50">
            <tr>
              <th className="px-7 py-3"> NO</th>
              <th className="px-7 py-3"> Title</th>
              <th className="px-7 py-3"> Image</th>
              <th className="px-7 py-3"> Category</th>
              <th className="px-7 py-3"> Description</th>
              <th className="px-7 py-3"> Date</th>
              <th className="px-7 py-3"> Status</th>
              <th className="px-7 py-3"> Action</th>
            </tr>
          </thead>
          <tbody>
         { [1,2,3,4,5,6,7,8,9,10].map((n,i)=> <tr key={i} className="bg-white border-b">
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">
                নদীর তীরে একটি প্রাসাদ: আহসান মঞ্জিল
              </td>
              <td className="px-6 py-4">
                <img
                  className="w-[40px] h-[40px]"
                  src="https://khulnanews.live/uploads/images/2021/05/image_750x_609462bdab29f.jpg"
                  alt=""
                />
              </td>
              <td className="px-6 py-4">Bangladesh</td>
              <td className="px-6 py-4">আহসান মঞ্জিল পরিদর্শন । এই</td>
              <td className="px-6 py-4">May 7, 2021</td>
              <td className="px-6 py-4">
                <span className="px-2 py-[2px] bg-green-800 text-green-100 rounded-lg text-xs corsor-pointer">
                  active
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="flex justify-start items-center gap-x-4 text-white">
                  <Link className="p-1 bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50">
                    <FaEye />
                  </Link>
                  <Link className="p-1 bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50">
                    <FaEdit />
                  </Link>
                  <div className="p-1 bg-red-500 rounded hover:shadow-lg hover:shadow-red-500/50">
                    <FaTrash />
                  </div>
                </div>
              </td>
            </tr>)}
           
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NewComponent;
