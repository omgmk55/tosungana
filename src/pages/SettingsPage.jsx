import React, { useEffect, useState } from 'react';
import { User, Mail, Lock, Bell, Shield, Save } from 'lucide-react';

const SettingsPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [activeTab, setActiveTab] = useState('profile');

    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-10">
                    <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Paramètres du compte</h1>
                    <p className="text-slate-500">Gérez vos informations personnelles et vos préférences.</p>
                </div>

                <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 flex flex-col md:flex-row overflow-hidden">

                    {/* Sidebar Tabs */}
                    <div className="w-full md:w-64 bg-slate-50 border-r border-slate-100 p-6 md:p-8">
                        <nav className="flex flex-col space-y-2">
                            <button
                                onClick={() => setActiveTab('profile')}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors text-left ${activeTab === 'profile' ? 'bg-brand-100 text-brand-700' : 'text-slate-600 hover:bg-slate-200'}`}
                            >
                                <User size={18} /> Profil
                            </button>
                            <button
                                onClick={() => setActiveTab('security')}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors text-left ${activeTab === 'security' ? 'bg-brand-100 text-brand-700' : 'text-slate-600 hover:bg-slate-200'}`}
                            >
                                <Lock size={18} /> Sécurité
                            </button>
                            <button
                                onClick={() => setActiveTab('notifications')}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors text-left ${activeTab === 'notifications' ? 'bg-brand-100 text-brand-700' : 'text-slate-600 hover:bg-slate-200'}`}
                            >
                                <Bell size={18} /> Notifications
                            </button>
                        </nav>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 p-6 md:p-10">

                        {activeTab === 'profile' && (
                            <div className="space-y-8 animate-fade-in">
                                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">Informations personnelles</h2>

                                <div className="flex items-center gap-6 mb-8">
                                    <div className="w-20 h-20 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-2xl">
                                        J
                                    </div>
                                    <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
                                        Changer la photo
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">Nom complet</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                                <User size={16} />
                                            </div>
                                            <input type="text" defaultValue="Jeancy Mifundu" className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">Adresse e-mail</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                                <Mail size={16} />
                                            </div>
                                            <input type="email" defaultValue="jeancy@example.com" className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Bio (Optionnel)</label>
                                    <textarea rows="3" placeholder="Parlez-nous un peu de vous..." className="w-full p-4 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors resize-none"></textarea>
                                </div>

                                <div className="pt-4 flex justify-end">
                                    <button className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors shadow-md shadow-brand-500/20">
                                        <Save size={18} /> Enregistrer
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'security' && (
                            <div className="space-y-8 animate-fade-in">
                                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">Sécurité du compte</h2>

                                <div className="space-y-6 max-w-md">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">Mot de passe actuel</label>
                                        <input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">Nouveau mot de passe</label>
                                        <input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors" />
                                    </div>
                                    <div className="pt-4">
                                        <button className="bg-slate-900 hover:bg-black text-white px-6 py-2.5 rounded-lg font-medium transition-colors">
                                            Mettre à jour
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-12 p-6 bg-red-50 rounded-2xl border border-red-100">
                                    <h3 className="text-red-800 font-bold mb-2 flex items-center gap-2">
                                        <Shield className="w-5 h-5" /> Zone de danger
                                    </h3>
                                    <p className="text-sm text-red-600 mb-4">Si vous supprimez votre compte, toutes vos données (dons, historiques) seront perdues définitivement.</p>
                                    <button className="text-red-700 font-medium hover:text-red-800 underline decoration-red-300 underline-offset-4">
                                        Supprimer mon compte
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'notifications' && (
                            <div className="space-y-8 animate-fade-in">
                                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">Préférences de communication</h2>

                                <div className="space-y-6">
                                    {[
                                        { title: "Newsletter de l'A.J.A.T", desc: "Recevez nos résumés mensuels et actualités terrain.", active: true },
                                        { title: "Nouveaux événements", desc: "Soyez prévenu lorsqu'un gala, une descente ou une collecte est organisée.", active: true },
                                        { title: "Reçus de dons", desc: "Envoi automatique de vos reçus fiscaux par email.", active: true },
                                        { title: "Coups de cœur", desc: "Offres partenaires et messages de la direction.", active: false }
                                    ].map((notif, i) => (
                                        <div key={i} className="flex items-start justify-between p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
                                            <div>
                                                <h4 className="font-bold text-slate-900">{notif.title}</h4>
                                                <p className="text-sm text-slate-500">{notif.desc}</p>
                                            </div>
                                            {/* Toggle switch visual */}
                                            <div className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${notif.active ? 'bg-brand-500' : 'bg-slate-300'}`}>
                                                <div className={`w-4 h-4 rounded-full bg-white shadow-sm transform transition-transform ${notif.active ? 'translate-x-6' : 'translate-x-0'}`}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>
                </div>

            </div>
        </div>
    );
};

export default SettingsPage;
