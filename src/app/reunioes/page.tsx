'use client';

import React from 'react';
import { MeetingsHero } from '@/components/MeetingsHero';
import { MeetingInfoSection } from '@/components/MeetingInfoSection';
import { ScheduleSection } from '@/components/ScheduleSection';
import { GuidelinesSection } from '@/components/GuidelinesSection';

export default function ReunioesPage() {
    return (
        <div className="bg-white">
            <MeetingsHero />
            <ScheduleSection />
            <MeetingInfoSection />
            <GuidelinesSection />

            <section className="py-24 px-6 bg-cma-bg">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-heading font-medium text-cma-text mb-6">Ainda tem dúvidas?</h2>
                    <p className="text-cma-text/60 mb-10 leading-relaxed max-w-2xl mx-auto">
                        Se você está nervoso sobre sua primeira reunião, saiba que todos nós já estivemos no seu lugar. Você não precisa falar nada, pode apenas ouvir e ver se o que dizemos faz sentido para você.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a href="/contato" className="px-8 py-3 bg-white border border-cma-teal/10 text-cma-teal rounded-full hover:bg-cma-teal hover:text-white transition-all font-medium">
                            Falar com alguém
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
