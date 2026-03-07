'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Video, Users, Coffee, Shield } from 'lucide-react';

export const MeetingInfoSection = () => {
    const infos = [
        {
            icon: Video,
            title: "Como participar?",
            text: "As reuniões acontecem via Zoom. Você pode acessar pelo computador ou celular. O link é sempre o mesmo para todas as reuniões."
        },
        {
            icon: Users,
            title: "Quem pode participar?",
            text: "Voltadas para quem tem o desejo de parar de usar metanfetamina. Não é necessário se identificar com nome completo."
        },
        {
            icon: Coffee,
            title: "O que acontece?",
            text: "Seguimos um formato simples: leituras, partilhas e avisos. Você pode apenas ouvir, sem obrigação de falar ou ligar a câmera."
        },
        {
            icon: Shield,
            title: "Anonimato",
            text: "O que é dito na reunião, fica na reunião. Preservamos a identidade e as histórias de todos os participantes."
        }
    ];

    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-medium text-cma-text mb-4">
                        Como funcionam as reuniões online
                    </h2>
                    <p className="text-cma-text/60">
                        Tudo o que você precisa saber para participar da sua primeira reunião via Zoom.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                    {infos.map((info, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex gap-6"
                        >
                            <div className="w-12 h-12 rounded-xl bg-cma-bg flex items-center justify-center text-cma-teal shrink-0">
                                <info.icon size={24} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="text-xl font-heading font-medium text-cma-text mb-2">{info.title}</h3>
                                <p className="text-cma-text/60 leading-relaxed">{info.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
