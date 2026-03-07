'use client';

import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle } from 'lucide-react';
import { guidelines } from '@/data/meetings';

export const GuidelinesSection = () => {
    return (
        <section className="py-24 px-6 bg-cma-teal-dark text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <AlertCircle className="w-12 h-12 text-cma-gold mx-auto mb-6 opacity-80" />
                    <h2 className="text-3xl md:text-4xl font-heading font-medium mb-4">Diretrizes das Reuniões</h2>
                    <p className="text-white/60">Para manter um ambiente seguro, respeitoso e acolhedor.</p>
                </div>

                <div className="grid gap-6">
                    {guidelines.map((rule, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex gap-4 items-start p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                        >
                            <div className="w-6 h-6 rounded-full bg-cma-gold/20 text-cma-gold flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                                {idx + 1}
                            </div>
                            <p className="text-white/80 leading-relaxed">{rule}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
