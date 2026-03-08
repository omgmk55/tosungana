import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Star, Globe, Shield, Baby, Users, HeartHandshake } from 'lucide-react';

const pillars = [
    {
        title: "Soutien aux Veuves",
        description: "Accompagnement moral, matériel et financier pour aider les mères veuves à subvenir aux besoins de leurs familles en toute dignité. Nous offrons des formations et des micro-financements.",
        icon: <Users className="w-8 h-8 text-brand-500" />,
        image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop",
        color: "from-brand-500/20 to-brand-500/5",
        badge: "Solidarité"
    },
    {
        title: "Aide aux Orphelins",
        description: "Garantir un accès à l'éducation, à la santé et à un environnement aimant pour permettre à chaque orphelin de s'épanouir. Nos programmes incluent la distribution de kits scolaires et le parrainage.",
        icon: <Baby className="w-8 h-8 text-accent-500" />,
        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
        color: "from-accent-500/20 to-accent-500/5",
        badge: "Éducation"
    },
    {
        title: "Lutte contre les Antivaleurs",
        description: "Sensibilisation et éducation de la jeunesse pour éradiquer la délinquance, la violence et promouvoir l'excellence via des séminaires, des ateliers et des activités sportives.",
        icon: <Shield className="w-8 h-8 text-emerald-500" />,
        image: "https://images.unsplash.com/photo-1529156069898-49953eb1f5ff?q=80&w=2070&auto=format&fit=crop",
        color: "from-emerald-500/20 to-emerald-500/5",
        badge: "Prévention"
    },
    {
        title: "Assistance aux Nécessiteux",
        description: "Intervention d'urgence et soutien continu pour redonner espoir aux personnes traversant des moments de grande précarité, avec des distributions alimentaires et médicales.",
        icon: <HeartHandshake className="w-8 h-8 text-rose-500" />,
        image: "https://images.unsplash.com/photo-1593113589914-075990141ceb?q=80&w=2070&auto=format&fit=crop",
        color: "from-rose-500/20 to-rose-500/5",
        badge: "Urgence"
    }
];

const Mission = () => {
    return (
        <section className="bg-slate-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-40 left-0 w-96 h-96 bg-brand-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-40 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Intro Section */}
            <div className="py-24 max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-600 font-semibold text-sm mb-6 border border-brand-100"
                    >
                        <Star className="w-4 h-4" /> Notre Raison d'Être
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight"
                    >
                        Quatre Piliers pour <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-500">
                            Transformer des Vies
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600 leading-relaxed"
                    >
                        L'Association des Jeunes en Action Tosungana (A.J.A.T) intervient là où le besoin se fait le plus ressentir,
                        avec dévouement, transparence et un amour infini pour notre prochain.
                    </motion.p>
                </div>

                {/* Pillars with side-by-side images layout */}
                <div className="space-y-24 md:space-y-32">
                    {pillars.map((pillar, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div
                                key={index}
                                className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${isEven ? '' : 'md:flex-row-reverse'}`}
                            >
                                {/* Image Side */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7 }}
                                    className="w-full md:w-1/2 relative group"
                                >
                                    <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-2xl shadow-slate-200/50">
                                        <img
                                            src={pillar.image}
                                            alt={pillar.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-80" />

                                        {/* Floating Badge on Image */}
                                        <div className="absolute bottom-6 left-6 py-2 px-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 flex items-center gap-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                            <div className="flex -space-x-3">
                                                <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />
                                                <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300" />
                                                <div className="w-8 h-8 rounded-full border-2 border-white bg-brand-500 flex items-center justify-center text-white text-[10px] font-bold">+</div>
                                            </div>
                                            <span className="text-sm font-semibold text-slate-800">Impact Direct</span>
                                        </div>
                                    </div>
                                    {/* Decorative background block */}
                                    <div className={`absolute -inset-4 bg-gradient-to-br ${pillar.color} rounded-[2.5rem] -z-10 opacity-50 transform ${isEven ? 'translate-x-4 translate-y-4' : '-translate-x-4 translate-y-4'} group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500`} />
                                </motion.div>

                                {/* Text Side */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7, delay: 0.2 }}
                                    className="w-full md:w-1/2 flex flex-col items-start"
                                >
                                    <span className="px-4 py-1.5 bg-slate-100 text-slate-600 rounded-full text-sm font-semibold mb-6 flex items-center gap-2">
                                        <Target className="w-4 h-4 text-brand-500" />
                                        {pillar.badge}
                                    </span>

                                    <div className="w-16 h-16 rounded-2xl bg-white shadow-xl shadow-slate-100 border border-slate-100 flex items-center justify-center mb-8">
                                        {pillar.icon}
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6 leading-tight">
                                        {pillar.title}
                                    </h3>

                                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                        {pillar.description}
                                    </p>

                                    <ul className="space-y-4">
                                        {[1, 2, 3].map((item) => (
                                            <li key={item} className="flex items-center gap-3 text-slate-700">
                                                <div className="w-6 h-6 rounded-full bg-brand-50 flex items-center justify-center text-brand-500">
                                                    <Heart size={14} />
                                                </div>
                                                <span className="font-medium">Actions concrètes régulières</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Banner Section */}
            <div className="py-24 bg-slate-900 relative mt-20">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <Globe className="w-16 h-16 text-brand-400 mx-auto mb-6" />
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                        Ensemble, nous pouvons aller plus loin
                    </h2>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                        Rejoignez notre mouvement et devenez acteur du changement. Chaque geste, aussi petit soit-il, compte énormément.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-to-r from-brand-600 to-accent-500 text-white rounded-full font-bold shadow-lg shadow-brand-500/25"
                        >
                            Faire un Don
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white/10 text-white backdrop-blur-md border border-white/20 rounded-full font-bold hover:bg-white/20 transition-colors"
                        >
                            Devenir Bénévole
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
