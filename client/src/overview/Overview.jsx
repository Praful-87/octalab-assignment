import React from "react";
import Stats from "../components/Stats";
import Table from "../components/Table";
import Logo from "../assets/Logo.png";
const Overview = () => {
  return (
    <div className=" flex flex-row ">
      <div className="w-24 flex flex-col gap-y-12  px-3 py-2 h-screen bg-white">
        <div>
          <img className="block m-auto" src={Logo} alt="" />
        </div>
        <div>
          <div className=" flex flex-col justify-center items-center py-1 bg-red-100 rounded-md">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="mdi:view-dashboard-outline">
                <path
                  id="Vector"
                  d="M19 5V7H15V5H19ZM9 5V11H5V5H9ZM19 13V19H15V13H19ZM9 17V19H5V17H9ZM21 3H13V9H21V3ZM11 3H3V13H11V3ZM21 11H13V21H21V11ZM11 15H3V21H11V15Z"
                  fill="#901E75"
                />
              </g>
            </svg>
            <p className="text-sm text-violet-900">Home</p>
          </div>
          <div className=" flex flex-col justify-center items-center py-1 bg-gray-200  rounded-md mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M22 6H17V14.18C16.69 14.07 16.35 14 16 14C14.34 14 13 15.34 13 17C13 18.66 14.34 20 16 20C17.66 20 19 18.66 19 17V8H22V6ZM15 6H3V8H15V6ZM15 10H3V12H15V10ZM11 14H3V16H11V14Z"
                fill="#83858B"
              />
            </svg>
            <p className="text-sm text-gray-900">Courses</p>
          </div>
        </div>
        <div className="h-full  flex flex-col justify-end">
          <div className=" flex flex-col justify-center items-center py-1 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17 8L15.6 9.4L17.2 11H9V13H17.2L15.6 14.6L17 16L21 12L17 8ZM5 5H12V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H12V19H5V5Z"
                fill="#83858B"
              />
            </svg>
            <p className="text-sm text-gray-500">Logout</p>
          </div>
        </div>
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

        <Table heading="LATEST ENROLMENT" />
        <Table heading="BEST STUDENTS" />
      </div>
    </div>
  );
};

export default Overview;
