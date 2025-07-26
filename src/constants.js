// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import NTEKlogo from './assets/company_logo/nteksystems.png';
import Direclogo from './assets/company_logo/direc.jpg';
import Kanchine from './assets/company_logo/kanchine.png';

// Education Section Logo's
import pup from './assets/education_logo/PUP.png';
import tsis from './assets/education_logo/TSIS.jpg';

// Project Section Logo's
import smartGlassApp from './assets/work_logo/smartglassapp.png';
import paymayaCheckout from './assets/work_logo/paymayacheckout.png';
import ceaways from './assets/work_logo/ceaways.png';
import smartglassEsp32 from './assets/work_logo/smartglassesp32.png';
import LambdaTest from './assets/work_logo/lamdatest.png';
import kandelaria from './assets/work_logo/kandelaria.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      //{ name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      //{ name: 'Angular', logo: angularLogo },
      //{ name: 'Redux', logo: reduxLogo },
      //{ name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      //{ name: 'GSAP', logo: gsapLogo },
      //{ name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      //{ name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      //{ name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      //{ name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      //{ name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      //{ name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      //{ name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: NTEKlogo,
      role: "Fullstack Developer Intern",
      company: "NTEK Systems",
      date: "August 2023 - October 2023",
      desc: "Applied ReactJS and API integration skills to develop and enhance web-based projects, including a GCash-enabled Parking Lot System, using GitHub for version control and collaboration. Adapted quickly to new tools like Bootstrap and PyQt, contributing to both frontend and backend tasks in a fast-paced development environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "BoothStrap CSS",
        "GitHub",
        "MySQL",
        "Python",
        "GitHub",
        "VS Code",
        "Redux"
      ],
    },
    {
      id: 1,
      img: Direclogo,
      role: "Quality Assurance Intern",
      company: "Direc Business Tech",
      date: "August 2024 - October 2024",
      desc: "Contributed to QA tasks by conducting automated and performance testing using Playwright and BlazeMeter, debugging issues, and supporting front-end and back-end validation using JavaScript, TypeScript, GitHub, and Visual Studio Code.",
      skills: [
        "C#",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
        "Playwright",
        "BlazeMeter",
        "GitHub",
        "VS Code",
        "Automated Testing",
        "Performance Testing"
      ],

    },
    {
      id: 2,
      img: Kanchine,
      role: "Thesis Team Leader",
      company: "KanChine - Polytechnic University of the Philippines",
      date: "April 2024 - June 2025",
      desc: "Served as Team Leader and Lead Developer for the KanChine Project, overseeing the full development lifecycle from planning to deployment. Designed and implemented scalable UI components and a responsive Android application using Java in Android Studio, enabling real-time user interaction with the machine. Handled hardware integration using C++ on Arduino Mega and ESP32, managing sensor data, motor controls, and serial communication between devices. Coordinated with team members to ensure seamless integration between software and hardware, and conducted extensive testing to ensure reliability and performance.",
      skills: [
        "Java",
        "Android Studio",
        "C++",
        "Arduino",
        "ESP32",
        "UI Design",
        "Responsive Design",
        "Serial Communication",
        "Sensor Integration",
        "Motor Control",
        "Hardware-Software Integration",
        "Team Leadership",
        "System Testing"
      ]
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: pup,
      school: "Polytechnic University of the Philippines",
      date: "October 2021 - September 2025",
      grade: "--",
      desc: "I completed my Bachelor's degree in Computer Engineering at the Polytechnic University of the Philippines. During my studies, I gained a strong foundation in both hardware and software systems, covering subjects such as digital logic design, microprocessors, programming, web development, and database management. My academic journey allowed me to work on hands-on projects that applied theoretical knowledge to real-world challenges, helping me develop practical skills in problem-solving and system development.",
      degree: "Bachelor of Science in Computer Engineering",
    },
    {
      id: 1,
      img: tsis,
      school: "Tandang Sora Integrated School - Senior High School",
      date: "June 2019 - August 2021",
      grade: "96%",
      desc: "I completed my senior high school education from Tandang Sora Integrated School, under the GAS Strand (STEM electives), where I studied General Biology, General Physics, General Mathematics, Calculus, with Computer Courses.",
      degree: "General Academic Strand",
    },
    {
      id: 2,
      img: tsis,
      school: "Tandang Sora Integrated School - Junior High School",
      date: "June 2015 - April 2019",
      grade: "95%",
      desc: "I completed my junior high school education from Tandang Sora Integrated School. In my senior year, I became the president of the student body called the Aviators - Campus Integrity Crusaders.",
      degree: "Junior High School",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "CEA Ways",
      description:
        "An interactive 3D map concept for the College of Engineering and Architecture (CEA) campus, featuring a sidebar search and pin indicators for each floor level. This map enhances user navigation by providing an intuitive interface for locating rooms and exploring different floors, offering a seamless and engaging way to access various areas of the CEA building.",
      image: ceaways,
      tags: ["API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/NinoLacambra/CeaWays/",
      webapp: "https://ceaways.github.io/?fbclid=IwY2xjawLwdRBleHRuA2FlbQIxMQABHrr_b7ukbM2gT7igefmuuZ7s-j2DswzqybWt-S5zKgJec4oLYuWFCmHkKMT1_aem_rvYOdxw-OJVc_NRd0AXsvw",
    },
    {
      id: 1,
      title: "Paymaya Checkout Test",
      description:
        "This mini application demonstrates the use of Maya Checkout API in order to accept card and e-wallet payments.",
      image: paymayaCheckout,
      tags: ["React JS", "TypeScript", "Redux", "CSS"],
      github: "https://github.com/NinoLacambra/Paymaya-Checkout-Test",
    },
    {
      id: 2,
      title: "SmartGlass App",
      description:
        "This mobile application, developed using Android Studio in Java/Kotlin (as applicable), was downloaded from GitHub and is built to run on Android devices with Gradle as its build system. Its primary functions include playing audio, sending notifications, and receiving data from a smartglass device.",
      image: smartGlassApp,
      tags: ["Java", "Android Studio", "API"],
      github: "https://github.com/NinoLacambra/SmartGlasses",
    },
    {
      id: 3,
      title: "Lamda Test",
      description:
        "LambdaTest stands out as a pivotal solution in web development and quality assurance. It offers a seamless and efficient platform for cross-browser testing and empowers developers and QA professionals to test their web applications across diverse browsers and operating systems, ensuring compatibility and performance.",
      image: LambdaTest,
      tags: ["TypeScript", "NodeJs", "JavaScript"],
      github: "https://github.com/NinoLacambra/Playwright-101",
    },
    {
      id: 4,
      title: "Smart Glasses - ESP32",
      description:
        "The Smart Glasses Prototype is an innovative wearable embedded system that integrates Internet of Things (IoT) functionality into a sleek, hands-free device designed to enhance the way users interact with digital information in real time.",
      image: smartglassEsp32,
      tags: ["C++"],
      github: "https://github.com/NinoLacambra/SmartGlasses-ESP32",
    },
    {
      id: 5,
      title: "Kandelaria",
      description:
        "Kandelaria is a pioneering company dedicated to transforming waste into value. Through extensive research and experimentation, the company has developed an automated system that repurposes waste cooking oil into high-quality aromatherapy candles. Kandelaria's innovative use of IoT technology ensures precise control over the production process, optimizing resource utilization and minimizing environmental impact.",
      image: kandelaria,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/NinoLacambra/Kandelaria",
    },
    /*{
      id: 6,
      title: "Coding Master",
      description:
        "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
      image: cmLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
      github: "https://codingmasterweb.in/",
      webapp: "https://codingmasterweb.in/",
    },
    {
      id: 7,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Search-App",
      webapp: "https://imagsearch.netlify.app/",
    },
    {
      id: 8,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Background-Remover",
      webapp: "https://removeyourbg.netlify.app/",
    },*/
  ];  