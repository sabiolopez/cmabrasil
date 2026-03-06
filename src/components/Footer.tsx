'use client';

import React from 'react';
import { MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-cma-teal-dark text-white pt-24 pb-12 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 md:col-span-1">
                    <Link href="/" className="inline-block mb-6 hover:opacity-80 transition-opacity">
                        <Image src="/logo-cma.svg" alt="CMA Brasil" width={64} height={64} className="w-16 h-16" />
                    </Link>
                    <p className="text-white/50 text-sm leading-relaxed">
                        Crystal Meth Anonymous Brasil.<br />
                        Recuperação, Unidade e Serviço.
                    </p>
                </div>

                <div>
                    <h4 className="font-heading font-medium text-lg mb-6 text-white">Explorar</h4>
                    <ul className="space-y-3 text-sm text-white/60">
                        <li><Link href="/cma" className="hover:text-cma-gold transition-colors">Sobre o CMA</Link></li>
                        <li><Link href="/programa" className="hover:text-cma-gold transition-colors">Os 12 Passos</Link></li>
                        <li><Link href="/reunioes" className="hover:text-cma-gold transition-colors">Reuniões Online</Link></li>
                        <li><Link href="/literaturas" className="hover:text-cma-gold transition-colors">Literatura</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-heading font-medium text-lg mb-6 text-white">Apoio</h4>
                    <ul className="space-y-3 text-sm text-white/60">
                        <li><Link href="/familiares" className="hover:text-cma-gold transition-colors">Para Familiares e Amigos</Link></li>
                        <li><Link href="/contato" className="hover:text-cma-gold transition-colors">Fale Conosco</Link></li>
                        <li><Link href="/eventos" className="hover:text-cma-gold transition-colors">Eventos e Encontros</Link></li>
                        <li><Link href="/cma#doar" className="hover:text-cma-gold transition-colors">Doação de Membros</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-heading font-medium text-lg mb-6 text-white">Contato</h4>
                    <ul className="space-y-4 text-sm text-white/60">
                        <li className="flex items-start gap-2">
                            <MapPin size={14} className="mt-0.5 shrink-0" />
                            <span>Reunião Presencial<br />Sábados 18:00<br />R. Araquã, 25 – Bela Vista<br />São Paulo – SP, 01306-020</span>
                        </li>
                        <li>
                            <Link href="/contato" className="hover:text-cma-gold transition-colors">Fale Conosco →</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 uppercase tracking-wider">
                <p>&copy; 2026 CMA Brasil. Todos os direitos reservados.</p>
                <Link href="/acessibilidade" className="hover:text-white transition-colors">Acessibilidade</Link>
            </div>
        </footer>
    );
};
