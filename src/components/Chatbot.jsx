import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Minus } from 'lucide-react';

const responses = [
    {
        keywords: ['bonjour', 'salut', 'hello', 'bonsoir', 'hi', 'bj'],
        answer: "Bonjour ! 👋 Je suis l'assistant virtuel de l'A.J.A.T. Comment puis-je vous aider aujourd'hui ?\n\nVoici ce que je peux vous renseigner :\n• 🤝 Notre mission\n• 💰 Faire un don\n• 📅 Nos actions\n• 📞 Nous contacter\n• 🌐 Crowdfunding",
    },
    {
        keywords: ['mission', 'objectif', 'but', 'raison', 'pourquoi', 'organisation'],
        answer: "🌟 **Notre Mission**\n\nL'A.J.A.T (Association des Jeunes en Action Tosungana) œuvre pour l'épanouissement des jeunes et des communautés vulnérables à travers :\n\n• 📚 L'accès à l'éducation\n• 🍽️ L'aide alimentaire\n• 🏥 La santé communautaire\n• 💼 L'autonomisation des jeunes\n\nNous croyons en un avenir meilleur pour chaque enfant et chaque famille.",
    },
    {
        keywords: ['don', 'donner', 'contribuer', 'aider', 'soutenir', 'financement', 'argent', 'payer'],
        answer: "💝 **Faire un Don**\n\nVotre générosité change des vies ! Pour faire un don :\n\n1. Cliquez sur le bouton **\"Faire un don\"** dans le menu\n2. Choisissez un montant (5$, 20$, 50$ ou libre)\n3. Remplissez vos informations\n4. Validez votre contribution\n\nChaque dollar compte et impacte directement nos bénéficiaires. Merci ! 🙏",
    },
    {
        keywords: ['crowdfunding', 'campagne', 'collecte', 'projet', 'financement participatif'],
        answer: "🎯 **Nos Campagnes de Crowdfunding**\n\nNous avons actuellement plusieurs campagnes actives :\n\n• 🏫 Kits scolaires pour 200 enfants\n• 🍲 Repas pour familles démunies\n• 🏥 Accès aux soins de santé\n\nRendez-vous sur notre page **\"Nos Actions\"** pour voir les campagnes et contribuer directement !",
    },
    {
        keywords: ['action', 'realisation', 'projet', 'terrain', 'aide', 'programme'],
        answer: "🌍 **Nos Actions sur le Terrain**\n\nDepuis notre création, nous avons accompli :\n\n• 🎒 Distribution de kits scolaires\n• 🍽️ Campagnes alimentaires\n• 💊 Actions de santé communautaire\n• 👩‍🏫 Formations pour les jeunes\n\nDécouvrez toutes nos réalisations sur la page **\"Nos Actions\"** !",
    },
    {
        keywords: ['contact', 'joindre', 'telephone', 'email', 'adresse', 'appeler', 'mail', 'message'],
        answer: "📞 **Nous Contacter**\n\nNotre équipe est disponible pour vous !\n\n• 📧 Email : info@ajat-tosungana.org\n• 📱 Téléphone : +243 XXX XXX XXX\n• 📍 Adresse : Kinshasa, RD Congo\n\nVous pouvez aussi remplir notre formulaire de contact sur la page **\"Contact\"**. Nous répondons dans les 24h.",
    },
    {
        keywords: ['bénévole', 'volontaire', 'rejoindre', 'adhérer', 'membre', 'équipe', 'participar'],
        answer: "🤝 **Rejoindre l'Équipe**\n\nVous souhaitez devenir bénévole ? Fantastique !\n\n• Remplissez notre formulaire sur la page Contact\n• Précisez vos compétences et disponibilités\n• Notre équipe vous recontactera sous 48h\n\nEnsemble, nous faisons la différence ! 💪",
    },
    {
        keywords: ['merci', 'super', 'parfait', 'excellent', 'bravo', 'génial', 'ok', 'bien', 'cool'],
        answer: "😊 C'est avec plaisir ! N'hésitez pas si vous avez d'autres questions. Ensemble, nous construisons un avenir meilleur pour les jeunes et les familles de Tosungana ! 🌟",
    },
    {
        keywords: ['au revoir', 'bye', 'ciao', 'bonne journée', 'à bientôt', 'adieu'],
        answer: "Au revoir ! 👋 Merci de votre intérêt pour l'A.J.A.T. N'hésitez pas à revenir si vous avez des questions. Bonne journée ! 🌟",
    },
];

const defaultResponse = "Je ne suis pas sûr de comprendre votre question. 🤔\n\nVoici ce dont je peux vous informer :\n• Notre **mission** et objectifs\n• Comment **faire un don**\n• Nos **campagnes** de crowdfunding\n• Nos **actions** sur le terrain\n• Comment nous **contacter**\n\nEssayez de reformuler ou cliquez sur l'un de ces sujets !";

const quickReplies = ['Notre mission', 'Faire un don', 'Nos actions', 'Nous contacter'];

const getResponse = (input) => {
    const lower = input.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    for (const r of responses) {
        if (r.keywords.some(k => lower.includes(k))) {
            return r.answer;
        }
    }
    return defaultResponse;
};

const formatMessage = (text) => {
    return text.split('\n').map((line, i) => (
        <span key={i} className="block">{line.replace(/\*\*(.*?)\*\*/g, '$1')}</span>
    ));
};

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            from: 'bot',
            text: "Bonjour ! 👋 Je suis l'assistant A.J.A.T. Comment puis-je vous aider ?",
            time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
        }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const containerRef = useRef(null);

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    const sendMessage = (text) => {
        const messageText = text || input.trim();
        if (!messageText) return;

        const userMsg = {
            id: Date.now(),
            from: 'user',
            text: messageText,
            time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
        };

        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        setTimeout(() => {
            const botMsg = {
                id: Date.now() + 1,
                from: 'bot',
                text: getResponse(messageText),
                time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
            };
            setIsTyping(false);
            setMessages(prev => [...prev, botMsg]);
        }, 1000 + Math.random() * 500);
    };

    const handleKey = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <div ref={containerRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            <AnimatePresence>
                {isOpen && !isMinimized && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                        className="w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden"
                        style={{ height: '520px' }}
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-brand-600 to-brand-700 p-4 flex items-center justify-between shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center">
                                    <Bot size={22} className="text-white" />
                                </div>
                                <div>
                                    <p className="font-bold text-white text-sm">Assistant A.J.A.T</p>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                                        <p className="text-white/70 text-xs">En ligne</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <button
                                    onClick={() => setIsMinimized(true)}
                                    className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                                >
                                    <Minus size={16} />
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50/50">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex gap-2 ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    {msg.from === 'bot' && (
                                        <div className="w-7 h-7 rounded-full bg-brand-100 flex items-center justify-center shrink-0 mt-1">
                                            <Bot size={14} className="text-brand-600" />
                                        </div>
                                    )}
                                    <div className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.from === 'user'
                                        ? 'bg-brand-600 text-white rounded-tr-sm'
                                        : 'bg-white text-slate-700 rounded-tl-sm border border-slate-100'
                                        }`}>
                                        <div className="space-y-0.5">{formatMessage(msg.text)}</div>
                                        <p className={`text-[10px] mt-1 ${msg.from === 'user' ? 'text-white/60 text-right' : 'text-slate-400'}`}>{msg.time}</p>
                                    </div>
                                    {msg.from === 'user' && (
                                        <div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center shrink-0 mt-1">
                                            <User size={14} className="text-slate-600" />
                                        </div>
                                    )}
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex gap-2 items-center">
                                    <div className="w-7 h-7 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
                                        <Bot size={14} className="text-brand-600" />
                                    </div>
                                    <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex gap-1.5 items-center">
                                        {[0, 1, 2].map(i => (
                                            <div key={i} className="w-2 h-2 rounded-full bg-brand-400 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                                        ))}
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Replies */}
                        <div className="px-4 py-2 flex gap-2 overflow-x-auto shrink-0 bg-white border-t border-slate-100 no-scrollbar">
                            {quickReplies.map(q => (
                                <button
                                    key={q}
                                    onClick={() => sendMessage(q)}
                                    className="text-xs font-medium px-3 py-1.5 bg-brand-50 text-brand-600 rounded-full whitespace-nowrap hover:bg-brand-100 transition-colors border border-brand-100"
                                >
                                    {q}
                                </button>
                            ))}
                        </div>

                        {/* Input */}
                        <div className="p-4 bg-white border-t border-slate-100 flex gap-2 shrink-0">
                            <input
                                type="text"
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                onKeyDown={handleKey}
                                placeholder="Écrivez un message..."
                                className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-400 transition-all"
                            />
                            <button
                                onClick={() => sendMessage()}
                                disabled={!input.trim()}
                                className="w-10 h-10 rounded-2xl bg-brand-600 text-white flex items-center justify-center hover:bg-brand-500 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-brand-500/20"
                            >
                                <Send size={16} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Minimized bar */}
            <AnimatePresence>
                {isOpen && isMinimized && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={() => setIsMinimized(false)}
                        className="bg-gradient-to-r from-brand-600 to-brand-700 text-white px-5 py-3 rounded-2xl flex items-center gap-3 cursor-pointer shadow-xl shadow-brand-500/30 hover:shadow-2xl transition-shadow"
                    >
                        <Bot size={18} />
                        <span className="text-sm font-bold">Assistant A.J.A.T</span>
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { setIsOpen(!isOpen); setIsMinimized(false); }}
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white flex items-center justify-center shadow-xl shadow-brand-500/30 hover:shadow-2xl transition-shadow relative"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                            <X size={22} />
                        </motion.div>
                    ) : (
                        <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                            <MessageCircle size={22} />
                        </motion.div>
                    )}
                </AnimatePresence>
                {/* Notification dot */}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white animate-pulse"></span>
                )}
            </motion.button>
        </div>
    );
};

export default Chatbot;
