import React, { useState, useEffect } from "react";

import selectedWork from "../../data/previewData/selectedWork";
import IconArrow from "../atoms/IconArrow";
import IconAeee from "../atoms/IconAeee";
import IconCaptionDot from "../atoms/IconCaptionDot";
import { motion } from "framer-motion";

export default function GridModule() {
  const [columns, setColumns] = useState([[], [], [], []]);

  const distributeItems = () => {
    const width = window.innerWidth;
    let columnCount;

    if (width >= 1281) {
      columnCount = 4;
    } else if (width >= 999) {
      columnCount = 3;
    } else if (width >= 834) {
      columnCount = 2;
    } else if (width >= 440) {
      columnCount = 2;
    } else {
      columnCount = 1;
    }

    const newColumns = Array.from({ length: columnCount }, () => []);

    selectedWork.forEach((item, index) => {
      const columnIndex = index % columnCount;
      newColumns[columnIndex].push({ ...item, id: index + 1 });
    });

    setColumns(newColumns);
  };

  useEffect(() => {
    distributeItems();

    const handleResize = () => {
      distributeItems();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
                  paddingTop: "0rem",
                  paddingRight: "2.78rem" /* 48 */,
                  paddingBottom: "2.78rem" /* 48 */,
                  paddingLeft: "2.78rem" /* 48 */,
                  transition: { type: "spring", stiffness: 300, damping: 24 },
                },
                hover: {
                  paddingTop: "0rem",
                  paddingRight: "6.482rem" /* 112 */,
                  paddingBottom: "7.53rem" /* 130 */,
                  paddingLeft: "1.39rem" /* 24 */,
                  transition: { type: "spring", stiffness: 300, damping: 16 },
                },
              };
            } else if (hasGciShort) {
              imageVariants = {
                rest: {
                  paddingTop: "2.084rem" /* 36 */,
                  paddingRight: "2.084rem" /* 36 */,
                  paddingBottom: "2.084rem" /* 36 */,
                  paddingLeft: "2.084rem" /* 36 */,
                  transition: { type: "spring", stiffness: 300, damping: 24 },
                },
                hover: {
                  paddingTop: "7.53rem" /* 130 */,
                  paddingRight: "6.482rem" /* 112 */,
                  paddingBottom: "0rem",
                  paddingLeft: "1.39rem" /* 24 */,
                  transition: { type: "spring", stiffness: 300, damping: 16 },
                },
              };
            } else {
              imageVariants = {
                rest: {
                  paddingTop: "2.78rem" /* 48 */,
                  paddingRight: "2.78rem" /* 48 */,
                  paddingBottom: "0rem",
                  paddingLeft: "2.78rem" /* 48 */,
                  transition: { type: "spring", stiffness: 300, damping: 24 },
                },
                hover: {
                  paddingTop: "7.53rem" /* 130 */,
                  paddingRight: "6.482rem" /* 112 */,
                  paddingBottom: "0rem",
                  paddingLeft: "1.39rem" /* 24 */,
                  transition: { type: "spring", stiffness: 300, damping: 16 },
                },
              };
            }

            const titleVariants = hasGciFix
              ? {
                  rest: {
                    bottom: "1.852rem" /* 32 */,
                    transition: { type: "spring", stiffness: 300, damping: 24 },
                  },
                  hover: {
                    bottom: "4.17rem" /* 72 */,
                    transition: { type: "spring", stiffness: 300, damping: 16 },
                  },
                }
              : {
                  rest: {
                    top: "-1.16rem" /* -20 */,
                    transition: { type: "spring", stiffness: 300, damping: 24 },
                  },
                  hover: {
                    top: "1.16rem" /* 20 */,
                    transition: { type: "spring", stiffness: 300, damping: 16 },
                  },
                };

            const buttonVariants = hasGciFix
              ? {
                  rest: {
                    bottom: "1.16rem" /* 20 */,
                    transition: { type: "spring", stiffness: 300, damping: 24 },
                  },
                  hover: {
                    bottom: "1.16rem" /* 20 */,
                    transition: { type: "spring", stiffness: 300, damping: 16 },
                  },
                }
              : {
                  rest: {
                    top: "1.16rem" /* 20 */,
                    transition: { type: "spring", stiffness: 300, damping: 24 },
                  },
                  hover: {
                    top: "4.283rem" /* 74 */,
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
                {item.imageSrc && (
                  <motion.img
                    className="grid-card-img"
                    src={item.imageSrc}
                    alt={item.imageAlt || ""}
                    width={item.imageWidth}
                    height={item.imageHeight}
                    variants={imageVariants}
                  />
                )}
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
                        left: "-1.16rem",
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
