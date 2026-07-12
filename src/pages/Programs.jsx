import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRight,
    faBookOpen,
    faBuildingColumns,
    faCalendarCheck,
    faGlobe,
    faGraduationCap,
    faHeadset,
    faMagnifyingGlass,
    faRotateLeft,
    faUsers,
    faWandMagicSparkles,
} from '@fortawesome/free-solid-svg-icons';
import { programs, categories, universityInfo } from '../data/programs';
import ProgramCard from '../components/ProgramCard';
import ProgramSkeleton from '../components/ProgramSkeleton';

import mdcarousel from '../assets/mdcarousel.jpg';
import itcarousel from '../assets/itcarousel.jpg';
import accountingcarousel from '../assets/accountingcarousel.jpg';
import businesscarousel from '../assets/businesscarousel.jpg';
import engcarousel from '../assets/engcarousel.jpg';

const levels = ['All', 'Undergraduate', 'Postgraduate'];

const heroImages = [
    mdcarousel,
    itcarousel,
    accountingcarousel,
    businesscarousel,
    engcarousel,
];

export default function Programspage() {
    const [searchParams, setSearchParams] = useSearchParams();

    const [query, setQuery] = useState(searchParams.get('search') || '');
    const [category, setCategory] = useState(searchParams.get('category') || 'All');
    const [level, setLevel] = useState('All');
    const [heroIndex, setHeroIndex] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setHeroIndex((prev) => (prev + 1) % heroImages.length);
        }, 4500);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        setQuery(searchParams.get('search') || '');
        setCategory(searchParams.get('category') || 'All');
    }, [searchParams]);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 220);
        return () => clearTimeout(timer);
    }, [query, category, level]);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();

        return programs.filter((p) => {
            const matchesQuery =
                !q ||
                p.name.toLowerCase().includes(q) ||
                p.category.toLowerCase().includes(q) ||
                p.description.toLowerCase().includes(q) ||
                p.keywords.some((kw) =>
                    kw.toLowerCase().includes(q) || q.includes(kw.toLowerCase())
                );

            const matchesCategory = category === 'All' || p.category === category;
            const matchesLevel = level === 'All' || p.level === level;

            return matchesQuery && matchesCategory && matchesLevel;
        });
    }, [query, category, level]);

    const updateParams = (next) => {
        const params = {};

        if (next.query) params.search = next.query;
        if (next.category && next.category !== 'All') params.category = next.category;

        setSearchParams(params);
    };

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        updateParams({ query: value, category });
    };

    const handleCategoryClick = (cat) => {
        setCategory(cat);
        updateParams({ query, category: cat });
    };

    const clearFilters = () => {
        setQuery('');
        setCategory('All');
        setLevel('All');
        setSearchParams({});
    };

    return (
        <div className="bg-white text-gray-900">
            <section className="relative mt-20 min-h-[430px] overflow-hidden text-white">
                {heroImages.map((image, index) => (
                    <div
                        key={image}
                        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                            index === heroIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{ backgroundImage: `url(${image})` }}
                    />
                ))}
                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35" />

                <div className="container relative z-10 mx-auto flex min-h-[430px] max-w-6xl flex-col justify-center px-4 py-16">
                    <motion.span
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-5 inline-flex w-fit items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/85"
                    >
                        <FontAwesomeIcon icon={faGraduationCap} />
                        {universityInfo.shortName} Academic Pathways
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mb-5 max-w-3xl text-4xl font-black leading-tight md:text-6xl"
                    >
                        Find a program that fits your next step
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl text-base leading-relaxed text-white/80"
                    >
                        Browse {universityInfo.stats.programs} programs across {universityInfo.faculties.length} faculties, from undergraduate degrees to postgraduate study.
                    </motion.p>

                    <div className="mt-8 flex gap-2">
                        {heroImages.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                aria-label={`Show program hero ${index + 1}`}
                                onClick={() => setHeroIndex(index)}
                                className={`h-2.5 rounded-full transition-all ${
                                    index === heroIndex ? 'w-8 bg-white' : 'w-2.5 bg-white/45 hover:bg-white/75'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden border-b border-red-100 bg-gradient-to-br from-white via-red-50/60 to-white">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#990000] via-[#de2203] to-[#990000]" />
                <div className="absolute right-0 top-0 h-full w-1/3 skew-x-[-16deg] bg-red-100/30" />
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="relative grid grid-cols-2 gap-4 py-7 md:grid-cols-4">
                        {[
                            { label: 'Programs', value: universityInfo.stats.programs, icon: faBookOpen },
                            { label: 'Faculties', value: universityInfo.faculties.length, icon: faBuildingColumns },
                            { label: 'Students', value: universityInfo.stats.students, icon: faUsers },
                            { label: 'Countries', value: universityInfo.stats.countries, icon: faGlobe },
                        ].map((item) => (
                            <div key={item.label} className="group relative overflow-hidden rounded-xl border border-red-100 bg-white p-4 shadow-[0_12px_26px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:border-red-200 hover:bg-red-50/40 hover:shadow-[0_18px_36px_rgba(153,0,0,0.14)]">
                                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#de2203] to-[#990000]" />
                                <div className="absolute right-0 top-0 h-12 w-20 skew-x-[-18deg] bg-red-50" />
                                <div className="relative mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-[#de2203] shadow-sm ring-4 ring-white transition group-hover:bg-white group-hover:text-[#990000]">
                                    <FontAwesomeIcon icon={item.icon} className="text-base" />
                                </div>
                                <div className="relative text-2xl font-black text-gray-950">{item.value}</div>
                                <div className="relative mt-1 text-xs font-bold uppercase tracking-wide text-gray-500">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-red-100 bg-white/95 py-2.5 shadow-sm backdrop-blur md:sticky md:top-20 md:z-30">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="relative overflow-hidden rounded-2xl border border-red-100 bg-white px-3 py-3 shadow-[0_10px_24px_rgba(222,34,3,0.10)]">
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#990000] via-[#de2203] to-[#990000]" />
                        <div className="relative grid gap-2.5 lg:grid-cols-[minmax(220px,320px)_1fr] lg:items-center">
                            <div>
                                <div className="relative">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#de2203]" />
                                    <input
                                        type="text"
                                        value={query}
                                        onChange={handleSearchChange}
                                        placeholder="Search programs"
                                        className="h-10 w-full rounded-xl border border-red-100 bg-red-50/40 py-2 pl-10 pr-3 text-sm font-medium outline-none transition placeholder:text-gray-400 focus:border-[#de2203] focus:bg-white focus:ring-4 focus:ring-red-100"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="flex flex-wrap gap-1.5">
                                    {levels.map((lv) => (
                                        <button
                                            key={lv}
                                            type="button"
                                            onClick={() => setLevel(lv)}
                                            className={`rounded-lg border px-3.5 py-1.5 text-xs font-bold transition ${
                                                level === lv
                                                    ? 'border-[#de2203] bg-gradient-to-r from-[#de2203] to-[#990000] text-white shadow-[0_12px_24px_rgba(222,34,3,0.24)]'
                                                    : 'border-red-100 bg-white text-gray-700 shadow-sm hover:border-[#de2203] hover:text-[#de2203]'
                                            }`}
                                        >
                                            {lv}
                                        </button>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-1.5">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat}
                                            type="button"
                                            onClick={() => handleCategoryClick(cat)}
                                            className={`rounded-lg border px-3.5 py-1.5 text-xs font-bold transition ${
                                                category === cat
                                                    ? 'border-gray-950 bg-gray-950 text-white shadow-[0_12px_24px_rgba(15,23,42,0.18)]'
                                                    : 'border-red-100 bg-white text-gray-700 shadow-sm hover:border-[#de2203] hover:text-[#de2203]'
                                            }`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                    {(query || category !== 'All' || level !== 'All') && (
                                        <button
                                            type="button"
                                            onClick={clearFilters}
                                            className="rounded-lg border border-red-100 bg-red-50 px-3.5 py-1.5 text-xs font-bold text-[#de2203] hover:bg-red-100"
                                        >
                                            Clear
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 py-10">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                        <div>
                            <span className="mb-2 inline-block rounded-lg bg-red-50 px-3 py-1.5 text-sm font-semibold text-[#de2203]">
                                Available Programs
                            </span>
                            <h2 className="text-3xl font-black text-gray-950">Browse Programs</h2>
                            <div className="mt-3 h-1 w-14 rounded-full bg-[#de2203]" />
                        </div>

                        <p className="text-sm text-gray-500">
                            Showing <span className="font-semibold text-gray-950">{filtered.length}</span>{' '}
                            {filtered.length === 1 ? 'program' : 'programs'}
                            {query && (
                                <>
                                    {' '}
                                    for <span className="font-semibold text-gray-950">"{query}"</span>
                                </>
                            )}
                        </p>
                    </div>

                    {loading ? (
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <ProgramSkeleton key={index} />
                            ))}
                        </div>
                    ) : filtered.length > 0 ? (
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {filtered.map((program, index) => (
                                <motion.div
                                    key={program.id}
                                    initial={{ opacity: 0, y: 18 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-60px' }}
                                    transition={{ delay: index * 0.02 }}
                                >
                                    <ProgramCard program={program} />
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-xl border border-red-100 bg-white px-6 py-12 text-center shadow-sm">
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-50 text-[#de2203]">
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-gray-950">No programs found</h3>
                            <p className="mb-6 text-sm text-gray-500">Try a different search term or clear your filters.</p>
                            <button
                                type="button"
                                onClick={clearFilters}
                                className="inline-flex items-center gap-2 rounded-lg bg-[#de2203] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#990000]"
                            >
                                <FontAwesomeIcon icon={faRotateLeft} />
                                Reset Search
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <section className="bg-white py-10">
                <div className="container mx-auto grid max-w-6xl gap-5 px-4 md:grid-cols-3">
                    {[
                        {
                            icon: faWandMagicSparkles,
                            title: 'Program Matching',
                            text: 'Compare your interests with available academic pathways and shortlist suitable options.',
                        },
                        {
                            icon: faCalendarCheck,
                            title: 'Flexible Intake',
                            text: 'Choose from multiple annual intakes and plan your application around your schedule.',
                        },
                        {
                            icon: faHeadset,
                            title: 'Admission Support',
                            text: 'Speak with admissions for entry requirements, fees, and application guidance.',
                        },
                    ].map((item) => (
                        <div key={item.title} className="rounded-xl border border-red-100 bg-white p-5 shadow-[0_12px_26px_rgba(15,23,42,0.07)] transition hover:-translate-y-1 hover:bg-red-50/40 hover:shadow-[0_18px_36px_rgba(153,0,0,0.13)]">
                            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-red-50 text-[#de2203]">
                                <FontAwesomeIcon icon={item.icon} className="text-lg" />
                            </div>
                            <h3 className="mb-3 text-lg font-bold text-gray-950">{item.title}</h3>
                            <p className="text-sm leading-relaxed text-gray-500">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-[#de2203] py-12">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="mb-3 font-black text-white" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)' }}>
                        Ready to Choose Your Program?
                    </h2>
                    <p className="mb-7 text-sm text-white/80">
                        Take the next step toward your future at Lincoln University College.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/contact"
                            className="rounded-lg bg-white px-8 py-3 text-sm font-bold text-[#de2203] no-underline transition-colors hover:bg-gray-50"
                        >
                            Talk to Admissions
                        </Link>
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 rounded-lg border-2 border-white/40 px-8 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-white/10"
                        >
                            Try AI Recommender
                            <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
