import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, User } from 'lucide-react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

            setTimeout(() => {
                setIsSuccess(false);
            }, 5000);
        }, 1500);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans pb-0">
            {/* Hero Section */}
            <div className="relative pt-32 pb-32 md:pt-48 md:pb-40 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1593113630400-ea4288922497?q=80&w=2070&auto=format&fit=crop"
                        alt="Contactez-nous"
                        className="w-full h-full object-cover custom-position"
                        style={{ objectPosition: 'center 30%' }}
                    />
                    <div className="absolute inset-0 bg-slate-900/70" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-900/40 to-transparent" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-sm mb-6 shadow-xl"
                    >
                        <MessageSquare className="w-5 h-5 text-brand-400" />
                        Nous sommes à votre écoute
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight drop-shadow-lg"
                    >
                        Contactez <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-300">l'A.J.A.T</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md"
                    >
                        Passez de l'intention à l'action. Écrivez-nous pour un partenariat, une question ou simplement pour nous dire bonjour.
                    </motion.p>
                </div>
            </div>

            {/* Quick Cards Info */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 md:-mt-32 relative z-20 mb-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {/* Card 1 */}
                    <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-xl border border-white p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                        <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-500 transition-all duration-300">
                            <MapPin className="w-8 h-8 text-brand-500 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Notre Siège</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Avenue imbali, n°11 q/10<br />
                            c/ n'djili<br />
                            Kinshasa, RDC
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-xl border border-white p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                        <div className="w-16 h-16 rounded-2xl bg-accent-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent-500 transition-all duration-300">
                            <Phone className="w-8 h-8 text-accent-500 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Téléphone</h3>
                        <p className="text-slate-600 leading-relaxed">
                            <a href="tel:+243904891529" className="hover:text-accent-600 transition-colors block">+243 904 891 529</a>
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-xl border border-white p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                        <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500 transition-all duration-300">
                            <Mail className="w-8 h-8 text-emerald-500 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Email</h3>
                        <p className="text-slate-600 leading-relaxed">
                            <a href="mailto:contact@ajat.com" className="hover:text-emerald-600 transition-colors block">contact@ajat.com</a>
                            <a href="mailto:partenaire@ajat.com" className="hover:text-emerald-600 transition-colors block">partenaire@ajat.com</a>
                        </p>
                    </motion.div>
                </motion.div>
            </div>

            {/* Main Content Area (Form & Map) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 relative z-20">
                <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 overflow-hidden flex flex-col lg:flex-row border border-slate-100">

                    {/* Form Side */}
                    <div className="p-10 md:p-14 lg:w-3/5 bg-white relative">
                        {/* Decorative blob */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-50 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none"></div>

                        <div className="mb-10">
                            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4 inline-flex flex-col">
                                Laissez-nous un message
                                <span className="w-1/3 h-1.5 bg-brand-500 rounded-full mt-2"></span>
                            </h2>
                            <p className="text-slate-500 text-lg">Remplissez le formulaire ci-dessous et nous vous contacterons très bientôt.</p>
                        </div>

                        {isSuccess ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-200 rounded-3xl p-10 text-center shadow-lg shadow-emerald-100/50"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                                    className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-emerald-500/30"
                                >
                                    <Send className="w-10 h-10 text-white translate-x-1 -translate-y-1" />
                                </motion.div>
                                <h4 className="text-3xl font-bold text-emerald-900 mb-4">Message envoyé avec succès !</h4>
                                <p className="text-emerald-700 text-lg">
                                    Merci de l'intérêt que vous portez à l'A.J.A.T. Notre équipe de bénévoles traitera votre demande sous 48h.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Name Input */}
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <User className="h-5 w-5 text-slate-400 group-focus-within:text-brand-500 transition-colors" />
                                        </div>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all outline-none"
                                            placeholder="Votre nom complet"
                                        />
                                    </div>

                                    {/* Email Input */}
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Mail className="h-5 w-5 text-slate-400 group-focus-within:text-brand-500 transition-colors" />
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all outline-none"
                                            placeholder="Adresse email"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Phone Input */}
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Phone className="h-5 w-5 text-slate-400 group-focus-within:text-brand-500 transition-colors" />
                                        </div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all outline-none"
                                            placeholder="Numéro de téléphone (optionnel)"
                                        />
                                    </div>

                                    {/* Subject Input */}
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <MessageSquare className="h-5 w-5 text-slate-400 group-focus-within:text-brand-500 transition-colors" />
                                        </div>
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 focus:bg-white focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all outline-none appearance-none cursor-pointer"
                                        >
                                            <option value="" disabled>Motif du message...</option>
                                            <option value="don">Je souhaite faire un don</option>
                                            <option value="benevolat">Je veux devenir bénévole</option>
                                            <option value="partenariat">Proposition de partenariat</option>
                                            <option value="aide">Je souhaite obtenir de l'aide</option>
                                            <option value="autre">Autre demande</option>
                                        </select>
                                        {/* Custom dropdown arrow */}
                                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                                            <svg className="h-5 w-5 text-slate-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Message Textarea */}
                                <div className="relative group">
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all outline-none resize-none"
                                        placeholder="Comment pouvons-nous vous aider ? Écrivez votre message complet ici..."
                                    ></textarea>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-gradient-to-r from-brand-600 to-accent-500 text-white font-bold text-lg rounded-2xl shadow-xl shadow-brand-500/25 hover:shadow-brand-500/40 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-3">
                                            <svg className="animate-spin -ml-1 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Envoi sécurisé en cours...
                                        </span>
                                    ) : (
                                        <>
                                            Envoyer le message
                                            <Send className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        )}
                    </div>

                    {/* Image / Map Side */}
                    <div className="lg:w-2/5 relative min-h-[400px] lg:min-h-full">
                        <img
                            src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop"
                            alt="Equipe terrain"
                            className="absolute inset-0 w-full h-full object-cover grayscale-[20%] sepia-[10%] group-hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-brand-900/60 mix-blend-multiply" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

                        <div className="absolute bottom-0 left-0 w-full p-10 text-white">
                            <h3 className="text-2xl font-bold mb-2">Notre Bureau</h3>
                            <p className="text-slate-300 font-light mb-6">Passez nous voir du lundi au vendredi, de 08h00 à 17h00. Le café est toujours chaud !</p>

                            {/* Embedded Map Fallback (Stylized UI Block) */}
                            <div className="w-full h-40 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden relative group cursor-pointer hover:bg-white/20 transition-all">
                                <div className="absolute inset-0 bg-[url('https://maps.wikimedia.org/osm-intl/12/2274/2056.png')] bg-cover bg-center opacity-50 mix-blend-luminosity group-hover:opacity-80 transition-opacity" style={{ filter: 'hue-rotate(200deg) saturate(1.5)' }} />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-brand-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-xl flex items-center gap-2 transform group-hover:-translate-y-1 transition-transform">
                                        <MapPin className="w-4 h-4" /> Voir sur la carte
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* FAQ Pre-footer */}
            <div className="bg-white py-24 border-t border-slate-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Questions fréquentes</h2>
                    <p className="text-lg text-slate-600 mb-12">Vous trouverez peut-être la réponse à votre question ci-dessous.</p>

                    <div className="space-y-4 text-left">
                        {[
                            { q: "Comment puis-je devenir bénévole ?", a: "Vous pouvez nous écrire via ce formulaire en précisant 'bénévolat' en objet, ou nous rendre visite directement à notre siège." },
                            { q: "Où vont mes dons ?", a: "100% des dons financiers sont alloués à l'achat de vivres, kits scolaires et à l'accompagnement d'urgence des plus démunis." }
                        ].map((faq, i) => (
                            <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                                <p className="text-slate-600">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
