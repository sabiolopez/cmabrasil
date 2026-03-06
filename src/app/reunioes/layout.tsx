import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Reuniões Online',
    description: 'Veja os horários das reuniões online do CMA Brasil, como participar da sua primeira reunião e as diretrizes de conduta.',
    alternates: { canonical: '/reunioes' },
    openGraph: { url: '/reunioes' },
};

export default function ReunioesLayout({ children }: { children: React.ReactNode }) {
    return children;
}
