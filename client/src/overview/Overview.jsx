import React from "react";
import Stats from "../components/Stats";

const Overview = () => {
  return (
    <div className="h-screen flex flex-row ">
      <div className="w-24 border px-3 py-2 h-full bg-white">
        <div>logo</div>
      </div>

      {/* right sectioin */}

      <div className="bg-gray-200 py-6 px-9 w-full flex flex-col gap-y-8">
        <h1 className="text-xl ">Overview</h1>

        <div className="flex justify-between items-center self-stretch">
          <Stats num={124} text={"total number of students"} />
          <Stats num={12} text={"total number of courses"} />
          <Stats num={"$2000"} text={"total amount earned"} />
          <Stats num={"Guitar"} text={"best performing course"} />
          <Stats num={"Flute"} text={"worst perorming course"} />
        </div>

        {/* table-1 */}

        <div>
          <p className="font-bold">LATEST ENROLMENT</p>
          <div className="mt-4 p-6 bg-white rounded-md">
            <table className="w-full ">
              <thead>
                <tr>
                  <td className="text-sm font-bold">Enr. No</td>
                  <td className="text-sm font-bold">S. Name</td>
                  <td className="text-sm font-bold">C. Name</td>
                  <td className="text-sm font-bold">Fees</td>
                  <td className="text-sm font-bold ">Enr. Date</td>
                </tr>
              </thead>
              <tbody>
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
      </div>
    </div>
  );
};

export default Overview;
