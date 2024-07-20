"use client";

import ServiceCategory from "./ServiceCategoory";
import {
  FaCode,
  FaCogs,
  FaChartLine,
  FaBrush,
  FaRobot,
  FaGraduationCap,
} from "react-icons/fa";
import styled from "styled-components";
import "./Services.css";
const Container = styled.div`
  font-family: Arial, sans-serif;
`;
import { motion } from "framer-motion";
import { desVaraints, tagVaraints, titleVaraints } from "@/src/utils/animation";

const columnVariants = {
  hiddenTop: { opacity: 0, y: -100 },
  hiddenBottom: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};
const imageVariants1and3 = {
  hidden: { opacity: 0, scale: 0.8, rotate: -45 },
  visible: { opacity: 1, scale: 1, rotate: 0 },
};

const imageVariants2 = {
  hidden: { opacity: 0, scale: 0.8, rotate: 45 },
  visible: { opacity: 1, scale: 1, rotate: 0 },
};

const servicesData = [
  {
    title: "Digital Marketing",
    vid: '/services/digitalmarketing.mp4',
    services: [
      {
        name: "SEO",
        description:
          "Improve your online presence and engagement with our expert digital marketing services.",
        icon: <FaChartLine />,
      },
      {
        name: "Content Marketing",
        description:
          "Create and distribute valuable, relevant content to attract and engage your target audience.",
        icon: <FaChartLine />,
      },
      {
        name: "Social Media Marketing",
        description:
          "Engage your audience and grow your brand on platforms like Facebook, Instagram, Twitter, and LinkedIn.",
        icon: <FaChartLine />,
      },
      {
        name: "PPC Advertising",
        description:
          "Maximize your ROI with targeted ads on Google, Bing, and social media.",
        icon: <FaChartLine />,
      },
      {
        name: "Email Marketing",
        description:
          "Develop email campaigns that nurture leads and drive conversions.",
        icon: <FaChartLine />,
      },
    ],
  },
  {
    title: "Web Development",
    vid: '/services/webdev.mp4',
    services: [
      {
        name: "Custom Website Design",
        description:
          "Create stunning, user-friendly websites tailored to your brand.",
        icon: <FaCode />,
      },
      {
        name: "E-commerce Development",
        description:
          "Build robust online stores with secure payment gateways and seamless shopping experiences.",
        icon: <FaCode />,
      },
      {
        name: "Web Application Development",
        description:
          "Develop custom web applications to streamline your business processes.",
        icon: <FaCode />,
      },
      {
        name: "Mobile App Development",
        description:
          "Create mobile apps for iOS and Android to reach your audience on the go.",
        icon: <FaCode />,
      },
      {
        name: "UX/UI Design",
        description:
          "Enhance user experience and interface design for better engagement and satisfaction.",
        icon: <FaCode />,
      },
    ],
  },
  {
    title: "IT Solutions",
    vid: '/services/itsol.mp4',
    services: [
      {
        name: "Cloud Services",
        description:
          "Leverage cloud computing for scalable, flexible, and cost-effective IT infrastructure.",
        icon: <FaCogs />,
      },
      {
        name: "Cybersecurity",
        description:
          "Protect your digital assets with advanced security solutions.",
        icon: <FaCogs />,
      },
      {
        name: "IT Support",
        description:
          "Provide comprehensive IT support services to ensure your systems run smoothly.",
        icon: <FaCogs />,
      },
      {
        name: "Network Solutions",
        description:
          "Design and implement secure and reliable network infrastructures.",
        icon: <FaCogs />,
      },
      {
        name: "Data Backup and Recovery",
        description:
          "Ensure your data is safely backed up and can be recovered quickly in case of a disaster.",
        icon: <FaCogs />,
      },
    ],
  },
  {
    title: "Creative Services",
    vid: '/services/creativeservices.mp4',
    services: [
      {
        name: "Graphic Design",
        description:
          "Create stunning visuals for branding, marketing, and communication materials.",
        icon: <FaBrush />,
      },
      {
        name: "Video Production",
        description:
          "Produce high-quality videos for marketing, training, and corporate communications.",
        icon: <FaBrush />,
      },
      {
        name: "Photography",
        description:
          "Offer professional photography services for events, products, and marketing campaigns.",
        icon: <FaBrush />,
      },
      {
        name: "Illustration",
        description:
          "Create custom illustrations for marketing materials, books, and digital media.",
        icon: <FaBrush />,
      },
      {
        name: "Animation",
        description:
          "Develop engaging animations for explainer videos, ads, and presentations.",
        icon: <FaBrush />,
      },
    ],
  },
  {
    title: "Emerging Technologies",
    vid: '/services/emerging.mp4',
    services: [
      {
        name: "Blockchain Solutions",
        description:
          "Implement blockchain technology for secure and transparent transactions.",
        icon: <FaRobot />,
      },
      {
        name: "Artificial Intelligence",
        description:
          "Integrate AI to automate processes, enhance customer experiences, and provide data-driven insights.",
        icon: <FaRobot />,
      },
      {
        name: "Machine Learning",
        description:
          "Develop machine learning models to predict trends and optimize operations.",
        icon: <FaRobot />,
      },
      {
        name: "Internet of Things (IoT)",
        description:
          "Create IoT solutions to connect and manage devices, improving operational efficiency.",
        icon: <FaRobot />,
      },
      {
        name: "Big Data Analytics",
        description:
          "Utilize big data analytics to gain insights and drive informed decision-making.",
        icon: <FaRobot />,
      },
    ],
  },
  {
    title: "Education & Training",
    vid: '/services/education.mp4',
    services: [
      {
        name: "Corporate Training",
        description:
          "Deliver customized training programs to enhance employee skills and productivity.",
        icon: <FaGraduationCap />,
      },
      {
        name: "Workshops and Seminars",
        description:
          "Conduct workshops and seminars on various topics, including digital marketing, IT, and emerging technologies.",
        icon: <FaGraduationCap />,
      },
      {
        name: "Educational Consulting",
        description:
          "Provide consulting services to educational institutions for technology integration and curriculum development.",
        icon: <FaGraduationCap />,
      },
      {
        name: "Webinars",
        description:
          "Host webinars to share knowledge and expertise with a broader audience.",
        icon: <FaGraduationCap />,
      },
    ],
  },
];

export default function Services() {
  return (
    
          <motion.div
            className="ser-container"
            initial="hiddenTop"
            whileInView="visible"
            variants={columnVariants}
            transition={{ duration: 0.5 }}
          >
            {servicesData.map((category, index) => (
              <ServiceCategory
                key={index}
                title={category.title}
                services={category.services}
                vid = {category.vid}
              />
            ))}
          </motion.div>
       
   
  );
}
