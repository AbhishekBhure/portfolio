import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { TypingText } from "./CustomText";
import resume from "../assets/AbhishekBhure.pdf";
import { socialMedia } from "../constants";

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
        <div className="flex w-[125px]  px-1 justify-center items-center">
          {socialMedia.map((social, name) => (
            <span key={social.name} className="mr-3 h">
              <a href={social.link} className="cursor-pointer">
                <img
                  src={social.icon}
                  alt={`icon-${name}`}
                  className="w-100% h-100%"
                />
              </a>
            </span>
          ))}
        </div>
      </motion.div>

      <div className="flex flex-row md:flex-col flex-wrap">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.45 }}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Hello and welcome to my portfolio I&apos;m{" "}
          <span className="text-white">Abhishek Bhure</span> , a passionate{" "}
          <span className="text-white">Full Stack Developer</span> with a drive
          for creating Web-related projects that make a meaningful impact. With
          hands-on experience over several projects, I have honed my skills in
          <span className="text-white">
            {" "}
            ReactJs, NodeJs, ExpressJs, MongoDB.
          </span>{" "}
          I am dedicated to delivering visually stunning designs, efficient
          coding, and seamless user experiences.
          <br />I invite you to explore my portfolio, where I showcase a curated
          selection of my work. Each project represents a unique challenge and
          an opportunity to push boundaries. I&apos;m always excited to take on
          new projects and collaborate with like-minded individuals. <br />
        </motion.p>
        <motion.div className="max-w-3xl">
          {" "}
          <a
            href={resume}
            className="button mt-2"
            download="abhishekBhure"
            style={{ verticalAlign: "middle" }}
          >
            <span>Download</span>
          </a>
        </motion.div>
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
