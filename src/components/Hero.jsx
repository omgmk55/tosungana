import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const SLIDE_DURATION = 5000; // 5 seconds per slide

const slides = [
    {
        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop", // Charity kids
        title: "Agir pour un Avenir",
        highlight: "Plus Solidaire",
        description: "L'Association des Jeunes en Action Tosungana (A.J.A.T) soutient les mères veuves, accompagne les orphelins et lutte contre les antivaleurs."
    },
    {
        image: "https://images.unsplash.com/photo-1593113589914-00ef4e562f05?q=80&w=2070&auto=format&fit=crop", // Education
        title: "Éduquer la",
        highlight: "Prochaine Génération",
        description: "Parce que chaque enfant mérite d'aller à l'école. Nous offrons des kits scolaires et payons les frais de ceux dans le besoin."
    },
    {
        image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=2070&auto=format&fit=crop", // Community help
        title: "Redonner le Sourire",
        highlight: "Aux Mères Veuves",
        description: "Un accompagnement matériel et financier pour aider ces femmes fortes à subvenir aux besoins de leurs familles dignement."
    }
];

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, SLIDE_DURATION);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-20">

            {/* Background Slides */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                >
                    {/* The image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
                    />
                    {/* The dark overlay gradients to ensure text visibility */}
                    <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-transparent" />
                </motion.div>
            </AnimatePresence>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left flex-1">

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border-white/10 mb-8 mt-10">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
                            </span>
                            <span className="text-sm font-medium text-slate-300">Rejoignez le mouvement aujourd'hui</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight leading-tight mb-6">
                            {slides[currentSlide].title} <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400">
                                {slides[currentSlide].highlight}
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed md:max-w-2xl mx-auto md:mx-0">
                            {slides[currentSlide].description}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                            <Link to="/actions" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-[0_0_40px_-10px_rgba(2,132,199,0.5)]">
                                Découvrir nos actions
                                <ArrowRight size={20} />
                            </Link>
                            <Link to="/donate" className="w-full sm:w-auto flex items-center justify-center gap-2 glass-dark text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all transition-colors border border-white/20">
                                Soutenir la cause
                                <HeartHandshake size={20} />
                            </Link>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Slider manual controls */}
                <div className="absolute bottom-12 left-0 right-0 md:left-auto md:right-8 flex justify-center md:justify-end gap-3 z-20">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-10 bg-brand-500' : 'w-2 bg-white/30 hover:bg-white/60'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

            </div>

        </div>
    );
};

export default HeroSlider;
