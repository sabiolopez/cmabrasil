import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Acessibilidade',
    description: 'Declaração de acessibilidade do CMA Brasil. Nosso compromisso é tornar a mensagem de recuperação acessível a todas as pessoas.',
    alternates: { canonical: '/acessibilidade' },
    openGraph: { url: '/acessibilidade' },
};

export default function AcessibilidadeLayout({ children }: { children: React.ReactNode }) {
    return children;
}
