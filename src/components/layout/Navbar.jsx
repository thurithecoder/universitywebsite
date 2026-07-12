
import React, { useState } from 'react';
import { NavLink, useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.webp';


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const links = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/programs', label: 'Programs' },
        { to: '/contact', label: 'Contact' },
    ];
    const handleSearch = (e) => {
        e.preventDefault();
        if (search.trim()) {
            navigate(`/programs?search=${encodeURIComponent(search.trim())}`);
            setSearch('');
            setMenuOpen(false);
        }
    };
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <Link to="/" className="flex items-center">
                        <img
                            src={logo}
                            alt="University Logo"
                            className="h-10 w-auto sm:h-12"
                        />
                    </Link>
                    <div className="hidden lg:flex items-center gap-8 ">

                        <NavLink to="/" className={({ isActive }) =>
                            `font-medium no-underline transition-colors nav-link-lincoln ${isActive
                                ? "text-[#de2203]"
                                : "text-gray-700 hover:text-[#de2203]"
                            }`
                        }>
                            Home
                        </NavLink>

                        <NavLink to="/about" className={({ isActive }) =>
                            `font-medium no-underline transition-colors nav-link-lincoln ${isActive
                                ? "text-[#de2203]"
                                : "text-gray-700 hover:text-[#de2203]"
                            }` }>
                            About
                        </NavLink>

                        <NavLink to="/programs" className={({ isActive }) =>
                            `font-medium no-underline transition-colors nav-link-lincoln ${isActive
                                ? "text-[#de2203]"
                                : "text-gray-700 hover:text-[#de2203]"
                            }`
                        }>
                            Programs
                        </NavLink>

                        <NavLink to="/contact" className={({ isActive }) =>
                            `font-medium no-underline transition-colors nav-link-lincoln ${isActive
                                ? "text-[#de2203]"
                                : "text-gray-700 hover:text-[#de2203]"
                            }`
                        }>
                            Contact
                        </NavLink>
                        
                        <div className="hidden lg:flex items-center gap-2">
                            <form onSubmit={handleSearch} className="flex">
                                <input
                                    type="text" value={search} onChange={e => setSearch(e.target.value)}
                                    placeholder="Search programs..."
                                    className="w-44 text-sm px-3 py-1.5 border border-gray-200 rounded-l-lg outline-none focus:border-[#CC0000] transition-colors"
                                />
                                <button type="submit" className="px-3 py-1.5 bg-[#CC0000] text-white text-sm rounded-r-lg hover:bg-[#990000] transition-colors">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                            </form>
                            <Link to="/contact"
                                className="px-4 py-1.5 bg-[#CC0000] text-white text-sm font-semibold rounded-lg hover:bg-[#990000] transition-colors no-underline whitespace-nowrap">
                                Apply Now
                            </Link>
                        </div>
                    </div>
                    <button onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                        <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} className="text-xl text-[#CC0000]" />
                    </button>
                </div>
                {menuOpen && (
                    <div className="lg:hidden border-t border-gray-100 py-3 flex flex-col gap-1">
                        {links.map(l => (
                            <NavLink key={l.to} to={l.to} end={l.to === '/'}
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    `px-3 py-2 text-sm font-medium rounded-lg no-underline transition-colors ${isActive ? 'bg-red-50 text-[#CC0000]' : 'text-gray-700 hover:bg-gray-50'
                                    }`
                                }
                            >{l.label}</NavLink>
                        ))}
                        <form onSubmit={handleSearch} className="flex">
                            <input
                                type="text" value={search} onChange={e => setSearch(e.target.value)}
                                placeholder="Search programs..."
                                className="flex-1 text-sm px-3 py-1.5 border border-gray-200 rounded-l-lg outline-none focus:border-[#CC0000] transition-colors"
                            />
                            <button type="submit" className="px-3 py-1.5 bg-[#CC0000] text-white text-sm rounded-r-lg hover:bg-[#990000] transition-colors">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </form>
                        <Link to="/contact" onClick={() => setMenuOpen(false)}
                            className="mt-1 px-4 py-2 bg-[#CC0000] text-white text-sm font-semibold rounded-lg text-center no-underline hover:bg-[#990000] transition-colors">
                            Apply Now
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}

