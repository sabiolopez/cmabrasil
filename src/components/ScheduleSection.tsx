'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Video, MapPin, ArrowRight, X, Clock, ChevronRight } from 'lucide-react';
import { scheduleData, MeetingEntry, MeetingType } from '@/data/meetings';

type Filter = 'all' | MeetingType;

const FILTER_LABELS: Record<Filter, string> = {
    all: 'Todas',
    online: 'Online',
    presencial: 'Presencial',
};

const DAYS_PT: Record<number, { short: string; long: string }> = {
    0: { short: 'Dom', long: 'Domingo' },
    1: { short: 'Seg', long: 'Segunda' },
    2: { short: 'Ter', long: 'Terça' },
    3: { short: 'Qua', long: 'Quarta' },
    4: { short: 'Qui', long: 'Quinta' },
    5: { short: 'Sex', long: 'Sexta' },
    6: { short: 'Sáb', long: 'Sábado' },
};

const DAY_ORDER = [0, 1, 2, 3, 4, 5, 6];

/** Retorna o dia da semana atual no fuso de Brasília (UTC-3). */
function getBrasiliaDoW(): number {
    const now = new Date();
    const brDate = new Date(now.getTime() - 3 * 60 * 60_000);
    return brDate.getUTCDay();
}

/** Retorna o dow inicial: hoje (Brasília) se tiver reunião, senão o próximo dia com reunião no schedule. */
function resolveInitialDay(byDay: { dow: number; meetings: MeetingEntry[] }[]): number {
    const today = getBrasiliaDoW();
    // Procura a partir de hoje, dando volta nos 7 dias
    for (let offset = 0; offset < 7; offset++) {
        const target = (today + offset) % 7;
        const found = byDay.find((d) => d.dow === target && d.meetings.length > 0);
        if (found) return found.dow;
    }
    return byDay.find((d) => d.meetings.length > 0)?.dow ?? 0;
}

// ─── Shared detail panel ──────────────────────────────────────────────────────
function DetailPanel({
    selected,
    onClose,
}: {
    selected: MeetingEntry;
    onClose: () => void;
}) {
    const isOnline = selected.type === 'online';
    const mapsUrl = selected.address
        ? `https://maps.google.com/?q=${encodeURIComponent(selected.address)}`
        : undefined;

    return (
        <motion.div
            key={`${selected.dayOfWeek}-${selected.startHour}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2 }}
            className="mt-4 bg-white rounded-2xl border border-cma-teal/10 p-5 md:p-8 relative"
        >
            <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-cma-bg hover:bg-cma-teal/10 flex items-center justify-center transition-colors"
                aria-label="Fechar"
            >
                <X size={15} className="text-cma-text/40" />
            </button>

            <div className="grid md:grid-cols-2 gap-5 items-start">
                {/* Left */}
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-bold uppercase tracking-widest text-cma-teal/60">
                            {DAYS_PT[selected.dayOfWeek].long}
                        </span>
                        <span className="h-px flex-1 bg-cma-teal/10" />
                        {isOnline ? (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase bg-cma-teal/5 text-cma-teal px-2 py-0.5 rounded-full">
                                <Video size={10} /> Online
                            </span>
                        ) : (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">
                                <MapPin size={10} /> Presencial
                            </span>
                        )}
                    </div>
                    <h3 className="text-xl font-heading font-medium text-cma-text mb-1">
                        {selected.title}
                    </h3>
                    <p className="text-cma-text/60 text-sm leading-relaxed">
                        {selected.subtitle}
                    </p>
                </div>

                {/* Right */}
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 text-sm text-cma-text/70">
                        <Clock size={14} className="text-cma-teal shrink-0" />
                        <span>{selected.time} · Horário de Brasília</span>
                    </div>
                    {isOnline ? (
                        <div className="flex items-center gap-3 text-sm text-cma-text/70">
                            <Video size={14} className="text-cma-teal shrink-0" />
                            <span>Zoom · Acesso pelo link da reunião</span>
                        </div>
                    ) : (
                        <div className="flex items-start gap-3 text-sm text-cma-text/70">
                            <MapPin size={14} className="text-amber-600 shrink-0 mt-0.5" />
                            <span>{selected.address ?? selected.location}</span>
                        </div>
                    )}
                    <div className="pt-1">
                        {isOnline && selected.zoomLink ? (
                            <a
                                href={selected.zoomLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-cma-teal text-white rounded-full text-sm font-medium hover:bg-cma-teal-dark transition-colors"
                            >
                                <Video size={13} /> Entrar via Zoom <ArrowRight size={12} />
                            </a>
                        ) : mapsUrl ? (
                            <a
                                href={mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-sm font-medium hover:bg-amber-100 transition-colors"
                            >
                                <MapPin size={13} /> Ver no mapa <ArrowRight size={12} />
                            </a>
                        ) : null}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

// ─── Meeting chip (shared between mobile & desktop) ───────────────────────────
function MeetingChip({
    item,
    isSelected,
    onClick,
    compact = false,
}: {
    item: MeetingEntry;
    isSelected: boolean;
    onClick: () => void;
    compact?: boolean;
}) {
    const isOnline = item.type === 'online';
    return (
        <button
            onClick={onClick}
            className={`w-full text-left rounded-xl border transition-all duration-200 focus:outline-none active:scale-[0.97] transform-gpu relative
                ${compact ? 'px-3 py-2.5' : 'px-3 py-3'}
                ${isSelected
                    ? 'bg-cma-teal border-cma-teal text-white shadow-md'
                    : item.highlight
                        ? 'bg-white border-cma-teal/40 hover:border-cma-teal/60 hover:shadow-sm'
                        : 'bg-white border-cma-teal/10 hover:border-cma-teal/40 hover:shadow-sm'
                }`}
        >
            {/* Chevron affordance indicator */}
            <ChevronRight
                size={14}
                className={`absolute top-2.5 right-2.5 transition-transform duration-200 ${isSelected
                    ? 'rotate-90 text-white/70'
                    : 'text-cma-teal/50'
                    }`}
            />
            <div className="flex items-center gap-1.5 mb-1.5">
                {isOnline
                    ? <Video size={10} className={isSelected ? 'text-cma-gold' : 'text-cma-teal'} />
                    : <MapPin size={10} className={isSelected ? 'text-cma-gold' : 'text-amber-600'} />
                }
                <span className={`text-[10px] font-bold uppercase tracking-wider ${isSelected ? 'text-cma-gold' : isOnline ? 'text-cma-teal' : 'text-amber-600'}`}>
                    {isOnline ? 'Online' : 'Presencial'}
                </span>
            </div>
            <p className={`text-sm font-semibold font-heading leading-tight ${isSelected ? 'text-white' : 'text-cma-text'}`}>
                {item.time.split(' - ')[0]}
            </p>
            {!compact && (
                <p className={`text-[11px] leading-tight mt-1 line-clamp-2 ${isSelected ? 'text-white/70' : 'text-cma-text/50'}`}>
                    {item.title}
                </p>
            )}
        </button>
    );
}

// ─── Mobile view: day-tab selector ───────────────────────────────────────────
function MobileView({
    byDay,
    filter,
    filtered,
}: {
    byDay: { dow: number; meetings: MeetingEntry[] }[];
    filter: Filter;
    filtered: MeetingEntry[];
}) {
    // Default to today (Brasília) or the next day with meetings
    const [activeDay, setActiveDay] = useState<number>(() => resolveInitialDay(byDay));
    const [selected, setSelected] = useState<MeetingEntry | null>(null);
    const [hasInteracted, setHasInteracted] = useState(false);

    // Reset when filter changes — mantém preferência pelo dia real
    React.useEffect(() => {
        setActiveDay(resolveInitialDay(byDay));
        setSelected(null);
    }, [filter, byDay]); // eslint-disable-line react-hooks/exhaustive-deps

    const dayMeetings = useMemo(
        () => filtered.filter((m) => m.dayOfWeek === activeDay),
        [filtered, activeDay]
    );

    const handleChip = (m: MeetingEntry) => {
        setHasInteracted(true);
        setSelected((prev) =>
            prev?.startHour === m.startHour && prev?.dayOfWeek === m.dayOfWeek ? null : m
        );
    };

    return (
        <div>
            {/* 7-day pill row */}
            <div className="grid grid-cols-7 gap-1 mb-6">
                {byDay.map(({ dow, meetings }) => {
                    const isActive = dow === activeDay;
                    const hasMeeting = meetings.length > 0;
                    return (
                        <button
                            key={dow}
                            onClick={() => { setActiveDay(dow); setSelected(null); }}
                            className={`flex flex-col items-center py-2.5 px-1 rounded-xl text-center transition-all duration-200 focus:outline-none
                                ${isActive
                                    ? 'bg-cma-teal text-white'
                                    : hasMeeting
                                        ? 'bg-white border border-cma-teal/15 text-cma-text hover:border-cma-teal/40'
                                        : 'bg-white border border-dashed border-cma-teal/10 text-cma-text/25'
                                }`}
                        >
                            <span className="text-[11px] font-bold uppercase tracking-wide leading-none">
                                {DAYS_PT[dow].short}
                            </span>
                            {hasMeeting && (
                                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${isActive ? 'bg-cma-gold' : 'bg-cma-teal/40'}`} />
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Day label */}
            <p className="text-xs font-bold uppercase tracking-widest text-cma-teal/60 mb-3">
                {DAYS_PT[activeDay].long}
            </p>

            {/* Meetings for selected day */}
            <AnimatePresence mode="wait">
                {dayMeetings.length === 0 ? (
                    <motion.div
                        key="empty"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="py-10 text-center text-cma-text/30 text-sm border border-dashed border-cma-teal/10 rounded-2xl"
                    >
                        Sem reuniões neste dia
                    </motion.div>
                ) : (
                    <motion.div
                        key={activeDay}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.18 }}
                        className="flex flex-col gap-2"
                    >
                        {dayMeetings.map((m, i) => (
                            <MeetingChip
                                key={i}
                                item={m}
                                isSelected={selected?.startHour === m.startHour && selected?.dayOfWeek === m.dayOfWeek}
                                onClick={() => handleChip(m)}
                            />
                        ))}
                        {/* One-time tap hint — fades out after first interaction */}
                        <AnimatePresence>
                            {!hasInteracted && dayMeetings.length > 0 && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ delay: 0.4, duration: 0.4 }}
                                    className="text-center text-[11px] text-cma-teal/40 mt-1 select-none"
                                >
                                    Toque em uma reunião para ver os detalhes
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Detail panel */}
            <AnimatePresence>
                {selected && (
                    <DetailPanel selected={selected} onClose={() => setSelected(null)} />
                )}
            </AnimatePresence>
        </div>
    );
}

// ─── Desktop view: 7-column kanban ───────────────────────────────────────────
function DesktopView({
    byDay,
}: {
    byDay: { dow: number; meetings: MeetingEntry[] }[];
}) {
    const [selected, setSelected] = useState<MeetingEntry | null>(null);

    const handleSelect = (m: MeetingEntry) => {
        setSelected((prev) =>
            prev?.dayOfWeek === m.dayOfWeek && prev?.startHour === m.startHour ? null : m
        );
    };

    return (
        <div>
            <div className="grid grid-cols-7 gap-2 lg:gap-3">
                {byDay.map(({ dow, meetings }) => {
                    const hasActive = selected && meetings.some(
                        (m) => m.startHour === selected.startHour && m.dayOfWeek === selected.dayOfWeek
                    );
                    return (
                        <div key={dow} className="flex flex-col gap-2">
                            <div className={`text-center py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors ${hasActive ? 'bg-cma-teal text-white' : 'text-cma-text/40'}`}>
                                {DAYS_PT[dow].short}
                            </div>
                            {meetings.length === 0 ? (
                                <div className="flex-1 rounded-xl border border-dashed border-cma-teal/10 min-h-[60px]" />
                            ) : (
                                meetings.map((m, i) => (
                                    <MeetingChip
                                        key={i}
                                        item={m}
                                        isSelected={selected?.dayOfWeek === m.dayOfWeek && selected?.startHour === m.startHour}
                                        onClick={() => handleSelect(m)}
                                    />
                                ))
                            )}
                        </div>
                    );
                })}
            </div>

            <AnimatePresence>
                {selected && (
                    <DetailPanel selected={selected} onClose={() => setSelected(null)} />
                )}
            </AnimatePresence>
        </div>
    );
}

// ─── Main section ─────────────────────────────────────────────────────────────
export const ScheduleSection = () => {
    const [filter, setFilter] = useState<Filter>('all');

    const filtered = useMemo(
        () => (filter === 'all' ? scheduleData : scheduleData.filter((m) => m.type === filter)),
        [filter]
    );

    const byDay = useMemo(
        () => DAY_ORDER.map((dow) => ({
            dow,
            meetings: filtered.filter((m) => m.dayOfWeek === dow),
        })),
        [filtered]
    );

    return (
        <section className="py-24 px-6 bg-cma-bg overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-heading font-medium text-cma-text mb-4">
                        Dias e Horários
                    </h2>
                    <p className="text-cma-text/60">
                        Escolha o dia da semana e clique no horário desejado para ver os detalhes e o link de acesso.
                    </p>
                </div>

                {/* Filter */}
                <div className="flex justify-center mb-10">
                    <div className="inline-flex gap-1 bg-white border border-cma-teal/10 rounded-full p-1">
                        {(Object.keys(FILTER_LABELS) as Filter[]).map((key) => (
                            <button
                                key={key}
                                onClick={() => setFilter(key)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${filter === key
                                    ? 'bg-cma-teal text-white shadow-sm'
                                    : 'text-cma-text/60 hover:text-cma-teal'
                                    }`}
                            >
                                {FILTER_LABELS[key]}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Mobile: day-tab switcher (hidden on md+) */}
                <div className="md:hidden">
                    <MobileView byDay={byDay} filter={filter} filtered={filtered} />
                </div>

                {/* Desktop: kanban grid (hidden below md) */}
                <div className="hidden md:block">
                    <DesktopView byDay={byDay} />
                </div>

            </div>
        </section>
    );
};
