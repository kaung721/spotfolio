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
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import img12 from './img12.jpg'
import img13 from './img13.jpg'
import img14 from './img14.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import song1 from  './song1.mp3'
import song2 from  './song2.mp3'
import song3 from  './song3.mp3'
import liked_songs from './liked_songs.jpg'
import djx from './djx.png'
import sw2023 from './sw2023.jpg'
import sw2024 from './sw2024.jpg'
import sw2025 from './sw2025.jpg'
import yecc from './yecc.jpg'
import mosaic from './mosaic.jpg'
import gc from './gc.jpg'
import gc2 from './gc2.jpg'

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
        desc:"A curated mix of my featured full-stack web applications",
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
        file: song1,
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
        file: song2,
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
        file: song2,
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
        file: song3,
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
        file: song1,
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
        icon: assets.dotnet_icon, 
        experience: "Advanced",
        description: "Building robust, scalable web applications"
    },
    {
        name: "C#",
        category: "Language",
        icon: assets.csharp_icon,
        experience: "Advanced",
        description: "Object-oriented backend logic"
    },
    {
        name: "RESTful APIs",
        category: "Backend Integration",
        icon: assets.api_icon, 
        experience: "Proficient",
        description: "Designing, building, and consuming APIs"
    },
    {
        name: "Flutter & Dart",
        category: "Mobile App Dev",
        icon: assets.flutter_icon,
        experience: "Intermediate",
        description: "Cross-platform mobile application development"
    },
    {
        name: "JavaScript (ES6+)",
        category: "Frontend Language",
        icon: assets.js_icon,
        experience: "Proficient",
        description: "Dynamic DOM manipulation and client-side logic"
    },
    {
        name: "HTML5 & CSS3",
        category: "Frontend Core",
        icon: assets.html_icon, // or css_icon
        experience: "Advanced",
        description: "Semantic markup and responsive styling"
    },
    {
        name: "SQL (SQL Server / PostgreSQL)",
        category: "Database",
        icon: assets.sql_icon,
        experience: "Proficient",
        description: "Database design, queries, and management"
    },
    {
        name: "Git & GitHub",
        category: "Version Control",
        icon: assets.git_icon,
        experience: "Proficient",
        description: "Source code management and team collaboration"
    }
];