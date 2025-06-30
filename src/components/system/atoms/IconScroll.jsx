const IconScroll = () => {
  return (
    <svg
      className="twenty20"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 5.83333C5 4.94928 5.35119 4.10143 5.97631 3.47631C6.60143 2.85119 7.44928 2.5 8.33333 2.5H11.6667C12.5507 2.5 13.3986 2.85119 14.0237 3.47631C14.6488 4.10143 15 4.94928 15 5.83333V14.1667C15 15.0507 14.6488 15.8986 14.0237 16.5237C13.3986 17.1488 12.5507 17.5 11.6667 17.5H8.33333C7.44928 17.5 6.60143 17.1488 5.97631 16.5237C5.35119 15.8986 5 15.0507 5 14.1667V5.83333Z"
        stroke="#0D0D0D"
        strokeOpacity="0.56"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 5.83331V9.16665"
        stroke="#0D0D0D"
        strokeOpacity="0.56"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <animate
          attributeName="d"
          dur="3s"
          repeatCount="indefinite"
          fill="freeze"
          values="
            M10 5.83331V9.16665;
            M10 10.8333V14.1667;
            M10 10.8333V14.1667;
            M10 5.83331V9.16665
          "
          keyTimes="0; 0.3; 0.7; 1"
          calcMode="linear"
        />
      </path>
    </svg>
  );
};

export default IconScroll;
