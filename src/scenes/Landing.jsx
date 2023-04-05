import useMediaQuery from "../hooks/useMediaQuery.jsx";
import SocialMediaIcons from "../components/SocialMediaIcons.jsx";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import mainFoto from "../assets/mainImage.jpg";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  {
    /*md: means "only above medium Screen" */
  }

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      {/* IMAGE SECTION */}

      <div className="md:order-2 flex justify-center basis-3/5 z-10 m-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 
          before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
              src={mainFoto}
              width="518"
              height="648"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
            src={mainFoto}
            width="518"
            height="648"
          />
        )}
      </div>
      {/* MAIN SECTION */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Hey! I'm{" "}
            <span className="bg-gradient-to-r from-blue to-green-500 text-transparent bg-clip-text">
              Mustafah Hasan
            </span>
          </p>

          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            I am a passionate IT student currently studying IT-Application
            Development ("Fachinformatiker Anwendungsentwicklung") in my second
            year at <span className="text-lg text-blue"> BSZ Wiesau.</span>{" "}
            Programming has always been my primary focus, and I have honed my
            skills in both general programming and web development. My love for
            technology drives me to constantly expand my knowledge and stay
            up-to-date with the latest advancements in the IT industry. Through
            my dedication to my studies and my passion for programming.
          </p>
        </motion.div>

        {/*Call to Actions */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-to-r from-blue to-green-500 text-deep-blue rounded-sm py-3 px-7 font-semibold
            hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/*<SocialMediaIcons /> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
