import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Notfoundpage() {
    return (
        <section className="mt-20 flex min-h-[70vh] items-center bg-gradient-to-br from-white via-red-50/50 to-white px-4 py-16">
            <div className="mx-auto max-w-xl text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-[#de2203] shadow-sm">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-2xl" />
                </div>
                <span className="mb-3 inline-block rounded-lg bg-red-50 px-3 py-1.5 text-sm font-bold text-[#de2203]">
                    404 Error
                </span>
                <h1 className="mb-4 text-4xl font-black text-gray-950">Page Not Found</h1>
                <p className="mb-7 text-sm leading-relaxed text-gray-500">
                    The page you are looking for may have moved, or the link may be incorrect.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 rounded-lg bg-[#de2203] px-5 py-3 text-sm font-bold text-white no-underline hover:bg-[#990000]"
                    >
                        <FontAwesomeIcon icon={faHouse} />
                        Back Home
                    </Link>
                    <Link
                        to="/programs"
                        className="inline-flex items-center gap-2 rounded-lg border border-red-100 bg-white px-5 py-3 text-sm font-bold text-[#de2203] no-underline hover:bg-red-50"
                    >
                        Browse Programs
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
