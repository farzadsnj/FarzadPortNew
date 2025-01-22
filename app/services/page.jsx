"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { FaCloud, FaLaptopCode, FaNetworkWired, FaDraftingCompass, FaLightbulb, FaCode } from "react-icons/fa";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Cloud Engineering",
    description:
      "Expert in AWS, Azure, and Windows Server, offering cloud infrastructure setup, optimization, and management solutions.",
    href: "",
    icon: <FaCloud />,
  },
  {
    num: "02",
    title: "Full-Stack Web Development",
    description:
      "Building scalable and robust web applications with expertise in front-end and back-end technologies.",
    href: "",
    icon: <FaLaptopCode />,
  },
  {
    num: "03",
    title: "Application Development and Testing",
    description:
      "Developing and testing applications using JavaScript, TypeScript, C#, and ensuring quality with Jest.",
    href: "",
    icon: <FaCode />,
  },
  {
    num: "04",
    title: "Technical Support & Network Administration",
    description:
      "Providing IT support, troubleshooting, and network administration solutions, including DNS and DHCP configuration.",
    href: "",
    icon: <FaNetworkWired />,
  },
  {
    num: "05",
    title: "Process Optimization & Documentation",
    description:
      "Enhancing workflows and creating technical documentation using tools like Jira, VMware, and Wireshark.",
    href: "",
    icon: <FaDraftingCompass />,
  },
  {
    num: "06",
    title: "Consultation and Research",
    description:
      "Delivering strategic insights through SWOT analysis and prompt engineering for business optimization.",
    href: "",
    icon: <FaLightbulb />,
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 flex items-center gap-3">
                  {service.icon}
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
