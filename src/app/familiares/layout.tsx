import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Para Familiares',
    description: 'Recursos e informações para familiares e amigos de dependentes de metanfetamina. Você não está sozinho.',
    alternates: { canonical: '/familiares' },
    openGraph: { url: '/familiares' },
};

export default function FamiliaresLayout({ children }: { children: React.ReactNode }) {
    return children;
}
