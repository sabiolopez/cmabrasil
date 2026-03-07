'use client';

import React from 'react';
import { PageHeader } from '@/components/PageHeader';
import { MapPin, Calendar, ArrowRight, ShoppingBag, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';

const products = [
    {
        slug: 'camiseta-amor-liberdade-cinza',
        name: 'Camiseta Amor e Liberdade',
        price: 'R$ 50,00',
        color: 'Cinza',
        image: '/tradicao/Camiseta_amoreliberdade2025.avif'
    },
    {
        slug: 'caneca-amor-liberdade',
        name: 'Caneca Amor & Liberdade',
        price: 'Esgotado',
        color: 'Cerâmica',
        image: '/tradicao/caneca_amoreliberdade2025.avif',
        soldOut: true
    },
    {
        slug: 'camiseta-domingo-parque-branco',
        name: 'Camiseta Domingo no Parque',
        price: 'R$ 50,00',
        color: 'Branco',
        image: '/tradicao/Camiseta_amoreliberdade2025.avif'
    }
];

export default function EventosPage() {
    return (
        <div className="bg-white">
            <PageHeader
                title="Eventos"
                tag="Nossa Comunidade"
                subtitle="Confraternizações e encontros presenciais da nossa irmandade."
                image="/card-events.png"
            />

            <section className="py-24 px-6 bg-cma-bg">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-cma-teal font-medium tracking-wider uppercase text-sm mb-4 block">Agenda</span>
                        <h2 className="text-4xl font-heading font-medium text-cma-text">Próximos Encontros</h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl shadow-black/5 border border-cma-teal/5 flex flex-col md:flex-row"
                    >
                        <div className="md:w-1/3 bg-cma-teal p-12 text-white flex flex-col justify-center items-center text-center">
                            <span className="text-6xl font-heading font-bold mb-2">01</span>
                            <span className="text-2xl uppercase tracking-widest font-light">Março</span>
                        </div>
                        <div className="flex-grow p-12">
                            <div className="flex items-center gap-2 text-cma-gold font-medium mb-4">
                                <Calendar size={18} />
                                <span>Domingo, 10:30 — 11:30</span>
                            </div>
                            <h3 className="text-3xl font-heading font-medium text-cma-text mb-6">Encontro no Ibirapuera</h3>
                            <div className="flex items-start gap-3 text-cma-text/60 mb-8">
                                <MapPin size={20} className="shrink-0 mt-1" />
                                <p className="text-lg">Portão 3 do Parque Ibirapuera, São Paulo - SP</p>
                            </div>
                            <a
                                href="https://maps.app.goo.gl/3j2zN5R5h9D2"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-cma-bg text-cma-teal rounded-full hover:bg-cma-teal hover:text-white transition-all font-medium"
                            >
                                Ver no Google Maps <ArrowRight size={16} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Sétima Tradição */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* Banner introdutório */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 bg-cma-teal/5 border border-cma-teal/10 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row gap-8 items-start"
                    >
                        <div className="shrink-0 w-14 h-14 rounded-2xl bg-cma-teal/10 flex items-center justify-center text-cma-teal">
                            <Heart size={28} />
                        </div>
                        <div>
                            <span className="text-cma-gold font-medium tracking-wider uppercase text-xs mb-3 block">Sétima Tradição</span>
                            <h2 className="text-3xl md:text-4xl font-heading font-medium text-cma-text mb-4">
                                Lembranças de Eventos — exclusivo para membros
                            </h2>
                            <p className="text-base md:text-lg text-cma-text/60 leading-relaxed font-light mb-4">
                                Você é membro do CMA e gostaria de guardar uma lembrança dos nossos eventos? Estas peças são para você. São itens que sobraram de eventos anteriores e, ao adquiri-los, você contribui diretamente com a nossa Sétima Tradição — ajudando a manter a irmandade autossuficiente.
                            </p>
                            <p className="text-sm text-cma-text/40 font-light italic border-t border-cma-teal/10 pt-4">
                                <strong className="not-italic font-semibold text-cma-text/60">Importante:</strong> Este espaço não é um e-commerce. Não há carrinho de compras nem processo de checkout. Veja os itens disponíveis, clique no que lhe interessar e envie uma mensagem — nossa equipe entrará em contato para verificar o estoque, combinar a forma de pagamento e o envio. Simples assim. 🙂
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {products.map((product, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group"
                            >
                                <Link href={`/loja/${product.slug}`}>
                                    <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 bg-cma-bg">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            width={500}
                                            height={625}
                                            className={`w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ${product.soldOut ? 'opacity-40' : ''}`}
                                        />
                                        {product.soldOut && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="px-6 py-2 bg-black/60 backdrop-blur-md text-white rounded-full text-sm font-bold uppercase tracking-widest">Esgotado</span>
                                            </div>
                                        )}
                                        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-cma-teal shadow-xl">
                                                <ArrowRight size={24} />
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-heading font-medium text-cma-text group-hover:text-cma-gold transition-colors">{product.name}</h3>
                                    <div className="flex justify-between items-center mt-2">
                                        <span className="text-sm text-cma-text/40">{product.color}</span>
                                        <span className="font-bold text-cma-teal">{product.price}</span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
