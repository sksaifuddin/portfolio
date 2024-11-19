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
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
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
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
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
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
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
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
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
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Pull Request",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "Angular Internet speed testing Library",
      dates: "",
      location: "",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Pull Request",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "Brain Tree Java SDK",
      dates: "",
      location: "",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Pull Request",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "Stackoverflow contibutions",
      dates: "",
      location: "",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Pull Request",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "Hfx.js meetup Presentation",
      dates: "",
      location: "",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Pull Request",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
  ],
} as const;
