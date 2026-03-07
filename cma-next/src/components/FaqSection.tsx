'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export interface FaqItem {
    question: string;
    answer: React.ReactNode;
}

interface FaqSectionProps {
    title?: string;
    tag?: string;
    items: FaqItem[];
    bg?: 'light' | 'dark' | 'dim';
    id?: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
    title,
    tag,
    items,
    bg = 'light',
    id
}) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const bgClasses = {
        light: 'bg-white',
        dark: 'bg-cma-teal-dark text-white',
        dim: 'bg-cma-bg text-cma-text'
    };

    return (
        <section id={id} className={`py-24 px-6 ${bgClasses[bg]}`}>
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    {tag && (
                        <span className={`font-medium tracking-wider uppercase text-sm mb-4 block ${bg === 'dark' ? 'text-cma-gold' : 'text-cma-teal'}`}>
                            {tag}
                        </span>
                    )}
                    {title && (
                        <h2 className={`text-3xl md:text-4xl font-heading font-medium leading-tight ${bg === 'dark' ? 'text-white' : 'text-cma-text'}`}>
                            {title}
                        </h2>
                    )}
                </motion.div>

                <div className="space-y-4">
                    {items.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`border ${bg === 'dark' ? 'border-white/20' : 'border-cma-teal/20'} rounded-2xl overflow-hidden`}
                            >
                                <button
                                    onClick={() => toggleItem(index)}
                                    className={`w-full flex items-center justify-between p-6 text-left transition-colors duration-200 ${bg === 'dark' ? 'hover:bg-white/5' : 'hover:bg-cma-teal/5'}`}
                                    aria-expanded={isOpen}
                                >
                                    <span className="font-heading font-medium text-xl pr-8">
                                        {item.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} ${bg === 'dark' ? 'text-cma-gold' : 'text-cma-teal'}`}
                                    />
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        >
                                            <div className={`p-6 pt-0 text-lg leading-relaxed font-light ${bg === 'dark' ? 'text-white/80' : 'text-cma-text/70'}`}>
                                                {item.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
