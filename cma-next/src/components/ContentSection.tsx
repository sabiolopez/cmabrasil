'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

interface ContentSectionProps {
    title: string;
    tag?: string;
    content: React.ReactNode;
    image?: string;
    reverse?: boolean;
    bg?: 'light' | 'dark' | 'dim';
    id?: string;
}

export const ContentSection: React.FC<ContentSectionProps> = ({
    title,
    tag,
    content,
    image,
    reverse = false,
    bg = 'light',
    id
}) => {
    const bgClasses = {
        light: 'bg-white',
        dark: 'bg-cma-teal-dark text-white',
        dim: 'bg-cma-bg text-cma-text'
    };

    return (
        <section id={id} className={`py-24 px-6 ${bgClasses[bg]}`}>
            <div className={`max-w-7xl mx-auto ${image ? 'grid md:grid-cols-2 gap-16 items-center' : 'max-w-4xl'}`}>
                <motion.div
                    initial={{ opacity: 0, x: reverse ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={reverse && image ? 'md:order-2' : ''}
                >
                    {tag && <span className={`font-medium tracking-wider uppercase text-sm mb-4 block ${bg === 'dark' ? 'text-cma-gold' : 'text-cma-teal'}`}>{tag}</span>}
                    <h2 className={`text-3xl md:text-4xl font-heading font-medium mb-8 leading-tight ${bg === 'dark' ? 'text-white' : 'text-cma-text'}`}>
                        {title}
                    </h2>
                    <div className={`text-lg leading-relaxed font-light space-y-4 ${bg === 'dark' ? 'text-white/80' : 'text-cma-text/70'}`}>
                        {content}
                    </div>
                </motion.div>

                {image && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={`relative ${reverse ? 'md:order-1' : ''}`}
                    >
                        <div className="aspect-[16/10] md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src={image}
                                alt={title}
                                width={1200}
                                height={800}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className={`absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 ${bg === 'dark' ? 'border-cma-gold/30' : 'border-cma-teal/20'}`} />
                    </motion.div>
                )}
            </div>
        </section>
    );
};
