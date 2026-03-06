import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Eventos',
    description: 'Confira os próximos eventos e encontros presenciais da irmandade CMA Brasil e apoie nossa Sétima Tradição.',
    alternates: { canonical: '/eventos' },
    openGraph: { url: '/eventos' },
};

export default function EventosLayout({ children }: { children: React.ReactNode }) {
    return children;
}
