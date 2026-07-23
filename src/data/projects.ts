import hmis from "../assets/projects/hospital.png";
import ecommerce from "../assets/projects/ecommerce.png";
import quotation from "../assets/projects/quotationmanagement.png";
import samridhi from "../assets/projects/samridhimanagement.png";

export const projects = [
  {
    id: 1,
    title: "Hospital Management System",
    description:
      "A complete hospital management system with patient registration, OPD/IPD, admissions, nursing desk, billing, and role-based authentication.",
    tech: ["React", "Node.js", "Express.js", "MySQL", "Ant Design"],
    github: "",
    live: "",
    image: hmis
  },
  {
    id: 2,
    title: "E-Commerce Web Application",
    description:
      "A full-stack e-commerce platform with authentication, product management, shopping cart, and admin dashboard.",
    tech: ["React", "Node.js", "Express.js", "MySQL"],
    github: "",
    live: "",
    image: ecommerce
  },
  {
    id: 3,
    title: "Quotation Management System",
    description:
      "A quotation management application for creating, managing and printing quotations with authentication.",
    tech: ["React", "Node.js", "MySQL"],
    github: "https://github.com/manishmandal15/quotations_frontend",
    live: "https://quotations-frontend.vercel.app/",
    image: quotation
  },
  {
    id: 4,
    title: "Samridhi Service Management",
    description:
      "A responsive business website for interior design and home services with modern UI.",
    tech: ["React", "CSS", "Bootstrap"],
    github: "https://github.com/manishmandal15/service-management",
    live: "https://manishmandal15.github.io/service-management/",
    image: samridhi
  }
];