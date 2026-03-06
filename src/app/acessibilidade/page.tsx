'use client';

import React from 'react';
import { PageHeader } from '@/components/PageHeader';
import { ContentSection } from '@/components/ContentSection';
import { CheckCircle2, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function AcessibilidadePage() {
    const adjustments = [
        "Estrutura clara de títulos (H1, H2, etc.) para navegação por leitores de tela.",
        "Contraste adequado entre cores de texto e fundo seguindo os padrões WCAG.",
        "Navegação completa via teclado para usuários que não utilizam mouse.",
        "Textos alternativos em imagens para descrição de conteúdo visual.",
        "Foco visual bem definido para indicar a localização da navegação no teclado."
    ];

    return (
        <div className="bg-white">
            <PageHeader
                title="Acessibilidade"
                tag="Inclusão"
                subtitle="Nosso compromisso é tornar a mensagem de recuperação acessível a todas as pessoas."
                image="/hero-homepage.png"
            />

            <ContentSection
                tag="Conceito"
                title="O que é acessibilidade digital?"
                content={
                    <div className="space-y-6">
                        <p>Acessibilidade web significa que sites, ferramentas e tecnologias são projetados e desenvolvidos de forma que pessoas com deficiência possam usá-los.</p>
                        <div className="p-8 bg-cma-bg rounded-2xl border-l-4 border-cma-teal">
                            <p className="font-serif italic text-cma-text/80 mb-4">&quot;Web accessibility means that websites, tools, and technologies are designed and developed so that people with disabilities can use them.&quot;</p>
                            <p className="text-sm text-cma-text/50">— W3C Web Accessibility Initiative</p>
                        </div>
                        <p>Mais especificamente, a acessibilidade digital permite que usuários possam perceber, compreender, navegar e interagir com a web, contribuindo para sua autonomia.</p>
                    </div>
                }
                image="https://images.unsplash.com/photo-1581291417084-36798030997e?q=80&w=2670&auto=format&fit=crop"
            />

            <section className="py-24 px-6 bg-cma-teal-dark text-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-heading font-medium mb-12 text-center text-white">Ajustes realizados neste site</h2>
                    <div className="grid gap-4">
                        {adjustments.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex gap-4 items-center p-6 bg-white/5 rounded-xl border border-white/10"
                            >
                                <CheckCircle2 className="text-cma-gold shrink-0" size={24} />
                                <span className="text-lg text-white/80">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <ContentSection
                tag="Conformidade"
                title="Declaração de Conformidade Parcial"
                bg="dim"
                reverse
                content={
                    <>
                        <p>O CMA Brasil trabalha continuamente para manter a acessibilidade deste site. No entanto, o conteúdo de terceiros (como mapas ou ferramentas de terceiros incorporadas) pode não ter o mesmo nível de acessibilidade que o conteúdo criado por nossa equipe.</p>
                        <p>A dependência de tecnologias assistivas e de fornecedores de navegadores é fundamental para a conformidade total.</p>
                    </>
                }
                image="https://images.unsplash.com/photo-1551288049-bbbda5366392?q=80&w=2670&auto=format&fit=crop"
            />

            <section className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="w-16 h-16 bg-cma-bg rounded-full flex items-center justify-center text-cma-teal mx-auto mb-8">
                        <Mail size={32} />
                    </div>
                    <h2 className="text-3xl font-heading font-medium text-cma-text mb-6">Solicitações e Sugestões</h2>
                    <p className="text-cma-text/60 mb-10 leading-relaxed max-w-2xl mx-auto text-lg">
                        Se você encontrar barreiras de acessibilidade neste site ou tiver sugestões de melhoria, entre em contato através do e-mail:
                    </p>
                    <a href="mailto:acessibilidade@cmabrasil.org" className="text-2xl font-heading text-cma-teal font-medium hover:text-cma-gold transition-colors">
                        acessibilidade@cmabrasil.org
                    </a>

                    <div className="mt-20 pt-16 border-t border-cma-bg text-cma-text/40 text-sm">
                        <p>O CMA Brasil não possui sede física. Todo o suporte técnico e institucional é realizado de forma virtual e colaborativa.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
