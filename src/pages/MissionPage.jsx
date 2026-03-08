import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Heart } from 'lucide-react';
import Mission from '../components/Mission';

const MissionPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            {/* Hero Banner Section */}
            <div className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?q=80&w=2070&auto=format&fit=crop"
                        alt="Notre Mission"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-900/70" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-900/20 to-transparent" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-sm mb-8"
                    >
                        <Target className="w-4 h-4 text-brand-400" />
                        Notre Histoire et Nos Ambitions
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight"
                    >
                        Un Engagement pour <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-amber-300">
                            un Monde Meilleur
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed mb-12"
                    >
                        Découvrez en profondeur les valeurs qui animent l'Association des Jeunes en Action Tosungana (A.J.A.T). Notre dévouement envers les veuves, les orphelins, et notre lutte contre les antivaleurs sont le cœur de notre action.
                    </motion.p>
                </div>
            </div>

            {/* Core Pillars Component */}
            <div className="-mt-12 relative z-20">
                <Mission />
            </div>
        </div>
    );
};

export default MissionPage;
