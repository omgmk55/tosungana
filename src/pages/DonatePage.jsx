import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const DonatePage = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-slate-50 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 w-full">

                <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden flex flex-col md:flex-row">

                    {/* Left Side: Info */}
                    <div className="bg-slate-900 p-10 md:p-12 md:w-1/2 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/30 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/30 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

                        <div className="relative z-10">
                            <Heart size={48} className="text-accent-400 mb-6" />
                            <h2 className="text-3xl font-display font-bold mb-4">Soutenez A.J.A.T</h2>
                            <p className="text-slate-300 leading-relaxed mb-8">
                                Votre générosité nous permet d'étendre notre portée, de nourrir plus d'orphelins, de soutenir plus de veuves et de financer nos actions contre les antivaleurs.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                                    <span className="text-2xl">🌍</span>
                                    <span className="text-sm font-medium">Impact direct en RDC</span>
                                </div>
                                <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                                    <span className="text-2xl">🔒</span>
                                    <span className="text-sm font-medium">Paiement 100% sécurisé</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="p-10 md:p-12 md:w-1/2">
                        <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">Faire un don unique</h3>

                        <div className="grid grid-cols-3 gap-3 mb-6">
                            <button className="py-3 rounded-xl border-2 border-slate-200 text-slate-600 font-semibold hover:border-brand-500 hover:text-brand-600 transition-colors focus:border-brand-500 focus:bg-brand-50">10$</button>
                            <button className="py-3 rounded-xl border-2 border-brand-500 bg-brand-50 text-brand-600 font-semibold transition-colors">25$</button>
                            <button className="py-3 rounded-xl border-2 border-slate-200 text-slate-600 font-semibold hover:border-brand-500 hover:text-brand-600 transition-colors focus:border-brand-500 focus:bg-brand-50">50$</button>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-slate-700 mb-2">Montant libre ($)</label>
                            <input type="number" placeholder="Autre montant..." className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" />
                        </div>

                        <button className="w-full bg-accent-500 hover:bg-accent-600 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1">
                            <Heart size={20} className="fill-current" />
                            Confirmer le don
                        </button>

                        <p className="text-xs text-center text-slate-500 mt-6">
                            En cliquant sur "Confirmer le don", vous serez redirigé vers notre plateforme partenaire sécurisée.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DonatePage;
