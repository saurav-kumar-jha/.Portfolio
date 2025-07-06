import { useEffect, useState } from "react";
import { motion, scale } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaLaptopCode, FaTools, FaProjectDiagram } from "react-icons/fa";
import { SiTailwindcss, SiPostgresql, SiSpringboot, SiFirebase, SiMongodb, SiReact, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import { MdComputer, MdDeveloperMode } from "react-icons/md";
import { DiJava } from "react-icons/di";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import SkillsSection from "./skills";
import "../index.css"
import { FiAlignJustify, FiX } from "react-icons/fi";

export const Portfolio = () => {
    const [show, setshow] = useState(false)
    useEffect(() => {
        document.title = "Saurav Kumar Jha | Full Stack Developer";

        const metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute("content", "Explore the portfolio of Saurav Kumar Jha, a skilled Full Stack Developer specializing in React.js, Spring Boot, PostgreSQL, and modern web technologies.");
        } else {
            const newMeta = document.createElement("meta");
            newMeta.name = "description";
            newMeta.content = "Explore the portfolio of Saurav Kumar Jha, a skilled Full Stack Developer specializing in React.js, Spring Boot, PostgreSQL, and modern web technologies.";
            document.head.appendChild(newMeta);
        }

        const link = document.querySelector("link[rel~='icon']") || document.createElement("link");
        link.rel = "icon";
        link.href = "/icon.png";
        document.head.appendChild(link);
    }, [])
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a0f1c] to-[#121e36] text-white font-[Poppins]">
            {/* Navbar */}
            <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-[#121e36] font-extrabold text-lg">
                <div className="h-full w-[70vw] mx-auto bg-transparent flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-blue-400">Saurav Kumar Jha</h1>
                    <div className="space-x-6 md:block hidden ">
                        <a href="#about" className="hover:text-blue-400 cursor-pointer">About</a>
                        <a href="#skills" className="hover:text-blue-400 cursor-pointer">Skills</a>
                        <a href="#projects" className="hover:text-blue-400 cursor-pointer">Projects</a>
                        <a href="#contact" className="hover:text-blue-400 cursor-pointer">Contact</a>
                    </div>
                </div>
                <div className="flex flex-col items-end md:hidden w-1/2  ">
                    <button className="text-4xl cursor-pointer hover:scale-105  " >{!show ? (<FiAlignJustify onClick={() => setshow(true)} />) : (<FiX onClick={() => setshow(false)} />)}</button>
                    <div className={`w-full flex-col text-center items-center ${show ? "flex" : "hidden"} `}>
                        <a href="#about" className="hover:text-blue-400 cursor-pointer w-full h-auto py-3 px-auto hover:bg-[#121e36ad]">About</a>
                        <a href="#skills" className="hover:text-blue-400 cursor-pointer w-full h-auto py-3 px-auto hover:bg-[#121e36ad] ">Skills</a>
                        <a href="#projects" className="hover:text-blue-400 cursor-pointer w-full h-auto py-3 px-auto hover:bg-[#121e36ad] ">Projects</a>
                        <a href="#contact" className="hover:text-blue-400 cursor-pointer w-full h-auto py-3 px-auto hover:bg-[#121e36ad] ">Contact</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="max-w-6xl w-[90vw] mx-auto my-12 p-6 sm:p-10 border border-[#1f2c42] rounded-3xl shadow-lg backdrop-blur bg-[#0a0f1c]/50">
                <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-8">

                    <div className="h-full w-full flex items-center justify-center md:w-[40%] ml-4 " >
                        <motion.img src="/man-profile.avif" alt="Saurav Kumar Jha" className="w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 cursor-pointer rounded-value border-4 border-[#1f2c42] shadow-[0_2px_50px_4px_rgba(35,44,66,0.8)] hover:shadow-[0_2px_90px_4px_rgba(35,44,66,0.8)] transition-transform duration-500 object-cover animate-glow" initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        />
                    </div>

                    {/* Text Content */}
                    <div className="w-full md:w-[50%] md:flex-1 py-3 px-2">
                        <h1 className="text-2xl sm:text-3xl font-medium text-white">Hi, I'm</h1>
                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-2">Saurav Kumar Jha</h2>
                        <p className="text-blue-400 text-xl sm:text-2xl font-semibold">FULL STACK WEB DEVELOPER</p>

                        <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6">
                            {[SiHtml5, SiCss3, SiJavascript, SiSpringboot, SiPostgresql, SiTailwindcss].map((Icon, i) => (
                                <div key={i} className="p-3 border-2 border-[#1f2c42] shadow-[0_2px_18px_0px_rgba(35,44,66,0.8)] hover:shadow-[0_2px_22px_4px_rgba(35,44,66,0.8)] bg-[#121e36]/30 rounded-xl cursor-pointer animate-glow transition"
                                >
                                    <Icon className="text-2xl text-blue-400" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* Project Section */}
            <section id="projects" className="px-6 py-10 bg-[#121e36]">
                <h3 className="text-3xl font-semibold text-blue-400 mb-6 flex items-center gap-3"><FaProjectDiagram /> Projects</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6  px-4 py-2 w-4/5 mx-auto ">
                    {[{
                        title: "Resume Builder",
                        image: "/Home_resume.jpg",
                        desc: "A resume building web app with AI integration.",
                        link: "https://resume-maker-five-omega.vercel.app"
                    }, {
                        title: "Stationary E-commerce Website",
                        image: "/stationary.JPG",
                        desc: "A full-stack platform to connect shop and customers. Here you can buy stationary products.",
                        link: "https://stationary-shop-sigma.vercel.app/"
                    }, {
                        title: "Blogging Webiste ",
                        image: "/blog.JPG",
                        desc: "User-friendly blog webiste where user can post, read other blog.",
                        link: "https://blog2u.vercel.app/"
                    }].map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#0a0f1c] border border-[#1f2c42] rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 transition duration-300 "
                            whileHover={{ scale: 1.03 }}
                        >
                            <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
                            <div className="p-4">
                                <h4 className="text-2xl text-blue-400 font-semibold mb-2">{project.title}</h4>
                                <p className="text-sm text-gray-300 mb-2">{project.desc}</p>
                                <div className="text-right">
                                    <a href={project.link} target="_blank" className="text-blue-400 text-xl cursor-pointer hover:scale-110 " >→</a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="px-6 py-16 bg-[#0a0f1c] flex flex-col md:flex-row items-center gap-12">
                <motion.div className="w-full md:w-[40%] ml-6 drop-shadow-lg " initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} >
                    <DotLottieReact src="/Animation-Computer.lottie" className="w-full h-auto drop-shadow-lg max-w-xs mx-auto md:mx-0 rounded-2xl" loop speed={0.5} autoplay />
                </motion.div>

                <motion.div className="w-full -mt-10 md:w-1/2 text-center md:text-left" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} >
                    <h3 className="text-4xl font-bold text-blue-400 mb-4 -ml-4 ">About Me</h3>
                    <p className="text-xl mb-4 text-gray-300">
                        I'm a passionate <span className="text-blue-300 font-semibold">Full Stack Web Developer</span> with a strong background in building responsive and user-friendly web applications.
                    </p>
                    <p className="text-gray-400 text-base ">
                        I specialize in technologies like <span className="text-blue-300">React.js, Tailwind CSS, Java, SpringBoot</span>, and modern JavaScript. I love turning complex problems into beautiful, intuitive designs.
                    </p>
                </motion.div>
            </section>

            {/* Skills  */}
            <SkillsSection />



            {/* Contact Section */}
            <section id="contact" className="px-6 py-10 bg-[#0a0f1c] text-center">
                <h3 className="text-3xl font-semibold text-blue-400 mb-6">Contact Me</h3>
                <p className="mb-4">Feel free to connect with me on social media or send an email!</p>
                <div className="flex justify-center gap-6 text-2xl">
                    <a href="https://github.com/saurav-kumar-jha" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="hover:text-blue-400" />
                    </a>
                    <a href="https://linkedin.com/in/saurav-kumar-jha-76a773341" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="hover:text-blue-400" />
                    </a>
                    <a href="mailto:sauravkrjha614@gmail.com">
                        <FaEnvelope className="hover:text-blue-400" />
                    </a>
                </div>
            </section>
        </div>
    );
}