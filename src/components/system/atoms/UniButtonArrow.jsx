import { motion } from "framer-motion";
import IconArrow from "./IconArrow";

const arrowLeftVariants = {
  rest: {
    left: "-14px",
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  hover: {
    left: "14px",
    transition: { type: "spring", stiffness: 300, damping: 16 },
  },
};

const arrowRightVariants = {
  rest: {
    right: "14px",
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  hover: {
    right: "-14px",
    transition: { type: "spring", stiffness: 300, damping: 16 },
  },
};

const buttonVariants = {
  rest: {
    paddingTop: "12px",
    paddingRight: "38px",
    paddingBottom: "12px",
    paddingLeft: "18px",
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  hover: {
    paddingTop: "12px",
    paddingRight: "18px",
    paddingBottom: "12px",
    paddingLeft: "38px",
    transition: { type: "spring", stiffness: 300, damping: 16 },
  },
};

const UniButtonArrow = ({ link, text }) => {
  const isDisabled = !link;
  const className = `uni-button uni-button-icon${isDisabled ? " uni-button-disabled" : ""}`;

  if (isDisabled) {
    return (
      <div className={className}>
        <div className="icon-arrow-hover">
          <IconArrow svgID="arrow-hover" />
        </div>
        {text}
        <div className="icon-arrow-default">
          <IconArrow svgID="arrow-default" />
        </div>
      </div>
    );
  }

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      variants={buttonVariants}
      initial="rest"
      animate="rest"
      whileHover="hover"
    >
      <motion.div variants={arrowLeftVariants} className="icon-arrow-hover">
        <IconArrow svgID="arrow-hover" />
      </motion.div>
      {text}
      <motion.div variants={arrowRightVariants} className="icon-arrow-default">
        <IconArrow svgID="arrow-default" />
      </motion.div>
    </motion.a>
  );
};

export default UniButtonArrow;
