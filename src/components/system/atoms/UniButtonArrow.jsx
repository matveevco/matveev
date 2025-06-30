import { motion } from "framer-motion";
import IconArrow from "./IconArrow";

const arrowLeftVariants = {
  rest: {
    left: "-0.8rem",
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  hover: {
    left: "0.8rem",
    transition: { type: "spring", stiffness: 300, damping: 16 },
  },
};

const arrowRightVariants = {
  rest: {
    right: "0.8rem",
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  hover: {
    right: "-0.8rem",
    transition: { type: "spring", stiffness: 300, damping: 16 },
  },
};

const buttonVariants = {
  rest: {
    paddingTop: "0.7rem",
    paddingRight: "2.431rem",
    paddingBottom: "0.7rem",
    paddingLeft: "1.042rem",
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  hover: {
    paddingTop: "0.7rem",
    paddingRight: "1.042rem",
    paddingBottom: "0.7rem",
    paddingLeft: "2.431rem",
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
