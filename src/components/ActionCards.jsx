import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, Users } from 'lucide-react';
import { actionsData } from '../data/actions';

const ActionCards = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6"
                    >
                        Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-500">Actions Récentes</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-slate-600"
                    >
                        Découvrez en images les dernières missions menées par nos équipes sur le terrain. Chaque action compte et transforme des vies.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {actionsData.map((action, index) => (
                        <motion.div
                            key={action.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group rounded-3xl overflow-hidden bg-white border border-slate-100/50 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
                        >
                            {/* Image Container with Overlay */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={action.image}
                                    alt={action.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                                {/* Badges */}
                                <div className="absolute top-4 left-4 flex gap-2">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-xs font-semibold text-slate-800 rounded-full shadow-sm">
                                        {action.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8 flex flex-col flex-grow relative bg-white">
                                {/* Glassmorphism floating effect for stats */}
                                <div className="absolute -top-12 inset-x-6 flex justify-between px-6 py-4 bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg rounded-2xl transform translate-y-0 transition-transform duration-500 group-hover:-translate-y-1">
                                    <div className="flex items-center gap-2 text-slate-700">
                                        <Calendar className="w-4 h-4 text-red-500" />
                                        <span className="text-sm font-medium">{action.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-700">
                                        <Users className="w-4 h-4 text-amber-500" />
                                        <span className="text-sm font-medium">{action.beneficiaries}</span>
                                    </div>
                                </div>

                                <div className="mt-4 mb-4">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                                        {action.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                                        <MapPin className="w-4 h-4" />
                                        <span>{action.location}</span>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed line-clamp-3">
                                        {action.description}
                                    </p>
                                </div>

                                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                                    <Link
                                        to={`/actions/${action.id}`}
                                        className="flex items-center gap-2 text-red-600 font-semibold group/btn hover:text-red-700 transition-colors"
                                    >
                                        En savoir plus
                                        <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-2 transition-transform duration-300" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ActionCards;
