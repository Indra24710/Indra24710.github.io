import {

  ISILogo,
  AmazonLogo,
  USCLogo,
  
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Indra Kumar V",
  initials: "IKV",
  location: "Los Angeles, CA, USA",
  locationLink: "https://www.google.com/maps/place/Los+Angeles,+CA",
  about:
    "Versatile Software Engineer with a USC Master's in Computer Science degree, excelling in AI research and Software development, adept at Python, C++, and Pytorch, with a proven track record at USC ISI and Amazon, ready to drive impactful solutions.",
  summary:
    "As a recent graduate with a Master's in Computer Science degree from USC, I have cultivated a strong foundation in Python, C++, Pytorch, and Javascript, complemented by hands-on experience in AWS services and other full stack development frameworks. My work at USC Information Sciences Institute and Amazon has equipped me with the skills needed for Software development, with a particular interest in AI and Machine learning. I enjoy the process of turning complex concepts into practical, scalable software solutions. In collaborative environments, I strive to contribute effectively, balancing innovation with a meticulous approach to project management. Eager to continue growing, I am ready to tackle new challenges and contribute meaningfully in the tech industry.",
    avatarUrl: 'https://github.com/Indra24710/Indra24710.github.io/blob/main/src/images/logos/linkedin_profile_logo.jpeg?raw=true',
    personalWebsiteUrl: "",
  contact: {
    email: "indra.kumar.v.11@gmail.com",
    tel: "+12243107953",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Indra24710",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/indra-kumar-v-97a16b171/",
        icon: LinkedInIcon,
      }
    ],
  },
  education: [
    {
      school: "University of Southern California",
      degree: "Master's Degree in Computer Science",
      start: "2022",
      end: "2023",
    },
    {
      school: "Amrita Vishwa Vidyapeetham",
      degree: "Bachelor's Degree in Computer Science",
      start: "2017",
      end: "2021",
    }
  ],
  work: [
    {
      company: "USC Information Sciences Institute",
      link: "https://www.isi.edu/",
      badges: [],
      title: "Machine Learning Engineer",
      logo: ISILogo,
      start: "Jun 2022",
      end: "Present",
      description:
      [
        
        "• Working on an advanced Generative AI project focusing on Gait recognition, where I designed and adapted latent-diffusion,\
        GAN, and GPT-based transformer models for conditional video synthesis, along with model optimization, including\
        hyperparameter tuning and strategic training plans.",
        "• Working on new Deep Learning solutions to create improvements over the baseline models for the GAN Inversion problem.",
        "• Worked in a team of 4 and built a full-stack ML-based web app using Angular, Typescript, and Flask, to create a one stop portal\
        with applications like Deepfake detection, GAN Inversion etc."
        ]
    },
    {
      company: "Amazon",
      link: "https://www.aboutamazon.com/",
      badges: [""],
      title: "Software Engineering Intern",
      logo: AmazonLogo,
      start: "May 2023",
      end: "Aug 2023",
      description:
      [
        "• Developed and owned the complete lifecycle of a full-stack responsive web app with Deep learning services for clustering, text\
        summarization, and text similarity search.",
        "• Engineered an AWS solution to optimize notification handling between services and users, enhancing efficiency and preventing\
        information loss in large-scale software projects which saved ~15 mins per request for all the stakeholders involved.",
        "• Enhanced quality assurance processes by developing an Automation Test suite comprising 140 tests to be run on the Device\
        OS, improving overall productivity by 30% and scaling the testing capabilities."
      ]
},
    {
      company: "USC CSSE Lab",
      link: "https://www.usc.edu/",
      badges: [],
      title: "Software Engineering Intern",
      logo: USCLogo,
      start: "May 2022",
      end: "Jul 2022",
      description:
      [
        "• Worked collaboratively in a team environment on a full-stack web application development project where I created and scaled\
        frontend webpages, backend servers, and client-server APIs using React and Node.js",
        "• Implemented load balancing algorithms to scale the concurrent user API request handling by 8x.",
    
    ]
    },
    {
      company: "USC Office of Financial Aid",
      link: "https://www.usc.edu/",
      badges: [],
      title: "Assistant Business Data Analyst",
      logo: USCLogo,
      start: "April 2022",
      end: "Jul 2022",
      description: ["• Improved overall employee work productivity by over 60% by creating automation programs for daily data analytics report generation tasks using Python and Tableau"]
    },
  ],
  skills: [
    "Python",
    "C/C++",
    "Java",
    "Pytorch",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Angular",
    "Swift/SwiftUI"
  ],
  projects: [
    {
      title: "Conditional Video Synthesis using Deep Learning",
      techStack: [
        "USC ISI project",
        "Pytorch",
        "Deep Learning Research"
      ],
      description: "• Developed, adapted, and trained Latent-diffusion models, GANs, and transformer models to generate realistic synthetic videos.",
      logo: '',
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Wind power prediction",
      techStack: ["Side Project", "Pytorch", "Deep learning"],
      description:
        "Designed and trained CNN-transformer, transformer-encoder, CNN-LSTM and 3DCNN based models for wind power prediction\
        on spatio-temporal data collected from the North American Mesoscale model.",
      logo: '',
      link: {
        label: "github.com",
        href: "https://github.com/Indra24710/wind-power-prediction",
      },
    },
    {
      title: "Event-Finder",
      techStack: ["Course Project", "Angular", "Typescript", "Node.js", "Swift", "SwiftUI"],
      description:
        "Developed both an Angular, TypeScript, and Node.js based full-stack responsive web application and an IOS application using\
        Swift which helps users to search for local and national events using the Ticketmaster API in the backend.",
      logo: '',
      link: {
        label: "",
        href: "https://drive.google.com/file/d/12Wbgz5OhuQMBaz7uYiHM9xJV4C-clRaR/view?usp=sharing",
      },
    },
    {
      title: "Jatayu - AI based public safety app",
      techStack: ["Hackathon Project", "Python"],
      description:
        "Led a team in the development of an AI based web and android application for face recognition in crowded areas.",
      logo: '',
      link: {
        label: "",
        href: "https://github.com/Indra24710/Coders_of_Blaviken",
      },
    },
    {
      title: "Viva AI waiter app",
      techStack: ["Internship Project", "React.js", "Flask"],
      description:
        "A React and Node.js based web app which uses AI to recommend food items in a restaurant based on dietary preference.",
      logo: '',
      link: {
        label: "",
        href: "",
      },
    }
  ],
} as const;
