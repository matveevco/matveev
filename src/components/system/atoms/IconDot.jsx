const IconDot = () => {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 4C2 2.89543 2.89543 2 4 2C5.10457 2 6 2.89543 6 4C6 5.10457 5.10457 6 4 6C2.89543 6 2 5.10457 2 4Z"
        fill="#0063FF"
      >
        <animate
          attributeName="opacity"
          values="1; 1; 0; 0; 1; 1;"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </path>

      <path
        d="M7 4C7 2.34315 5.65685 1 4 1C2.34315 1 1 2.34315 1 4C1 5.65685 2.34315 7 4 7V8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4C8 6.20914 6.20914 8 4 8V7C5.65685 7 7 5.65685 7 4Z"
        fill="#0063FF"
      />
    </svg>
  );
};

export default IconDot;
