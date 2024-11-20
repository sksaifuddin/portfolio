import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shaik Saifuddin",
  initials: "SS",
  url: "https://www.linkedin.com/in/sksaifuddin/",
  location: "Canada",
  locationLink: "",
  description:
    "A passionate software developer with a knack for crafting innovative solutions to complex problems.",
  summary:
    "I am a full stack developer in Canada with a passion for building scalable and efficient systems using Javascript and Java Technologies on Cloud.",
  avatarUrl: "/me.jpg",
  skills: [
    "Javascript", "Typescript",
    "Angular", "React", "Node.js",
    "Java", "Spring Boot",
    "AWS",
    "Docker",
    "HTML", "Git", "CSS/SASS", "MySQL", "Web Components", "Jest", "JUnit", 
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://shaik-saifuddin-notes.netlify.app/docs/home/", icon: NotebookIcon, label: "Digital Garden" },
  ],
  contact: {
    email: "shaiksaifuddin51@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sksaifuddin",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sksaifuddin/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:shaiksaifuddin51@gmail.com?subject=Opportunity%20for%20Software%20Engineer%20Role&body=Dear%20Shaik,%0D%0A%0D%0AWe%20came%20across%20your%20profile%20and%20would%20like%20to%20discuss%20an%20opportunity%20that%20might%20be%20a%20good%20fit%20for%20you.%20Please%20let%20us%20know%20if%20you%20are%20available%20for%20a%20quick%20chat.%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20Name]%0D%0A[Your%20Designation]%0D%0A[Your%20Company]",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Canada Revenue Agency",
      href: "https://www.canada.ca/en/revenue-agency.html",
      badges: [],
      location: "Remote",
      title: "IT Developer",
      logoUrl: "/cra-logo.png",
      start: "Jan 2024",
      end: "Present",
      description:
        "Built the tax filing portals (CRA sign-in services) being used by millions of Canadian taxpayers by actively contributing to the reengineering of outdated Struts pages to Angular 17 and Enterprise Java. ",
    },
    {
      company: "Abjayon Inc",
      badges: [],
      href: "https://www.abjayon.com/",
      location: "In-Person",
      title: "Senior Software Engineer",
      logoUrl: "/abjayon-logo.jpg",
      start: "Nov 2018",
      end: "Aug 2022",
      description:
        "Contributed to 3 projects across different domains, utilizing Angular and React for front-end development, developed scalable, RESTful APIs using Node.js (Nest.js) and Java (Spring boot), adhering to API authentication protocols like OAuth2 and JWT, and leveraging Docker and AWS for containerization and Cloud deployment. ",
    }
  ],
  education: [
    {
      school: "Dalhousie University, Canada",
      href: "https://www.dal.ca/",
      degree: "Master of Applied Computer Science",
      logoUrl: "/dal-logo.png",
      start: "2023",
      end: "2024",
    },
    {
      school: "Osmania University, India",
      href: "https://www.osmania.ac.in/",
      degree: "Bachelor of Engineering in Information Technology",
      logoUrl: "/osmania-logo.png",
      start: "2013",
      end: "2017",
    },
  ],
  projects: [
    {
      title: "No Code API Builder",
      href: "https://github.com/sksaifuddin/no-code-api-builder",
      dates: "",
      active: true,
      description:
        "A cloud based tool to create REST APIs without writing any code. Users will create tables to store the data and REST API end points to get, insert, update, delete the data of those tables will be dynamically generated. Users can directly use those API end points in their front-end applications.",
      technologies: [
        "AWS",
        "javascript",
        "Node.js",
        "cloudFormation",
        "cloud",
        "Docker",
        "serverless",
        "React"
      ],
      links: [
       
      ],
      image: "/no-code-api-builder.png",
      video:
        "",
    },
    {
      title: "API Testing Automation Tool",
      href: "https://github.com/sksaifuddin/api-automation-testing-tool",
      dates: "",
      active: true,
      description:
        "API Automation tool to Test your APIs and Database. Application was built by a group of 5 students during the course CSCI 5308 - Advance Topics in Software Development and secured A+ grade.",
      technologies: [
        "React.js",
        "Spring Boot",
        "Docker",
        "CI/CD",
        "TDD",
        "Java",
        "JavaScript",
        "Gitlab",
      ],
      links: [
      ],
      image: "",
      video: "https://github.com/sksaifuddin/api-automation-testing-tool/assets/31506305/32860c65-de6c-4af1-a148-becee6ac4883",
    },
    {
      title: "Mario Game",
      href: "https://github.com/sksaifuddin/mario-puzzle-game",
      dates: "",
      active: true,
      description:
        "Gather all the toads by this simple cool game of Mario built with Angular.",
      technologies: [
        "Angular",
        "Typescript",
      ],
      links: [
      ],
      image: "/mario-game.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Visual Studio Code",
      dates: "",
      location: "",
      description:
        "Fixed a bug to escape special characters in .env in official Visual Studio Code repo.",
      image:
        "/vscode-logo.png",
      links: [
        {
          title: "Pull Request",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/microsoft/vscode/pull/82704",
        },
      ],
    },
    {
      title: "Angular Internet speed testing Library",
      dates: "",
      location: "",
      description:
        "Ng-speed-test: Made changes to Angular code to check the internet connection. ",
      image:
        "/angular-logo.jpg",
      links: [
        {
          title: "Pull Request",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/jrquick17/ng-speed-test/pull/6",
        },
      ],
    },
    {
      title: "Brain Tree Java SDK",
      dates: "",
      location: "",
      description:
        "Code refactoring using various refactoring techniques to improve code quality.",
      image:
        "/java-logo.png",
      links: [
        {
          title: "Pull Request",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/braintree/braintree_java/pull/121",
        },
      ],
    },
    {
      title: "Stackoverflow contibutions",
      dates: "",
      location: "",
      description:
        "Contributor to Stack Overflow, aiding the developer community.",
      image:
        "stackoverflow-logo.png",
      links: [
        {
          title: "Profile",
          icon: <Icons.profile className="h-4 w-4" />,
          href: "https://stackoverflow.com/users/7138410/sksaif-uddin?tab=profile",
        },
      ],
    },
    {
      title: "Hfx.js meetup Presentation",
      dates: "",
      location: "",
      description:
        "Presented a talk on Web Components at Halifax Tech Community Meetup Hfx.js. ",
      image:
        "hfx-logo.jpg",
      links: [
        {
          title: "Slides",
          icon: <Icons.slides className="h-4 w-4" />,
          href: "https://docs.google.com/presentation/d/1A0D5JLVM5MxANrsCPuiBGa5DTiqNfpA7DEZ0tE7Bm9Q/edit#slide=id.p",
        },
      ],
    },
  ],
} as const;
