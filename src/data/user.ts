import { Github, Linkedin, Code, Mail, Phone } from "lucide-react";
import projects from './projects.json';
import experience from './experience.json';
import skills from './skills.json';

export const userData = {
  name: "Vatsal Gandhi",
  title: "Full Stack Developer",
  email: "vats.gandhi.83@gmail.com",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/vatsalgandhi83",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vatsalgandhi83/",
      icon: Linkedin,
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/vatsalgandhi83/",
      icon: Code,
    },
    {
      name: "Email",
      url: "mailto:vats.gandhi.83@gmail.com",
      icon: Mail,
    },
    {
      name: "Phone",
      url: "tel:+14082109488",
      icon: Phone,
    },
  ],
  about:
    "I am a passionate full-stack developer with a knack for creating elegant and efficient solutions. I have a strong foundation in both front-end and back-end technologies, and I am always eager to learn new things.",
  animationSequence: [
    "I'm a Software Developer",
    1000,
    "I'm a Full-Stack Engineer",
    1000,
    "I'm a Tech Enthusiast",
    1000,
    "I'm a Problem Solver",
    1000,
  ],
  projects,
  experience,
  skills,
};
