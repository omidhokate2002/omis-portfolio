import {
    SiMongodb, SiMui,
    SiNextdotjs,
    SiNodedotjs,
    SiRazorpay,
    SiReact,
    SiTailwindcss
} from "react-icons/si";
import { IconType } from "react-icons";

export type ProjectProps = {
    id: number;
    name: string;
    description: string;
    technologies: IconType[];
    techNames: string[];
    techLinks: string[];
    github: string;
    demo: string;
    image: string;
    available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "Portfolio 2023",
        description:
            "My portfolio.",
        technologies: [SiReact, SiNextdotjs, SiTailwindcss],
        techNames: ["React", "Next.js", "Tailwind CSS"],
        techLinks: ["https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/"],
        github: "https://github.com/omidhokate2002/omis-portfolio",
        demo: "https://omis-portfolio.vercel.app/",
        image: "/projects/portfolio.webp",
        available: true,
    },
    {
        id: 1,
        name: "Flixxit",
        description:
            "Flixxit is an OTT app that allows users to browse and watch their favorite movies and TV series.",
        technologies: [SiReact, SiNodedotjs, SiMongodb, SiMui, SiRazorpay],
        techNames: ["React", "Node.js", "MongoDB", "MUI", "Razor Pay"],
        techLinks: ["https://react.dev/", "https://nodejs.org/en", "https://www.mongodb.com/", "https://mui.com/", "https://razorpay.com/"],
        github: "https://github.com/omidhokate2002/flixxit",
        demo: "https://flixxit-frontend.vercel.app/",
        image: "/projects/flixxit.png",
        available: true,
    },
    // {
    //     id: 2,
    //     name: "Coming Soon",
    //     description:
    //         "I'm currently working on a couple of projects. I'll update this section as soon as I'm done.",
    //     technologies: [SiZig],
    //     techNames: ["Zig"],
    //     techLinks: ["https://www.ziglang.org/"],
    //     github: "https://github.com/nuIIpointerexception/",
    //     demo: "https://github.com/nuIIpointerexception/",
    //     image: "/projects/construction.webp",
    //     available: false,
    // },
];
