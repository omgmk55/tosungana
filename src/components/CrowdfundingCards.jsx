import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Target, TrendingUp, Clock, Users, MapPin, ChevronRight } from 'lucide-react';
import { crowdfundingData } from '../data/crowdfunding';

const CrowdfundingCard = ({ campaign, index }) => {
    const [raised, setRaised] = useState(campaign.raised);

    // Simulate someone donated to make it feel "real"
    useEffect(() => {
        const key = `ajat_cf_raised_${campaign.id}`;
        const saved = localStorage.getItem(key);
        if (saved) {
            setRaised(parseInt(saved));
        } else {
            localStorage.setItem(key, raised);
        }

        // Small random increase occasionally
        const timer = setInterval(() => {
            if (Math.random() > 0.8) {
                setRaised(prev => {
                    const newAmount = prev + Math.floor(Math.random() * 50);
                    localStorage.setItem(key, newAmount);
                    return newAmount;
                });
            }
        }, 15000);

        return () => clearInterval(timer);
    }, [campaign.id, campaign.raised]);

    const progress = Math.min(Math.round((raised / campaign.goal) * 100), 100);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full hover:shadow-2xl transition-all duration-500"
        >
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />

                <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">
                        {campaign.category}
                    </span>
                </div>

                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white/90 text-sm font-medium">
                    <MapPin size={14} className="text-accent-400" />
                    {campaign.location}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                    {campaign.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2">
                    {campaign.description}
                </p>

                {/* Progress Tracking */}
                <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-end">
                        <div className="space-y-1">
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-tight">Récolté</p>
                            <p className="text-2xl font-display font-bold text-brand-600">{raised.toLocaleString()} $</p>
                        </div>
                        <div className="text-right space-y-1">
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-tight">Objectif</p>
                            <p className="text-lg font-bold text-slate-900">{campaign.goal.toLocaleString()} $</p>
                        </div>
                    </div>

                    <div className="relative h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${progress}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full"
                        />
                    </div>

                    <div className="flex justify-between text-xs font-bold text-slate-500">
                        <span>{progress}% d'impact réalisé</span>
                        <span className="flex items-center gap-1">
                            <Clock size={12} className="text-accent-500" /> {campaign.daysLeft} jours restants
                        </span>
                    </div>
                </div>

                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-600">
                        <Users size={16} className="text-brand-500" />
                        <span className="text-sm font-bold">{campaign.donorsCount} contributeurs</span>
                    </div>

                    <Link
                        to={`/donate?campaign=${campaign.id}`}
                        className="flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 shadow-lg shadow-brand-600/20"
                    >
                        <Heart size={16} className="fill-current" />
                        Donner
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

const CrowdfundingCards = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-50 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 opacity-50 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-50 text-brand-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
                        >
                            <TrendingUp size={14} /> Campagnes en cours
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-display font-bold text-slate-900"
                        >
                            Finançons ensemble <br />
                            <span className="text-brand-600 italic">nos futurs projets</span>
                        </motion.h2>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-600 md:max-w-sm"
                    >
                        Chaque contribution, petite ou grande, nous aide à concretiser ces missions essentielles. Suivez l'impact de vos dons en temps réel.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {crowdfundingData.map((campaign, index) => (
                        <CrowdfundingCard key={campaign.id} campaign={campaign} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 p-8 rounded-[3rem] bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-[80px] translate-x-1/4 -translate-y-1/2" />

                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-2xl bg-brand-500 flex items-center justify-center shadow-xl shadow-brand-500/40">
                            <Target size={32} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-1">Un projet en tête ?</h3>
                            <p className="text-slate-400">Soumettez-nous une initiative locale que vous souhaitez soutenir.</p>
                        </div>
                    </div>

                    <Link
                        to="/contact"
                        className="group flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold transition-all hover:bg-slate-100 whitespace-nowrap"
                    >
                        Proposer un projet
                        <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default CrowdfundingCards;
