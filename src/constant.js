// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png'
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mcLogo from './assets/tech_logo/mc.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import solidityLogo from './assets/tech_logo/solidity.png'
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import saltoris from './assets/tech_logo/saltoris.png'
import blockchain from './assets/tech_logo/blockchain.png'
import ecommerce from './assets/tech_logo/Ecommerce.png'
import portfolio from './assets/tech_logo/portfolio.png'
import aktuLogo from './assets/tech_logo/AktuLogo.png'
import xschool from './assets/tech_logo/xschool.png'
import xiischool from './assets/tech_logo/xiischool.png'




export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'MySQL', logo: mysqlLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'Solidity', logo: solidityLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: saltoris,
      role: "Frontend Developer",
      company: "Saltoris Technologies Pvt. Ltd.",
      date: "March 2024 - March 2025",
      desc: "Developed dynamic and scalable web applications using React.js and Working on API Integration , Designing and Creating New Components using React.js. Collaborated with backend developers to seamlessly integrate APIs, improving performance and enhancing user experience.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "MongoDb",
        "Redux",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: aktuLogo,
      school: "Dr. A. P. J. Abdul Kalam Technical University, Lucknow",
      date: "August 2019 - July 2023",
      grade: "7.65 CGPA",
      desc: "I completed my Bachelor's degree in Computer Science and Engineering (B.Tech.) from MGM's college of Engineering and technology, Noida. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development.",
      degree: "Bachelor of Technology - B.Tech. (CSE)",
    },
    {
      id: 1,
      img: xiischool,
      school: "Maa Sharda K. Inter College, Ghazipur",
      date: "July 2018 - April 2019",
      grade: "72.8%",
      desc: "I completed my class 12 education from Maa Sharda K. Inter College, Ghazipur, under the UP board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "UP Board(XII)",
    },
    {
      id: 2,
      img: xschool,
      school: "Sri Kamlakar Choubey Adarsh Seva Vidhyalay Intermediate College, Varanasi",
      date: "August 2016 - June 2017",
      grade: "86.16%",
      desc: "I completed my class 10 education from Sri Kamlakar Choubey Adarsh Seva Vidhyalay Intermediate College, Varanasi, under the UP board, where I studied Science with Computer.",
      degree: "UP Board(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "BLOCKCHAIN BASED E-VOTING SYSTEM",
      description:
        "Strengthening remote voting security and scalability with TypeScript, Solidity, HTML/CSS, and MySQL.Developing a robust backend and secure Ethereum smart contracts for tamper-resistant voting.Prioritizing user-friendly design with an intuitive HTML/CSS interface and Integrating MySQL for efficient data storage.",
      image: blockchain,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/AshishJivan/Blockchain-Based-Voting-System",
    //   webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "E-COMMERCE WEBSITE",
      description:
        "Developed a static e-commerce website utilizing HTML, CSS, and JavaScript, providing an online platform for product/service sales. The site prioritizes an enhanced user experience with responsive design and interactive features.The site prioritizes an enhanced user experience with responsive design and interactive features.",
      image: ecommerce,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/AshishJivan/E-Commerce-Website",
    //   webapp: "https://csprep.netlify.app/",
    },
    {
      id: 2,
      title: "PORTFOLIO WEBSITE",
      description:
        "For this project, I utilized ReactJS and CSS to design and develop a responsive and visually appealing user interface for my portfolio. My portfolio is designed to showcase my skills, projects, and blogs in a structured and engaging manner. I deployed this project on Vercel using GitHub, making it accessible to everyone.",
      image: portfolio,
      tags: ["React JS", "Tailwind Css", "JavaScript"],
      github: "https://github.com/AshishJivan/Portfolio-Website",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
  ];  