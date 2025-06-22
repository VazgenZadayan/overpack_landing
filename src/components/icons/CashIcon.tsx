import React from "react";

const CashIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
      d="M3 21H29C29.2652 21 29.5196 20.8946 29.7071 20.7071C29.8946 20.5196 30 20.2652 30 20V6C30 5.73478 29.8946 5.48043 29.7071 5.29289C29.5196 5.10536 29.2652 5 29 5H3C2.73478 5 2.48043 5.10536 2.29289 5.29289C2.10536 5.48043 2 5.73478 2 6V20C2 20.552 2.448 21 3 21Z"
      stroke="#F03341"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 24H28"
      stroke="#F03341"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 27H26"
      stroke="#F03341"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 18C17.3261 18 18.5979 17.4732 19.5355 16.5355C20.4732 15.5979 21 14.3261 21 13C21 11.6739 20.4732 10.4021 19.5355 9.46447C18.5979 8.52678 17.3261 8 16 8C14.6739 8 13.4021 8.52678 12.4645 9.46447C11.5268 10.4021 11 11.6739 11 13C11 14.3261 11.5268 15.5979 12.4645 16.5355C13.4021 17.4732 14.6739 18 16 18Z"
      stroke="#F03341"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M30 10C28.6739 10 27.4021 9.47322 26.4645 8.53553C25.5268 7.59785 25 6.32608 25 5"
      stroke="#F03341"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 10C3.32608 10 4.59785 9.47322 5.53553 8.53553C6.47322 7.59785 7 6.32608 7 5"
      stroke="#F03341"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M30 16C28.6739 16 27.4021 16.5268 26.4645 17.4645C25.5268 18.4021 25 19.6739 25 21"
      stroke="#F03341"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 16C3.32608 16 4.59785 16.5268 5.53553 17.4645C6.47322 18.4021 7 19.6739 7 21"
      stroke="#F03341"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CashIcon;
