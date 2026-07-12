import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowLeft,
    faBriefcase,
    faBookOpen,
    faCalendarDays,
    faCashRegister,
    faCheckCircle,
    faChevronRight,
    faClipboardCheck,
    faClock,
    faGraduationCap,
    faStar,
} from '@fortawesome/free-solid-svg-icons';
import { programs, universityInfo } from '../data/programs';
import ProgramCard from '../components/ProgramCard';
import back2 from '../assets/back2.webp';
import programImage from '../assets/pic1.jpg';

const tabs = [
    { key: 'overview', label: 'Overview' },
    { key: 'requirements', label: 'Requirements & Careers' },
    { key: 'highlights', label: 'Highlights' },
];

export default function Programdetailspage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('overview');

    const program = programs.find((p) => String(p.id) === String(id));

    if (!program) {
        return (
            <div className="min-h-[70vh] mt-20 flex items-center justify-center px-4">
                <div className="text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-2xl text-[#de2203]">
                        <FontAwesomeIcon icon={faGraduationCap} />
                    </div>
                    <h1 className="text-2xl font-black text-gray-900 mb-2">Program not found</h1>
                    <p className="text-sm text-gray-500 mb-6">
                        The program you're looking for doesn't exist or may have been moved.
                    </p>
                    <Link
                        to="/programs"
                        className="px-5 py-2.5 bg-[#de2203] text-white text-sm font-semibold rounded-xl hover:bg-[#990000] transition-colors no-underline"
                    >
                        Browse All Programs
                    </Link>
                </div>
            </div>
        );
    }

    const related = programs
        .filter((p) => p.category === program.category && p.id !== program.id)
        .slice(0, 3);

    return (
        <div className="bg-white text-gray-900">
            {/* HERO */}
            <section className="mt-20 text-white">
                <div
                    className="relative overflow-hidden px-4 py-12 md:py-16"
                    style={{
                        backgroundImage: `url(${back2})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/35" />
                    <div className="container relative z-10 mx-auto max-w-6xl">
                        <div className="mb-5 flex flex-wrap items-center gap-2 text-xs text-white/70">
                            <Link to="/" className="text-white/70 hover:text-white no-underline">Home</Link>
                            <FontAwesomeIcon icon={faChevronRight} className="text-[10px]" />
                            <Link to="/programs" className="text-white/70 hover:text-white no-underline">Programs</Link>
                            <FontAwesomeIcon icon={faChevronRight} className="text-[10px]" />
                            <span className="text-white">{program.category}</span>
                        </div>

                        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
                            <div>
                                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/85">
                                    <FontAwesomeIcon icon={faBookOpen} />
                                    {program.category} - {program.level}
                                </span>
                                <h1 className="mt-4 max-w-3xl text-3xl font-black leading-tight md:text-5xl">{program.name}</h1>
                                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 md:text-base">
                                    {program.description}
                                </p>
                                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                                    {[
                                        { label: 'Duration', value: program.duration, icon: faClock },
                                        { label: 'Intake', value: program.intake, icon: faCalendarDays },
                                        { label: 'Fees', value: program.fees, icon: faCashRegister },
                                    ].map((item) => (
                                        <div key={item.label} className="rounded-xl border border-white/15 bg-white/10 p-3 backdrop-blur">
                                            <div className="mb-1 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wide text-white/60">
                                                <FontAwesomeIcon icon={item.icon} />
                                                {item.label}
                                            </div>
                                            <div className="text-sm font-black text-white">{item.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="hidden overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-2 shadow-[0_24px_60px_rgba(0,0,0,0.25)] backdrop-blur lg:block">
                                <img src={programImage} alt="" className="h-56 w-full rounded-xl object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <section className="bg-gradient-to-br from-gray-50 via-white to-red-50/40 py-10 md:py-14">
                <div className="container mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-3 lg:gap-10">
                    {/* Main column */}
                    <div className="lg:col-span-2">
                        {/* Tabs */}
                        <div className="mb-6 flex gap-2 overflow-x-auto rounded-xl border border-red-100 bg-white p-1.5 shadow-sm">
                            {tabs.map((t) => (
                                <button
                                    key={t.key}
                                    onClick={() => setActiveTab(t.key)}
                                    className={`rounded-lg px-4 py-2.5 text-sm font-bold whitespace-nowrap transition-colors ${
                                        activeTab === t.key
                                            ? 'bg-[#de2203] text-white shadow-[0_10px_20px_rgba(222,34,3,0.18)]'
                                            : 'text-gray-500 hover:bg-red-50 hover:text-[#de2203]'
                                    }`}
                                >
                                    {t.label}
                                </button>
                            ))}
                        </div>

                        {activeTab === 'overview' && (
                            <div className="overflow-hidden rounded-2xl border border-red-100 bg-white p-5 shadow-[0_16px_36px_rgba(15,23,42,0.08)] md:p-6">
                                <span className="mb-3 inline-flex rounded-lg bg-red-50 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-[#de2203]">
                                    Overview
                                </span>
                                <h2 className="mb-3 text-2xl font-black text-gray-950">Program Overview</h2>
                                <p className="mb-6 text-sm font-medium leading-7 text-gray-600">{program.description}</p>
                                <div className="rounded-2xl border border-red-100 bg-gradient-to-br from-red-50/70 to-white p-5">
                                    <h3 className="mb-4 text-sm font-black text-gray-950">Why study {program.name} at {universityInfo.shortName}?</h3>
                                    <ul className="space-y-3">
                                        {program.highlights.map((h) => (
                                            <li key={h} className="flex items-start gap-3 text-sm font-medium text-gray-600">
                                                <FontAwesomeIcon icon={faCheckCircle} className="mt-1 text-[#de2203]" />
                                                {h}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}

                        {activeTab === 'requirements' && (
                            <div className="grid gap-5 md:grid-cols-2">
                                <div className="rounded-2xl border border-red-100 bg-white p-5 shadow-[0_16px_36px_rgba(15,23,42,0.08)] md:p-6">
                                    <h3 className="mb-3 flex items-center gap-2 text-sm font-black text-gray-950">
                                        <FontAwesomeIcon icon={faClipboardCheck} className="text-[#de2203]" /> Entry Requirements
                                    </h3>
                                    <p className="text-sm font-medium leading-7 text-gray-600">{program.requirements}</p>
                                </div>
                                <div className="rounded-2xl border border-red-100 bg-white p-5 shadow-[0_16px_36px_rgba(15,23,42,0.08)] md:p-6">
                                    <h3 className="mb-3 flex items-center gap-2 text-sm font-black text-gray-950">
                                        <FontAwesomeIcon icon={faBriefcase} className="text-[#de2203]" /> Career Opportunities
                                    </h3>
                                    <ul className="space-y-2">
                                        {program.careers.map((c) => (
                                            <li key={c} className="flex items-center gap-2 text-sm font-medium text-gray-600">
                                                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#de2203]" /> {c}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}

                        {activeTab === 'highlights' && (
                            <div className="grid gap-4 sm:grid-cols-2">
                                {program.highlights.map((h) => (
                                    <div key={h} className="flex items-center gap-3 rounded-2xl border border-red-100 bg-white p-5 shadow-[0_12px_28px_rgba(15,23,42,0.07)]">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50">
                                            <FontAwesomeIcon icon={faStar} className="text-sm text-[#de2203]" />
                                        </div>
                                        <span className="text-sm font-semibold text-gray-800">{h}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div>
                        <div className="overflow-hidden rounded-2xl border border-red-100 bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.10)] lg:sticky lg:top-28 lg:p-6">
                            <div className="-mx-5 -mt-5 mb-5 h-1.5 bg-gradient-to-r from-[#990000] via-[#de2203] to-[#990000] lg:-mx-6 lg:-mt-6" />
                            <h3 className="mb-5 text-base font-black text-gray-950">Quick Facts</h3>
                            <ul className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                                {[
                                    { icon: faClock, label: 'Duration', value: program.duration },
                                    { icon: faCashRegister, label: 'Tuition Fees', value: program.fees },
                                    { icon: faGraduationCap, label: 'Level', value: program.level },
                                    { icon: faCalendarDays, label: 'Intake', value: program.intake },
                                ].map((f) => (
                                    <li key={f.label} className="flex items-start gap-3 rounded-xl border border-red-100 bg-red-50/40 p-3">
                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                                            <FontAwesomeIcon icon={f.icon} className="text-sm text-[#de2203]" />
                                        </div>
                                        <div>
                                            <div className="text-[11px] font-bold uppercase tracking-wide text-gray-400">{f.label}</div>
                                            <div className="text-sm font-black leading-snug text-gray-800">{f.value}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                to="/contact"
                                className="block w-full text-center bg-[#de2203] text-white font-semibold text-sm py-3 rounded-xl hover:bg-[#990000] transition-colors no-underline mb-3"
                            >
                                Apply Now
                            </Link>
                            <button
                                onClick={() => navigate(-1)}
                                className="w-full text-center bg-gray-50 text-gray-700 font-semibold text-sm py-3 rounded-xl hover:bg-gray-100 transition-colors"
                            >
                                <FontAwesomeIcon icon={faArrowLeft} className="mr-1" /> Back
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PROGRAMS */}
            {related.length > 0 && (
                <section className="bg-gray-50 py-10 md:py-14">
                    <div className="container mx-auto max-w-6xl px-4">
                        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <h2 className="text-2xl font-black">Related Programs</h2>
                            <Link
                                to={`/programs?category=${program.category}`}
                                className="text-sm font-semibold text-[#de2203] no-underline hover:underline"
                            >
                                View all {program.category}
                            </Link>
                        </div>
                        <div className="grid gap-6 md:grid-cols-3">
                            {related.map((p) => <ProgramCard key={p.id} program={p} />)}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}

