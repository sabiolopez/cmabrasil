'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { NextMeetingCard } from '@/components/NextMeetingCard';

export const ImmersiveHero: React.FC = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-cma-teal-dark text-white">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/hero-homepage.png')] bg-cover bg-center opacity-45 brightness-125" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-transparent" />
            </div>

            <div className="relative z-10 h-full flex flex-col md:flex-row">

                {/* Left Column: Main Content */}
                <div className="flex-1 flex flex-col md:justify-center px-8 md:px-20 pt-28 md:pt-20 pb-0 md:pb-0 relative overflow-y-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-2xl"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold leading-[1.05] tracking-[-0.03em] mb-8">
                            Respire fundo,<br />
                            você já chegou até aqui.
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-lg mb-0 md:mb-12 border-l-2 border-cma-gold pl-6">
                            Apoio na recuperação da dependência de metanfetamina. Encontre em nossa irmandade a força para partilhar e focar na solução.
                        </p>

                        <div className="hidden md:flex items-center gap-4 mt-12">
                            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center animate-bounce text-white/50">
                                <ArrowRight size={20} className="rotate-90" />
                            </div>
                            <span className="text-sm uppercase tracking-widest text-white/50">Role para explorar</span>
                        </div>
                    </motion.div>

                    {/* Próxima Reunião — mobile only, colada no fundo */}
                    <div className="md:hidden mt-auto pb-10 pt-0">
                        <div className="p-6 rounded-xl bg-black/30 backdrop-blur-md border border-white/10">
                            <NextMeetingCard />
                        </div>
                    </div>
                </div>

                {/* Right Column: Glass Sidebar — visível apenas em md+ */}
                <div className="hidden md:flex md:w-[380px] lg:w-[440px] bg-black/15 backdrop-blur-xl border-l border-white/10 flex-col justify-center p-8 md:p-12">
                    <div className="space-y-12">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-cma-gold mb-4 block">Destaques</span>
                            <h3 className="text-2xl font-heading font-medium mb-2">Sobre o CMA</h3>
                            <p className="text-white/60 text-sm leading-relaxed mb-6">
                                Entenda o que é o CMA, como nasceu e como funciona a nossa irmandade de apoio e esperança.
                            </p>

                            <Link href="/cma" className="inline-flex items-center gap-2 text-sm font-medium hover:text-cma-gold transition-colors text-white">
                                Saiba mais <ArrowRight size={14} />
                            </Link>
                        </div>

                        <div className="w-full h-[1px] bg-white/10" />

                        <NextMeetingCard />
                    </div>
                </div>
            </div>
        </section>
    );
};
