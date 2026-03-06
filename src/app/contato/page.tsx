'use client';

import React from 'react';
import { PageHeader } from '@/components/PageHeader';
import { Mail, Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContatoPage() {
    return (
        <div className="bg-white">
            <PageHeader
                title="Apoio Confidencial"
                tag="Fale Conosco"
                subtitle="Converse com a gente de forma segura e confidencial"
                image="/card-help.png"
            />

            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-heading font-medium text-cma-text mb-8">Como podemos ajudar?</h2>
                        <p className="text-lg text-cma-text/70 mb-12 leading-relaxed">
                            Se você deseja mais informações sobre o CMA Brasil ou precisa de apoio para participar de uma reunião, pode entrar em contato pelo formulário. Todas as mensagens são tratadas com absoluto sigilo, preservando o seu anonimato.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-full bg-cma-bg flex items-center justify-center text-cma-teal shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-heading font-medium text-lg text-cma-text mb-1">E-mail</h3>
                                    <p className="text-cma-text/60">contato@cmabrasil.org</p>
                                </div>
                            </div>



                            <div className="p-8 bg-cma-teal/5 rounded-2xl border border-cma-teal/10 mt-12">
                                <h4 className="font-heading font-medium text-cma-text mb-4">Informação importante</h4>
                                <p className="text-sm text-cma-text/60 leading-relaxed italic">
                                    O CMA é uma irmandade, não um serviço de emergência. Em situações de risco imediato, procure o pronto-socorro, o SAMU (192) ou o CVV (188).
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-black/5 border border-cma-teal/5"
                    >
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-cma-text/60 ml-1">Nome</label>
                                    <input type="text" id="name" className="w-full px-6 py-4 bg-cma-bg border-none rounded-xl focus:ring-2 focus:ring-cma-teal/20 transition-all outline-none" placeholder="Seu nome" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-cma-text/60 ml-1">E-mail</label>
                                    <input type="email" id="email" className="w-full px-6 py-4 bg-cma-bg border-none rounded-xl focus:ring-2 focus:ring-cma-teal/20 transition-all outline-none" placeholder="seu@email.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium text-cma-text/60 ml-1">Telefone (opcional)</label>
                                <input type="tel" id="phone" className="w-full px-6 py-4 bg-cma-bg border-none rounded-xl focus:ring-2 focus:ring-cma-teal/20 transition-all outline-none" placeholder="(00) 00000-0000" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-cma-text/60 ml-1">Mensagem</label>
                                <textarea id="message" rows={5} className="w-full px-6 py-4 bg-cma-bg border-none rounded-xl focus:ring-2 focus:ring-cma-teal/20 transition-all outline-none resize-none" placeholder="Como podemos ajudar?" />
                            </div>

                            <button type="submit" className="w-full py-5 bg-cma-teal text-white rounded-xl font-medium hover:bg-cma-teal-dark transition-all flex items-center justify-center gap-3 shadow-lg shadow-cma-teal/20">
                                <Send size={18} />
                                Enviar Mensagem
                            </button>

                            <p className="text-center text-xs text-cma-text/40 pt-4">
                                Sua privacidade é fundamental. Suas informações serão tratadas com total anonimato e respeito.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
