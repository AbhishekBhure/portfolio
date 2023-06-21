import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { testimonials } from "../constants";
import "./Feedbacks.css";
import { TypingText } from "./CustomText";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  linkedInUrl,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className="bg-black-200 p-10  rounded-3xl lg:min-w-[28rem]  slider-card"
  >
    <p className="text-white text-[48px] font-black p-quot"> &quot;</p>
    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px] card-p">
        {testimonial}
      </p>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}{" "}
            <span className=" in">
              {" "}
              <a href={linkedInUrl}>in</a>{" "}
            </span>
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>
        <img
          src={image}
          alt={`feedback-by-${name}`}
          className="w-10 h-10 rounded-full obejct-cover"
        />
      </div>
    </div>
  </motion.div>
);
const Feedbacks = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]  overflow-hidden ">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]  `}
      >
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
        >
          <p className={styles.sectionSubText}>
            {" "}
            <TypingText title="| What others say" />{" "}
          </p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <motion.div
        ref={carousel}
        drag="x"
        whileTap={{ cursor: "grabbing" }}
        dragConstraints={{ right: 0, left: -width }}
        className={`${styles.paddingX} -mt-20 pb-14 flex gap-7 cursor-grab`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
