import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Sétima Tradição',
    description: 'Lembranças e itens exclusivos do CMA Brasil para membros da irmandade.',
    alternates: { canonical: '/loja' },
    openGraph: { url: '/loja' },
};

const products = [
    {
        slug: 'camiseta-amor-liberdade-cinza',
        name: 'Camiseta Amor e Liberdade',
        price: 'R$ 50,00',
        image: '/tradicao/Camiseta_amoreliberdade2025.avif',
        soldOut: false,
    },
    {
        slug: 'caneca-amor-liberdade',
        name: 'Caneca Amor & Liberdade',
        price: 'Esgotado',
        image: '/tradicao/caneca_amoreliberdade2025.avif',
        soldOut: true,
    },
    {
        slug: 'camiseta-domingo-parque-branco',
        name: 'Camiseta Domingo no Parque',
        price: 'R$ 50,00',
        image: '/tradicao/Camiseta_amoreliberdade2025.avif',
        soldOut: false,
    },
];

export default function LojaPage() {
    return (
        <div className="bg-cma-bg min-h-screen pt-32 pb-24 px-6">
            <div className="max-w-5xl mx-auto">
                <span className="text-cma-teal font-medium tracking-wider uppercase text-xs underline decoration-cma-gold decoration-2 underline-offset-4 mb-4 block">
                    Sétima Tradição
                </span>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-cma-text tracking-tight mb-4">
                    Lembranças da Irmandade
                </h1>
                <p className="text-cma-text/60 text-lg max-w-xl mb-16 leading-relaxed">
                    Itens exclusivos para membros do CMA Brasil — sobras de eventos da nossa irmandade.
                    Não é uma loja. É um jeito de levar um pedaço da recuperação com você.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <Link
                            key={product.slug}
                            href={`/loja/${product.slug}`}
                            className={`group rounded-2xl overflow-hidden border border-cma-teal/10 bg-white shadow-sm hover:shadow-lg transition-all duration-300 ${product.soldOut ? 'opacity-60' : ''}`}
                        >
                            <div className="relative aspect-square bg-cma-bg overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className={`object-cover transition-transform duration-500 group-hover:scale-105 ${product.soldOut ? 'grayscale' : ''}`}
                                />
                                {product.soldOut && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="px-4 py-1.5 bg-black/60 backdrop-blur-md text-white rounded-full text-xs font-bold uppercase tracking-widest">
                                            Esgotado
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div className="p-5 flex items-center justify-between">
                                <div>
                                    <p className="font-heading font-medium text-cma-text text-sm leading-tight">{product.name}</p>
                                    <p className={`text-sm mt-1 font-semibold ${product.soldOut ? 'text-cma-text/30 line-through' : 'text-cma-teal'}`}>
                                        {product.price}
                                    </p>
                                </div>
                                {!product.soldOut && (
                                    <ArrowRight size={18} className="text-cma-teal/50 group-hover:text-cma-teal group-hover:translate-x-1 transition-all" />
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
