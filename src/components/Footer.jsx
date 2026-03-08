import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-800 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Col */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-bold shadow-lg">
                                A
                            </div>
                            <span className="font-display font-bold text-xl text-white tracking-tight">
                                A.J.A.T (Tosungana)
                            </span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            L'Association des Jeunes en Action Tosungana (A.J.A.T) s'engage pour bâtir une société congolaise plus solidaire, équitable et prospère.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 transition-colors text-white">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 transition-colors text-white">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 transition-colors text-white">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Links Col */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Liens Rapides</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/" className="hover:text-brand-400 transition-colors">Accueil</Link></li>
                            <li><Link to="/mission" className="hover:text-brand-400 transition-colors">Notre Mission</Link></li>
                            <li><Link to="/actions" className="hover:text-brand-400 transition-colors">Nos Actions</Link></li>
                            <li><Link to="/contact" className="hover:text-brand-400 transition-colors">Contact</Link></li>
                            <li><Link to="/donate" className="hover:text-brand-400 transition-colors text-accent-400 font-medium">Faire un don</Link></li>
                        </ul>
                    </div>

                    {/* Contact Col */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-brand-500 mt-0.5 shrink-0" />
                                <span>avenue imbali, n°11 q/10 c/ n'djili, Kinshasa, RDC</span>
                            </li>
                            <li className="flex items-center gap-3 border-none">
                                <Phone size={18} className="text-brand-500 shrink-0" />
                                <span>+243 904 891 529</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-brand-500 shrink-0" />
                                <span>contact@ajat.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Col */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Restez informés</h4>
                        <p className="text-sm text-slate-400 mb-4">Abonnez-vous à notre newsletter pour suivre nos actions sur le terrain.</p>
                        <form className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="Votre adresse email"
                                className="bg-slate-900 border border-slate-700 text-white px-4 py-2.5 rounded-lg focus:outline-none focus:border-brand-500 transition-colors w-full"
                            />
                            <button className="bg-brand-600 hover:bg-brand-500 text-white px-4 py-2.5 rounded-lg font-medium transition-colors w-full">
                                S'abonner
                            </button>
                        </form>
                    </div>

                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} A.J.A.T (Tosungana). Tous droits réservés.</p>
                    <div className="flex flex-col items-center md:items-end mt-4 md:mt-0 gap-1">
                        <p className="flex items-center gap-1">
                            Fait avec <Heart size={14} className="text-rose-500 fill-rose-500" /> pour le Congo
                        </p>
                        <p className="text-slate-600 text-xs">Design by Jeancy Mifundu</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
