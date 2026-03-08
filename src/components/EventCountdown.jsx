import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const EventCountdown = () => {
    // Set a date for the upcoming event (e.g., end of the current month or a specific date)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 14); // 14 days from now
    targetDate.setHours(18, 0, 0, 0);

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            if (distance < 0) {
                clearInterval(timer);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const timeBlocks = [
        { label: 'Jours', value: timeLeft.days },
        { label: 'Heures', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Secondes', value: timeLeft.seconds }
    ];

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl relative flex flex-col lg:flex-row">

                    {/* Background decorative elements */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-500/30 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-500/30 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />

                    {/* Content Left side */}
                    <div className="lg:w-1/2 p-10 md:p-14 relative z-10 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-300 font-medium text-sm mb-6 self-start"
                        >
                            <Calendar className="w-4 h-4" />
                            Événement à venir
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight"
                        >
                            Gala de Charité &<br /> Levée de Fonds
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-300 text-lg mb-8 leading-relaxed max-w-lg"
                        >
                            Rejoignez-nous pour une soirée exceptionnelle dédiée à la solidarité. Les fonds récoltés financeront nos actions pour la scolarisation des orphelins.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 mb-10"
                        >
                            <div className="flex items-center gap-3 text-slate-300 bg-white/5 p-3 rounded-xl border border-white/10 backdrop-blur-sm">
                                <Clock className="w-5 h-5 text-brand-400" />
                                <span>18h00 - 23h00</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-300 bg-white/5 p-3 rounded-xl border border-white/10 backdrop-blur-sm">
                                <MapPin className="w-5 h-5 text-brand-400" />
                                <span>Hôtel Memling, Kinshasa</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-600 to-accent-500 hover:from-brand-500 hover:to-accent-400 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-brand-500/40 group">
                                Réserver une place
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Countdown Right side */}
                    <div className="lg:w-1/2 p-10 md:p-14 relative z-10 flex items-center justify-center lg:justify-end border-t lg:border-t-0 lg:border-l border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm">

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-lg">
                            {timeBlocks.map((block, index) => (
                                <motion.div
                                    key={block.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (index * 0.1), type: "spring" }}
                                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex flex-col items-center justify-center shadow-inner relative overflow-hidden group"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <span className="text-4xl md:text-5xl font-display font-bold text-white mb-2 tracking-tight group-hover:scale-110 transition-transform">
                                        {block.value.toString().padStart(2, '0')}
                                    </span>
                                    <span className="text-xs md:text-sm font-medium text-brand-300 uppercase tracking-wider">
                                        {block.label}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventCountdown;
