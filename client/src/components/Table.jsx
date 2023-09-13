import React from "react";

const Table = ({ heading }) => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <p className="font-bold text-slate-400">{heading}</p>
        <p className="text-xs text-red-500 cursor-pointer">View all students</p>
      </div>
      <div className="mt-4 p-6 bg-white rounded-md">
        <table className=" w-full table">
          <thead>
            <tr>
              <td className="text-sm py-2 font-bold">Enr. No</td>
              <td className="text-sm font-bold">S. Name</td>
              <td className="text-sm font-bold">C. Name</td>
              <td className="text-sm font-bold">Fees</td>
              <td className="text-sm font-bold ">Enr. Date</td>
            </tr>
          </thead>
          <tbody className="text-xs ">
            <tr>
              <td>1563124</td>
              <td>John Doe</td>
              <td>Percution</td>
              <td>$120</td>
              <td>01.07.1997</td>
            </tr>
            <tr>
              <td>column</td>
              <td>column</td>
              <td>column</td>
              <td>column</td>
              <td>column</td>
            </tr>
            <tr>
              <td>1563124</td>
              <td>John Doe</td>
              <td>Percution</td>
              <td>$120</td>
              <td>01.07.1997</td>
            </tr>
            <tr>
              <td>column</td>
              <td>column</td>
              <td>column</td>
              <td>column</td>
              <td>column</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
