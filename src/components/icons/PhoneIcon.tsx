import React from "react";

const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  width = 32,
  height = 32,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <path
      d="M21 1H11C10.2044 1 9.44129 1.31607 8.87868 1.87868C8.31607 2.44129 8 3.20435 8 4V28C8 28.7957 8.31607 29.5587 8.87868 30.1213C9.44129 30.6839 10.2044 31 11 31H21C21.7956 31 22.5587 30.6839 23.1213 30.1213C23.6839 29.5587 24 28.7957 24 28V4C24 3.20435 23.6839 2.44129 23.1213 1.87868C22.5587 1.31607 21.7956 1 21 1Z"
      stroke="#F03341"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 1H12.5C12.6326 1 12.7598 1.05268 12.8536 1.14645C12.9473 1.24021 13 1.36739 13 1.5C13 1.76522 13.1054 2.01957 13.2929 2.20711C13.4804 2.39464 13.7348 2.5 14 2.5H18C18.2652 2.5 18.5196 2.39464 18.7071 2.20711C18.8946 2.01957 19 1.76522 19 1.5C19 1.36739 19.0527 1.24021 19.1464 1.14645C19.2402 1.05268 19.3674 1 19.5 1H21"
      stroke="#F03341"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default PhoneIcon;
