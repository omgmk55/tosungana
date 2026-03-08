import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Users, Heart } from 'lucide-react';
import { actionsData } from '../data/actions';

const ActionDetailsPage = () => {
    const { id } = useParams();
    const action = actionsData.find(a => a.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!action) {
        return (
            <div className="pt-24 min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Action introuvable</h2>
                    <Link to="/actions" className="text-red-500 hover:text-red-600 flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4" /> Retour aux actions
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-20 min-h-screen bg-slate-50">
            {/* Hero Image Section */}
            <div className="relative h-[40vh] md:h-[60vh] w-full overflow-hidden">
                <img
                    src={action.image}
                    alt={action.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                {/* Back Button */}
                <Link
                    to="/actions"
                    className="absolute top-8 left-4 md:left-8 z-10 flex items-center gap-2 text-white/90 hover:text-white bg-slate-900/20 hover:bg-slate-900/40 px-4 py-2 rounded-full backdrop-blur-md transition-all"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Retour</span>
                </Link>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 md:-mt-32 relative z-10 pb-20">
                {/* Main Content Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-6 md:p-10 border border-slate-100"
                >
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className="px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-semibold tracking-wide border border-red-100">
                            {action.category}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
                        {action.title}
                    </h1>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 py-6 border-y border-slate-100">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center">
                                <MapPin className="w-6 h-6 text-slate-400" />
                            </div>
                            <div>
                                <div className="text-sm text-slate-500 font-medium tracking-wide">Lieu</div>
                                <div className="font-semibold text-slate-900">{action.location}</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center">
                                <Calendar className="w-6 h-6 text-red-400" />
                            </div>
                            <div>
                                <div className="text-sm text-slate-500 font-medium tracking-wide">Date</div>
                                <div className="font-semibold text-slate-900">{action.date}</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center">
                                <Users className="w-6 h-6 text-amber-500" />
                            </div>
                            <div>
                                <div className="text-sm text-slate-500 font-medium tracking-wide">Bénéficiaires</div>
                                <div className="font-semibold text-slate-900">{action.beneficiaries}</div>
                            </div>
                        </div>
                    </div>

                    {/* Article Content */}
                    <div className="prose prose-lg prose-slate max-w-none">
                        <p className="text-xl text-slate-600 font-medium leading-relaxed mb-6">
                            {action.description}
                        </p>
                        <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                            {action.fullDescription}
                        </p>
                    </div>

                    {/* Call to action */}
                    <div className="mt-12 bg-gradient-to-r from-red-600 to-amber-500 rounded-2xl p-8 text-center text-white flex flex-col items-center">
                        <Heart className="w-12 h-12 mb-4 text-white/90" />
                        <h3 className="text-2xl font-bold mb-3">Soutenez nos prochaines actions</h3>
                        <p className="text-amber-50 mb-6 max-w-lg">
                            Vous pouvez nous aider à poursuivre notre mission et reproduire ce type d'initiatives vitales pour les communautés.
                        </p>
                        <Link to="/donate" className="bg-white text-red-600 hover:bg-slate-50 px-8 py-3 rounded-full font-semibold transition-colors shadow-lg shadow-black/10">
                            Faire un don
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ActionDetailsPage;
