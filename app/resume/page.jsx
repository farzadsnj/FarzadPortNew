"use client";

import {
  FaReact,
  FaAws,
  FaNodeJs,
  FaLinux,
  FaWindows,
  FaNetworkWired,
  FaUsersCog,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiGraphql,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiDotnet,
  SiSwagger,
  SiPostgresql,
  SiJest,
  SiMongodb,
  SiSqlite,
  SiJira,
} from "react-icons/si"; // Removed non-existent icons

// about data
const about = {
  title: "About me",
  description:
    "I'm a passionate software engineer with expertise in full-stack development skills, cloud engineering, and application optimization. With hands-on experience in technologies like AWS, React.js, ASP.NET, and PKI security, I thrive on crafting innovative, reliable, and user-friendly solutions.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Fred Sanjarani",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+61) 415 479 443",
    },
    {
      fieldName: "Experience",
      fieldValue: "12+ Years",
    },
    {
      fieldName: "GitHub",
      fieldValue: "Farzadsnj",
    },
    {
      fieldName: "Email",
      fieldValue: "fredsanjarani@gmail.com",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "I'm a passionate software engineer with expertise in full-stack development skills, cloud engineering, and application optimization. With hands-on experience in technologies like AWS, React.js, ASP.NET, and PKI security, I thrive on crafting innovative, reliable, and user-friendly solutions.",
  items: [
    {
      company: "Queensland university of technology",
      position: "Software Engineering Student",
      duration: "2023 - 2025",
    },
    {
      company: "Skyline",
      position: "Front-End Developer",
      duration: "2019 - 2022",
    },
    {
      company: "Parse Bana construction",
      position: "Network Administrator & IT Support",
      duration: "2016 - 2019",
    },
    {
      company: "Torang Graphic Design",
      position: "Graphic Designer & Web Developer",
      duration: "2013 - 2016",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Equipped with a Master's in Information Technology from QUT, specializing in Software Development and Cloud Engineering, and a Bachelor's in ICT from Zand University, I’ve built a strong foundation in cutting-edge technologies, problem-solving, and innovative design.",
  items: [
    {
      institution: "QUT - Brisbane",
      degree: "Master's of IT",
      duration: "2023 - 2025",
    },
    {
      institution: "Zand University of Shiraz",
      degree: "Bachelor's of IT",
      duration: "2015 - 2018",
    },
  ],
};

// Skills data
const skills = {
  title: "My skills",
  description:
    "Explore my diverse skill set encompassing programming languages, cloud technologies, front-end and back-end development, libraries, and hands-on expertise. Each skill is categorized to highlight my technical versatility and application experiences, showcasing my ability to deliver robust and innovative solutions.",
  skillList: [
    { icon: <FaReact />, name: "React.js" },
    { icon: <FaReact />, name: "React Native" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiGraphql />, name: "GraphQL" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiPython />, name: "Python" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiDotnet />, name: "ASP.NET" },
    { icon: <SiSwagger />, name: "Swagger" },
    { icon: <SiPostgresql />, name: "SQL" },
    { icon: <SiJest />, name: "Jest" },
    { icon: <FaLinux />, name: "Linux CLI" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiSqlite />, name: "SQLite" },
    { icon: <SiJira />, name: "Jira" },
    { icon: <FaNetworkWired />, name: "Network Administration" },
    { icon: <FaUsersCog />, name: "Collaboration" },
    { icon: <FaLaptopCode />, name: "Problem-Solving" },
    {
      icon: <image src="/assets/skills/azure.svg" alt="Azure Icon" />,
      name: "Azure",
    },
    {
      icon: <image src="/assets/skills/powershell.svg" alt="Azure Icon" />,
      name: "Powershell",
    },
    {
      icon: <image src="/assets/skills/jwt.svg" alt="Azure Icon" />,
      name: "JWT",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                {/* Title and Description */}
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>

                {/* Languages */}
                <div className="mb-8">
                  <h4 className="text-2xl font-bold mb-2">Languages</h4>
                  <hr className="border-t border-gray-600 mb-4" />
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {[
                      { icon: <SiJavascript />, name: "JavaScript" },
                      { icon: <SiTypescript />, name: "TypeScript" },
                      { icon: <SiPython />, name: "Python" },
                      { icon: <SiDotnet />, name: "C#" },
                      { icon: <SiPostgresql />, name: "SQL" },
                    ].map((skill, index) => (
                      <li
                        key={index}
                        className="flex flex-col items-center justify-center bg-[#232329] rounded-xl p-4 text-center h-[150px]"
                      >
                        <div className="text-6xl">{skill.icon}</div>
                        <p className="text-white text-lg font-semibold mt-2">
                          {skill.name}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cloud Technologies */}
                <div className="mb-8">
                  <h4 className="text-2xl font-bold mb-2">
                    Cloud Technologies
                  </h4>
                  <hr className="border-t border-gray-600 mb-4" />
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {[
                      { icon: <FaAws />, name: "AWS" },
                      {
                        icon: (
                          <image
                            src="/assets/skills/azure.svg"
                            alt="Azure Icon"
                          />
                        ),
                        name: "Azure",
                      },
                      { icon: <FaWindows />, name: "Windows Server" },
                    ].map((skill, index) => (
                      <li
                        key={index}
                        className="flex flex-col items-center justify-center bg-[#232329] rounded-xl p-4 text-center h-[150px]"
                      >
                        <div className="text-6xl">{skill.icon}</div>
                        <p className="text-white text-lg font-semibold mt-2">
                          {skill.name}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hands-On Skills */}
                <div className="mb-8">
                  <h4 className="text-2xl font-bold mb-2">Hands-On Skills</h4>
                  <hr className="border-t border-gray-600 mb-4" />
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {[
                      { icon: <FaLinux />, name: "Linux CLI" },
                      { icon: <SiMongodb />, name: "MongoDB" },
                      { icon: <FaLaptopCode />, name: "Problem-Solving" },
                      { icon: <FaNetworkWired />, name: "Technical Support" },
                    ].map((skill, index) => (
                      <li
                        key={index}
                        className="flex flex-col items-center justify-center bg-[#232329] rounded-xl p-4 text-center h-[150px]"
                      >
                        <div className="text-6xl">{skill.icon}</div>
                        <p className="text-white text-lg font-semibold mt-2">
                          {skill.name}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Other Skills */}
                <div className="mb-8">
                  <h4 className="text-2xl font-bold mb-2">Other Skills</h4>
                  <hr className="border-t border-gray-600 mb-4" />
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {[
                      { icon: <FaUsersCog />, name: "Prompt Engineering" },
                      { icon: <FaUsersCog />, name: "SWOT Analysis" },
                    ].map((skill, index) => (
                      <li
                        key={index}
                        className="flex flex-col items-center justify-center bg-[#232329] rounded-xl p-4 text-center h-[150px]"
                      >
                        <div className="text-6xl">{skill.icon}</div>
                        <p className="text-white text-lg font-semibold mt-2">
                          {skill.name}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* App Experiences */}
                <div className="mb-8">
                  <h4 className="text-2xl font-bold mb-2">App Experiences</h4>
                  <hr className="border-t border-gray-600 mb-4" />
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {[
                      {
                        icon: (
                          <image src="/assets/skills/vmware.svg" alt="VMware" />
                        ),
                        name: "VMware",
                      },
                      {
                        icon: (
                          <image
                            src="/assets/skills/wireshark.svg"
                            alt="Wireshark"
                          />
                        ),
                        name: "Wireshark",
                      },
                      {
                        icon: <image src="/assets/skills/expo.svg" alt="Expo" />,
                        name: "Expo",
                      },
                      {
                        icon: (
                          <image
                            src="/assets/skills/android-studio.svg"
                            alt="Android Studio"
                          />
                        ),
                        name: "Android Studio",
                      },
                      {
                        icon: (
                          <image
                            src="/assets/skills/microsoft-365.svg"
                            alt="Office 360"
                          />
                        ),
                        name: "Office 360",
                      },
                      {
                        icon: (
                          <image
                            src="/assets/skills/photoshop.svg"
                            alt="Adobe Photoshop"
                          />
                        ),
                        name: "Photoshop",
                      },
                      {
                        icon: (
                          <image
                            src="/assets/skills/illustrator.svg"
                            alt="Adobe Illustrator"
                          />
                        ),
                        name: "Illustrator",
                      },
                    ].map((skill, index) => (
                      <li
                        key={index}
                        className="flex flex-col items-center justify-center bg-[#232329] rounded-xl p-4 text-center h-[150px]"
                      >
                        <div className="text-6xl">{skill.icon}</div>
                        <p className="text-white text-lg font-semibold mt-2">
                          {skill.name}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
