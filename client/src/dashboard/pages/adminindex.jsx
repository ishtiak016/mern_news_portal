import React from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
function adminindex() {
  return (
    <div mt-3>
      <div className="grid grid-cols-5 gap-x-4">
        <div
          className="w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 
          bg-white text-slate-700 "
        >
          <span className="text-xl font-bold">50</span>
          <span className="text-md">Total News</span>
        </div>
        <div
          className="w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 
          bg-white text-slate-700 "
        >
          <span className="text-xl font-bold">50</span>
          <span className="text-md">Pending News</span>
        </div>
        <div
          className="w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 
          bg-white text-slate-700 "
        >
          <span className="text-xl font-bold">50</span>
          <span className="text-md">Active News</span>
        </div>
        <div
          className="w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 
          bg-white text-slate-700 "
        >
          <span className="text-xl font-bold">50</span>
          <span className="text-md">Deactive News</span>
        </div>
        <div
          className="w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 
          bg-white text-slate-700 "
        >
          <span className="text-xl font-bold">50</span>
          <span className="text-md">Total Writers</span>
        </div>
      </div>
      <div className="bg-white p-4 mt-5">
        <div className="flex justify-between items-center pb-4">
          <h2>Recent News</h2>
          <Link>View All</Link>
        </div>
        <div>
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
                <tr className="bg-white border-b">
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
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default adminindex;
