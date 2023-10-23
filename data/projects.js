
const projects = [
  {
    title: "Tekkerz PDP",
    id: "tekkerz",
    subtitle: "Player Development Platform",
    description: "A soccer coaching app that seamlessly integrates player engagement, skill-building, and performance tracking, enabling players to master soccer skills at home with real-time feedback from their coaches and peers.",
    technologies: ["Figma", "React Native", "Express.js", "Firebase", "Axios"],
    imageUrl: "/images/thumbnails/tekkerz.png",
    figmaLink: "https://www.figma.com/proto/gwVxjUEyHvdu57xiCYAhvl/TekkerzPDP?type=design&node-id=10-430&t=MG6oQ904BhGnZONF-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=10%3A430",
    githubRepo: "tekkerz",
    isPrivate: true,
    hidden: false
  },
  {
    title: "ChurroFlow.com",
    id: "churroflow",
    subtitle: "Warehouse Analytics Dashboard",
    description: `Lead a team to develop an innovative platform that transforms routine invoices into actionable business intelligence using data analytics, machine learning and AI.
                  ChurroFlow was presented to a board of Macquarie Group engineers, securing first place for the Software Engineering Macquarie Prize.
                  `,
    technologies: ["React.js", "Python", "FastAPI", "PostgreSQL", "Pytest", "Axios", "AWS" , "Jira", "Confluence"],
    imageUrl: "/images/thumbnails/churroflow.png",
    githubRepo: "churroflow",
    liveLink: "https://www.churroflow.com",
    isPrivate: false,
    hidden: false
  },
  {
    title: "InvestEd",
    id: "invested",
    subtitle: "Gamified Financial Education App Prototype",
    description: "Worked in a team to develop an innovative educational platform designed to empower university students with comprehensive financial knowledge.",
    technologies: ["Figma", "Jira", "Confluence"],
    imageUrl: "/images/thumbnails/invested.png",
    figmaLink: "https://www.figma.com/proto/4NkA0TWj4Qlvk184gJcS4i/InvestEd-Prototypes?type=design&node-id=572-1315&t=pHSTL3OJaxbeOQHw-0&scaling=scale-down&page-id=572%3A1289&starting-point-node-id=572%3A1315",
    hidden: false
  },
  {
    title: "jeremytraini.com",
    id: "jeremytraini",
    subtitle: "Personal Website",
    description: "The website you're on right now. Powered by modern web technologies, this website showcases my passion for engineering and design. Hope you're enjoying it!",
    technologies: ["Next.js", "Axios", "TailwindCSS"],
    imageUrl: "/images/thumbnails/jeremytraini.png",
    liveLink: "#",
    githubRepo: "jeremytraini.com",
    isPrivate: false,
    hidden: false
  },
  {
    title: "QuizzBuzz",
    id: "quizzbuzz",
    subtitle: "Learning Platform",
    description: "Over the course of several months, I build the frontend of QuizzBuzz, an engaging and dynamic quiz platform. Adhering to modern design principles with user-centric functionality, QuizzBuzz delivers a captivating experience for students, making knowledge testing more interactive and enjoyable.",
    technologies: ["React.js", "Material UI", "Jest", "Cypress", "Express.js"],
    imageUrl: "/images/thumbnails/quizzbuzz.png",
    githubRepo: "quizzbuzz",
    isPrivate: true,
    hidden: false
  },
  {
    title: "AusCal",
    id: "auscal",
    subtitle: "Event Management API",
    description: "Over a 3-month period, I developed AusCal, a specialised event management platform for Australians. Merging real-time weather forecasts with public holidays and location data, AusCal provides seamless event scheduling and offers powerful API functionalities, ensuring an optimised event planning experience.",
    technologies: ["Flask", "Python", "SQLite"],
    imageUrl: "/images/thumbnails/auscal.png",
    githubRepo: "auscal",
    isPrivate: false,
    hidden: false
  },
  {
    title: "UNSW Streams",
    id: "unswstreams",
    subtitle: "Digital Communication Tool",
    description: "Drawing inspiration from Microsoft Teams, I worked in a team of 4 to create a backend system that offers a seamless collaboration space. This project not only allowed me to apply advanced software development practices but also honed my ability to function effectively within a team setting.",
    technologies: ["Python", "Flask", "Pytest"],
    imageUrl: "/images/thumbnails/unswstreams.png",
    githubRepo: "unsw-streams",
    isPrivate: true,
    hidden: false
  },
  {
    title: "EdgeNet",
    id: "edgenet",
    subtitle: "Decentralised Edge Network",
    description: "Developed EdgeNet, an Python framework for edge devices, as part of an exploration into decentralised networking. My robust solution facilitates real-time data sharing and computation across devices, reflecting my dedication to integrating advanced technologies with user-centric applications.",
    technologies: ["Python"],
    imageUrl: "/images/thumbnails/edgenet.png",
    githubRepo: "edge-net",
    isPrivate: false,
    hidden: false
  },
  {
    title: "CollegeConnector",
    id: "collegeconnector",
    subtitle: "Digital Wayfinding Solution",
    description: "I created College Connector as a modern solution to an age-old problem: navigating expansive school campuses. Recognising the need for a user-friendly and precise tool, I integrated an intuitive touch interface and incorporated the A* search algorithm for advanced pathfinding. This tool not only streamlines the campus experience for students and parents but also embodies my dedication to creating technology that's both impactful and user-centric.",
    technologies: ["Java", "Greenfoot"],
    imageUrl: "/images/thumbnails/collegeconnector.png",
    githubRepo: "college-connector",
    isPrivate: false,
    hidden: false
  }
];

export default projects;
