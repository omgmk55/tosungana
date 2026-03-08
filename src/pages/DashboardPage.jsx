import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Calendar, Star, TrendingUp, Clock, FileText, ChevronRight, User, Target, LayoutDashboard, Wallet, Timer, Image, Plus, Trash2, Edit3, Search, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { crowdfundingData } from '../data/crowdfunding';

const DashboardPage = () => {

    const [visitorCount, setVisitorCount] = useState(1284);
    const [isLive, setIsLive] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');

    useEffect(() => {
        window.scrollTo(0, 0);

        // Simulate real-time visitor tracking
        const savedCount = localStorage.getItem('ajat_visitor_count');
        const initialCount = savedCount ? parseInt(savedCount) : 1284;
        setVisitorCount(initialCount);

        const interval = setInterval(() => {
            setVisitorCount(prev => {
                const newCount = prev + Math.floor(Math.random() * 2);
                localStorage.setItem('ajat_visitor_count', newCount);
                return newCount;
            });
            setIsLive(true);
            setTimeout(() => setIsLive(false), 2000);
        }, 10000); // Update every 10 seconds

        return () => clearInterval(interval);
    }, []);

    const tabs = [
        { id: 'overview', label: 'Vue d\'ensemble', icon: LayoutDashboard },
        { id: 'donations', label: 'Gérer les Dons', icon: Wallet },
        { id: 'crowdfunding', label: 'Gérer Crowdfunding', icon: Target },
        { id: 'countdown', label: 'Gérer Compte à rebours', icon: Timer },
        { id: 'actions', label: 'Gérer Nos Actions', icon: Image },
    ];

    const stats = [
        { label: "Visiteurs", value: visitorCount.toLocaleString(), icon: User, color: "text-blue-500", bg: "bg-blue-50", isLive: true },
        { label: "Dons totaux", value: "1,250 $", icon: Heart, color: "text-brand-500", bg: "bg-brand-50" },
        { label: "Événements", value: "3", icon: Calendar, color: "text-accent-500", bg: "bg-accent-50" },
        { label: "Points d'impact", value: "450", icon: Star, color: "text-emerald-500", bg: "bg-emerald-50" },
    ];

    const recentActivities = [
        { id: 1, type: "don", title: "Don pour la rentrée scolaire", date: "Il y a 2 jours", amount: "50 $" },
        { id: 2, type: "event", title: "Inscription: Gala de Charité", date: "Il y a 1 semaine", amount: null },
        { id: 3, type: "don", title: "Soutien mensuel (Août)", date: "Il y a 3 semaines", amount: "20 $" },
    ];

    const chartData = [
        { name: 'Jan', amount: 150 },
        { name: 'Fév', amount: 230 },
        { name: 'Mar', amount: 180 },
        { name: 'Avr', amount: 290 },
        { name: 'Mai', amount: 200 },
        { name: 'Juin', amount: 350 },
        { name: 'Juil', amount: 420 },
    ];

    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Profile Section */}
                <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 mb-8 flex flex-col md:flex-row items-center md:items-start md:justify-between gap-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-50 rounded-full blur-3xl -z-10 opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>

                    <div className="flex flex-col md:flex-row items-center md:items-center gap-6">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white text-3xl font-bold shadow-xl shadow-brand-500/30">
                            J
                        </div>
                        <div className="text-center md:text-left">
                            <h1 className="text-3xl font-display font-bold text-slate-900">Bonjour, Jeancy ! 👋</h1>
                            <p className="text-slate-500 mt-1">Membre engagé depuis Janvier 2023</p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <Link to="/settings" className="px-6 py-2.5 rounded-full border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 hover:border-slate-300 transition-colors">
                            Éditer le profil
                        </Link>
                        <Link to="/donate" className="px-6 py-2.5 rounded-full bg-brand-600 text-white font-medium hover:bg-brand-500 transition-colors shadow-lg shadow-brand-600/20">
                            Faire un don
                        </Link>
                    </div>
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap gap-2 mb-8 bg-white/50 p-2 rounded-2xl overflow-x-auto no-scrollbar border border-slate-100">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${activeTab === tab.id
                                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-100'
                                    }`}
                            >
                                <Icon size={18} />
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                <div className="relative">
                    {/* Overview Tab */}
                    {activeTab === 'overview' && (
                        <motion.div
                            key="overview"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                        >
                            <div className="lg:col-span-2 space-y-8">
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                    {stats.map((stat, index) => (
                                        <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center group hover:shadow-md transition-shadow relative overflow-hidden">
                                            <div className={`w-12 h-12 rounded-full ${stat.bg} ${stat.color} flex items-center justify-center mb-4 relative z-10`}>
                                                <stat.icon size={24} />
                                                {stat.isLive && (
                                                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                                                    </span>
                                                )}
                                            </div>
                                            <h3 className="text-2xl font-bold text-slate-900 relative z-10">{stat.value}</h3>
                                            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1 relative z-10">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                                    <h2 className="text-xl font-bold mb-6">Évolution de votre impact</h2>
                                    <div className="h-72">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <AreaChart data={chartData}>
                                                <defs>
                                                    <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3} />
                                                        <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                                                    </linearGradient>
                                                </defs>
                                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                                                <Tooltip />
                                                <Area type="monotone" dataKey="amount" stroke="#0ea5e9" fillOpacity={1} fill="url(#colorAmount)" />
                                            </AreaChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                                    <div className="flex items-center justify-between mb-8">
                                        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                            <Target className="text-accent-500" /> Suivi des Campagnes
                                        </h2>
                                        <Link to="/actions" className="text-sm font-medium text-brand-600 hover:text-brand-700">Explorer plus</Link>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {crowdfundingData.slice(0, 2).map((campaign) => {
                                            const key = `ajat_cf_raised_${campaign.id}`;
                                            const currentRaised = localStorage.getItem(key) ? parseInt(localStorage.getItem(key)) : campaign.raised;
                                            const progress = Math.min(Math.round((currentRaised / campaign.goal) * 100), 100);
                                            return (
                                                <div key={campaign.id} className="p-5 rounded-2xl border border-slate-100 bg-slate-50/50">
                                                    <div className="flex items-center gap-3 mb-4">
                                                        <img src={campaign.image} alt="" className="w-10 h-10 rounded-lg object-cover" />
                                                        <h4 className="font-bold text-slate-900 text-sm">{campaign.title}</h4>
                                                    </div>
                                                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden mb-2">
                                                        <div className="h-full bg-brand-500" style={{ width: `${progress}%` }} />
                                                    </div>
                                                    <div className="flex justify-between text-xs font-bold text-slate-400">
                                                        <span>{currentRaised} $</span>
                                                        <span>{progress}%</span>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-8">
                                <div className="bg-slate-900 rounded-3xl p-8 shadow-xl text-white">
                                    <h2 className="text-lg font-medium text-slate-300 mb-2">Statut d'impact</h2>
                                    <div className="text-4xl font-bold text-accent-400 mb-6">Or</div>
                                    <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                                        <div className="bg-accent-400 h-2 rounded-full" style={{ width: '75%' }}></div>
                                    </div>
                                    <p className="text-xs text-slate-400">Niveau 3 - 450 points</p>
                                </div>
                                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2"><FileText size={20} className="text-brand-500" /> Documents</h2>
                                    <div className="space-y-3">
                                        {['Reçu fiscal 2023', 'Attestation bénévole'].map((doc, i) => (
                                            <div key={i} className="p-4 rounded-xl border border-slate-100 flex items-center justify-between hover:bg-slate-50 cursor-pointer">
                                                <span className="text-sm font-medium">{doc}</span>
                                                <ChevronRight size={16} className="text-slate-300" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Donations Management Tab */}
                    {activeTab === 'donations' && (
                        <motion.div
                            key="donations"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900">Gestion des Dons</h2>
                                    <p className="text-slate-500">Suivi et validation de toutes les contributions</p>
                                </div>
                                <div className="flex gap-2">
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                        <input type="text" placeholder="Rechercher un don..." className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-brand-500/20" />
                                    </div>
                                    <button className="bg-brand-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-brand-500 transition-colors">
                                        <Plus size={18} /> Manuel
                                    </button>
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="border-b border-slate-100 text-slate-400 text-sm font-bold uppercase tracking-wider">
                                            <th className="pb-4 px-4">Donateur</th>
                                            <th className="pb-4 px-4">Date</th>
                                            <th className="pb-4 px-4">Montant</th>
                                            <th className="pb-4 px-4">Statut</th>
                                            <th className="pb-4 px-4 text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50">
                                        {[
                                            { name: "Marie Dubois", date: "08/03/2026", amount: "150 $", status: "Confirmé" },
                                            { name: "Anonyme", date: "07/03/2026", amount: "25 $", status: "En attente" },
                                            { name: "Jean Kabila", date: "05/03/2026", amount: "500 $", status: "Confirmé" },
                                            { name: "Sophie Martin", date: "02/03/2026", amount: "10 $", status: "Annulé" },
                                        ].map((don, i) => (
                                            <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                                                <td className="py-4 px-4 font-bold text-slate-900">{don.name}</td>
                                                <td className="py-4 px-4 text-slate-500 text-sm">{don.date}</td>
                                                <td className="py-4 px-4 font-bold text-brand-600">{don.amount}</td>
                                                <td className="py-4 px-4">
                                                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${don.status === 'Confirmé' ? 'bg-emerald-50 text-emerald-600' :
                                                        don.status === 'En attente' ? 'bg-amber-50 text-amber-600' : 'bg-red-50 text-red-600'
                                                        }`}>
                                                        {don.status}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-4 text-right">
                                                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <button className="p-2 text-slate-400 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors"><Edit3 size={16} /></button>
                                                        <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"><Trash2 size={16} /></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    )}

                    {/* Crowdfunding Management */}
                    {activeTab === 'crowdfunding' && (
                        <motion.div
                            key="crowdfunding"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-6"
                        >
                            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900">Gestion Crowdfunding</h2>
                                    <p className="text-slate-500">Ajoutez ou modifiez vos campagnes actives</p>
                                </div>
                                <button className="bg-brand-600 text-white px-8 py-3 rounded-2xl flex items-center gap-2 font-bold hover:bg-brand-500 transition-all shadow-lg shadow-brand-600/20">
                                    <Plus size={20} /> Nouvelle Campagne
                                </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {crowdfundingData.map((cf) => (
                                    <div key={cf.id} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm group">
                                        <div className="h-40 rounded-2xl overflow-hidden mb-4 relative">
                                            <img src={cf.image} alt="" className="w-full h-full object-cover" />
                                            <div className="absolute top-3 right-3 flex gap-2">
                                                <button className="p-2 bg-white/90 backdrop-blur-sm rounded-lg text-slate-700 hover:text-brand-600"><Edit3 size={16} /></button>
                                                <button className="p-2 bg-white/90 backdrop-blur-sm rounded-lg text-red-500 hover:scale-110"><Trash2 size={16} /></button>
                                            </div>
                                        </div>
                                        <h3 className="font-bold text-slate-900 mb-2">{cf.title}</h3>
                                        <div className="flex justify-between text-xs mb-4">
                                            <span className="text-slate-500">Objectif: <strong>{cf.goal} $</strong></span>
                                            <span className="text-brand-600 font-bold">{Math.round((cf.raised / cf.goal) * 100)}%</span>
                                        </div>
                                        <button className="w-full py-2 border border-slate-100 group-hover:border-brand-500 group-hover:text-brand-600 rounded-xl text-sm font-bold text-slate-500 transition-all">Gérer les donateurs</button>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Countdown Management */}
                    {activeTab === 'countdown' && (
                        <motion.div
                            key="countdown"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 max-w-2xl mx-auto"
                        >
                            <h2 className="text-2xl font-bold text-slate-900 mb-2">Configuration de l'Événement</h2>
                            <p className="text-slate-500 mb-8">Modifiez le compte à rebours de la page d'accueil</p>

                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Titre de l'événement</label>
                                    <input type="text" defaultValue="Gala de Charité " className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-brand-500/20" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Date</label>
                                        <input type="date" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-brand-500/20" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Heure</label>
                                        <input type="time" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-brand-500/20" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Lien du bouton</label>
                                    <input type="text" defaultValue="/donate" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-brand-500/20" />
                                </div>
                                <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all">
                                    Mettre à jour le compteur
                                </button>
                            </form>
                        </motion.div>
                    )}

                    {/* Nos Actions Management */}
                    {activeTab === 'actions' && (
                        <motion.div
                            key="actions"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-6"
                        >
                            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 flex items-center justify-between">
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900">Gestion des Actions</h2>
                                    <p className="text-slate-500">Mettez à jour vos réalisations sur le terrain</p>
                                </div>
                                <button className="bg-brand-600 text-white px-8 py-3 rounded-2xl flex items-center gap-2 font-bold hover:bg-brand-500 transition-all shadow-lg shadow-brand-600/20">
                                    <Plus size={20} /> Nouvelle Action
                                </button>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { title: "Distribution Alimentaire", location: "Kinshasa", date: "Oct 2025" },
                                    { title: "Kits Scolaires pour Tous", location: "Brazzaville", date: "Sep 2025" },
                                    { title: "Campagne de Santé", location: "Dakar", date: "Août 2025" },
                                ].map((action, i) => (
                                    <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center justify-between group hover:border-brand-200 transition-all">
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                                                <Image size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900">{action.title}</h4>
                                                <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                                                    <span className="flex items-center gap-1"><MapPin size={12} /> {action.location}</span>
                                                    <span className="flex items-center gap-1"><Calendar size={12} /> {action.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="px-4 py-2 border border-slate-100 rounded-xl text-sm font-bold hover:bg-slate-50">Éditer</button>
                                            <button className="p-2 text-red-500 hover:bg-red-50 rounded-xl"><Trash2 size={18} /></button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
