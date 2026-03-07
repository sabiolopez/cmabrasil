'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, X } from 'lucide-react';

export interface LiteratureModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: React.ReactNode;
    pdfUrl?: string; // Optional for now
}

export function LiteratureModal({ isOpen, onClose, title, content, pdfUrl }: LiteratureModalProps) {
    // Handle Esc key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-cma-dark/60 backdrop-blur-sm z-50 transition-opacity"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="bg-white w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col pointer-events-auto"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-cma-teal/10 bg-cma-bg/50">
                                <h2 className="text-2xl font-heading font-medium text-cma-dark pr-8">{title}</h2>
                                <button
                                    onClick={onClose}
                                    className="p-2 text-cma-text hover:text-cma-gold hover:bg-cma-gold/10 rounded-full transition-colors focus:outline-none"
                                    aria-label="Fechar"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Body */}
                            <div className="p-6 md:p-8 overflow-y-auto flex-1 text-cma-text/90 prose prose-cma max-w-none">
                                {content}
                            </div>

                            {/* Footer */}
                            <div className="p-6 border-t border-cma-teal/10 bg-cma-bg/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <p className="text-sm text-cma-text/60 italic text-center sm:text-left">
                                    Fonte: Literatura Aprovada pela Conferência do CMA © Crystal Meth Anonymous
                                </p>

                                {pdfUrl ? (
                                    <a
                                        href={pdfUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cma-gold text-white font-medium rounded-full hover:bg-[#d49a3a] transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cma-gold whitespace-nowrap"
                                    >
                                        <Download size={20} />
                                        Baixar PDF
                                    </a>
                                ) : (
                                    <button
                                        disabled
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cma-text/10 text-cma-text/40 font-medium rounded-full cursor-not-allowed whitespace-nowrap"
                                    >
                                        <Download size={20} />
                                        PDF indisponível
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
