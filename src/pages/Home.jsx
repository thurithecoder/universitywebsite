import { programs, universityInfo } from '../data/programs';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRight,
    faAward,
    faGraduationCap,
    faStar,
} from '@fortawesome/free-solid-svg-icons';
import ProgramCard from '../components/ProgramCard';
import { findPrograms } from '../utils/ai';
import pic1 from '../assets/pic1.jpg';
import back2 from '../assets/back2.webp';

import React, { useEffect, useRef, useState } from 'react';


function getRecommendations(interest) {
    return findPrograms(interest);
}
function Homepage() {

    const [interest, setInterest] = useState('');
    const [recs, setRecs] = useState([]);
    const [showRecs, setShowRecs] = useState(false);
    const [visibleCards, setVisibleCards] = useState(2);
    const featuredPrograms = programs.slice(0, 3);

    const handleRecommend = (e) => {
        e.preventDefault();
        setRecs(getRecommendations(interest));
        setShowRecs(true);
    };
    const images = [pic1, pic1, pic1, pic1];
    const [, setCurrentIndex] = useState(0);
    const trackRef = useRef(null);
    const cardRef = useRef(null);

    useEffect(() => {
        const updateVisibleCards = () => {
            setVisibleCards(window.matchMedia('(max-width: 768px)').matches ? 1 : 2);
        };

        updateVisibleCards();
        window.addEventListener('resize', updateVisibleCards);
        return () => window.removeEventListener('resize', updateVisibleCards);
    }, []);

    const getSlideWidth = () => {
        if (!cardRef.current) return 0;

        const cardWidth = cardRef.current.offsetWidth;
        const gap = 20;

        return cardWidth + gap;
    };

    const move = (index) => {
        const slideWidth = getSlideWidth();

        trackRef.current.style.transform =
            `translateX(-${index * slideWidth}px)`;
    };

    const maxIndex = Math.max(universityInfo.testimonials.length - visibleCards, 0);

    const next = () => {
        setCurrentIndex(prev => {
            const newIndex = Math.min(prev + 1, maxIndex);
            move(newIndex);
            return newIndex;
        });
    };

    const prev = () => {
        setCurrentIndex(prev => {
            const newIndex = Math.max(prev - 1, 0);
            move(newIndex);
            return newIndex;
        });
    };


    return (
        <>
            <section className="relative flex min-h-screen items-center overflow-hidden" style={{
                backgroundImage: `url(${pic1})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
                <div className="absolute inset-0 " style={{ backgroundColor: "rgba(73, 0, 0, 0.56)" }}></div>
                <div className="container mx-auto px-4 py-16 relative z-10">
                    <div className="row align-items-center g-5">

                        {/* Left */}
                        <div className="col-lg-6">
                            <span className="max-[418px]:hidden  inline-flex items-center gap-2 text-xs font-medium text-white/80 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full mb-5">
                                <FontAwesomeIcon icon={faAward} /> Ranked Top University Malaysia 2025
                            </span>
                            <h1 className="text-white font-black leading-[1.1] mb-5" style={{ fontSize: 'clamp(2rem,5vw,3.4rem)' }}>
                                Shape Your Future<br />at <span className="text-yellow-300">Lincoln</span><br />University College
                            </h1>
                            <p className="text-white/80 text-base mb-7 max-w-[460px] leading-relaxed">
                                Join {universityInfo.stats.students} students from {universityInfo.stats.countries} countries.
                                70+ programs in Engineering, Business, IT, Health &amp; Law.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <Link to="/programs"
                                    className=" shadowbtn inline-flex items-center gap-2 bg-[#de2203] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#b81b02] transition-all no-underline text-sm shadow-lg">
                                    <FontAwesomeIcon icon={faGraduationCap} /> Explore Programs
                                </Link>
                                <Link to="/contact"
                                    className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-all no-underline text-sm">
                                    Apply Now <FontAwesomeIcon icon={faArrowRight} />
                                </Link>
                            </div>

                        </div>

                        <div className="col-lg-5 offset-lg-1">
                            <div className='bg-white rounded-2xl p-6 text-center'>

                                <div className="flex items-center gap-1 mb-1 justify-center">
                                    <FontAwesomeIcon icon={faStar} className="text-sm text-[#de2203]" />
                                    <span className="text-sm font-semibold text-gray-800">AI Recommender</span>
                                </div>
                                <p className="text-[11px] text-gray-400 mb-2">Tell us your interest - we'll suggest programs.</p>
                                <form onSubmit={handleRecommend} className="flex flex-col gap-2 sm:flex-row">
                                    <input value={interest} onChange={e => setInterest(e.target.value)} type="text"
                                        placeholder="e.g. technology, healthcare, finance..."
                                        className="min-w-0 flex-1 rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none transition-colors focus:border-[#de2203] sm:rounded-r-none" />
                                    <button type="submit" className="whitespace-nowrap rounded-lg bg-[#de2203] px-4 py-2.5 text-sm text-white transition-colors hover:bg-[#990000] sm:rounded-l-none">
                                        Suggest
                                    </button>
                                </form>
                                {showRecs && (
                                    <div className="mt-3">
                                        {recs.length > 0 ? (
                                            <>
                                                <p className="text-[11px] text-gray-400 mb-2">{recs.length} match(es) for "{interest}":</p>
                                                {recs.slice(0, 3).map(p => (
                                                    <Link to={`/programs/${p.id}`} key={p.id}
                                                        className="flex items-center gap-2 p-2 mb-1 rounded-lg hover:bg-gray-50 no-underline transition-colors group">
                                                        <span className="text-lg">{p.icon}</span>
                                                        <div className="flex-1 min-w-0">
                                                            <div className="text-xs font-semibold text-gray-800 truncate">{p.name}</div>
                                                            <div className="text-[10px] text-gray-400">{p.duration} - {p.fees}</div>
                                                        </div>
                                                        <FontAwesomeIcon icon={faArrowRight} className="text-xs text-[#CC0000]" />
                                                    </Link>
                                                ))}
                                                {recs.length > 3 && <Link to={`/programs?search=${interest}`} className="text-[11px] text-[#CC0000] font-medium no-underline">View all {recs.length} -&gt;</Link>}
                                            </>
                                        ) : (
                                            <p className="text-[11px] text-gray-400">No matches for "{interest}". Try: technology, business, law.</p>
                                        )}
                                    </div>
                                )}

                            </div>
                        </div>

                    </div>
                </div>

            </section>
            <section className="bg-gray-50 py-12">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                        <div>
                            <span className="mb-2 inline-block rounded-lg bg-red-50 px-3 py-1.5 text-sm font-semibold text-[#de2203]">
                                Featured Programs
                            </span>
                            <h2 className="text-3xl font-black text-gray-950">Popular Academic Pathways</h2>
                            <div className="mt-3 h-1 w-14 rounded-full bg-[#de2203]" />
                        </div>
                        <Link to="/programs" className="inline-flex items-center gap-2 text-sm font-bold text-[#de2203] no-underline hover:text-[#990000]">
                            Browse all programs
                            <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                        </Link>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {featuredPrograms.map((program) => (
                            <ProgramCard key={program.id} program={program} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-white py-24">  
                <div className="max-w-4xl mx-auto text-center mb-10 px-6">
                    <span className="inline-block px-4 py-2 rounded-full bg-red-50 text-[#de2203] font-medium text-sm mb-4">
                        About University
                    </span>

                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 ">
                        Shaping Future Leaders Since {universityInfo.founded}
                    </h2>
                    <div className="w-14 h-1 bg-[#de2203] mx-auto rounded-full"></div>
                </div>
                <div
                    className="relative mx-auto min-h-[60px] max-w-7xl overflow-hidden bg-scroll shadow-[0_30px_80px_rgba(0,0,0,0.25)] md:bg-fixed"
                    style={{
                        backgroundImage: `url(${back2})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80" />

                    <div className="relative z-10 flex min-h-[60px] flex-col items-center justify-center px-8 py-10 text-center text-white">

                        <span className="mb-4 text-sm uppercase tracking-[8px] text-white/70">
                            Established
                        </span>

                        <h3 className="mb-6 text-7xl md:text-8xl font-black">
                            {universityInfo.founded}
                        </h3>

                        <p className="max-w-3xl text-lg leading-relaxed text-white/80">
                            Lincoln University College is a modern institution focused on global
                            education, innovation, and empowering future leaders across multiple
                            disciplines. We strive to create an inclusive learning environment that
                            inspires excellence, creativity, and lifelong success.
                        </p>

                    </div>
                </div>


                <div className="mx-auto mt-14 max-w-6xl px-6">

                    <div className="mt-10 text-center">
                        <Link to="/about" className="group inline-flex items-center rounded-2xl bg-[#de2203] px-10 py-3 font-semibold text-white no-underline transition-all duration-300 hover:scale-105 hover:bg-[#a30000]">
                            Learn More About Us
                            <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-2">-&gt;</span>
                        </Link>
                    </div>

                </div>

            </section>
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                            Latest News & Events
                        </h2>
                        <div className="w-14 h-1 bg-[#de2203] mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-8">
                        {universityInfo.news.map((item, index) => (

                            <div key={item.id} className={`flex flex-col sm:flex-row news-card ${index % 2 !== 0 ? "reverse" : ""}`}>

                                <div className="news-image-wrapper">
                                    <img
                                        src={images[index]}
                                        alt={item.title}
                                        className={`news-image ${index % 2 === 0 ? "left-skew" : "right-skew"}`}
                                    />
                                </div>

                                <div className="news-content">

                                    <span className="badge">{item.category}</span>

                                    <h3>{item.title}</h3>

                                    <p className="date">Published: {item.date}</p>

                                    <div className="line"></div>

                                    <p className="desc">{item.excerpt}</p>

                                    <div className="actions">
                                        <button>Read More</button>
                                        <button>Share</button>
                                        <button className="bookmark"> <a href="contact">Apply Now</a></button>
                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>
            </section>
            <section className="testimonials-section">
                <div className="container mx-auto px-4">

                    {/* HEADER */}
                    <div className="testimonials-header">
                        <h2>What Our Students Say</h2>

                        <div className="carousel-controls">
                            <button onClick={prev} aria-label="Previous testimonial">&lt;</button>
                            <button onClick={next} aria-label="Next testimonial">&gt;</button>
                        </div>
                    </div>
                    <div className="carousel-track-wrapper">

                        <div
                            className="carousel-track"
                            ref={trackRef}
                        >
                            {universityInfo.testimonials.map((t, i) => (
                                <div
                                    className="testimonial-card"
                                    key={t.name}
                                    ref={i === 0 ? cardRef : null}
                                >
                                    <p>"{t.text}"</p>

                                    <div className="testimonial-author">
                                        <div>
                                            <strong>{t.name} </strong>
                                            <span> {t.program}</span>
                                        </div>

                                        <div className="avatar">{t.initials}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </section>
            <section className="bg-[#de2203] py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-white font-black mb-3" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)' }}>Ready to Begin Your Journey?</h2>
                    <p className="text-white/80 mb-7 text-sm">Take the first step toward a brighter future at Lincoln University College.</p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <Link to="/contact"
                            className="bg-white text-[#de2203] font-bold px-8 py-3 rounded-xl hover:bg-gray-50 transition-colors no-underline text-sm">
                            Apply Now
                        </Link>
                        <Link to="/programs"
                            className="border-2 border-white/40 text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/10 transition-colors no-underline text-sm">
                            Browse Programs
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}




export default Homepage;

