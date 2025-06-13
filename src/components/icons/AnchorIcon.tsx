import React from "react";

const AnchorIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  width = 51,
  height = 51,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 51 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="51" height="51" rx="25.5" fill="#F03341" />
    <path
      d="M26.0607 13.9393C25.4749 13.3536 24.5251 13.3536 23.9393 13.9393L14.3934 23.4853C13.8076 24.0711 13.8076 25.0208 14.3934 25.6066C14.9792 26.1924 15.9289 26.1924 16.5147 25.6066L25 17.1213L33.4853 25.6066C34.0711 26.1924 35.0208 26.1924 35.6066 25.6066C36.1924 25.0208 36.1924 24.0711 35.6066 23.4853L26.0607 13.9393ZM23.5 36C23.5 36.8284 24.1716 37.5 25 37.5C25.8284 37.5 26.5 36.8284 26.5 36L23.5 36ZM25 15L23.5 15L23.5 36L25 36L26.5 36L26.5 15L25 15Z"
      fill="white"
    />
  </svg>
);

export default AnchorIcon;
