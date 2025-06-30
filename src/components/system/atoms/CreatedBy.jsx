import IconHeart from "./IconHeart";
import IconCaptionDot from "./IconCaptionDot";

const CreatedBy = () => {
  return (
    <p className="caption c-end">
      2018 – 2025
      <IconCaptionDot />
      <span>
        Crafted on React with <IconHeart />
      </span>
    </p>
  );
};

export default CreatedBy;
