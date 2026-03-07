import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'O que é o CMA?',
    description: 'Conheça o Crystal Meth Anonymous: quem somos, como funciona a irmandade, nossa história e como participar da recuperação.',
    alternates: { canonical: '/cma' },
    openGraph: { url: '/cma' },
};

export default function CMALayout({ children }: { children: React.ReactNode }) {
    return children;
}
