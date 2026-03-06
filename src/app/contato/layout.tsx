import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Fale Conosco',
    description: 'Entre em contato com o CMA Brasil. Estamos aqui para ouvir e apoiar quem busca ajuda ou informações sobre o programa.',
    alternates: { canonical: '/contato' },
    openGraph: { url: '/contato' },
};

export default function ContatoLayout({ children }: { children: React.ReactNode }) {
    return children;
}
