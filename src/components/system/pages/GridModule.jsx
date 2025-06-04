import React from "react";

import selectedWork from "../../data/previewData/selectedWork";
import IconArrow from "../atoms/IconArrow";
import IconAeee from "../atoms/IconAeee";
import IconCaptionDot from "../atoms/IconCaptionDot";
import { motion } from "framer-motion";

export default function GridModule() {
  const columns = [[], [], [], []];

  selectedWork.forEach((item, index) => {
    columns[index % 4].push({ ...item, id: index + 1 });
  });

  return (
    <div className="grid-wrapper">
      {columns.map((column, colIndex) => (
        <div className="grid-column" key={colIndex}>
          {column.map((item) => {
            const hasGciFix = item.additionalClass?.includes("gci-fix");
            const hasGciShort = item.additionalClass?.includes("gci-short");

            let imageVariants;

            if (hasGciFix) {
              imageVariants = {
                rest: {
                  paddingTop: "0em",
                  paddingRight: "3em",
                  paddingBottom: "3em",
                  paddingLeft: "3em",
                  transition: { type: "spring", stiffness: 300, damping: 24 },
                },
                hover: {
                  paddingTop: "0em",
                  paddingRight: "7em",
                  paddingBottom: "8em",
                  paddingLeft: "1.5em",
                  transition: { type: "spring", stiffness: 300, damping: 16 },
                },
              };
            } else if (hasGciShort) {
              imageVariants = {
                rest: {
                  paddingTop: "2em",
                  paddingRight: "2em",
                  paddingBottom: "2em",
                  paddingLeft: "2em",
                  transition: { type: "spring", stiffness: 300, damping: 24 },
                },
                hover: {
                  paddingTop: "8em",
                  paddingRight: "7em",
                  paddingBottom: "0em",
                  paddingLeft: "1.5em",
                  transition: { type: "spring", stiffness: 300, damping: 16 },
                },
              };
            } else {
              imageVariants = {
                rest: {
                  paddingTop: "3em",
                  paddingRight: "3em",
                  paddingBottom: "0em",
                  paddingLeft: "3em",
                  transition: { type: "spring", stiffness: 300, damping: 24 },
                },
                hover: {
                  paddingTop: "8em",
                  paddingRight: "7em",
                  paddingBottom: "0em",
                  paddingLeft: "1.5em",
                  transition: { type: "spring", stiffness: 300, damping: 16 },
                },
              };
            }

            const titleVariants = hasGciFix
              ? {
                  rest: {
                    bottom: 32,
                    transition: { type: "spring", stiffness: 300, damping: 24 },
                  },
                  hover: {
                    bottom: 72,
                    transition: { type: "spring", stiffness: 300, damping: 16 },
                  },
                }
              : {
                  rest: {
                    top: -20,
                    transition: { type: "spring", stiffness: 300, damping: 24 },
                  },
                  hover: {
                    top: 20,
                    transition: { type: "spring", stiffness: 300, damping: 16 },
                  },
                };

            const buttonVariants = hasGciFix
              ? {
                  rest: {
                    bottom: 20,
                    transition: { type: "spring", stiffness: 300, damping: 24 },
                  },
                  hover: {
                    bottom: 20,
                    transition: { type: "spring", stiffness: 300, damping: 16 },
                  },
                }
              : {
                  rest: {
                    top: 20,
                    transition: { type: "spring", stiffness: 300, damping: 24 },
                  },
                  hover: {
                    top: 74,
                    transition: { type: "spring", stiffness: 300, damping: 16 },
                  },
                };

            return (
              <motion.a
                key={item.id}
                href={`article/${item.link}`}
                className={`grid-item ${item.additionalClass?.join(" ")}`}
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <IconAeee />
                <motion.img
                  className="grid-card-img"
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  width={item.imageWidth}
                  height={item.imageHeight}
                  variants={imageVariants}
                />
                <motion.div
                  className="grid-card-title"
                  variants={titleVariants}
                >
                  <p className="text-title text-hl">{item.title}</p>
                  <p className="caption">
                    {item.tags?.map((tag, index) => (
                      <React.Fragment key={index}>
                        {tag}
                        {index < item.tags.length - 1 && <IconCaptionDot />}
                      </React.Fragment>
                    ))}
                  </p>
                </motion.div>
                <motion.div
                  className="grid-card-button"
                  variants={buttonVariants}
                >
                  <div className="usmb-wrap">
                    <div className="uni-sm-button">{item.info}</div>
                  </div>
                  <motion.div
                    className="usmb-wrap usmb-icon"
                    variants={{
                      rest: {
                        left: -20,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 24,
                        },
                      },
                      hover: {
                        left: 0,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        },
                      },
                    }}
                  >
                    <div className="uni-sm-button">
                      <IconArrow />
                    </div>
                  </motion.div>
                </motion.div>
              </motion.a>
            );
          })}
        </div>
      ))}
    </div>
  );
}
