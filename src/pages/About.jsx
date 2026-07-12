
import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBriefcase,
    faGavel,
    faGear,
    faGlobe,
    faHeartPulse,
    faLaptopCode,
    faLightbulb,
    faPalette,
    faShieldHalved,
    faStar,
} from '@fortawesome/free-solid-svg-icons';
import { universityInfo } from '../data/programs';
import back2 from '../assets/back2.webp';
import mission1 from '../assets/mission1.jpg';
import vision1 from '../assets/vision1.jpg';
import eng from '../assets/eng.jpg';
import buss from '../assets/buss.jpg';
import ai from '../assets/ai.jpg';
import doctors from '../assets/doctors.webp';
import law from '../assets/law.jpg';
import art from '../assets/art.jpg';

export default function About() {

    const images = [mission1, vision1];
    const facultyImgaes = [eng, buss, ai, doctors, law, art];
    const valueIcons = [faStar, faShieldHalved, faGlobe, faLightbulb];
    const facultyIcons = [faGear, faBriefcase, faLaptopCode, faHeartPulse, faGavel, faPalette];
    return (
        <div className="bg-white text-gray-900">


            <section className="mt-20 text-white">
                <div className="mx-auto flex min-h-[320px] flex-col items-center justify-center px-4 text-center md:min-h-96" style={{
                    backgroundImage: `url(${back2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    // backgroundAttachment: "fixed",
                }}>
                    <h1
                        className="my-4 text-4xl font-black md:text-5xl"
                    >
                        About {universityInfo.shortName}
                    </h1>

                    <p
                        className="font-medium text-sm text-white bg-[#de2203]/20 border border-[#de2203]/20  px-3 py-1.5 rounded-full mb-5 max-w-sm mx-auto"
                    >
                        {universityInfo.tagline}
                    </p>
                </div>
            </section>
            <section className="py-14">
                <div className="container mx-auto grid max-w-6xl items-center gap-8 px-4 md:grid-cols-2 lg:gap-12">
                    <div>
                        <h2 className="text-3xl font-black mb-4">University Overview</h2>
                        <div className="w-14 h-1 bg-[#de2203] mb-6"></div>

                        <p className="text-gray-500 text-sm leading-relaxed mb-3">
                            Lincoln University College (LUC), established in {universityInfo.founded}, is one of Malaysia's leading private university colleges,
                            fully accredited by the Malaysian Qualifications Agency (MQA) and registered with the Ministry of Higher Education (MOHE).
                        </p>
                        <p className="text-gray-500 text-sm leading-relaxed mb-3">
                            With {universityInfo.stats.students} students from {universityInfo.stats.countries} countries, we offer {universityInfo.stats.programs} programs
                            across six faculties including Engineering, Business, IT, Health Sciences, Law, and Arts.
                        </p>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Our {universityInfo.stats.alumni} alumni work in leading organizations worldwide, reflecting the quality of our education and industry partnerships.
                        </p>
                    </div>

                    {/* STATS CARDS */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-5">
                        {[
                            { label: "Students", value: universityInfo.stats.students },
                            { label: "Programs", value: universityInfo.stats.programs },
                            { label: "Countries", value: universityInfo.stats.countries },
                            { label: "Alumni", value: universityInfo.stats.alumni },
                        ].map((s) => (
                            <div key={s.label} className="p-5 rounded-xl bg-white border shadow-sm text-center hover:bg-red-50/40 hover:shadow-lg transition">
                                <div className="text-2xl font-black text-[#de2203]">
                                    {s.value}
                                </div>
                                <div className="text-sm text-gray-500">{s.label}</div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* MISSION / VISION */}
            <section className="bg-gray-50 py-14">
                <div className="container mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2 lg:gap-10">

                    {[
                        { title: "Mission", text: universityInfo.mission },
                        { title: "Vision", text: universityInfo.vision },
                    ].map((item, i) => (
                        <div key={item.title} className="bg-white p-0 rounded-2xl shadow-sm border hover:bg-red-50/30 hover:shadow-xl transition">
                            <img src={images[i]} alt={item.title} className="w-full h-40 object-cover rounded-t-2xl mb-3 " />
                            <h3 className="text-2xl font-bold mb-4 text-[#de2203] mx-4">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed m-4">
                                {item.text}
                            </p>
                          
                        </div>
                    ))}

                </div>
            </section>

            {/* VALUES */}
            <section className="py-14">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-black">Core Values</h2>
                    <div className="w-14 h-1 bg-[#de2203] mx-auto mt-3"></div>
                </div>

                <div className="container mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4">
                    {universityInfo.values.map((v, i) => (
                        <div
                            key={v.title}
                            className="p-5 rounded-xl border bg-white text-center shadow-sm hover:bg-red-50/40 hover:shadow-lg transition"
                        >
                            <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-red-50 text-[#de2203]">
                                <FontAwesomeIcon icon={valueIcons[i]} />
                            </div>
                            <h3 className="font-bold mb-2">{v.title}</h3>
                            <p className="text-sm text-gray-600">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Faculty */}
            <section className="bg-gray-50 py-14">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-black">Faculty</h2>
                    <div className="w-14 h-1 bg-[#de2203] mx-auto mt-3"></div>
                </div>

                <div className="container mx-auto grid max-w-6xl gap-5 px-4 sm:grid-cols-2 lg:grid-cols-3">
                    {universityInfo.faculties.map((l, i) => (
                        <motion.div
                            key={l.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -10 }}
                            transition={{ delay: 0 }}
                            className="bg-white p-5 rounded-xl text-center border shadow-sm hover:bg-red-50/30 hover:shadow-xl transition"
                        >

                            <div className="mb-4 h-44 w-full sm:h-52"><img className="h-full w-full rounded-md object-cover" src={facultyImgaes[i]} alt={l.name}/></div>
                            <div className="mx-auto -mt-8 mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-white text-[#de2203] shadow-md">
                                <FontAwesomeIcon icon={facultyIcons[i]} />
                            </div>
                            <h3 className="font-bold text-sm">{l.name}</h3>
                            <p className="text-xs text-gray-500 mt-1">{l.programs} programs</p>
                            <Link to={`/programs?category=${l.name.replace('Faculty of ', '')}`}
                                className="text-[#CC0000] text-xs font-semibold no-underline hover:underline">View Programs -&gt;</Link>
                        </motion.div>
                    ))}
                </div>
            </section>

        </div>
    );
}
