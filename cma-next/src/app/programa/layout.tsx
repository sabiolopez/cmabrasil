import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Programa 12 Passos',
    description: 'Conheça os 12 Passos do CMA — um plano de ação espiritual e prático para a recuperação da dependência de metanfetamina.',
    alternates: { canonical: '/programa' },
    openGraph: { url: '/programa' },
};

export default function ProgramaLayout({ children }: { children: React.ReactNode }) {
    return children;
}
