'use client';

import React from 'react';
import { motion } from 'motion/react';

export const MeetingsHero = () => {
    return (
        <section className="relative h-[65vh] w-full overflow-hidden bg-cma-teal-dark text-white">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/card-meetings.png')] bg-cover bg-center opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
            </div>

            <div className="relative z-10 h-full flex flex-col md:flex-row max-w-7xl mx-auto w-full px-8 md:px-20">
                <div className="flex-1 flex flex-col justify-end pb-16 md:pb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-cma-gold font-medium tracking-wider uppercase text-sm mb-4 block">Reuniões</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold leading-[1.05] tracking-[-0.03em] mb-8 max-w-3xl">
                            Você não está sozinho.
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-lg mb-0 border-l-2 border-cma-gold pl-6">
                            O CMA Brasil realiza reuniões online e presenciais, abertas, anônimas e gratuitas &mdash; todas no horário de Brasília.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
