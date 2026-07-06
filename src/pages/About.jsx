
import React from "react";
import { motion } from "framer-motion";
import { programs, universityInfo } from '../data/programs';
import { Link, useNavigate } from 'react-router-dom';

export default function About() {

    const images = [
        "../../src/assets/mission1.jpg",
        "../../src/assets/vision1.jpg",

    ];
    const facultyImgaes = [
        "../../src/assets/eng.jpg",
        "../../src/assets/buss.jpg",
        "../../src/assets/ai.jpg",
        "../../src/assets/doctors.webp",
        "../../src/assets/law.jpg",
        "../../src/assets/art.jpg",
    ]
    return (
        <div className="bg-white text-gray-900">


            <section className=" text-white h-96 mt-20 ">
                <div className="h-96 mx-auto px-4 text-center" style={{
                    backgroundImage: "url('../../src/assets/back2.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    // backgroundAttachment: "fixed",
                }}>
                    <h1
                        className=" text-4xl md:text-5xl font-black my-4 pt-28"
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
            <section className="py-24">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center max-w-6xl">
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
                    <div className="grid grid-cols-2 gap-5">
                        {[
                            { label: "Students", value: universityInfo.stats.students },
                            { label: "Programs", value: universityInfo.stats.programs },
                            { label: "Countries", value: universityInfo.stats.countries },
                            { label: "Alumni", value: universityInfo.stats.alumni },
                        ].map((s, i) => (
                            <div

                                className="p-6 rounded-2xl bg-white border shadow-sm text-center hover:shadow-xl transition"
                            >
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
            <section className="bg-gray-50 py-24">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 max-w-6xl">

                    {[
                        { title: "Mission", text: universityInfo.mission },
                        { title: "Vision", text: universityInfo.vision },
                    ].map((item, i) => (
                        <div className="bg-white p-0 rounded-3xl shadow-sm border hover:shadow-2xl transition">
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
            <section className="py-24">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-black">Core Values</h2>
                    <div className="w-14 h-1 bg-[#de2203] mx-auto mt-3"></div>
                </div>

                <div className="container mx-auto px-4 grid md:grid-cols-4 gap-6 max-w-6xl">
                    {universityInfo.values.map((v, i) => (
                        <div
                            className="p-6 rounded-2xl border bg-white text-center shadow-sm hover:shadow-xl transition"
                        >
                            <div className="text-4xl mb-3">{v.icon}</div>
                            <h3 className="font-bold mb-2">{v.title}</h3>
                            <p className="text-sm text-gray-600">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Faculty */}
            <section className="bg-gray-50 py-24">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-black">Faculty</h2>
                    <div className="w-14 h-1 bg-[#de2203] mx-auto mt-3"></div>
                </div>

                <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6 max-w-6xl">
                    {universityInfo.faculties.map((l, i) => (
                        <motion.div
                            key={l.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -10 }}
                            transition={{ delay: 0 }}
                            className="bg-white p-6 rounded-2xl text-center border shadow-sm hover:shadow-2xl transition"
                        >

                            <div className="w-full h-52 mb-4"><img className="w-full h-full rounded-md" src={facultyImgaes[i]}/></div>
                            <h3 className="font-bold text-sm">{l.name}</h3>
                            <p className="text-xs text-gray-500 mt-1">{l.programs} programs</p>
                            <Link to={`/programs?category=${l.name.replace('Faculty of ', '')}`}
                                className="text-[#CC0000] text-xs font-semibold no-underline hover:underline">View Programs →</Link>
                        </motion.div>
                    ))}
                </div>
            </section>

        </div>
    );
}