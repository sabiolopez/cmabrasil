'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface InfoCardProps {
    title: string;
    description: string;
    buttonText: string;
    image: string;
    delay: number;
    href: string;
    className?: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({ title, description, buttonText, image, delay, href, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className={`group relative overflow-hidden rounded-2xl aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/5] ${className}`}
    >
        <Link href={href} className="block h-full">
            <Image
                src={image}
                alt={title}
                width={600}
                height={800}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-300" />

            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-heading font-medium mb-3">{title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {description}
                    </p>
                    <span className="flex items-center gap-2 text-sm font-medium text-cma-gold group-hover:text-white transition-colors">
                        {buttonText} <ArrowRight size={14} />
                    </span>
                </div>
            </div>
        </Link>
    </motion.div>
);

export const ContentGrid: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto bg-cma-bg">
            <div className="flex justify-between items-end mb-16">
                <div>
                    <span className="text-cma-teal font-medium tracking-wider uppercase text-sm mb-2 block">Recursos</span>
                    <h2 className="text-3xl font-heading font-medium text-cma-text">Explore o CMA</h2>
                </div>
                <Link href="/recursos" className="hidden md:flex items-center gap-2 text-cma-text/60 hover:text-cma-teal transition-colors text-sm font-medium">
                    Ver tudo <ArrowRight size={14} />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Card 1: Sobre */}
                <InfoCard
                    title="Sobre o CMA"
                    description="Entenda o que é o CMA, como nasceu e como funciona a nossa irmandade."
                    buttonText="Saiba mais"
                    image="/card-about.png"
                    delay={0}
                    href="/cma"
                />

                {/* Card 2: Reuniões */}
                <InfoCard
                    title="Reuniões Online"
                    description="Veja como funcionam as reuniões, os horários disponíveis e como ser bem-vindo por lá."
                    buttonText="Como participar"
                    image="/card-meetings.png"
                    delay={0.1}
                    href="/reunioes"
                />

                {/* Card 3: Ajuda */}
                <InfoCard
                    title="Precisa de ajuda?"
                    description="Canais de contato para quem busca ajuda ou maiores informações sobre o programa."
                    buttonText="Fale conosco"
                    image="/card-help.png"
                    delay={0.2}
                    href="/contato"
                />

                {/* Card 4: 12 Passos */}
                <InfoCard
                    title="Programa 12 Passos"
                    description="Descubra como os 12 Passos podem apoiar sua recuperação, um dia de cada vez."
                    buttonText="Saiba mais"
                    image="/card-steps.png"
                    delay={0.3}
                    href="/programa"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                {/* Card 5: Familiares */}
                <InfoCard
                    title="Para Familiares e Amigos"
                    description="Conteúdo informativo e referências externas para familiares e amigos."
                    buttonText="Saiba mais"
                    image="/card-family.png"
                    delay={0.4}
                    href="/familiares"
                />

                {/* Card 6: Sétima Tradição */}
                <InfoCard
                    title="Sétima Tradição"
                    description="Se você é membro e gostaria de fazer doações para o grupo."
                    buttonText="Saiba como"
                    image="/card-tradition.png"
                    delay={0.5}
                    href="/cma#doar"
                />

                {/* Card 7: Literaturas */}
                <InfoCard
                    title="Literaturas"
                    description="Explore livros e cartilhas para guiar sua jornada de recuperação de forma sustentada."
                    buttonText="Ver literaturas"
                    image="/card-literature.png"
                    delay={0.6}
                    href="/literaturas"
                />

                {/* Card 8: Eventos */}
                <InfoCard
                    title="Eventos"
                    description="Acompanhe nossos próximos encontros e atividades presenciais."
                    buttonText="Confira o próximo"
                    image="/card-events.png"
                    delay={0.7}
                    href="/eventos"
                />
            </div>
        </section>
    );
};
