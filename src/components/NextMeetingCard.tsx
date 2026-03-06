'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight, Radio, Clock, Video, MapPin, CalendarClock } from 'lucide-react';
import Link from 'next/link';
import { getNextMeeting, NextMeeting } from '@/data/meetings';

function useBrasiliaTime() {
    const [now, setNow] = useState<Date>(new Date());
    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), 30_000);
        return () => clearInterval(id);
    }, []);
    return now;
}

function formatBrasiliaDate(date: Date): string {
    return date.toLocaleDateString('pt-BR', {
        weekday: 'long',
        day: '2-digit',
        month: '2-digit',
        timeZone: 'America/Sao_Paulo',
    });
}

function formatBrasiliaTime(date: Date): string {
    return date.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'America/Sao_Paulo',
    });
}

function Countdown({ minutes }: { minutes: number }) {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return (
        <span className="font-mono text-cma-gold">
            {h > 0 ? `${h}h ` : ''}{m}min
        </span>
    );
}

export const NextMeetingCard: React.FC = () => {
    const now = useBrasiliaTime();
    const [meeting, setMeeting] = useState<NextMeeting | null>(null);

    useEffect(() => {
        setMeeting(getNextMeeting(now));
    }, [now]);

    // Fallback while hydrating
    if (!meeting) {
        return (
            <div>
                <span className="text-xs font-bold uppercase tracking-widest text-cma-gold mb-4 block">
                    Reuniões
                </span>
                <h3 className="text-2xl font-heading font-medium mb-2">Próxima Reunião</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                    Veja nossa agenda de reuniões online e presenciais.
                </p>
                <Link href="/reunioes" className="inline-flex items-center gap-2 text-sm font-medium hover:text-cma-gold transition-colors text-white">
                    Ver agenda <ArrowRight size={14} />
                </Link>
            </div>
        );
    }

    const isLive = meeting.status === 'live';
    const isSoon = meeting.status === 'soon';
    const isOnline = meeting.type === 'online';

    return (
        <div>
            {/* Label + status badge */}
            <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-cma-gold">
                    Próxima Reunião
                </span>
                {isLive && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest bg-red-500/90 text-white px-2 py-0.5 rounded-full animate-pulse">
                        <Radio size={9} />
                        Ao Vivo
                    </span>
                )}
                {isSoon && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest bg-cma-gold/80 text-cma-teal-dark px-2 py-0.5 rounded-full">
                        <Clock size={9} />
                        Em breve
                    </span>
                )}
            </div>

            {/* Meeting name */}
            <h3 className="text-2xl font-heading font-medium mb-1">{meeting.title}</h3>
            <p className="text-white/50 text-xs mb-4 leading-relaxed">{meeting.subtitle}</p>

            {/* Type + datetime */}
            <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-white/70">
                    {isOnline
                        ? <Video size={14} className="text-cma-gold shrink-0" />
                        : <MapPin size={14} className="text-cma-gold shrink-0" />
                    }
                    <span>{isOnline ? 'Online · Zoom' : `Presencial · ${meeting.location ?? 'A confirmar'}`}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/70">
                    <CalendarClock size={14} className="text-cma-gold shrink-0" />
                    <span>
                        {isLive
                            ? <>Agora até <strong className="text-white">{formatBrasiliaTime(meeting.endsAt)}</strong></>
                            : <><strong className="text-white capitalize">{formatBrasiliaDate(meeting.startsAt)}</strong> · {formatBrasiliaTime(meeting.startsAt)}</>
                        }
                    </span>
                </div>
            </div>

            {/* Countdown for "soon" */}
            {isSoon && (
                <p className="text-sm text-white/60 mb-4">
                    Começa em <Countdown minutes={meeting.minutesUntilStart} />
                </p>
            )}

            {/* CTA */}
            {(isLive || isSoon) && isOnline && meeting.zoomLink ? (
                <a
                    href={meeting.zoomLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-cma-gold hover:text-white transition-colors"
                >
                    <Video size={14} />
                    {isLive ? 'Entrar agora' : 'Abrir sala Zoom'} <ArrowRight size={14} />
                </a>
            ) : (
                <Link href="/reunioes" className="inline-flex items-center gap-2 text-sm font-medium hover:text-cma-gold transition-colors text-white">
                    Ver agenda <ArrowRight size={14} />
                </Link>
            )}
        </div>
    );
};
