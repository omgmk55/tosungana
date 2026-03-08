import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { label: "Veuves Soutenues", value: "500+" },
    { label: "Enfants Scolarisés", value: "1,200+" },
    { label: "Bénévoles Actifs", value: "150+" },
    { label: "Années d'Action", value: "5+" },
];

const Impact = () => {
    return (
        <section id="actions" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
                    {/* Abstract geometric background */}
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-500/20 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3"></div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">

                        <div className="lg:w-1/2 text-left">
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                                L'Impact de Vos <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-brand-400">
                                    Généreuses Actions
                                </span>
                            </h2>
                            <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
                                Chaque don, chaque heure de bénévolat, chaque partage contribue à écrire de belles histoires.
                                Voici ce que nous avons accompli ensemble jusqu'à présent.
                            </p>
                            <button className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-white/20">
                                Rejoignez nos bénévoles
                            </button>
                        </div>

                        <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4 md:gap-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    key={index}
                                    className="glass-dark bg-slate-800/50 p-6 md:p-8 rounded-3xl text-center border-slate-700/50 hover:bg-slate-800/80 transition-colors"
                                >
                                    <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-display">
                                        {stat.value}
                                    </div>
                                    <div className="text-brand-300 font-medium text-sm sm:text-base">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Impact;
