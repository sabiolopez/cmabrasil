'use client';

import React from 'react';
import { PageHeader } from '@/components/PageHeader';
import { ContentSection } from '@/components/ContentSection';
import { motion } from 'motion/react';

const steps = [
    "Admitimos que éramos impotentes perante a metanfetamina – que nossas vidas tinham se tornado incontroláveis.",
    "Viemos a acreditar que um Poder superior a nós mesmos poderia devolver-nos à sanidade.",
    "Decidimos entregar nossa vontade e nossas vidas aos cuidados de Deus, na forma em que O concebíamos.",
    "Fizemos um minucioso e destemido inventário moral de nós mesmos.",
    "Admitimos perante Deus, perante nós mesmos e perante outro ser humano a natureza exata de nossas falhas.",
    "Prontificamo-nos inteiramente a deixar que Deus removesse todos esses defeitos de caráter.",
    "Humildemente rogamos a Ele que removesse nossas imperfeições.",
    "Fizemos uma relação de todas as pessoas a quem tínhamos prejudicado e dispusemo-nos a reparar os danos a elas causados.",
    "Fizemos reparações diretas a tais pessoas sempre que possível, exceto quando fazê-lo pudesse prejudicá-las ou a outrem.",
    "Continuamos fazendo o inventário pessoal e, quando estávamos errados, admitíamos prontamente.",
    "Procuramos, através da prece e da meditação, melhorar nosso contato consciente com Deus, na forma em que O concebíamos, rogando apenas o conhecimento de Sua vontade para conosco e a força para realizar essa vontade.",
    "Tendo experimentado um despertar espiritual como resultado desses Passos, procuramos levar esta mensagem a outros adictos e praticar estes princípios em todas as nossas atividades."
];

export default function ProgramaPage() {
    return (
        <div className="bg-white">
            <PageHeader
                title="O Programa de 12 Passos"
                tag="Recuperação"
                subtitle="Princípios que muitos de nós praticamos, um dia de cada vez."
                image="/card-steps.png"
            />

            <ContentSection
                tag="Introdução"
                title="Um Caminho para a Liberdade"
                content={
                    <>
                        <p>Os 12 Passos são um conjunto de princípios que muitos de nós usamos como guia. Não são regras obrigatórias — são um caminho que cada pessoa percorre ao seu próprio ritmo, geralmente com a ajuda de um padrinho ou madrinha.</p>
                        <p>Não é preciso acreditar em nada antes de começar. Muitos chegaram sem certezas e foram encontrando o próprio caminho ao longo do processo.</p>
                    </>
                }
                image="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2670&auto=format&fit=crop"
            />

            <section className="py-24 px-6 bg-cma-bg">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="text-cma-teal font-medium tracking-wider uppercase text-sm mb-4 block">A Lista</span>
                        <h2 className="text-4xl font-heading font-medium text-cma-text">Os 12 Passos do CMA</h2>
                    </div>

                    <div className="space-y-6">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-cma-teal/5 flex gap-8 items-start group hover:shadow-md transition-shadow"
                            >
                                <span className="text-4xl font-heading font-bold text-cma-gold/20 group-hover:text-cma-gold/40 transition-colors leading-none">
                                    {(index + 1).toString().padStart(2, '0')}
                                </span>
                                <p className="text-lg text-cma-text/80 leading-relaxed pt-1">
                                    {step}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 p-12 bg-cma-teal-dark rounded-3xl text-center text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-heading font-medium mb-6 italic">&quot;Funciona se você trabalhar os passos.&quot;</h3>
                            <p className="text-white/60 max-w-2xl mx-auto">
                                Muitos de nós fomos incapazes de parar de usar sozinhos. Através do trabalho conjunto destes passos com um padrinho ou madrinha, encontramos uma nova maneira de viver.
                            </p>
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cma-gold/10 rounded-full blur-3xl -mr-32 -mt-32" />
                    </div>
                </div>
            </section>
        </div>
    );
}
