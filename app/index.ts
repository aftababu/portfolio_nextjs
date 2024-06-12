import {
  css,
  git,

  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nodejs,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
  telegram,
  facebook,
} from "@/public/assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
    description:
      "CSS is a styling language used for designing the visual presentation of web pages. With CSS, you can control the layout, colors, fonts, and other visual aspects of a website. I have experience in writing CSS code to create responsive and visually appealing user interfaces.",
  },
  {
  
    name: "Express",
    type: "Backend",
    description:
      "Express is a fast and minimalist web application framework for Node.js. It provides a simple and flexible way to build web applications and APIs. I have utilized Express to develop server-side logic and RESTful APIs, handling routes, middleware, and database integrations.",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
    description:
      "Git is a widely used distributed version control system for tracking changes in source code during software development. I am proficient in using Git for version control, creating branches, merging code, resolving conflicts, and collaborating with other developers on projects.",
  },
  {
    name: "GitHub",
    type: "Version Control",
    description:
      "GitHub is a web-based platform for hosting and collaborating on Git repositories. I have experience in using GitHub for managing and sharing code repositories, creating branches, reviewing pull requests, and collaborating with team members on projects.",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
    description:
      "HTML (Hypertext Markup Language) is the standard markup language for creating web pages and applications. I have a strong understanding of HTML and its elements, semantic structure, forms, accessibility, and best practices for structuring content on the web.",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
    description:
      "JavaScript is a versatile and powerful programming language used for creating dynamic and interactive web applications. I am proficient in JavaScript and have used it to implement various functionalities, manipulate the DOM, and make asynchronous requests to backend servers.",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
    description:
      "MongoDB is a popular NoSQL database that provides high performance, scalability, and flexibility. I have experience working with MongoDB to store and retrieve data, perform CRUD operations, and design efficient database schemas for web applications.",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
    description:
      "Material-UI is a popular React UI framework that provides pre-designed components following the Material Design guidelines. I have used Material-UI to build responsive and visually appealing user interfaces, leveraging its extensive component library and customization options.",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
    description:
      "Node.js is a server-side JavaScript runtime environment that allows you to build scalable and high-performance web applications. I have worked with Node.js to develop server-side logic, handle HTTP requests, integrate with databases, and build RESTful APIs.",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
    description:
      "React is a popular JavaScript library for building user interfaces. I have extensive experience in developing React applications, using concepts such as components, state management, and routing. I have also worked with React ecosystem tools like Redux and React Router.",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
    description:
      "Redux is a predictable state management library for JavaScript applications. I have utilized Redux to manage the state of complex applications, implement actions and reducers, and facilitate communication between different components. I am familiar with middleware like Redux Thunk and Redux Saga.",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
    description:
      "Sass (Syntactically Awesome Style Sheets) is a CSS preprocessor that adds features and improves the efficiency of writing CSS. I have used Sass to write modular, reusable, and maintainable stylesheets, leveraging features like variables, mixins, nesting, and inheritance.",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
    description:
      "Tailwind CSS is a utility-first CSS framework that provides a set of pre-designed classes to style web components. I have experience using Tailwind CSS to rapidly build responsive and customized user interfaces, capitalizing on its utility classes and responsive design system.",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
    description:
      "TypeScript is a typed superset of JavaScript that compilesinto plain JavaScript. It adds static typing, classes, interfaces, and other features to JavaScript. I have worked with TypeScript to enhance code quality, improve developer productivity, and provide better tooling and IDE support for JavaScript projects.",
  },
];

export const navLinks = [
  {
    label: "Projects",
    path: "/projects",
  },
  {
    label: "Contact",
    path: "/contact",
  },
  {
    label: "3d View",
    path: "/3d",
  },
];
export const socialLinks = [
  {
    name: "GitHub",
    link: "https://github.com/aftababu",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/aftabwasih",
  },
  {
    name: "Telegram",
    iconUrl: telegram,
    link: "https://t.me/aftabwasih",
  },
  {
    name: "Facebook",
    iconUrl: facebook,
    link: "https://www.facebook.com/profile.php?id=100077050197231",
  },
];

export const projects = [
  {
    _id: "657ffd2ad20dd4ccb08ea572",
    label: "React with UI",
    value: "react_ui",
    projects: [
      {
        title: "⭐Game Hub",
        description:
          "This project is made with React TypeScript and Chakra UI. It is the latest project of Mosh Hamadani in 2023 React course.",
        images: [
          {
            public_id: "myportfolio/usijo6enmh2efylqgxhn",
            url: "https://res.cloudinary.com/dmglab5ej/image/upload/v1704112271/myportfolio/usijo6enmh2efylqgxhn.png",
            _id: "6592b0f71d7f707d3650cf18",
          },
          {
            public_id: "myportfolio/opnhl5qjimwkpsfdc1uk",
            url: "https://res.cloudinary.com/dmglab5ej/image/upload/v1704112317/myportfolio/opnhl5qjimwkpsfdc1uk.png",
            _id: "6592b0f71d7f707d3650cf19",
          },
          {
            public_id: "myportfolio/j2uury7hdtbrhondgnd7",
            url: "https://res.cloudinary.com/dmglab5ej/image/upload/v1704112374/myportfolio/j2uury7hdtbrhondgnd7.png",
            _id: "6592b0f71d7f707d3650cf1a",
          },
        ],
        github: "https://github.com/aftababu/game-hub",
        language: "React, TypeScript, Chakra UI",
        projectUrl: "https://comfy-gnome-324ada.netlify.app/",
        _id: "657ffd2ad20dd4ccb08ea573",
      },
    ],
    __v: 2,
    updatedAt: "2024-01-01T12:32:55.432Z",
  },
  {
    _id: "65924b91240s53ff89a29",
    label: "Vanilla Project",
    value: "vanilla_project",
    projects: [
      {
        title: "Calculator",
        description: "this is a simple calculator using my javascript skill . ",
        images: [
          {
            public_id: "myportfolio/qnmu0cbq8cwg93iazprd",
            url: "https://res.cloudinary.com/dmglab5ej/image/upload/v1704106812/myportfolio/qnmu0cbq8cwg93iazprd.png",
            _id: "65929b3c68sdf8db103fae4e",
          },
        ],
        github: "https://github.com/aftababu/calculator-3",
        language: "Html , Css , Javascript",
        projectUrl: "https://aftababu.github.io/calculator-3/",
        _id: "65929sdf9af8db103fae4d",
      },
      {
        title: "Panda-commerce",
        description:
          "This project represents a fundamental exploration of HTML, CSS, and Bootstrap—a significant milestone in my journey to master web development. Additionally, it serves as an assignment given by the esteemed instructor, Jankar Mahbub. Through this endeavor, I aim to enhance the visual appeal and refine the overall presentation of the project, demonstrating my growing proficiency in front-end design and development.",
        images: [
          {
            public_id: "myportfolio/mqcppmv39gpfwuqnv26e",
            url: "https://res.cloudinary.com/dmglab5ej/image/upload/v1704977798/myportfolio/mqcppmv39gpfwuqnv26e.png",
            _id: "659fe5874eef170ba737f675",
          },
          {
            public_id: "myportfolio/ahgeyttxloylew8zrwar",
            url: "https://res.cloudinary.com/dmglab5ej/image/upload/v1704977798/myportfolio/ahgeyttxloylew8zrwar.png",
            _id: "659fe5874eef170ba737f676",
          },
        ],
        github: "https://github.com/aftababu/panda-commerse",
        language: "Html ,css,bootstrap",
        projectUrl:
          "https://659fe0863fa75e09352fe376--lively-mandazi-7842c6.netlify.app/",
        _id: "659fe5874eef170ba737f674",
      },
      {
        title: "Bank web",
        description:
          "This website is an impressive assignment crafted by Jankar Mahbub. It seamlessly combines HTML, Sass, and JavaScript to create an engaging and interactive bank web application. With its cleverly designed interface, users can effortlessly experience the playfulness of depositing and withdrawing funds. This project showcases the adeptness of Jankar Mahbub in integrating various technologies to deliver a captivating and functional web experience.",
        images: [
          {
            public_id: "myportfolio/rvfekurvtp366vjyjjni",
            url: "https://res.cloudinary.com/dmglab5ej/image/upload/v1704979627/myportfolio/rvfekurvtp366vjyjjni.png",
            _id: "659fecac4eef170ba737f7a7",
          },
          {
            public_id: "myportfolio/tcgjotqpfk4xa90uyp9v",
            url: "https://res.cloudinary.com/dmglab5ej/image/upload/v1704979627/myportfolio/tcgjotqpfk4xa90uyp9v.png",
            _id: "659fecac4eef170ba737f7a6",
          },
        ],
        github: "https://github.com/aftababu/bank-web",
        language: "Html,Sass,Bootstrap",
        projectUrl: "https://leafy-duckanoo-e47ee6.netlify.app/",
        _id: "659fecac4eef170ba737f7a5",
      },
      {
        title: "Peter web",
        description:
          "This single-page HTML and CSS practice web project, curated by the talented Jankar Mahbub, exemplifies their commitment to mastering front-end development. The project showcases an impressive display of HTML and CSS techniques, resulting in a visually appealing and well-structured web page. Through this assignment, Jankar Mahbub demonstrates their ability to create engaging and polished user interfaces while honing their skills in web development",
        images: [
          {
            public_id: "myportfolio/tj1cst6dxwtrrefnynv1",
            url: "https://res.cloudinary.com/dmglab5ej/image/upload/v1705038650/myportfolio/tj1cst6dxwtrrefnynv1.png",
            _id: "65a0d33b4529e1f8941e5098",
          },
          {
            public_id: "myportfolio/weodwicwgf88w2ohgulb",
            url: "https://res.cloudinary.com/dmglab5ej/image/upload/v1705038650/myportfolio/weodwicwgf88w2ohgulb.png",
            _id: "65a0d33b4529e1f8941e5099",
          },
        ],
        github: "https://github.com/aftababu/peter-web",
        language: "Html,Css",
        projectUrl: "https://aftababu.github.io/peter-web/",
        _id: "65a0d33b4529e1f8941e5097",
      },
      {
        title: "⭐FoodHunter",
        description:
          "This project stands as one of my most notable achievements during my journey of learning HTML and CSS under the guidance of an esteemed Udemy teacher. It showcases my dedication to mastering these front-end technologies. This mobile-responsive project exhibits meticulous design principles, ensuring a seamless experience across various devices. By utilizing only HTML and CSS, I have effectively demonstrated my ability to create visually appealing and functional web pages. I highly recommend exploring this project to witness the culmination of my skills and progress in web development",
        images: [
          {
            public_id: "myportfolio/tjuc84mf4mgctgmiz8mk",
            url: "https://res.cloudinary.com/dmglab5ej/image/upload/v1705040578/myportfolio/tjuc84mf4mgctgmiz8mk.png",
            _id: "65a0dac45e272c9d7e1baba7",
          },
          {
            public_id: "myportfolio/rpepylmtb86lpif2aaud",
            url: "https://res.cloudinary.com/dmglab5ej/image/upload/v1705040576/myportfolio/rpepylmtb86lpif2aaud.png",
            _id: "65a0dac45e272c9d7e1baba5",
          },
          {
            public_id: "myportfolio/hqe2ftnpcsaraaji0u0h",
            url: "https://res.cloudinary.com/dmglab5ej/image/upload/v1705040577/myportfolio/hqe2ftnpcsaraaji0u0h.png",
            _id: "65a0dac45e272c9d7e1baba6",
          },
          {
            public_id: "myportfolio/o7vescwou0jyvqjfliix",
            url: "https://res.cloudinary.com/dmglab5ej/image/upload/v1705040579/myportfolio/o7vescwou0jyvqjfliix.png",
            _id: "65a0dac45e272c9d7e1baba8",
          },
          {
            public_id: "myportfolio/lmtn6u3afby07q3revph",
            url: "https://res.cloudinary.com/dmglab5ej/image/upload/v1705040580/myportfolio/lmtn6u3afby07q3revph.png",
            _id: "65a0dac45e272c9d7e1baba9",
          },
        ],
        github: "https://github.com/aftababu/Foodhunter",
        language: "Html,Css",
        projectUrl: "https://aftababu.github.io/Foodhunter/",
        _id: "65a0dac45e272c9d7e1baba4",
      },
    ],
    createdAt: "2024-01-01T05:20:17.294Z",
    updatedAt: "2024-01-12T13:43:55.335Z",
    __v: 0,
  },
  {
    _id: "659fd00707da97794340c667",
    label: "Only React",
    value: "only_react",
    projects: [
      {
        title: "⭐Hoo_Bank",
        description:
          "This remarkable project, named Hoo-Bank, is a front-end masterpiece developed using React and Tailwind CSS. It boasts an impressive design that captures attention and provides an exceptional user experience. The attention to detail in creating a mobile-responsive interface ensures seamless functionality across various devices. As the sole coder of this project, I have leveraged my mastery of JavaScript through completion of a comprehensive JS Mastery course. I invite you to explore this project and witness the culmination of my skills and expertise in web development.",
        images: [
          {
            public_id: "myportfolio/kjb3tqzcscgu10u1ngfk",
            url: "https://res.cloudinary.com/dmglab5ej/image/upload/v1705058040/myportfolio/kjb3tqzcscgu10u1ngfk.png",
            _id: "65a11ef862e85abe865def66",
          },
          {
            public_id: "myportfolio/krxmplkqqds3ujtl2ci4",
            url: "https://res.cloudinary.com/dmglab5ej/image/upload/v1705058038/myportfolio/krxmplkqqds3ujtl2ci4.png",
            _id: "65a11ef862e85abe865def63",
          },
          {
            public_id: "myportfolio/gjc8cfovhqutvhc4ata7",
            url: "https://res.cloudinary.com/dmglab5ej/image/upload/v1705058038/myportfolio/gjc8cfovhqutvhc4ata7.png",
            _id: "65a11ef862e85abe865def64",
          },
          {
            public_id: "myportfolio/vj5dj1smrqdc6gslnxkk",
            url: "https://res.cloudinary.com/dmglab5ej/image/upload/v1705058039/myportfolio/vj5dj1smrqdc6gslnxkk.png",
            _id: "65a11ef862e85abe865def65",
          },
        ],
        github: "https://github.com/aftababu/hoobank",
        language: "React,Tailwind",
        projectUrl:
          "https://65a11ba24bef13b5b53c12a5--endearing-jalebi-d5e52d.netlify.app/",
        _id: "65a11ef862e85abe865def62",
      },
    ],
    createdAt: "2024-01-11T11:24:55.365Z",
    updatedAt: "2024-01-12T11:14:00.657Z",
    __v: 0,
  },
  {
    _id: "659firefd00707da9react40c667",
    label: "React & Fire",
    value: "react_firebase",
    projects: [
      {
        title: "Amazon CLone",
        description:
          "This remarkable project, named Hoo-Bank, is a front-end masterpiece developed using React and Tailwind CSS. It boasts an impressive design that captures attention and provides an exceptional user experience. The attention to detail in creating a mobile-responsive interface ensures seamless functionality across various devices. As the sole coder of this project, I have leveraged my mastery of JavaScript through completion of a comprehensive JS Mastery course. I invite you to explore this project and witness the culmination of my skills and expertise in web development.",
        images: [
          {
            public_id: "myportfolio/kjbtamazonclones1qzcscgu10u1fk",
            url: "https://res.cloudinary.com/dmglab5ej/image/upload/v1706792042/myportfolio/Screenshot_2024-02-01_17_38_25_bos9nz.png",
            _id: "65a1f862e85amazonclones1abe86566",
          },
          {
            public_id: "myportfolio/kj3tamazonclones2qzcscgu10gfk",
            url: "https://res.cloudinary.com/dmglab5ej/image/upload/v1706792040/myportfolio/Screenshot_2024-02-01_17_39_35_pwgk9s.png",
            _id: "65aef862e85amazonclones2abe865d66",
          },
          {
            public_id: "myportfolio/kjb3tqzcscgamazonclones3u10ugfk",
            url: "https://res.cloudinary.com/dmglab5ej/image/upload/v1706792041/myportfolio/Screenshot_2024-02-01_17_38_48_gspdtn.png",
            _id: "61ef862e85abeamazonclones3865de6",
          },
          {
            public_id: "myportfolio/kjb3amazonclones4tqzcscgu11ngfk",
            url: "https://res.cloudinary.com/dmglab5ej/image/upload/v1706792041/myportfolio/Screenshot_2024-02-01_17_40_04_rjw7zv.png",
            _id: "65a11ef862eamazonclones485abe86566",
          },
          {
            public_id: "myportfolio/kjb3amazonclones5tqzcscgu10u1ngfk",
            url: "https://res.cloudinary.com/dmglab5ej/image/upload/v1706792043/myportfolio/Screenshot_2024-02-01_17_40_37_val8kr.png",
            _id: "65a11amazonclones5ef862e85abe8ef66",
          },
        ],
        github: "https://github.com/aftababu/amazon_clone",
        language: "React,Mui,Firebase",
        projectUrl: "https://clone-a73ce.web.app/",
        _id: "65aef8amaonabe8clone65def62",
      },
      {
        title: "⭐Disney Plus CLone",
        description:
          "This remarkable project, named Hoo-Bank, is a front-end masterpiece developed using React and Tailwind CSS. It boasts an impressive design that captures attention and provides an exceptional user experience. The attention to detail in creating a mobile-responsive interface ensures seamless functionality across various devices. As the sole coder of this project, I have leveraged my mastery of JavaScript through completion of a comprehensive JS Mastery course. I invite you to explore this project and witness the culmination of my skills and expertise in web development.",
        images: [
          {
            public_id: "myportfolio/kjbta1f862s43sdf63d10u1fk",
            url: "https://res.cloudinary.com/dmglab5ej/image/upload/v1706792042/myportfolio/Screenshot_2024-02-01_17_38_25_bos9nz.png",
            _id: "65a1f862s43sdf635h4583ak7h6",
          },
        ],
        github: "https://github.com/aftababu/disney-plus-clone",
        language: "React,Firebase",
        projectUrl: "https://disney-plus-clone-62122.web.app/",
        _id: "65aef822disney8clon1e65def62",
      },
    ],
    createdAt: "2024-01-11T11:24:55.365Z",
    updatedAt: "2024-01-12T11:14:00.657Z",
    __v: 0,
  },
  {
    _id: "65944d0mern07da9stack779c667",
    label: "Mern Stack",
    value: "mern_stack",
    projects: [
      {
        title: "⭐Chat App 1",
        description:
          "This MERN stack chat app is a testament to my skills in developing real-time communication applications. Using ReactJS, Chakra UI, React Router DOM, and Scrollable-Fedd on the frontend, I have created an intuitive and visually pleasing user interface for seamless chat experiences with friends. On the backend, I utilized ExpressJS, Mongoose, Cloudinary, and Socket.io to enable real-time chat functionality. This project was inspired by the expertise shared by the Rode Side Codder and serves as a valuable practice exercise in building chat applications.",
        images: [
          {
            public_id: "myportfolio/kjb3tqzchatapps110u1ngfk",
            url: "https://res.cloudinary.com/dmglab5ej/image/upload/v1706791734/myportfolio/Screenshot_2024-02-01_17_47_17_i4gl8j.png",
            _id: "65a1f862e85abchatapps1e865def66",
          },
          {
            public_id: "myportfolio/kjb3tqzchatapps2cscgu10u1ngfk",
            url: "https://res.cloudinary.com/dmglab5ej/image/upload/v1706791734/myportfolio/Screenshot_2024-02-01_17_47_34_fmoker.png",
            _id: "65a1f862echatapps285abe865def66",
          },
          {
            public_id: "myportfolio/kjb3tqchatapps3zcscgu10u1ngfk",
            url: "https://res.cloudinary.com/dmglab5ej/image/upload/v1706791739/myportfolio/Screenshot_2024-02-01_17_49_47_nwm6dn.png",
            _id: "65aef862e85abe8chatapps365def66",
          },
          {
            public_id: "myportfolio/kjb3tqchatapps4zcscgu10u1ngfk",
            url: "https://res.cloudinary.com/dmglab5ej/image/upload/v1706791733/myportfolio/Screenshot_2024-02-01_17_49_54_lpcwgr.png",
            _id: "65a11e62e8chatapps45abe8def66",
          },
        ],
        github: "https://github.com/aftababu/chat-app-MERN",
        language: "React,ChakraUi,expressJs,Socket.io,cloudinay",
        projectUrl: "https://chat-app-aftab.onrender.com",
        _id: "65aef8chate8app651def62",
      },
      {
        title: "⭐Ecommerce 1",
        description:
          "This MERN stack eCommerce project is a testament to the power of ReactJS and ExpressJS. Inspired by the work of the esteemed 6 Pack Programmer, this project showcases my ability to implement a feature-rich online store. The frontend makes effective use of Redux, MUI, Axios, Stripe, and other packages to enhance the user experience. On the backend, I leveraged ExpressJS, Mongoose, Cloudinary, and Nodemailer to ensure seamless functionality. This project serves as a demonstration of my proficiency in building robust and scalable eCommerce applications using the MERN stack.",
        images: [
          {
            public_id: "myportfolio/jbdsfd3tqzecomerce1s1cscgu10ugfk",
            url: "https://res.cloudinary.com/dmglab5ej/image/upload/v1706792516/myportfolio/Screenshot_2024-02-01_18_35_42_who8c0.png",
            _id: "65a11ef86fs2e8ecomerce1s15abe865d66",
          },
          {
            public_id: "myportfolio/kjb3ecomerce1s2tqzcscgu10u1ngfk",
            url: "https://res.cloudinary.com/dmglab5ej/image/upload/v1706792525/myportfolio/Screenshot_2024-02-01_18_37_00_mgsh8n.png",
            _id: "65a11efsdff862e85aecomerce1s2be865dy66",
          },
          {
            public_id: "myportfolio/kjb3tecomerce1s3qzgu10u1sdsngfk",
            url: "https://res.cloudinary.com/dmglab5ej/image/upload/v1706792520/myportfolio/Screenshot_2024-02-01_18_36_44_tu74jz.png",
            _id: "65a11ds862e85abecomerce1s3e865def66",
          },
          {
            public_id: "myportfolio/kjbtqecomerce1s4zcscgu1dfs0u",
            url: "https://res.cloudinary.com/dmglab5ej/image/upload/v1706792520/myportfolio/Screenshot_2024-02-01_18_37_18_ohwrwa.png",
            _id: "6fs11ssef862e85abeecomerce1s4865def",
          },
          {
            public_id: "myportfolio/kb3tdsaqecomerce1s5zcscgu10u1nfk",
            url: "https://res.cloudinary.com/dmglab5ej/image/upload/v1706792520/myportfolio/Screenshot_2024-02-01_18_37_32_gtwtok.png",
            _id: "65a1sda1ef862e85aecomerce1s5be865def66",
          },
          {
            public_id: "myportfolio/kjb3satqzecomerce1s6cscgu10u1ngfk",
            url: "https://res.cloudinary.com/dmglab5ej/image/upload/v1706792519/myportfolio/Screenshot_2024-02-01_18_37_47_zxmwox.png",
            _id: "65aas11ef862e85abeecomerce1s6865def66",
          },
          {
            public_id: "myportfolio/kjb3tqaszecomerce1s7cscgu10u1ngfk",
            url: "https://res.cloudinary.com/dmglab5ej/image/upload/v1706792518/myportfolio/Screenshot_2024-02-01_18_37_41_bd2npp.png",
            _id: "a65a11ef862e85ecomerce1s7abe865def66",
          },
          {
            public_id: "myportfolio/kjb3tqzecomerce1s8cscgu1sa0u1ngfk",
            url: "https://res.cloudinary.com/dmglab5ej/image/upload/v1706792511/myportfolio/Screenshot_2024-02-01_18_33_57_dauuxo.png",
            _id: "65a11ef862e85abe8ecomerce1s865adef66",
          },
        ],
        github: "https://github.com/aftababu/mern-stack-ecommerce",
        language: "Reactjs,Mui,Stripe,expressJs,Mongoose,cloudinay",
        projectUrl: "https://ecommerce-kknr.onrender.com/",
        _id: "65a8ecommecrcebe81d65def62",
      },
    ],
    createdAt: "2024-01-11T11:24:55.365Z",
    updatedAt: "2024-01-12T11:14:00.657Z",
    __v: 0,
  },
  {
    _id: "65944d0react07da9supa779c667",
    label: "React & Supa",
    value: "react_supabase",
    projects: [
      {
        title: "⭐The Wild Oasis",
        description:
          "This MERN stack chat app is a testament to my skills in developing real-time communication applications. Using ReactJS, Chakra UI, React Router DOM, and Scrollable-Fedd on the frontend, I have created an intuitive and visually pleasing user interface for seamless chat experiences with friends. On the backend, I utilized ExpressJS, Mongoose, Cloudinary, and Socket.io to enable real-time chat functionality. This project was inspired by the expertise shared by the Rode Side Codder and serves as a valuable practice exercise in building chat applications.",
        images: [
          {
            public_id: "myportfolio/kjb3tqwildoasis1zcscgu10u1ngfk",
            url: "https://res.cloudinary.com/dmglab5ej/image/upload/v1706791733/myportfolio/Screenshot_2024-02-01_17_49_54_lpcwgr.png",
            _id: "65a11e62e8wildoasis15abe8def66",
          },
        ],
        github: "https://github.com/aftababu/chat-app-MERN",
        language: "React,ChakraUi,expressJs,Socket.io,cloudinay",
        projectUrl: "https://chat-app-aftab.onrender.com",
        _id: "65aef8wild8oasis65h651def62",
      },
    ],
    createdAt: "2024-01-11T11:24:55.365Z",
    updatedAt: "2024-01-12T11:14:00.657Z",
    __v: 0,
  },
];
