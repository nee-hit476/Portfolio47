import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import nihit from "../assets/Images/pfp/nihit.jpeg"
import { type ComponentType } from "react";

export interface Project {
  id: string;
  title: string;
  description: string;
  desc: string;
  status: 'Running' | 'Completed' | 'In Progress';
  technologies: string[];
  viewLink?: string;
  githubLink?: string;
  externalLink?: string;
}


const NihitAbout: string = `<p>Hey, I'm Nihit, a full stack developer. Primarily using JavaScript and its frameworks.I love to contribute and building things with people.(Not just an engineer). I'm currently working with Next.js, Django, Express, and TypeScript.</p>`

const HireNihit: string = `<p>I’m currently available for internships, full-time opportunities, and freelance projects. If you’re looking for someone passionate, skilled, and ready to contribute, I’m here to help bring your ideas to life!</p>`

const ProfilePicture = nihit;

const NihitSupport = `<p>If you love what I do, whether it’s my work, the content I share, or anything else, please consider supporting me. Your support helps me continue creating, improving, and sharing my work.</p>`

const Navlinks: {
    id: string;
    name: string;
    link: string;
    icon: ComponentType;
}[] = [
    {
        id: "1",
        name: "Github",
        link: "https://github.com/nee-hit476",
        icon: FaGithubAlt
    },
    {
        id: "2",
        name: "twitter",
        link: "https://x.com/ins_Nihit",
        icon: FaXTwitter
    },
    {
        id: "3",
        name: "linkedin",
        link: "https://x.com/ins_Nihit",
        icon: FaLinkedin
    },
    {
        id: "4",
        name: "leetcode",
        link: "https://github.com/nee-hit476",
        icon: SiLeetcode
    }
]

const projects: Project[] = [
    {
      id: '3',
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing my work and skills. Built with cutting-edge technologies and featuring smooth animations, dark mode support, and an intuitive user interface.',
      desc: `<iframe
          src="https://player.cloudinary.com/embed/?cloud_name=ddyqtrozr&public_id=VID-20250708-WA0027_kuolh0&profile=cld-default&autoplay=true&loop=true&controls=false&mute=true"
          width="640"
          height="360" 
          style="height: auto; width: 100%; aspect-ratio: 640 / 360;"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowfullscreen
          frameborder="0"
          ></iframe>
`,
      status: 'Completed',
      technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
      viewLink: '#',
      githubLink: '#',
      externalLink: '#'
    },
    {
      id: '4',
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing my work and skills. Built with cutting-edge technologies and featuring smooth animations, dark mode support, and an intuitive user interface.',
      desc: `<iframe
          src="https://player.cloudinary.com/embed/?cloud_name=ddyqtrozr&public_id=VID-20250708-WA0027_kuolh0&profile=cld-default&autoplay=true&loop=true&controls=false&mute=true"
          width="640"
          height="360" 
          style="height: auto; width: 100%; aspect-ratio: 640 / 360;"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowfullscreen
          frameborder="0"
          ></iframe>`,
      status: 'Completed',
      technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
      viewLink: '#',
      githubLink: '#',
      externalLink: '#'
    },
    {
      id: '5',
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing my work and skills. Built with cutting-edge technologies and featuring smooth animations, dark mode support, and an intuitive user interface.',
      desc: `<iframe
          src="https://player.cloudinary.com/embed/?cloud_name=ddyqtrozr&public_id=VID-20250708-WA0027_kuolh0&profile=cld-default&autoplay=true&loop=true&controls=false&mute=true"
          width="640"
          height="360" 
          style="height: auto; width: 100%; aspect-ratio: 640 / 360;"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowfullscreen
          frameborder="0"
          ></iframe>`,
      status: 'Completed',
      technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
      viewLink: '#',
      githubLink: '#',
      externalLink: '#'
    },
    {
      id: '6',
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing my work and skills. Built with cutting-edge technologies and featuring smooth animations, dark mode support, and an intuitive user interface.',
      desc: `<iframe
          src="https://player.cloudinary.com/embed/?cloud_name=ddyqtrozr&public_id=VID-20250708-WA0027_kuolh0&profile=cld-default&autoplay=true&loop=true&controls=false&mute=true"
          width="640"
          height="360" 
          style="height: auto; width: 100%; aspect-ratio: 640 / 360;"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowfullscreen
          frameborder="0"
          ></iframe>`,
      status: 'Completed',
      technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
      viewLink: '#',
      githubLink: '#',
      externalLink: '#'
    },
    {
      id: '7',
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing my work and skills. Built with cutting-edge technologies and featuring smooth animations, dark mode support, and an intuitive user interface.',
      desc: '/api/placeholder/160/120',
      status: 'Completed',
      technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
      viewLink: '#',
      githubLink: '#',
      externalLink: '#'
    },
  ];

export {
    NihitAbout,
    ProfilePicture,
    HireNihit,
    NihitSupport,
    Navlinks,
    projects
}