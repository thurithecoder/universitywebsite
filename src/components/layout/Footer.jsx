import React from 'react';
import { Link } from 'react-router-dom';
import { universityInfo } from '../../data/programs';

export default function Footer() {
    const year = new Date().getFullYear();
    const cols = [
        {
            heading: 'Navigate', links: [
                { label: 'Home', to: '/' }, { label: 'About Us', to: '/about' },
                { label: 'Programs', to: '/programs' }, { label: 'Contact', to: '/contact' },
            ]
        },
        {
            heading: 'Faculties', links: [
                { label: 'Engineering', to: '/programs?category=Engineering' },
                { label: 'Business', to: '/programs?category=Business' },
                { label: 'IT', to: '/programs?category=IT' },
                { label: 'Health Sciences', to: '/programs?category=Health' },
                { label: 'Law', to: '/programs?category=Law' },
            ]
        },
    ];
    const socials = [
        { icon: 'bi-facebook', href: '#' },
        { icon: 'bi-instagram', href: '#' },
        { icon: 'bi-linkedin', href: '#' },
        { icon: 'bi-youtube', href: '#' },
    ];

    return (
        <footer className="bg-[#111] text-gray-400">
            <div className="container mx-auto px-4 py-14">
                <div className="row g-4">

                    {/* Brand */}
                    <div className="col-lg-4 col-md-6">
                        <div className="flex items-center gap-2.5 mb-4">
                            <div>
                                <img src="../../../src/assets/logo.webp" alt="University Logo" style={{ height: "50px" , marginBottom: "15px"}} />
                                <div className="text-white font-bold text-sm leading-tight">Lincoln University College</div>
                    
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed mb-5 text-gray-400">
                            {universityInfo.tagline}. Empowering students from {universityInfo.stats.countries} countries with quality, affordable higher education.
                        </p>
                        <div className="flex gap-2">
                            {socials.map(s => (
                                <a key={s.icon} href={s.href}
                                    className="w-9 h-9 rounded-lg bg-[#222] text-gray-400 flex items-center justify-center text-sm hover:bg-[#CC0000] hover:text-white transition-all no-underline">
                                    <i className={`bi ${s.icon}`} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {cols.map(col => (
                        <div className="col-lg-2 col-md-3 col-6" key={col.heading}>
                            <h6 className="text-white font-semibold text-sm mb-4 pb-2 border-b border-[#CC0000] inline-block">{col.heading}</h6>
                            <ul className="list-none p-0 m-0 flex flex-col gap-2">
                                {col.links.map(l => (
                                    <li key={l.label}>
                                        <Link to={l.to}
                                            className="text-gray-400 text-sm no-underline hover:text-[#CC0000] hover:pl-1 transition-all inline-block">
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact */}
                    <div className="col-lg-4 col-md-5">
                        <h6 className="text-white font-semibold text-sm mb-4 pb-2 border-b border-[#CC0000] inline-block">Contact Us</h6>
                        <ul className="list-none p-0 m-0 flex flex-col gap-3">
                            {[
                                { icon: 'bi-geo-alt-fill', text: universityInfo.address },
                                { icon: 'bi-telephone-fill', text: universityInfo.phone, href: `tel:${universityInfo.phone}` },
                                { icon: 'bi-envelope-fill', text: universityInfo.email, href: `mailto:${universityInfo.email}` },
                                { icon: 'bi-clock-fill', text: 'Mon–Fri: 8:30am – 5:30pm' },
                            ].map(item => (
                                <li key={item.text} className="flex gap-2.5 items-start">
                                    <i className={`bi ${item.icon} text-[#CC0000] text-sm mt-0.5 shrink-0`} />
                                    {item.href
                                        ? <a href={item.href} className="text-gray-400 text-sm no-underline hover:text-white transition-colors">{item.text}</a>
                                        : <span className="text-sm">{item.text}</span>
                                    }
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-10 pt-6 border-t border-[#222] flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-600">
                    <span>© {year} Lincoln University College. All rights reserved.</span>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-gray-300 no-underline text-[inherit]">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-300 no-underline text-[inherit]">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
