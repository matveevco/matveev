import Keys from "./Keys.jsx";

const CardKeys = () => {
  return (
    <div className="card-keys">
      <p>8+ years of experience in</p>
      <Keys />
      <div className="card-keys-info">
        <svg
          width="30"
          height="20"
          viewBox="0 0 30 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 20H0V19.9785C5.99125 19.6895 11.3222 16.0494 13.7637 10.5605L14.2363 9.43945C16.782 3.71641 22.469 0 28.7705 0H30V20Z"
            fill="white"
          />
        </svg>
        <p>tap it</p>
        <svg
          width="30"
          height="20"
          viewBox="0 0 30 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 20H30V19.9785C24.0088 19.6895 18.6778 16.0494 16.2363 10.5605L15.7637 9.43945C13.218 3.71641 7.53099 0 1.22949 0H0V20Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default CardKeys;
