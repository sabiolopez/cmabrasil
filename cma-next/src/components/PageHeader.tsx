'use client';

import React from 'react';
import { motion } from 'motion/react';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    tag?: string;
    image?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, tag, image }) => {
    return (
        <section className="relative h-[65vh] w-full overflow-hidden bg-cma-teal-dark text-white">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                {image ? (
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-50"
                        style={{ backgroundImage: `url('${image}')` }}
                    />
                ) : (
                    <div className="absolute inset-0 bg-cma-teal-dark" />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end px-8 md:px-20 pb-16 md:pb-24 max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    {tag && (
                        <span className="text-cma-gold font-medium tracking-wider uppercase text-sm mb-4 block">
                            {tag}
                        </span>
                    )}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-white mb-6 tracking-[-0.03em] leading-[1.05] max-w-3xl">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-lg border-l-2 border-cma-gold pl-6">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
};
