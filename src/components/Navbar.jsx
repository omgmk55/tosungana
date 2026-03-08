import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, User, LogOut, Settings, LayoutDashboard } from 'lucide-react';

import AuthModal from './AuthModal';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [user, setUser] = useState(null); // null when logged out, object when logged in
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const mobileMenuRef = useRef(null);

    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
                setIsMobileMenuOpen(false);
            }
        };
        if (isMobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMobileMenuOpen]);


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const isActive = (path) => location.pathname === path;

    // Decide navbar text color based on route and scroll. 
    // On Home (Hero is dark), navbar is white when at top. 
    // On other pages (white background), navbar should always be dark text.
    const isDarkPageAtTop = location.pathname === '/' && !isScrolled;
    const textColorClass = isDarkPageAtTop ? 'text-white' : 'text-slate-900';
    const linkColorClass = isDarkPageAtTop ? 'text-slate-200 hover:text-white' : 'text-slate-600 hover:text-brand-600';

    return (
        <nav ref={mobileMenuRef} className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || location.pathname !== '/' ? 'glass py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">

                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                            A
                        </div>
                        <div className="flex flex-col leading-tight">
                            <span className={`font-display font-bold text-xl tracking-tight ${textColorClass}`}>
                                A.J.A.T
                            </span>
                            <span className={`text-[10px] font-medium tracking-wide uppercase opacity-70 ${textColorClass}`}>
                                Association des Jeunes en Action Tosungana
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className={`font-medium transition-colors ${isActive('/') ? 'text-brand-600 font-bold' : linkColorClass}`}>Accueil</Link>
                        <Link to="/mission" className={`font-medium transition-colors ${isActive('/mission') ? 'text-brand-600 font-bold' : linkColorClass}`}>Notre Mission</Link>
                        <Link to="/actions" className={`font-medium transition-colors ${isActive('/actions') ? 'text-brand-600 font-bold' : linkColorClass}`}>Nos Actions</Link>
                        <Link to="/contact" className={`font-medium transition-colors ${isActive('/contact') ? 'text-brand-600 font-bold' : linkColorClass}`}>Contact</Link>

                        <Link to="/donate" className="flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-6 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-md hover:shadow-xl">
                            <Heart size={18} className="fill-current" />
                            Faire un don
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Profile/Auth Section */}
                        <div className="relative">
                            {user ? (
                                <div>
                                    <button
                                        onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                                        className={`flex items-center gap-2 w-10 h-10 rounded-full border-2 ${isScrolled || !isDarkPageAtTop ? 'border-brand-500 text-brand-600' : 'border-white text-white'} hover:bg-brand-500 hover:text-white hover:border-brand-500 transition-all justify-center uppercase font-bold text-sm bg-black/5 backdrop-blur-sm`}
                                    >
                                        {user.name.charAt(0)}
                                    </button>

                                    {/* Dropdown Menu */}
                                    <AnimatePresence>
                                        {isProfileMenuOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden"
                                            >
                                                <div className="p-4 border-b border-slate-100 bg-slate-50/50">
                                                    <p className="font-bold text-slate-900 truncate">{user.name}</p>
                                                    <p className="text-xs text-slate-500 truncate">{user.email}</p>
                                                </div>
                                                <div className="p-2 flex flex-col gap-1 text-sm text-slate-600">
                                                    <Link to="/dashboard" onClick={() => setIsProfileMenuOpen(false)} className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-brand-50 hover:text-brand-600 transition-colors text-left w-full">
                                                        <LayoutDashboard size={16} /> Tableau de bord
                                                    </Link>
                                                    <Link to="/settings" onClick={() => setIsProfileMenuOpen(false)} className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-brand-50 hover:text-brand-600 transition-colors text-left w-full">
                                                        <Settings size={16} /> Paramètres
                                                    </Link>
                                                    <div className="h-px bg-slate-100 my-1"></div>
                                                    <button
                                                        onClick={() => {
                                                            setUser(null);
                                                            setIsProfileMenuOpen(false);
                                                        }}
                                                        className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-red-50 hover:text-red-600 transition-colors text-left w-full"
                                                    >
                                                        <LogOut size={16} /> Déconnexion
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <button
                                    onClick={() => setIsAuthModalOpen(true)}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isScrolled || !isDarkPageAtTop ? 'bg-slate-100 text-slate-600 hover:bg-brand-500 hover:text-white' : 'bg-white/10 text-white hover:bg-white hover:text-brand-600 backdrop-blur-md'}`}
                                >
                                    <User size={18} />
                                </button>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className={`${textColorClass}`}
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full glass-dark bg-slate-900/95 border-t border-white/10 p-4 flex flex-col space-y-4 shadow-2xl">
                    <Link to="/" className={`font-medium p-2 ${isActive('/') ? 'text-brand-400 font-bold' : 'text-white/80 hover:text-white'}`}>Accueil</Link>
                    <Link to="/mission" className={`font-medium p-2 ${isActive('/mission') ? 'text-brand-400 font-bold' : 'text-white/80 hover:text-white'}`}>Notre Mission</Link>
                    <Link to="/actions" className={`font-medium p-2 ${isActive('/actions') ? 'text-brand-400 font-bold' : 'text-white/80 hover:text-white'}`}>Nos Actions</Link>
                    <Link to="/contact" className={`font-medium p-2 ${isActive('/contact') ? 'text-brand-400 font-bold' : 'text-white/80 hover:text-white'}`}>Contact</Link>
                    <Link to="/donate" className="w-full flex justify-center items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-md mt-2">
                        <Heart size={18} className="fill-current" />
                        Faire un don
                    </Link>
                </div>
            )}

            {/* Authentication Modal */}
            <AuthModal
                isOpen={isAuthModalOpen}
                onClose={() => setIsAuthModalOpen(false)}
                onLogin={(userData) => setUser(userData)}
            />
        </nav>
    );
};

export default Navbar;
