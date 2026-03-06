'use client';

import React from 'react';
import { PageHeader } from '@/components/PageHeader';
import { ContentSection } from '@/components/ContentSection';
import { FaqSection } from '@/components/FaqSection';
import Link from 'next/link';
import { motion } from 'motion/react';

const pillars = [
    {
        number: '01',
        title: 'Recuperação',
        description:
            'É o trabalho pessoal com os Doze Passos, a mudança de comportamento e a aplicação de princípios espirituais na vida diária.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>
        ),
    },
    {
        number: '02',
        title: 'Unidade',
        description:
            'É a força do grupo. Por meio das reuniões e da convivência entre membros, criamos um ambiente seguro onde cada pessoa pode se identificar e encontrar apoio.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
            </svg>
        ),
    },
    {
        number: '03',
        title: 'Serviço',
        description:
            'É a forma como mantemos a irmandade ativa. Ao servir — seja organizando reuniões, acolhendo recém-chegados ou ajudando na estrutura do grupo — fortalecemos nossa própria recuperação.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
        ),
    },
];

export default function CMAPage() {
    return (
        <div className="bg-white">
            <PageHeader
                title="O que é o CMA?"
                tag="Sobre Nós"
                subtitle="Uma irmandade de pessoas que partilham sua experiência, força e esperança."
                image="/card-about.png"
            />

            {/* O que é o CMA – texto + pilares */}
            <section className="py-24 px-6 bg-cma-bg">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    {/* Coluna esquerda – texto introdutório */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="font-medium tracking-wider uppercase text-sm mb-4 block text-cma-teal">
                            Propósito
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-medium mb-8 leading-tight text-cma-text">
                            O que é o CMA?
                        </h2>
                        <div className="text-lg leading-relaxed font-light space-y-4 text-cma-text/70">
                            <p>
                                O CMA é uma irmandade de pessoas para quem a metanfetamina se tornou um problema sério.
                                Nos recuperamos e ajudamos outras pessoas que ainda sofrem.
                            </p>
                            <p>
                                Nossa recuperação é baseada na prática dos Doze Passos, vivida dentro de uma comunidade
                                que se apoia mutuamente.
                            </p>
                            <p>
                                O programa se sustenta em três pilares que caminham juntos e formam a base do CMA no
                                Brasil e no mundo.
                            </p>
                        </div>
                    </motion.div>

                    {/* Coluna direita – pilares */}
                    <div className="flex flex-col gap-5">
                        {pillars.map((pillar, i) => (
                            <motion.div
                                key={pillar.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                className="group relative bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:border-cma-teal/25 hover:shadow-md transition-all duration-300"
                            >
                                {/* número decorativo */}
                                <span className="absolute top-5 right-6 text-5xl font-heading font-bold text-cma-teal/[0.07] select-none leading-none">
                                    {pillar.number}
                                </span>

                                {/* ícone */}
                                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-cma-teal/10 text-cma-teal mb-4 group-hover:bg-cma-teal group-hover:text-white transition-colors duration-300">
                                    {pillar.icon}
                                </div>

                                {/* título */}
                                <h3 className="font-heading font-medium text-xl text-cma-text mb-2">
                                    {pillar.title}
                                </h3>

                                {/* descrição */}
                                <p className="text-base leading-relaxed font-light text-cma-text/65">
                                    {pillar.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <FaqSection
                bg="dim"
                tag="Entendendo o Programa"
                title="Perguntas Frequentes"
                items={[
                    {
                        question: "Quem pode participar?",
                        answer: <p>Qualquer pessoa que tenha o desejo de parar de usar metanfetamina pode participar do CMA. Esse é o único requisito para ser parte da nossa irmandade. Não existem mensalidades, taxas, ou cobranças de qualquer tipo. Aqui não importa sua idade, sua história ou o tempo que você está usando - se você sente que precisa de ajuda, este é o seu lugar.</p>
                    },
                    {
                        question: "O que acontece nas reuniões?",
                        answer: <p>As reuniões do CMA são encontros seguros onde pessoas em recuperação compartilham suas experiências, forças e esperanças. Você vai ouvir histórias de quem já passou pelo mesmo problema e pode também falar sobre a sua própria vida, se quiser. Não há julgamentos. O objetivo é criar um espaço de apoio mútuo, onde cada um descobre que não está sozinho e que a recuperação é possível. <Link href="/reunioes" className="text-cma-teal font-medium hover:underline">Encontre uma reunião.</Link></p>
                    },
                    {
                        question: "Como funciona o programa?",
                        answer: <p>O CMA segue um programa de recuperação baseado nos Doze Passos, que oferecem um caminho para viver livre da metanfetamina e de todas as drogas. Esse processo acontece um dia de cada vez, com a ajuda de reuniões, do apadrinhamento, do serviço e da convivência com outras pessoas em recuperação. Não existe fórmula mágica: são adictos ajudando outros adictos, aprendendo juntos uma nova forma de viver. <Link href="/programa" className="text-cma-teal font-medium hover:underline">Conheça o programa de Doze Passos.</Link></p>
                    },
                    {
                        question: "O que esperar ao chegar?",
                        answer: <p>Se você acha que tem um problema com o crystal, saiba que chegou ao lugar certo. No CMA sempre haverá um espaço reservado para você, seja sua primeira reunião ou a centésima. Aqui ninguém precisa enfrentar a recuperação sozinho. Você será acolhido, encontrará apoio e terá a chance de começar um novo caminho. Continue voltando — funciona!</p>
                    },
                    {
                        question: "Preciso pagar para participar?",
                        answer: <p>Não. Não há taxas ou mensalidades para ser membro do CMA. Somos autossustentáveis por meio de nossas próprias contribuições voluntárias, seguindo a nossa Sétima Tradição. <a href="#doar" className="text-cma-teal font-medium hover:underline">Saiba mais sobre a Sétima Tradição.</a></p>
                    }
                ]}
            />

            <ContentSection
                tag="História"
                title="A origem do CMA"
                bg="dim"
                reverse
                content={
                    <>
                        <p>Em 16 de setembro de 1994, o Crystal Meth Anonymous (CMA) realizou sua primeira reunião no West Hollywood Alcohol and Drug Center, na Califórnia, EUA. Um membro em recuperação, com 16 anos de sobriedade no AA, percebeu a necessidade de criar um espaço específico para adictos em metanfetamina. Nessa noite, 13 pessoas participaram do encontro, que deu início a uma irmandade que hoje está presente em vários países. O primeiro grupo recebeu o nome de &quot;The Home Group&quot; e continua ativo até hoje.</p>
                        <p>Em março de 2023, Valério S. e Roberto F. começaram a organizar a abertura do primeiro grupo do CMA no Brasil. Com a colaboração de Bryan P., responsável pela tradução da literatura, a primeira reunião online aconteceu em 13 de novembro de 2023, com a presença de Roberto, Valério, Sábio L., Bryan P e Daniel T. Esse pequeno grupo marcou oficialmente o início do CMA em língua portuguesa, dando origem a uma irmandade que continua a crescer a cada dia.</p>
                    </>
                }
                image="/historiacma.png"
            />

            <ContentSection
                id="doar"
                tag="A Sétima Tradição"
                title="Doações apenas de membros"
                content={
                    <>
                        <p>No CMA, não há taxas ou mensalidades. Cada pessoa é bem-vinda apenas pelo desejo de parar de usar.</p>
                        <p>Seguimos a Sétima Tradição, que nos lembra de sermos autossustentáveis por meio de nossas próprias contribuições voluntárias. As despesas com nossas reuniões, literaturas e serviços são mantidas exclusivamente pelos próprios membros.</p>
                        <p>Essa escolha preserva nossa liberdade e independência, garantindo que o CMA não sofra influências de instituições externas, mantendo sempre o foco no nosso propósito principal: levar a mensagem de recuperação ao adicto que ainda sofre.</p>
                        <p>Para contribuir, por favor vá a uma das nossas reuniões.</p>
                    </>
                }
                image="/card-tradition.png"
            />
        </div>
    );
}
