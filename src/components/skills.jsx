import React from "react";
import { motion } from "framer-motion";
import {
    SiReact,
    SiTailwindcss,
    SiSpringboot,
    SiPostgresql,
    SiMongodb,
    SiFirebase,
    SiMysql,
} from "react-icons/si";
import { FaGithub, FaTools } from "react-icons/fa";
import { DiJava } from "react-icons/di";

export default function SkillsSection() {
    const skills = [
        { name: "React js", icon: SiReact, color: "text-blue-300" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-blue-300" },
        { name: "Spring Boot", icon: SiSpringboot, color: "text-green-400" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-300" },
        { name: "Java", icon: DiJava, color: "text-orange-400" },
        { name: "SQL", icon: SiMysql, color: "text-green-400" },
        { name: "GitHub", icon: FaGithub, color: "text-white" },
        { name: "Firebase", icon: SiFirebase, color: "text-yellow-400" },
    ];

    return (
        <section id="skills" className="px-6 py-16 bg-[#121e36]">
            <h3 className="text-4xl font-bold text-blue-400 mb-10 flex items-center gap-3 justify-center">
                <FaTools /> Skills
            </h3>
            <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} >
                {skills.map(({ name, icon: Icon, color }, index) => (
                    <div key={index} className="relative w-full max-w-[220px] mx-auto [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent animate-border z-0">
                        <motion.div  title={name} className="relative z-10 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#0a0f1c]/80 cursor-pointer " >
                            <div className="p-4 rounded-full bg-[#1f2c42] mb-3 hover:scale-110 ">
                                <Icon className={`text-3xl ${color}`}  />
                            </div>
                            <span className="text-lg font-semibold text-gray-300">
                                {name}
                            </span>
                        </motion.div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
