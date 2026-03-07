import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Literaturas',
    description: 'Textos fundamentais do CMA — Os Doze Passos, As Doze Tradições, e outros materiais que guiam a recuperação.',
    alternates: { canonical: '/literaturas' },
    openGraph: { url: '/literaturas' },
};

export default function LiteraturasLayout({ children }: { children: React.ReactNode }) {
    return children;
}
