import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faClock,
    faEnvelope,
    faHashtag,
    faLocationDot,
    faPhone,
    faShareNodes,
    faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { universityInfo } from '../../data/programs';
import logo from '../../assets/logo.webp';

export default function Footer() {
    const year = new Date().getFullYear();
    const cols = [
        {
            heading: 'Navigate',
            links: [
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Programs', to: '/programs' },
                { label: 'Contact', to: '/contact' },
            ],
        },
        {
            heading: 'Faculties',
            links: [
                { label: 'Engineering', to: '/programs?category=Engineering' },
                { label: 'Business', to: '/programs?category=Business' },
                { label: 'IT', to: '/programs?category=IT' },
                { label: 'Health Sciences', to: '/programs?category=Health' },
                { label: 'Law', to: '/programs?category=Law' },
            ],
        },
    ];

    const socials = [
        { icon: faShareNodes, href: '#' },
        { icon: faHashtag, href: '#' },
        { icon: faEnvelope, href: `mailto:${universityInfo.email}` },
        { icon: faVideo, href: '#' },
    ];

    const contact = [
        { icon: faLocationDot, text: universityInfo.address },
        { icon: faPhone, text: universityInfo.phone, href: `tel:${universityInfo.phone}` },
        { icon: faEnvelope, text: universityInfo.email, href: `mailto:${universityInfo.email}` },
        { icon: faClock, text: 'Mon-Fri: 8:30am - 5:30pm' },
    ];

    return (
        <footer className="bg-[#111] text-gray-400">
            <div className="container mx-auto px-4 py-12">
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6">
                        <div className="mb-4">
                            <img src={logo} alt="University Logo" className="mb-4 h-[50px] w-auto" />
                            <div className="text-sm font-bold leading-tight text-white">Lincoln University College</div>
                        </div>

                        <p className="mb-5 text-sm leading-relaxed text-gray-400">
                            {universityInfo.tagline}. Empowering students from {universityInfo.stats.countries} countries with quality, affordable higher education.
                        </p>

                        <div className="flex gap-2">
                            {socials.map((s) => (
                                <a
                                    key={s.icon.iconName}
                                    href={s.href}
                                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#222] text-sm text-gray-400 no-underline transition-all hover:bg-[#CC0000] hover:text-white"
                                >
                                    <FontAwesomeIcon icon={s.icon} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {cols.map((col) => (
                        <div className="col-lg-2 col-md-3 col-6" key={col.heading}>
                            <h6 className="mb-4 inline-block border-b border-[#CC0000] pb-2 text-sm font-semibold text-white">{col.heading}</h6>
                            <ul className="m-0 flex list-none flex-col gap-2 p-0">
                                {col.links.map((l) => (
                                    <li key={l.label}>
                                        <Link
                                            to={l.to}
                                            className="inline-block text-sm text-gray-400 no-underline transition-all hover:pl-1 hover:text-[#CC0000]"
                                        >
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="col-lg-4 col-md-5">
                        <h6 className="mb-4 inline-block border-b border-[#CC0000] pb-2 text-sm font-semibold text-white">Contact Us</h6>
                        <ul className="m-0 flex list-none flex-col gap-3 p-0">
                            {contact.map((item) => (
                                <li key={item.text} className="flex items-start gap-2.5">
                                    <FontAwesomeIcon icon={item.icon} className="mt-0.5 shrink-0 text-sm text-[#CC0000]" />
                                    {item.href ? (
                                        <a href={item.href} className="text-sm text-gray-400 no-underline transition-colors hover:text-white">
                                            {item.text}
                                        </a>
                                    ) : (
                                        <span className="text-sm">{item.text}</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-[#222] pt-5 text-xs text-gray-600 md:flex-row">
                    <span>Copyright {year} Lincoln University College. All rights reserved.</span>
                    <div className="flex gap-4">
                        <a href="#" className="text-[inherit] no-underline hover:text-gray-300">Privacy Policy</a>
                        <a href="#" className="text-[inherit] no-underline hover:text-gray-300">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
