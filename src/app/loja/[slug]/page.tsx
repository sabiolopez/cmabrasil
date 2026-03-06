'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { ArrowLeft, Info, Truck, Send, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';
import Image from 'next/image';

interface Product {
    name: string;
    price: string;
    color: string;
    description: string;
    details: string;
    image: string;
    soldOut?: boolean;
}

const productsData: Record<string, Product> = {
    'camiseta-amor-liberdade-cinza': {
        name: 'Camiseta Amor e Liberdade',
        price: 'R$ 50,00',
        color: 'Cinza',
        description: 'Camiseta comemorativa em malha de alta qualidade, cor cinza mescla com estampa exclusiva "Amor e Liberdade".',
        details: 'Algodão 100% sustentável. Estampa em silk-screen durável.',
        image: '/tradicao/Camiseta_amoreliberdade2025.avif'
    },
    'caneca-amor-liberdade': {
        name: 'Caneca Amor & Liberdade',
        price: 'Esgotado',
        color: 'Cerâmica',
        description: 'Caneca de cerâmica resistente, ideal para café ou chá. Estampa clássica da nossa irmandade.',
        details: 'Capacidade 325ml. Pode ir ao micro-ondas e lava-louças.',
        image: '/tradicao/caneca_amoreliberdade2025.avif',
        soldOut: true
    },
    'camiseta-domingo-parque-branco': {
        name: 'Camiseta Domingo no Parque',
        price: 'R$ 50,00',
        color: 'Branco',
        description: 'Edição especial lembrança do primeiro encontro presencial no Parque Ibirapuera.',
        details: 'Modelagem unissex, cor branca, tecido leve e respirável.',
        image: '/tradicao/Camiseta_amoreliberdade2025.avif'
    }
};

export default function ProdutoDetalhePage() {
    const { slug } = useParams();
    const product = productsData[slug as string];

    const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });
    const [sent, setSent] = useState(false);

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        // Aqui futuramente pode-se integrar com um serviço de e-mail ou API
        setSent(true);
    }

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-cma-bg">
                <div className="text-center">
                    <h1 className="text-2xl font-heading mb-4">Produto não encontrado</h1>
                    <Link href="/eventos" className="text-cma-teal hover:underline flex items-center gap-2">
                        <ArrowLeft size={18} /> Voltar para Eventos
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen pb-24">
            <div className="pt-32 px-6 max-w-7xl mx-auto">
                <Link href="/eventos" className="inline-flex items-center gap-2 text-cma-text/60 hover:text-cma-teal transition-colors mb-12 group">
                    <div className="w-8 h-8 rounded-full border border-cma-teal/10 flex items-center justify-center group-hover:border-cma-teal transition-colors">
                        <ArrowLeft size={16} />
                    </div>
                    Voltar para Eventos
                </Link>

                <div className="grid lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative aspect-square rounded-3xl overflow-hidden bg-cma-bg border border-cma-teal/5 shadow-2xl shadow-black/5"
                    >
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={1000}
                            height={1000}
                            className={`w-full h-full object-cover ${product.soldOut ? 'opacity-40 grayscale' : ''}`}
                        />
                        {product.soldOut && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="px-6 py-2 bg-black/60 backdrop-blur-md text-white rounded-full text-sm font-bold uppercase tracking-widest">Esgotado</span>
                            </div>
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col justify-start"
                    >
                        <span className="text-cma-teal font-medium tracking-wider uppercase text-xs mb-4 block underline decoration-cma-gold decoration-2 underline-offset-4">Sétima Tradição · Exclusivo para Membros</span>
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-cma-text mb-4 tracking-tight leading-tight">
                            {product.name}
                        </h1>
                        <div className="flex items-center gap-4 mb-6">
                            <span className={`text-3xl font-bold ${product.soldOut ? 'text-cma-text/30 line-through' : 'text-cma-teal'}`}>{product.price}</span>
                            {product.soldOut && <span className="px-3 py-1 bg-black/10 text-black/40 rounded-full text-xs font-bold uppercase">Esgotado</span>}
                        </div>

                        <p className="text-lg text-cma-text/60 leading-relaxed mb-8">
                            {product.description}
                        </p>

                        <div className="space-y-4 mb-10">
                            <div className="flex gap-4 p-4 bg-cma-bg rounded-xl">
                                <Info className="text-cma-teal shrink-0" size={20} />
                                <div>
                                    <h4 className="font-heading font-medium text-sm text-cma-text">Detalhes</h4>
                                    <p className="text-sm text-cma-text/50">{product.details}</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 bg-cma-bg rounded-xl">
                                <Truck className="text-cma-teal shrink-0" size={20} />
                                <div>
                                    <h4 className="font-heading font-medium text-sm text-cma-text">Como funciona?</h4>
                                    <p className="text-sm text-cma-text/50">
                                        Envie sua mensagem de interesse. Nossa equipe verificará o estoque disponível e entrará em contato para combinar forma de pagamento e envio.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Formulário de interesse */}
                        {!product.soldOut ? (
                            sent ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-cma-teal/5 border border-cma-teal/15 rounded-2xl p-8 text-center"
                                >
                                    <CheckCircle className="mx-auto text-cma-teal mb-4" size={40} />
                                    <h3 className="text-xl font-heading font-medium text-cma-text mb-2">Mensagem enviada!</h3>
                                    <p className="text-sm text-cma-text/50">
                                        Obrigado pelo seu interesse. Entraremos em contato em breve para confirmar a disponibilidade e combinar os detalhes.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <h3 className="text-lg font-heading font-medium text-cma-text mb-2">Tenho interesse nessa peça</h3>
                                    <p className="text-xs text-cma-text/40 mb-4 font-light">
                                        Preencha os campos abaixo e entraremos em contato para verificar o estoque e combinar os detalhes. Não é necessário realizar nenhum pagamento agora.
                                    </p>
                                    <div>
                                        <label htmlFor="nome" className="block text-sm font-medium text-cma-text/60 mb-1">Seu nome</label>
                                        <input
                                            id="nome"
                                            name="nome"
                                            type="text"
                                            required
                                            value={form.nome}
                                            onChange={handleChange}
                                            placeholder="Como prefere ser chamado(a)?"
                                            className="w-full px-4 py-3 rounded-xl border border-cma-teal/15 bg-cma-bg text-cma-text placeholder:text-cma-text/30 focus:outline-none focus:ring-2 focus:ring-cma-teal/30 transition text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-cma-text/60 mb-1">E-mail para retorno</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="seu@email.com"
                                            className="w-full px-4 py-3 rounded-xl border border-cma-teal/15 bg-cma-bg text-cma-text placeholder:text-cma-text/30 focus:outline-none focus:ring-2 focus:ring-cma-teal/30 transition text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="mensagem" className="block text-sm font-medium text-cma-text/60 mb-1">Mensagem <span className="text-cma-text/30 font-light">(opcional)</span></label>
                                        <textarea
                                            id="mensagem"
                                            name="mensagem"
                                            rows={3}
                                            value={form.mensagem}
                                            onChange={handleChange}
                                            placeholder={`Tenho interesse na peça "${product.name}". Podem verificar a disponibilidade?`}
                                            className="w-full px-4 py-3 rounded-xl border border-cma-teal/15 bg-cma-bg text-cma-text placeholder:text-cma-text/30 focus:outline-none focus:ring-2 focus:ring-cma-teal/30 transition text-sm resize-none"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-4 bg-cma-teal text-white rounded-2xl font-semibold hover:bg-cma-teal/90 transition-all shadow-lg shadow-cma-teal/20 flex items-center justify-center gap-3"
                                    >
                                        <Send size={18} />
                                        Enviar mensagem de interesse
                                    </button>
                                    <p className="text-center text-xs text-cma-text/30">
                                        Nenhuma cobrança é realizada aqui. O contato é manual e confidencial.
                                    </p>
                                </form>
                            )
                        ) : (
                            <div className="p-6 rounded-2xl bg-cma-bg border border-cma-teal/10 text-center">
                                <p className="text-cma-text/50 text-sm">Esta peça não está mais disponível no momento.</p>
                                <Link href="/eventos" className="mt-4 inline-flex items-center gap-2 text-cma-teal text-sm hover:underline">
                                    <ArrowLeft size={16} /> Ver outras lembranças
                                </Link>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
