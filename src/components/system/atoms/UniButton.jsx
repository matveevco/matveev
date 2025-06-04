const UniButton = ({ link, text }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="uni-button"
    >
      {text}
    </a>
  );
};

export default UniButton;
