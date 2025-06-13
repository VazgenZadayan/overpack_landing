import React from "react";

const CardIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  width = 46,
  height = 46,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 46 46"
    fill="none"
    {...props}
  >
    <path
      d="M36.6563 8.625L9.34375 8.625C8.00938 8.625 6.72966 9.15508 5.78612 10.0986C4.84258 11.0422 4.3125 12.3219 4.3125 13.6563L4.3125 32.3438C4.3125 33.6781 4.84258 34.9578 5.78612 35.9014C6.72966 36.8449 8.00938 37.375 9.34375 37.375H36.6563C37.9906 37.375 39.2703 36.8449 40.2139 35.9014C41.1574 34.9578 41.6875 33.6781 41.6875 32.3438V13.6563C41.6875 12.3219 41.1574 11.0422 40.2139 10.0986C39.2703 9.15508 37.9906 8.625 36.6563 8.625Z"
      stroke="white"
      strokeWidth="2.875"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.3125 17.25L41.6875 17.25"
      stroke="white"
      strokeWidth="2.875"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.8125 26.9542H11.5V28.7501H15.8125V26.9542Z"
      stroke="white"
      strokeWidth="2.875"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CardIcon;
