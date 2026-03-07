export type MeetingType = 'online' | 'presencial';

export interface MeetingEntry {
    day: string;
    dayOfWeek: number; // 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat
    time: string;
    startHour: number;
    startMinute: number;
    endHour: number;
    endMinute: number;
    title: string;
    subtitle: string;
    type: MeetingType;
    zoomLink?: string;
    location?: string;
    address?: string;
    highlight?: boolean;
}

export type MeetingStatus = 'live' | 'soon' | 'upcoming';

export interface NextMeeting extends MeetingEntry {
    status: MeetingStatus;
    startsAt: Date;
    endsAt: Date;
    minutesUntilStart: number;
}

const ZOOM_LINK = 'https://zoom.us/j/cmabrasil';

export const scheduleData: MeetingEntry[] = [
    {
        day: 'Domingos',
        dayOfWeek: 0,
        time: '18h30 - 19h30',
        startHour: 18,
        startMinute: 30,
        endHour: 19,
        endMinute: 30,
        title: 'Reunião Temática',
        subtitle: 'Relacionamentos e Sobriedade',
        type: 'online',
        zoomLink: ZOOM_LINK,
    },
    {
        day: 'Segundas',
        dayOfWeek: 1,
        time: '18h30 - 19h30',
        startHour: 18,
        startMinute: 30,
        endHour: 19,
        endMinute: 30,
        title: 'Reunião de Partilhas',
        subtitle: 'Baseada na Meditação Diária do NA',
        type: 'online',
        zoomLink: ZOOM_LINK,
    },
    {
        day: 'Terças',
        dayOfWeek: 2,
        time: '19h30 - 20h30',
        startHour: 19,
        startMinute: 30,
        endHour: 20,
        endMinute: 30,
        title: 'Primeira Dose de Clareza',
        subtitle: 'Reunião para Recém-chegados',
        type: 'online',
        zoomLink: ZOOM_LINK,
        highlight: true,
    },
    {
        day: 'Quartas',
        dayOfWeek: 3,
        time: '18h30 - 19h30',
        startHour: 18,
        startMinute: 30,
        endHour: 19,
        endMinute: 30,
        title: 'Reunião Temática',
        subtitle: 'Sexo e Relacionamento Sóbrio',
        type: 'online',
        zoomLink: ZOOM_LINK,
    },
    {
        day: 'Quintas',
        dayOfWeek: 4,
        time: '19h30 - 20h30',
        startHour: 19,
        startMinute: 30,
        endHour: 20,
        endMinute: 30,
        title: 'Os 12 Passos do CMA',
        subtitle: 'Estudo do Programa de Passos',
        type: 'online',
        zoomLink: ZOOM_LINK,
    },
    {
        day: 'Sextas',
        dayOfWeek: 5,
        time: '18h30 - 19h30',
        startHour: 18,
        startMinute: 30,
        endHour: 19,
        endMinute: 30,
        title: 'Reunião de Partilhas',
        subtitle: 'Partilha de Convidado',
        type: 'online',
        zoomLink: ZOOM_LINK,
    },
    {
        day: 'Sábados',
        dayOfWeek: 6,
        time: '18h00 - 19h00',
        startHour: 18,
        startMinute: 0,
        endHour: 19,
        endMinute: 0,
        title: 'Reunião Presencial',
        subtitle: 'Abertura e Partilhas',
        type: 'presencial',
        location: 'Bela Vista · São Paulo/SP',
        address: 'R. Araquã, 25 – Bela Vista, São Paulo – SP, 01306-020',
    },
];

/**
 * Returns the next meeting from the schedule relative to `now` (UTC).
 * Considers Brasília timezone (UTC-3).
 * Returns null if scheduleData is empty.
 *
 * Status:
 *  - 'live'     → meeting is happening right now
 *  - 'soon'     → starts within SOON_THRESHOLD_MINUTES
 *  - 'upcoming' → next occurrence (could be today later, or another day)
 */
const SOON_THRESHOLD_MINUTES = 60;

export function getNextMeeting(now: Date = new Date()): NextMeeting | null {
    if (!scheduleData.length) return null;

    // Work with UTC time shifted by -3 hours to get Brasilia time in the UTC components
    const brTimeMs = now.getTime() - 3 * 60 * 60_000;
    const brDate = new Date(brTimeMs);

    const brDow = brDate.getUTCDay();          // 0–6
    const brHour = brDate.getUTCHours();
    const brMinute = brDate.getUTCMinutes();
    const brTotalMinutes = brHour * 60 + brMinute;

    // Helper: build a Date for a scheduleEntry relative to `brDate`, offset by `daysAhead`
    function buildMeetingDate(entry: MeetingEntry, daysAhead: number, hour: number, minute: number): Date {
        const d = new Date(brTimeMs);
        d.setUTCDate(d.getUTCDate() + daysAhead);
        d.setUTCHours(hour, minute, 0, 0);
        // d now holds the Brasilia time in its UTC components.
        // Convert back to a real Date (UTC) by adding the 3 hours back.
        return new Date(d.getTime() + 3 * 60 * 60_000);
    }

    // Look up to 7 days ahead to find the next meeting
    for (let daysAhead = 0; daysAhead <= 7; daysAhead++) {
        const targetDow = (brDow + daysAhead) % 7;
        const candidates = scheduleData.filter((e) => e.dayOfWeek === targetDow);

        for (const entry of candidates) {
            const entryStartMinutes = entry.startHour * 60 + entry.startMinute;
            const entryEndMinutes = entry.endHour * 60 + entry.endMinute;

            if (daysAhead === 0) {
                // Today: check if it's live, soon, or still upcoming
                if (brTotalMinutes >= entryStartMinutes && brTotalMinutes < entryEndMinutes) {
                    // LIVE now
                    const startsAt = buildMeetingDate(entry, 0, entry.startHour, entry.startMinute);
                    const endsAt = buildMeetingDate(entry, 0, entry.endHour, entry.endMinute);
                    return { ...entry, status: 'live', startsAt, endsAt, minutesUntilStart: 0 };
                }
                if (brTotalMinutes < entryStartMinutes) {
                    const minutesUntilStart = entryStartMinutes - brTotalMinutes;
                    const startsAt = buildMeetingDate(entry, 0, entry.startHour, entry.startMinute);
                    const endsAt = buildMeetingDate(entry, 0, entry.endHour, entry.endMinute);
                    const status: MeetingStatus = minutesUntilStart <= SOON_THRESHOLD_MINUTES ? 'soon' : 'upcoming';
                    return { ...entry, status, startsAt, endsAt, minutesUntilStart };
                }
                // Already ended today, skip
                continue;
            } else {
                // A future day
                const minutesUntilStart = daysAhead * 24 * 60 + entryStartMinutes - brTotalMinutes;
                const startsAt = buildMeetingDate(entry, daysAhead, entry.startHour, entry.startMinute);
                const endsAt = buildMeetingDate(entry, daysAhead, entry.endHour, entry.endMinute);
                return { ...entry, status: 'upcoming', startsAt, endsAt, minutesUntilStart };
            }
        }
    }

    return null;
}

export const guidelines = [
    "Incentivamos expressões de identificação, mas não comentamos sobre as partilhas dos outros e não damos conselhos pessoais.",
    "Evitamos interromper, debater ou iniciar discussões durante as partilhas.",
    "Pedimos sensibilidade com relação a conteúdos que podem ser gatilhos (violência, abuso, etc).",
    "Evite realizar tarefas em frente à câmera, como comer ou fumar. Caso precise, desligue seu vídeo temporariamente.",
    "Solicitamos que apenas pessoas com, no mínimo, 24 horas de sobriedade compartilhem. Se tiver menos tempo, você é muito bem-vindo para ouvir.",
    "Por favor, respeite o tempo limite de partilha para que todos possam participar."
];
