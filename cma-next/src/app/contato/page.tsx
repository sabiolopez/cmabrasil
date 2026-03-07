'use client';

import React, { useState } from 'react';
import { PageHeader } from '@/components/PageHeader';
import { Mail, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function ContatoPage() {
    const [form, setForm] = useState({ nome: '', email: '', telefone: '', mensagem: '' });
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        setErrorMsg('');

        try {
            const res = await fetch('/api/contato', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setStatus('success');
                setForm({ nome: '', email: '', telefone: '', mensagem: '' });
            } else {
                const data = await res.json();
                setErrorMsg(data.error || 'Falha ao enviar. Tente novamente.');
                setStatus('error');
            }
        } catch {
            setErrorMsg('Erro de conexão. Verifique sua internet e tente novamente.');
            setStatus('error');
        }
    };

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
                                    <a
                                        href="mailto:cmanobrasil@gmail.com"
                                        className="text-cma-teal hover:underline"
                                    >
                                        cmanobrasil@gmail.com
                                    </a>
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
                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex flex-col items-center justify-center h-full min-h-[400px] text-center gap-6"
                                >
                                    <div className="w-20 h-20 rounded-full bg-cma-teal/10 flex items-center justify-center">
                                        <CheckCircle size={40} className="text-cma-teal" />
                                    </div>
                                    <h3 className="text-2xl font-heading font-medium text-cma-text">Mensagem enviada!</h3>
                                    <p className="text-cma-text/60 max-w-xs leading-relaxed">
                                        Recebemos seu contato e responderemos o mais breve possível. Obrigado por confiar no CMA Brasil.
                                    </p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="mt-4 px-8 py-3 border border-cma-teal/30 text-cma-teal rounded-xl text-sm hover:bg-cma-teal/5 transition-all"
                                    >
                                        Enviar outra mensagem
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="nome" className="text-sm font-medium text-cma-text/60 ml-1">Nome</label>
                                            <input
                                                type="text"
                                                id="nome"
                                                name="nome"
                                                required
                                                value={form.nome}
                                                onChange={handleChange}
                                                className="w-full px-6 py-4 bg-cma-bg border-none rounded-xl focus:ring-2 focus:ring-cma-teal/20 transition-all outline-none"
                                                placeholder="Seu nome"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium text-cma-text/60 ml-1">E-mail</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={form.email}
                                                onChange={handleChange}
                                                className="w-full px-6 py-4 bg-cma-bg border-none rounded-xl focus:ring-2 focus:ring-cma-teal/20 transition-all outline-none"
                                                placeholder="seu@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="telefone" className="text-sm font-medium text-cma-text/60 ml-1">Telefone (opcional)</label>
                                        <input
                                            type="tel"
                                            id="telefone"
                                            name="telefone"
                                            value={form.telefone}
                                            onChange={handleChange}
                                            className="w-full px-6 py-4 bg-cma-bg border-none rounded-xl focus:ring-2 focus:ring-cma-teal/20 transition-all outline-none"
                                            placeholder="(00) 00000-0000"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="mensagem" className="text-sm font-medium text-cma-text/60 ml-1">Mensagem</label>
                                        <textarea
                                            id="mensagem"
                                            name="mensagem"
                                            required
                                            rows={5}
                                            value={form.mensagem}
                                            onChange={handleChange}
                                            className="w-full px-6 py-4 bg-cma-bg border-none rounded-xl focus:ring-2 focus:ring-cma-teal/20 transition-all outline-none resize-none"
                                            placeholder="Como podemos ajudar?"
                                        />
                                    </div>

                                    {status === 'error' && (
                                        <div className="flex items-center gap-3 p-4 bg-red-50 rounded-xl text-red-600 text-sm">
                                            <AlertCircle size={18} />
                                            <span>{errorMsg}</span>
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="w-full py-5 bg-cma-teal text-white rounded-xl font-medium hover:bg-cma-teal-dark transition-all flex items-center justify-center gap-3 shadow-lg shadow-cma-teal/20 disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {status === 'sending' ? (
                                            <>
                                                <Loader2 size={18} className="animate-spin" />
                                                Enviando...
                                            </>
                                        ) : (
                                            <>
                                                <Send size={18} />
                                                Enviar Mensagem
                                            </>
                                        )}
                                    </button>

                                    <p className="text-center text-xs text-cma-text/40 pt-4">
                                        Sua privacidade é fundamental. Suas informações serão tratadas com total anonimato e respeito.
                                    </p>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
