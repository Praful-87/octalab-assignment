import React from "react";

const Stats = ({ num, text }) => {
  return (
    <div className="w-60 border p-4 rounded-md bg-white">
      <div className="flex flex-row items-center">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="32" height="32" rx="16" fill="#B2EECF" />
          <path
            d="M19.6364 15.4545C21.1455 15.4545 22.3546 14.2364 22.3546 12.7273C22.3546 11.2182 21.1455 10 19.6364 10C18.1273 10 16.9091 11.2182 16.9091 12.7273C16.9091 14.2364 18.1273 15.4545 19.6364 15.4545ZM12.3637 15.4545C13.8727 15.4545 15.0818 14.2364 15.0818 12.7273C15.0818 11.2182 13.8727 10 12.3637 10C10.8546 10 9.63638 11.2182 9.63638 12.7273C9.63638 14.2364 10.8546 15.4545 12.3637 15.4545ZM12.3637 17.2727C10.2455 17.2727 6.00002 18.3364 6.00002 20.4545V22.7273H18.7273V20.4545C18.7273 18.3364 14.4818 17.2727 12.3637 17.2727ZM19.6364 17.2727C19.3727 17.2727 19.0727 17.2909 18.7546 17.3182C19.8091 18.0818 20.5455 19.1091 20.5455 20.4545V22.7273H26V20.4545C26 18.3364 21.7546 17.2727 19.6364 17.2727Z"
            fill="black"
          />
        </svg>
        <div className="ml-4">
          <p className="text-2xl font-normal">{num}</p>
          <p className="text-xs font-normal">{text}</p>
        </div>
      </div>
      <p className="mt-2 text-end text-xs text-red-400 cursor-pointer">View</p>
    </div>
  );
};

export default Stats;
