import LinearGradient from "../components/LinearGradient.jsx";
import useMediaQuery from "../hooks/useMediaQuery.jsx";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({
  title,
  titleMain,
  text,
  imageExtension,
  githubLink,
  liveLink,
}) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    import(
      `../assets/${title.split(" ").join("-").toLowerCase()}.${imageExtension}`
    )
      .then((module) => {
        setImageSrc(module.default);
      })
      .catch((err) => console.error(err));
  }, [title]);

  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
      bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  /* // dynamically import image using require.context()
  const images = require.context("../assets", true);
  const imageSrc = images(`./${projectTitle}.jpeg`).default;
*/

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className="flex justify-center">
        <div className={overlayStyles}>
          <h1 className="font-playfair text-4xl">{titleMain}</h1>
          <p className="mt-7">{text}</p>

          <div className="grid grid-flow-col gap-x-5 m-5">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <button className="github-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </button>
            </a>

            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <button class="px-4 py-2 text-lg font-semibold text-white bg-gray-800 rounded hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray active:bg-gray-900">
                Website Live
              </button>
            </a>
          </div>

          {/*<button>{liveLink}</button>*/}
        </div>
      </div>
      {imageSrc && (
        <img src={imageSrc} className="h-auto w-full" alt={titleMain} />
      )}{" "}
    </motion.div>
  );
};

const Projects = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Change slidesToShow based on isDesktop
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div id="projects">
      <motion.div
        className="md:w-2/4 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="m-12">
          <p className="font-playfair font-semibold text-4xl ">
            MY <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5"></div>
        </div>

        <p className="mt-10 mb-10">
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at.
        </p>
      </motion.div>

      {/* DESKTOP NAV */}

      <Slider {...settings}>
        <div>
          <Project
            title="Project 50"
            imageExtension="jpg"
            titleMain="Forkify Website"
            text="Technologies: HTML, CSS and JS"
            githubLink="https://github.com/leoMoste/forkify-App"
            liveLink="https://forkify-mustafaver.netlify.app/"
          />
        </div>
        <div>
          <Project
            title="Project 51"
            imageExtension="jpg"
            titleMain="Roll the Dice Game"
            text="Technologies: HTML, CSS and JS"
            githubLink="https://github.com/leoMoste/forkify-App"
            liveLink="https://gg-role-thedice.netlify.app/"
          />
        </div>
        <div>
          <Project
            title="Project 52"
            imageExtension="jpg"
            titleMain="Guess my Number Game"
            text="Technologies: HTML, CSS and JS"
            githubLink="https://github.com/leoMoste/trytoguessgg-Game-JS"
            liveLink="https://trytoguessgg.netlify.app/"
            className="h-full w-full"
          />
        </div>
        <div>
          <Project
            title="Project 53"
            imageExtension="jpg"
            titleMain="Omnifood Website"
            text="Technologies: HTML and CSS"
            githubLink="https://github.com/leoMoste/OmniFood-Website"
            liveLink="https://omnifood-mostafa.netlify.app"
            className="h-full w-full"
          />
        </div>
      </Slider>
    </div>
  );
};
export default Projects;
