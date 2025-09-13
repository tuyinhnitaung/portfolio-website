
// src/data/site.js

export const PROFILE = {
  name: "Tu Yin Hnit Aung",
  title: "Computer Programming & Analysis, Seneca Polytechnic",
  email: "tuyinhnitaung@email.com", 
  location: "Toronto, Canada",
  blurb: `I'm a Computer Programming and Analysis student who loves diving into all kinds of tech. 

I'm building a diverse skill set that spans web development, software engineering, and data science. 

I thrive on being adaptable and learning new technologies, always looking for opportunities to apply both my technical skills and analytical mindset to solve real-world problems.`,
};

export const LINKS = {
  github: "https://github.com/tuyinhnitaung",      
  linkedin: "https://www.linkedin.com/in/tu-yin-hnit-aung-931902250/", 
};

export const SKILLS = {
  "Programming Languages": [
    "JavaScript",
    "TypeScript", 
    "Java",
    "C++",
    "C",
    "Python",
    "SQL"
  ],
  "Frontend": [
    "React",
    "Next.js",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Responsive Design"
  ],
  "Backend & Databases": [
    "Node.js",
    "Express",
    "RESTful APIs",
    "Authentication & JWT",
    "MongoDB",
    "DynamoDB",
    "PostgreSQL",
    "Oracle"
  ],
  "Cloud & DevOps": [
    "AWS (EC2, S3, ECS)",
    "Docker",
    "CI/CD",
    "GitHub Actions",
    "Infrastructure as Code",
    "Container Registries"
  ],
  "Tools & Project Management": [
    "Git & GitHub",
    "Microsoft Project",
    "Jira",
    "Vercel",
    "Linux",
    "AWS CLI",
    "Docker Compose"
  ]
};

export const PROJECTS = [
  {
    title: "Artwork Explorer – Full-Stack Web App",
    summary:
      "Search and browse artworks via The Met public API with secure auth, favorites, and search history.",
    stack: ["Next.js", "Express.js", "MongoDB Atlas", "JWT", "SWR", "Jotai", "Tailwind CSS"],
    date: "2025",
    thumb: "/thumbs/artwork-explorer.jpg",       
    repo: "https://github.com/tuyinhnitaung/artwork-explorer",   
    demo: "https://artwork-explorer-app.onrender.com/",              
  },
  {
    title: "Assembly Line Simulator – C++ Console App",
    summary:
      "C++ OOP simulation of an order-processing assembly line with stations, workstations, and a line manager.",
    stack: ["C++", "STL", "OOP", "File I/O"],
    date: "2025",
    thumb: "/thumbs/assembly-line.jpg",        
    repo: "https://github.com/tuyinhnitaung/assembly-line-simulator", 
    demo: "",                                    
  },
  {
    title: "Personal Finance Dashboard – Python Data App (In Progress)",
    summary:
      "Streamlit dashboard for parsing CSV transactions, visualizing trends, and category summaries.",
    stack: ["Python", "Pandas", "Streamlit", "Matplotlib/Seaborn"],
    date: "2025",
    thumb: "/thumbs/finance-dashboard.jpg",      
    repo: "",  
    demo: "",                                   
  },
];


