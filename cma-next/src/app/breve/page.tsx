'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Clock, Send, Heart } from 'lucide-react';

export default function BrevePage() {
    return (
        <div className="min-h-screen bg-cma-teal-dark flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cma-gold/10 rounded-full blur-[100px] -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cma-teal/20 rounded-full blur-[100px] -ml-48 -mb-48" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl w-full text-center relative z-10"
            >
                <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center text-cma-gold mx-auto mb-10 backdrop-blur-sm border border-white/10">
                    <Clock size={40} strokeWidth={1.5} />
                </div>

                <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 tracking-tight">
                    Nos vemos em breve.
                </h1>

                <p className="text-xl text-white/60 font-light mb-12 max-w-xl mx-auto leading-relaxed">
                    Estamos preparando uma nova experiência digital para levar a mensagem de recuperação mais longe.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-16 text-left">
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm">
                        <h3 className="text-cma-gold font-medium mb-2">Quem Somos</h3>
                        <p className="text-xs text-white/40 leading-relaxed">
                            Uma irmandade que não apoia nem combate causas externas. Nosso foco é a recuperação.
                        </p>
                    </div>
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm">
                        <h3 className="text-cma-gold font-medium mb-2">Requisito</h3>
                        <p className="text-xs text-white/40 leading-relaxed">
                            O único requisito é o desejo de parar de usar metanfetamina e outras drogas.
                        </p>
                    </div>
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm">
                        <h3 className="text-cma-gold font-medium mb-2">Autonomia</h3>
                        <p className="text-xs text-white/40 leading-relaxed">
                            Somos autossustentáveis através das contribuições voluntárias de nossos membros.
                        </p>
                    </div>
                </div>

                <div className="bg-white p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2 max-w-md mx-auto">
                    <input
                        type="email"
                        placeholder="seu@email.com"
                        className="flex-grow px-6 py-4 bg-transparent text-cma-text outline-none"
                    />
                    <button className="px-8 py-4 bg-cma-teal text-white rounded-xl font-medium hover:bg-cma-teal-dark transition-all flex items-center justify-center gap-2">
                        Avisar-me <Send size={16} />
                    </button>
                </div>

                <p className="mt-8 text-white/30 text-sm flex items-center justify-center gap-2">
                    Comprometidos com seu anonimato <Heart size={14} className="text-cma-gold/30" />
                </p>
            </motion.div>
        </div>
    );
}
