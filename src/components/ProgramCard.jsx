import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faArrowRight,
    faBookOpen,
    faCalendarDays,
} from '@fortawesome/free-solid-svg-icons';
import programImage from '../assets/pic1.jpg';

const levelColors = {
    Undergraduate: 'bg-blue-50 text-blue-700 border-blue-100',
    Postgraduate: 'bg-violet-50 text-violet-700 border-violet-100',
};

export default function ProgramCard({ program }) {
    return (
        <article className="group flex h-full min-h-[330px] flex-col overflow-hidden rounded-xl border border-red-100 bg-gradient-to-br from-white via-red-50/25 to-white shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-[0_18px_38px_rgba(153,0,0,0.12)]">
            <div className="relative h-28 overflow-hidden">
                <img
                    src={programImage}
                    alt=""
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                <div className="absolute bottom-3 left-3">
                    <span className="inline-flex items-center gap-2 rounded-md bg-white/95 px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-[#de2203] shadow-sm">
                        <FontAwesomeIcon icon={faBookOpen} className="text-[11px]" />
                        {program.category}
                    </span>
                </div>
                <span className={`absolute right-3 top-3 rounded-md border px-2 py-1 text-[10px] font-bold shadow-sm ${levelColors[program.level] || 'border-gray-200 bg-white text-gray-700'}`}>
                    {program.level}
                </span>
            </div>

            <div className="flex flex-1 flex-col p-4">
                <div className="mb-3 h-px bg-gradient-to-r from-[#de2203] via-red-100 to-transparent" />

                <h3 className="mb-4 text-xl font-black leading-snug text-gray-950 transition-colors group-hover:text-[#de2203]">
                    {program.name}
                </h3>

                <div className="mt-auto">
                    <div className="rounded-lg border border-red-100 bg-white/80 p-2 shadow-sm">
                        <InfoRow icon={faCalendarDays} label="Intake" text={program.intake} />
                    </div>

                    <Link
                        to={`/programs/${program.id}`}
                        className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#de2203] bg-white py-2.5 text-sm font-bold text-[#de2203] no-underline transition-all hover:bg-[#de2203] hover:text-white"
                    >
                        View Details
                        <FontAwesomeIcon icon={faArrowRight} className="text-xs transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </article>
    );
}

function InfoRow({ icon, label, text }) {
    return (
        <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={icon} className="w-3.5 shrink-0 text-[#de2203]" />
            <span className="min-w-0">
                <span className="mr-2 text-[10px] font-bold uppercase tracking-wide text-gray-400">{label}</span>
                <span className="text-xs font-semibold leading-snug text-gray-600">{text}</span>
            </span>
        </div>
    );
}
