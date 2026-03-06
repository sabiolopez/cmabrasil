'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const IntroSection = () => {
    return (
        <section className="py-32 px-6 bg-cma-bg relative">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-cma-teal font-medium tracking-wider uppercase text-sm mb-4 block">Quem Somos</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-medium text-cma-text mb-8 leading-tight">
                        Crystal Meth <br />
                        <span className="text-cma-teal">Anonymous</span>
                        <span className="block text-2xl mt-4 font-light text-cma-text/70">
                            Recuperação da Dependência de Metanfetamina
                        </span>
                    </h2>
                    <p className="text-lg text-cma-text/70 leading-relaxed font-light mb-6">
                        O CMA é uma irmandade de pessoas que compartilham sua experiência, força e esperança umas com as outras, para que juntos possamos resolver o nosso problema comum e ajudar aos outros a se recuperarem da dependência da metanfetamina.
                    </p>
                    <Link href="/cma" className="text-cma-teal font-medium hover:text-cma-teal-dark transition-colors inline-flex items-center gap-2">
                        Nossa História <ArrowRight size={16} />
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/card-about.png"
                            alt="Comunidade CMA Brasil"
                            width={800}
                            height={1000}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-xl shadow-xl max-w-xs hidden md:block">
                        <p className="font-heading text-cma-text text-lg mb-2">&quot;Dar o primeiro passo exige coragem.&quot;</p>
                        <div className="w-12 h-1 bg-cma-gold" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
