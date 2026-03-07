'use client';

import React from 'react';
import { PageHeader } from '@/components/PageHeader';
import { ShieldAlert, Heart, Activity } from 'lucide-react';
import { motion } from 'motion/react';

export default function FamiliaresPage() {
    const emergencies = [
        { number: '190', label: 'Polícia Militar', detail: 'Segurança e risco imediato' },
        { number: '192', label: 'SAMU', detail: 'Emergência médica' },
        { number: '193', label: 'Corpo de Bombeiros', detail: 'Resgate e acidentes' },
        { number: '188', label: 'CVV', detail: 'Apoio emocional e prevenção do suicídio' },
    ];

    return (
        <div className="bg-white">
            <PageHeader
                title="Para familiares e amigos"
                tag="Para Quem Ama"
                subtitle="Quando a dependência de metanfetamina afeta alguém próximo."
                image="/card-family.png"
            />

            <section className="py-24 px-6 bg-cma-bg text-cma-text">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-heading font-medium mb-8 leading-tight">
                            Informações para pais e familiares
                        </h2>
                        <div className="text-lg leading-relaxed font-light space-y-6 text-cma-text/70">
                            <p className="text-xl font-medium text-cma-teal">Quando a dependência de metanfetamina afeta alguém próximo.</p>
                            <p>Conviver com a dependência de metanfetamina de um filho ou familiar levanta dúvidas, medo e a necessidade de entender quais caminhos de apoio existem. Esta página reúne informações e referências para ajudar pais e familiares a buscar orientação e apoio no Brasil. O CMA é uma irmandade voltada a pessoas com dependência de metanfetamina e, embora não ofereça aconselhamento ou tratamento, pode indicar onde procurar ajuda.</p>

                            <div className="pt-8 mt-8">
                                <span className="font-medium tracking-wider uppercase text-sm mb-4 block text-cma-teal">Apoio Emocional</span>
                                <h3 className="text-2xl font-heading font-medium mb-4 text-cma-text">Apoio emocional e orientação para familiares</h3>
                                <p>Alguns grupos são voltados especificamente a pais, familiares e amigos de pessoas com dependência química. Esses espaços oferecem apoio entre pares e troca de experiências com pessoas que vivenciam situações semelhantes.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="space-y-6 lg:mt-6">
                            <div className="p-8 bg-white rounded-2xl border border-cma-teal/10 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="font-heading font-medium text-2xl text-cma-teal mb-2">Nar-Anon</h3>
                                <a href="http://www.naranon.org.br" target="_blank" rel="noopener noreferrer" className="text-cma-gold hover:text-cma-gold-dark font-medium transition-colors mb-4 inline-block">www.naranon.org.br</a>
                                <p className="text-cma-text/70 leading-relaxed font-light">Grupos de apoio para familiares e amigos de pessoas com dependência química. Baseado na partilha de experiências entre pares, com foco no cuidado do familiar e na compreensão da dependência.</p>
                            </div>
                            <div className="p-8 bg-white rounded-2xl border border-cma-teal/10 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="font-heading font-medium text-2xl text-cma-teal mb-2">Amor exigente</h3>
                                <a href="https://amorexigente.org" target="_blank" rel="noopener noreferrer" className="text-cma-gold hover:text-cma-gold-dark font-medium transition-colors mb-4 inline-block">amorexigente.org</a>
                                <p className="text-cma-text/70 leading-relaxed font-light mb-3">Programa de orientação e apoio a familiares de pessoas com dependência química.</p>
                                <p className="text-cma-text/70 leading-relaxed font-light">Trabalha informação, responsabilidade e estabelecimento de limites por meio de encontros e atividades educativas.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 px-6 bg-cma-teal-dark text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="p-8 md:p-12 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10">
                            <div className="flex items-center gap-4 mb-8">
                                <ShieldAlert className="text-cma-gold w-10 h-10" />
                                <h2 className="text-3xl font-heading font-medium">Situações de risco imediato ou crise</h2>
                            </div>
                            <p className="text-white/70 mb-8 leading-relaxed">Em situações de risco imediato, é importante buscar ajuda de emergência. Esses serviços são os mais indicados para lidar com crises agudas e situações que colocam pessoas em perigo.</p>

                            <div className="grid grid-cols-2 gap-4">
                                {emergencies.map((contact, idx) => (
                                    <div key={idx} className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                                        <span className="text-3xl font-heading font-bold text-cma-gold block mb-1">{contact.number}</span>
                                        <span className="text-sm font-medium block text-white/90">{contact.label}</span>
                                        <span className="text-xs text-white/40">{contact.detail}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="space-y-6 text-lg text-white/70 leading-relaxed font-light">
                            <h2 className="text-3xl font-heading font-medium text-white mb-6">Atendimento em saúde pública (SUS)</h2>
                            <p>No Brasil, o Sistema Único de Saúde oferece serviços de atenção em saúde mental e uso de álcool e outras drogas. Esses serviços podem orientar tanto a pessoa em uso quanto seus familiares, de acordo com a disponibilidade local.</p>

                            <ul className="list-disc pl-5 mt-4 space-y-2">
                                <li><strong>CAPS / CAPS AD</strong> — Centros de Atenção Psicossocial</li>
                                <li><strong>UBS / UPA</strong> — Portas de entrada para avaliação e encaminhamento</li>
                            </ul>

                            <div className="pt-6">
                                <p className="mb-4">Acesse a página do Cadastro Nacional de Estabelecimentos de Saúde - CNES para pesquisar pelo CAPS, UBS ou UPA próximo de você.</p>
                                <a href="https://cnes.datasus.gov.br/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cma-gold hover:text-white transition-colors">
                                    <Activity size={18} /> Acessar CNES <Heart size={14} className="opacity-0 group-hover:opacity-100" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 px-6 bg-cma-bg font-light text-center">
                <div className="max-w-3xl mx-auto">
                    <p className="text-cma-text/60 leading-relaxed">Reforçamos que CMA não oferece aconselhamento, atendimento médico ou orientação profissional. As informações acima têm caráter informativo e visam indicar caminhos externos de apoio.</p>
                </div>
            </section>
        </div>
    );
}
