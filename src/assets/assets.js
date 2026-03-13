import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import liked_songs from './liked_songs.jpg'
import djx from './djx.png'
import sw2023 from './sw2023.jpg'
import sw2024 from './sw2024.jpg'
import sw2025 from './sw2025.jpg'
import yecc from './yecc.jpg'
import mosaic from './mosaic.jpg'
import gc from './gc.jpg'
import gc2 from './gc2.jpg'
import dotnet_icon from './dotnet_icon.svg'
import csharp_icon from './csharp_icon.png'
import api_icon from './api_icon.jpg'
import flutter_icon from './flutter_icon.png'
import js_icon from './js_icon.png'
import html_icon from './html_icon.png'
import css_icon from './css_icon.png'
import bootstrap_icon from './bootstrap_icon.svg'
import tailwind_icon from './tailwind_icon.jpg'
import sql_icon from './sql_icon.png'
import python_icon from './python_icon.png'
import java_icon from './java_icon.png'
import php_icon from './php_icon.png'
import linux_icon from './linux_icon.png'
import git_icon from './git_icon.png'
import google_icon from './google_icon.png'
import comptia_icon from './comptia_icon.png'
import eccouncil_icon from './eccouncil_icon.png'
import isc2_icon from './isc2_icon.png'
import azure_icon from './azure_icon.png'
import offsec_icon from './offsec_icon.png'
import aws_icon from './aws_icon.png'
import archi from './archi.png'
import bball from './bball.png'
import js1 from './js1.png'
import js2 from './js2.png'
import newsfeed from './newsfeed.png'
import sentinel from './sentinel.png'
import starburst from './starburst.png'
import void_icon from './void.png'
import billSplitter from './billSplitter.png'
import lyrics from './lyrics.png'

export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon,
    liked_songs
}

export const albumsData = [
    {   
        id:0,
        name: "Experience",
        image: liked_songs,
        desc:"My professional journey, roles, and full-stack internships",
        bgColor:"#2a4365"
    },
    {   
        id:1,
        name: "Tech Stack",
        image: djx,
        desc:"My most used languages, frameworks, and developer tools",
        bgColor:"#22543d"
    },
    {   
        id:2,
        name: "Certifications",
        image: sw2023,
        desc:"Verified professional credentials and completed courses",
        bgColor:"#742a2a"
    },
    {   
        id:3,
        name: "Projects",
        image: sw2024,
        desc:"A curated mix of my featured websites and applications",
        bgColor:"#44337a"
    },
    {   
        id:4,
        name: "Contact",
        image: sw2025,
        desc:"Reach out for collaborations, freelance work, or roles",
        bgColor:"#234e52"
    }
]

export const songsData = [
    {
        id: 0,
        name: "Full-Stack Developer",
        image: gc2,
        desc: "Georgian College",
        duration: "Present",
        company: "Georgian College",
        date: "July 2025 - Present",
        achievements: [
            "Collaborate with faculty and clients to understand project requirements and objectives",
            "Design and develop responsive websites and web applications using modern frameworks",
            "Build mobile applications using cross-platform tools such as Flutter",
            "Assist in UI/UX design, prototyping, and user testing for optimal user experience",
            "Integrate third-party APIs and backend services",
            "Conduct technical research and document code for future reference"
        ],
        technologies: ["ASP.NET", "Flutter", "Bootstrap", "Chart.js", "jQuery"]
    },
    {
        id: 1,
        name: "HP Sales Representative",
        image: mosaic,
        desc: "Mosaic North America • Sales, promotions, and customer relations",
        duration: "Present",
        company: "Mosaic North America",
        date: "Sep 2024 - Present",
        achievements: [
            "Collaborated with team members to consistently achieve and exceed monthly sales goals",
            "Educated consumers on active sales, promotions, and product features to drive revenue",
            "Assisted in the creation and distribution of promotional materials and retail advertisements",
            "Maintained a high standard of professionalism, reliability, and teamwork, frequently assisting colleagues to ensure seamless operations",
            "Contributed innovative ideas to optimize daily retail processes, improving overall efficiency",
            "Continuously analyzed market trends to propose creative strategies for product positioning"
        ],
        technologies: ["Customer Service", "Sales Strategy", "Teamwork", "Promotions", "Problem Solving"]
    },
    {
        id: 2,
        name: "Computer Programming Diploma",
        image: gc,
        desc: "Georgian College • Specialized focus on web development and cybersecurity",
        duration: "2026",
        company: "Georgian College",
        date: "2024 - 2026",
        achievements: [
            "Maintained high academic performance in programming courses",
            "Completed advanced coursework in web security and ethical hacking",
            "Led student cybersecurity awareness initiatives",
            "Developed multiple full-stack web applications"
        ],
        technologies: ["C#", "Java", "Python", "HTML/CSS", "JavaScript", "SQL"]
    },
    {
        id: 3,
        name: "AUTOHACK",
        image: gc,
        desc: "Hackathon • Built an interactive automotive simulation tool",
        duration: "2025",
        company: "Georgian College",
        date: "2025",
        achievements: [
            "Designed and implemented a simulation tool for car parts, allowing users to learn virtual mechanics safely",
            "Created frontend components to replicate real-world systems",
            "Collaborated with team members to ensure usability, accuracy, and an engaging learning experience",
            "Demonstrated the project to judges and received positive feedback for innovation and practical impact"
        ],
        technologies: ["HTML", "CSS", "JavaScript", "Git", "VS Code", "OOP"]
    },
    {
        id: 4,
        name: "Capture The Flag (CTF)",
        image: yecc,
        desc: "High School • Solved 50+ web exploitation & security challenges",
        duration: "2023",
        company: "Yangon Education Creation Corner",
        date: "2023",
        achievements: [
            "Completed 50+ CTF challenges across web exploitation, privilege escalation, and network security",
            "Identified vulnerabilities in lab environments and documented detailed write-ups",
            "Developed Python scripts to automate scanning and exploitation tasks, improving efficiency",
            "Collaborated with teammates to strategize and solve complex multi-step challenges"
        ],
        technologies: ["Python", "Linux", "Wireshark", "Nmap", "Burp Suite", "TryHackMe"]
    },
    
]
export const techStack = [
    {
        name: "ASP.NET / Core",
        category: "Backend Framework",
        icon: dotnet_icon, 
        experience: "Advanced",
        description: "Building robust, scalable web applications"
    },
    {
        name: "C#",
        category: "Language",
        icon: csharp_icon,
        experience: "Advanced",
        description: "Object-oriented backend logic"
    },
    {
        name: "HTML5",
        category: "Frontend Core",
        icon: html_icon, 
        experience: "Advanced",
        description: "Semantic markup and responsive styling"
    },
    {
        name: "CSS3",
        category: "Frontend Core",
        icon: css_icon,
        experience: "Advanced",
        description: "Responsive styling and layout design"
    },
    {
        name: "JavaScript",
        category: "Frontend Language",
        icon: js_icon,
        experience: "Advanced",
        description: "Dynamic DOM manipulation and client-side logic"
    },
    {
        name: "Bootstrap",
        category: "Frontend Framework",
        icon: bootstrap_icon,
        experience: "Advanced",
        description: "Responsive UI components and layout systems"
    },
    {
        name: "Tailwind CSS",
        category: "Frontend Framework",
        icon: tailwind_icon,
        experience: "Advanced",
        description: "Responsive UI components and layout systems"
    },
    {
        name: "RESTful APIs",
        category: "Backend Integration",
        icon: api_icon, 
        experience: "Proficient",
        description: "Designing, building, and consuming APIs"
    },
    {
        name: "SQL (SQL Server)",
        category: "Database",
        icon: sql_icon,
        experience: "Proficient",
        description: "Database design, queries, and management"
    },
    {
        name: "Git & GitHub",
        category: "Version Control",
        icon: git_icon,
        experience: "Proficient",
        description: "Source code management and team collaboration"
    },

    {
        name: "Flutter & Dart",
        category: "Mobile App Dev",
        icon: flutter_icon,
        experience: "Intermediate",
        description: "Cross-platform mobile application development"
    },
    {
        name: "Python",
        category: "Language / Scripting",
        icon: python_icon,
        experience: "Intermediate",
        description: "Object-oriented programming and data scripting"
    },
    {
        name: "Java",
        category: "Language",
        icon: java_icon,
        experience: "Intermediate",
        description: "Object-oriented programming and enterprise applications"
    },
    {
        name: "Linux",
        category: "Environment / Server",
        icon: linux_icon,
        experience: "Intermediate",
        description: "Command-line server management and deployment"
    },

    {
        name: "PHP",
        category: "Backend Language",
        icon: php_icon,
        experience: "Beginner",
        description: "Server-side web scripting and legacy maintenance"
    }
];
export const certifications = [
    {
        name: "Google Cybersecurity Certificate",
        issuer: "Google",
        icon: google_icon, 
        date: "Done" ,
        link: "https://www.coursera.org/account/accomplishments/professional-cert/6AUZXEZ4CGX3"
    },
    {
        name: "CompTIA Security+",
        issuer: "CompTIA",
        icon: comptia_icon,
        date: "In Progress"
    },
    {
        name: "Certified Ethical Hacker (CEH)",
        issuer: "EC-Council",
        icon: eccouncil_icon,
        date: "Planned"
    },
    {
        name: "CISSP",
        issuer: "ISC²",
        icon: isc2_icon,
        date: "Future Goal"
    },
    
    {
        name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
        issuer: "Microsoft",
        icon: azure_icon,
        date: "Planned"
    },
    {
        name: "Offensive Security Certified Professional (OSCP)",
        issuer: "OffSec",
        icon: offsec_icon,
        date: "Future Goal"
    },
    {
        name: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        icon: aws_icon,
        date: "Planned"
    }
];
export const projects = [
    {
        name: "Sentinel Predictive Maintenance Monitor",
        techStack: "React, Three.js, Python, Arduino",
        date: "2026", 
        description: "A real-time robotic arm monitoring system featuring hardware sensor integration, Python anomaly detection, and a live 3D digital twin dashboard.",
        image: sentinel, 
        source: "https://github.com/kaung721/AutoHack2.0", 
        link: "" 
    },
    {
        name: "Architectural Wonders Explorer", 
        techStack: "HTML, Custom SVGs, CSS", 
        date: "2026", 
        description: "An interactive architectural timeline featuring 12 iconic global structures spanning 4,500 years. Includes dynamic era-based filtering, detailed informational modals, and custom hand-drawn SVG illustrations.",
        image: archi,
        source: "https://github.com/kaung721/Architectural-Explorer",
        link: "https://architecture-explorer.kaungmyathein721.workers.dev/"
    },
    {
        name: "Full-Stack News Aggregator",
        techStack: "React, Node.js, Express, MongoDB",
        date: "2026", 
        description: "A personalized news reader that parses external RSS feeds, featuring category filtering, user authentication, and persistent article bookmarking.",
        image: newsfeed, 
        source: "https://github.com/kaung721/GroupTutorialCOMP2068",
        link: "https://grouptutorialcomp2068frontend.onrender.com"
    },
    {
        name: "Roommate Bill Splitter",
        techStack: "Node.js, Express, MongoDB, Handlebars",
        date: "2025",
        description: "A server-rendered web app for managing household expenses, featuring OAuth integration, item assignment, and dynamic split summaries.",
        image: billSplitter, 
        source: "https://github.com/kaung721/bill-splitter",
        link: "https://bill-splitter-z4dl.onrender.com/" 
    },
    {
        name: "Silly Sentence Generator",
        techStack: "Vanilla JavaScript, HTML, CSS",
        date: "2025",
        description: "An interactive DOM-manipulation application that builds and visualizes randomized sentences from categorized 2D arrays.",
        image: js1, 
        source: "https://github.com/kaung721/jsAssign1",
        link: "https://kaung721.github.io/jsAssign1/"
    },
    {
        name: "Smoothie POS Calculator",
        techStack: "Vanilla JavaScript, HTML",
        date: "2025",
        description: "An object-oriented ordering system that dynamically calculates pricing and generates order summaries based on user ingredient selections.",
        image: js2, 
        source: "https://github.com/kaung721/jsAssign2",
        link: "https://kaung721.github.io/jsAssign2/"
    },
    {
        name: "Baytown Basketball Club",
        techStack: "HTML5, CSS3, Vanilla JS",
        date: "2025",
        description: "A dedicated athletic team portal featuring responsive game schedules, dynamic player rosters, and an interactive media gallery built without external UI libraries.",
        image: bball, 
        source: "https://github.com/kaung721/BasketballWebsite",
        link: "https://kaung721.github.io/BasketballWebsite/"
    },
    {
        name: "ATS Resume Scanner",
        techStack: "Python",
        date: "2024",
        description: "A keyword-based parsing tool built to simulate modern Applicant Tracking Systems (ATS) and evaluate resume compatibility.",
        image: python_icon, 
        source: "https://github.com/kaung721/resumeScanner",
        link: "" 
    },
    {
        name: "Starburst Confectionery",
        techStack: "HTML5, CSS3, Vanilla JS",
        date: "2024",
        description: "A vibrant, interactive promotional website for a candy storefront. Features custom CSS animations, dynamic product displays, and a mobile-first responsive layout.",
        image: starburst, 
        source: "https://github.com/kaung721/assignment-2-fall",
        link: "https://kaung721.github.io/assignment-2-fall/"
    },
    {
        name: "Void Apparel E-Commerce UI",
        techStack: "HTML5, CSS3, Vanilla JS",
        date: "2024",
        description: "A sleek, minimalist frontend landing page designed for a modern streetwear brand. Utilizes CSS Grid/Flexbox for responsive product catalogs and clean typography.",
        image: void_icon, 
        source: "https://github.com/kaung721/fall_finalProject",
        link: "https://kaung721.github.io/fall_finalProject/"
    },
    {
        name: "Typographic Lyric Visualizer", 
        techStack: "HTML5, CSS3",
        date: "2024",
        description: "A visually engaging, single-page web experience that brings song lyrics to life through creative typography, advanced CSS styling, and responsive layout design.",
        image: lyrics,
        source: "https://github.com/kaung721/fall_assignment1",
        link: "https://kaung721.github.io/fall_assignment1/"
    }
];