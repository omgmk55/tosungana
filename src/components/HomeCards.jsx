import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, GraduationCap, Utensils } from 'lucide-react';

const cards = [
    {
        title: "Soutien Alimentaire",
        description: "Distribution mensuelle de vivres pour les familles monoparentales et les orphelinats partenaires.",
        icon: <Utensils size={28} className="text-amber-500" />,
        stats: "2,500+ repas",
        color: "from-amber-500/20 to-amber-500/5",
        border: "border-amber-500/30"
    },
    {
        title: "Éducation Pour Tous",
        description: "Prise en charge des frais de scolarité, fourniture de kits scolaires et soutien parascolaire.",
        icon: <GraduationCap size={28} className="text-brand-500" />,
        stats: "300+ enfants",
        color: "from-brand-500/20 to-brand-500/5",
        border: "border-brand-500/30"
    },
    {
        title: "Réinsertion Sociale",
        description: "Ateliers de formation professionnelle et accompagnement psychosocial pour les jeunes défavorisés.",
        icon: <Users size={28} className="text-emerald-500" />,
        stats: "150+ jeunes",
        color: "from-emerald-500/20 to-emerald-500/5",
        border: "border-emerald-500/30"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const HomeCards = () => {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 text-brand-600 font-semibold mb-3 tracking-wider uppercase text-sm"
                        >
                            <Sparkles size={16} />
                            Actions en cours
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-4xl font-display font-bold text-slate-900"
                        >
                            Où vont <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-brand-500">vos dons ?</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-500 max-w-md mt-4 md:mt-0 text-right md:text-left"
                    >
                        Aperçu de nos programmes actuels sur le terrain. Chaque contribution nous permet de franchir un nouveau cap.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className={`group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border ${card.border} relative overflow-hidden`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                                    {card.icon}
                                </div>
                                <h3 className="text-xl font-display font-bold text-slate-900 mb-3">{card.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                    {card.description}
                                </p>
                                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold group-hover:bg-white group-hover:shadow-sm transition-all">
                                    Impact : {card.stats}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default HomeCards;
