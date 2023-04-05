import LinearGradient from "../components/LinearGradient.jsx";
import useMediaQuery from "../hooks/useMediaQuery.jsx";
import { useState } from "react";

import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const [skills, setSkills] = useState([
    { title: "HTML", percent: "85" },
    { title: "CSS", percent: "75" },
    { title: "Tailwind CSS", percent: "60" },
    { title: "JavaScript", percent: "75" },
    { title: "React", percent: "40" },
    { title: "Java", percent: "65" },
    { title: "C#", percent: "70" },
    { title: "Node JS", percent: "in progress now" },
  ]);

  const [currentSkill, setCurrentSkill] = useState({
    title: "HTML",
    percent: "85",
  });

  let percentType =
    typeof currentSkill.percent === "number" ? `Number` : `text`;

  console.log(percentType);

  const circumference = ((2 * 22) / 7) * 120;

  return (
    <main
      id="skills"
      className="pt-10 pb-24 mb-20 grid w-full min-h-screen bg-deep-blue place-content-center"
    >
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <p className="mt-10 mb-7">
            Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
            fames odio in at.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0"></div>
      </div>

      {/* SKILLS */}

      <main className="grid w-full bg-deep-blue place-content-center">
        <div className="flex justify-center">
          <section className="p-16 space-y-6 bg-gray-800 rounded-xl md:grid md:grid-cols-2 md:gap-4 sm:space-y-0 h-full">
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill) => (
                <button
                  key={skill.title}
                  className={`px-4 py-2 text-xl text-blue transition bg-blue-600 rounded-md h-14 w-44 hover:bg-blue-700 ${
                    currentSkill.title === skill.title
                      ? "font-bold ring-2 ring-blue"
                      : ""
                  }`}
                  onClick={() => setCurrentSkill(skill)}
                >
                  {skill.title}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-center">
              <svg className="transform -rotate-90 w-72 h-72">
                <motion.circle
                  cx="145"
                  cy="145"
                  r="120"
                  stroke="ring-blue"
                  strokeWidth="30"
                  fill="transparent"
                  className="text-gray-700"
                  initial={{ strokeDashoffset: circumference }}
                  animate={{
                    strokeDashoffset:
                      circumference -
                      (currentSkill.percent / 100) * circumference,
                  }}
                  transition={{ duration: 1 }}
                />
                <motion.circle
                  cx="145"
                  cy="145"
                  r="120"
                  stroke="currentColor"
                  strokeWidth="30"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={
                    circumference - (currentSkill.percent / 100) * circumference
                  }
                  className="text-blue-500"
                  initial={{ strokeDashoffset: circumference }}
                  animate={{
                    strokeDashoffset:
                      circumference -
                      (currentSkill.percent / 100) * circumference,
                  }}
                  transition={{ duration: 1 }}
                />
              </svg>
              {currentSkill.title === "Node JS" ? (
                <span className="absolute text-xl">{`${currentSkill.percent}`}</span>
              ) : (
                <span className="absolute text-5xl">{`${currentSkill.percent}%`}</span>
              )}
            </div>
          </section>
        </div>
      </main>
    </main>
  );
};

export default MySkills;
