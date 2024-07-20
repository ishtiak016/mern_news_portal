import React from "react";
import { Link } from "react-router-dom";

import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
function Writters() {
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
      <div className="relative overflow-x-auto p-4">
        <table className="w-full text-sm text-left text-slate-600">
          <thead className="text-xs text-gray-700  uppercase bg-gray-50">
            <tr>
              <th className="px-7 py-3"> NO</th>
              <th className="px-7 py-3"> Name</th>
              <th className="px-7 py-3"> category</th>
              <th className="px-7 py-3"> Role</th>
              <th className="px-7 py-3"> Image</th>
              <th className="px-7 py-3"> Email</th>
              <th className="px-7 py-3"> Active</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n, i) => (
              <tr key={i} className="bg-white border-b">
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">
                  Md ishtiak Ahmmed
                </td>
                <td className="px-6 py-4">ICT CSE ITS</td>
                <td className="px-6 py-4">Bangladesh Admin</td>
                <td className="px-6 py-4">ishtiak016@gmail.com</td>
                <td className="px-6 py-4">
                  <img
                    className="w-[40px] h-[40px]"
                    src="https://khulnanews.live/uploads/images/2021/05/image_750x_609462bdab29f.jpg"
                    alt=""
                  />
                </td>
                <td className="px-6 py-4">Active</td>    
              
        
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Writters;
