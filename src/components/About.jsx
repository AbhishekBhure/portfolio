import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { TypingText } from "./CustomText";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt={title}
            className="w-[100px] h-[100px] object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <p className={styles.sectionSubText}>
          <TypingText title="| Introduction" />
        </p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.45 }}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Hello and welcome to my portfolio! I&apos;m{" "}
          <span className="text-white">Abhishek Bhure</span> , a passionate{" "}
          <span className="text-white">Full Stack Developer</span> with a drive
          for creating Web-related projects that make a meaningful impact. With
          hands-on experience over several projects, I have honed my skills in
          <span className="text-white">
            {" "}
            ReactJs, NodeJs, ExpressJs, MongoDB.
          </span>{" "}
          I am dedicated to delivering visually stunning designs, efficient
          coding, and seamless user experiences. <br />
          What sets me apart is my ability to combine creativity with strategic
          thinking. I approach each project with a keen eye for detail and a
          deep understanding of my clients&apos;objectives. By collaborating
          closely with my clients, I ensure that every deliverable reflects
          their brand identity and resonates with their target audience. <br />I
          invite you to explore my portfolio, where I showcase a curated
          selection of my work. Each project represents a unique challenge and
          an opportunity to push boundaries. I&apos;m always excited to take on
          new projects and collaborate with like-minded individuals. <br />
          {/* Feel free to reach out to me at [Your Contact Information] to discuss
        how we can work together to bring your ideas to life. Let&apos;s create
        something extraordinary! */}
        </motion.p>
        <motion.div className="max-w-3xl">hi</motion.div>
      </div>

      <div className="mt-20 flex items-center justify-center flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
