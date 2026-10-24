const base = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.1,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const soft = { fill: "currentColor", stroke: "none", opacity: 0.28 };

export const QuranIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M24 13c-3.5-2.5-8-3.5-13-3v24c5 0 9.5 1 13 3.5 3.5-2.5 8-3.5 13-3.5V10c-5-.5-9.5.5-13 3Z" {...soft} />
    <path d="M24 13c-3.5-2.5-8-3.5-13-3v24c5 0 9.5 1 13 3.5 3.5-2.5 8-3.5 13-3.5V10c-5-.5-9.5.5-13 3Z" />
    <path d="M24 13v23.5" />
    <path d="M14.5 15.5h5M14.5 21h5M28.5 15.5h5M28.5 21h5" strokeWidth="1.8" />
  </svg>
);

export const HadithIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="12" y="10" width="20" height="26" rx="2.5" transform="rotate(-7 12 10)" {...soft} />
    <rect x="14" y="12" width="20" height="26" rx="2.5" {...soft} />
    <rect x="14" y="12" width="20" height="26" rx="2.5" />
    <path d="M18.5 19h11M18.5 24.5h11M18.5 30h7" strokeWidth="1.9" />
  </svg>
);

export const NamazIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M13 38c2-5.5 6-9 11-9s9 3.5 11 9z" {...soft} />
    <circle cx="24" cy="12" r="3.4" fill="currentColor" stroke="none" />
    <path d="M24 16v9l-7.5 5.2M24 25l7.5 5.2" />
    <path d="M13 38c2-5.5 6-9 11-9s9 3.5 11 9" />
    <path d="M9.5 38h29" strokeWidth="2.3" />
  </svg>
);

export const WuduIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M24 9c5 7 9.5 13.3 9.5 18.7A9.5 9.5 0 1 1 14.5 27.7C14.5 22.3 19 16 24 9Z" {...soft} />
    <path d="M24 9c5 7 9.5 13.3 9.5 18.7A9.5 9.5 0 1 1 14.5 27.7C14.5 22.3 19 16 24 9Z" />
    <path d="M18.8 28c0 2.9 2 5.2 5.2 5.8" strokeWidth="1.9" />
    <circle cx="29" cy="24" r="1.3" fill="currentColor" stroke="none" opacity="0.6" />
  </svg>
);

export const PrayerTimesIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="23" cy="25" r="14" {...soft} />
    <circle cx="23" cy="25" r="14" />
    <path d="M23 16.5v8.5l6.5 4.2" strokeWidth="2.3" />
    <path d="M31.5 12.5l2.8-2.8M14.5 12.5l-2.8-2.8" strokeWidth="2.3" />
    <circle cx="23" cy="25" r="1.3" fill="currentColor" stroke="none" />
  </svg>
);

export const QiblaIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="24" cy="24" r="15" {...soft} />
    <circle cx="24" cy="24" r="15" />
    <circle cx="24" cy="24" r="9.5" strokeWidth="1.4" strokeDasharray="2 3.2" opacity="0.6" />
    <path d="M24 15l5 12.5-5 2.5-5-2.5z" fill="currentColor" stroke="none" />
    <circle cx="24" cy="24" r="1.6" fill="currentColor" stroke="none" />
  </svg>
);

export const AiChatIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M9.5 15.5a4.5 4.5 0 0 1 4.5-4.5h20a4.5 4.5 0 0 1 4.5 4.5v12a4.5 4.5 0 0 1-4.5 4.5H21l-7.5 6.3v-6.3h-0a4.5 4.5 0 0 1-4-4.5Z" {...soft} />
    <path d="M9.5 15.5a4.5 4.5 0 0 1 4.5-4.5h20a4.5 4.5 0 0 1 4.5 4.5v12a4.5 4.5 0 0 1-4.5 4.5H21l-7.5 6.3v-6.3h-0a4.5 4.5 0 0 1-4-4.5Z" />
    <path d="M24 13l1.7 3.8 3.8 1.7-3.8 1.7L24 24l-1.7-3.8-3.8-1.7 3.8-1.7z" fill="currentColor" stroke="none" />
  </svg>
);

export const QuizIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="10.5" y="8.5" width="27" height="31" rx="3.5" {...soft} />
    <rect x="10.5" y="8.5" width="27" height="31" rx="3.5" />
    <path d="M19.5 20a4.5 4.5 0 1 1 6.3 4.1c-1.5.8-2.3 1.6-2.3 3.4" strokeWidth="2.3" />
    <circle cx="23.5" cy="32" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

export const KidsIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12.5 39c1.5-7.5 5.8-11.5 11.5-11.5S35 31.5 36.5 39" {...soft} />
    <circle cx="24" cy="17" r="7.5" {...soft} />
    <circle cx="24" cy="17" r="7.5" />
    <path d="M12.5 39c1.5-7.5 5.8-11.5 11.5-11.5S35 31.5 36.5 39" />
    <path d="M21.2 17.3a2.8 1.6 0 0 0 5.6 0" strokeWidth="1.8" />
    <path d="M24 8v2.2M17.8 10.3l1.1 1.9M30.2 10.3l-1.1 1.9" strokeWidth="1.8" />
  </svg>
);

export const WazifaIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="24" cy="24" r="14" strokeWidth="1.3" strokeDasharray="1 4.5" opacity="0.55" />
    <circle cx="24" cy="11" r="2.8" fill="currentColor" stroke="none" />
    <circle cx="33.5" cy="16" r="2.4" fill="currentColor" stroke="none" opacity="0.85" />
    <circle cx="37" cy="25" r="2.4" fill="currentColor" stroke="none" opacity="0.85" />
    <circle cx="33.5" cy="34" r="2.4" fill="currentColor" stroke="none" opacity="0.85" />
    <circle cx="24" cy="38" r="2.4" fill="currentColor" stroke="none" opacity="0.7" />
    <circle cx="14.5" cy="34" r="2.2" fill="currentColor" stroke="none" opacity="0.6" />
    <circle cx="11" cy="25" r="2.2" fill="currentColor" stroke="none" opacity="0.5" />
    <circle cx="14.5" cy="16" r="2.2" fill="currentColor" stroke="none" opacity="0.4" />
  </svg>
);

export const NamesOfAllahIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="24" cy="24" r="15" {...soft} />
    <path
      d="M24 7l3 8.3 8.7-2.3-5.1 7.3 7.4 5-8.7 2.3 1.1 9-8.4-5-8.4 5 1.1-9-8.7-2.3 7.4-5-5.1-7.3L21 15.3z"
      fill="currentColor"
      stroke="none"
    />
    <circle cx="24" cy="24" r="4.2" fill="var(--icon-accent, #fff)" stroke="none" />
  </svg>
);

export const ZakatIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="8.5" y="13.5" width="31" height="22" rx="3.5" {...soft} />
    <rect x="8.5" y="13.5" width="31" height="22" rx="3.5" />
    <path d="M8.5 20h31" strokeWidth="2.1" />
    <circle cx="24" cy="27.5" r="5" fill="currentColor" stroke="none" opacity="0.9" />
    <path d="M22 27.5h4M24 25.7v3.6" stroke="var(--icon-accent, #fff)" strokeWidth="1.6" />
  </svg>
);

export const CalendarIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="8.5" y="10.5" width="31" height="28" rx="3.5" {...soft} />
    <rect x="8.5" y="10.5" width="31" height="28" rx="3.5" />
    <path d="M8.5 18.5h31" strokeWidth="2.1" />
    <path d="M16 6.5v8M32 6.5v8" strokeWidth="2.3" />
    <path d="M28.5 30a5.3 5.3 0 1 1 3.3-9.4 6.6 6.6 0 1 0 0 9.4A5.3 5.3 0 0 1 28.5 30Z" fill="currentColor" stroke="none" />
  </svg>
);

export const HabitIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="24" cy="24" r="15" {...soft} />
    <path d="M9.5 32l8-9 6 5 14-16" strokeWidth="2.4" />
    <path d="M29 12h8.5v8.5" strokeWidth="2.4" />
    <circle cx="9.5" cy="32" r="1.8" fill="currentColor" stroke="none" />
    <circle cx="37.5" cy="12" r="1.8" fill="currentColor" stroke="none" />
  </svg>
);

export const MasjidIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M9 38V24a7 7 0 0 1 14 0v14" {...soft} />
    <path d="M25 38V24a7 7 0 0 1 14 0v14" {...soft} transform="translate(-1 0)" />
    <path d="M24 7.5a4.3 4.3 0 0 1 4.3 4.3 5.3 5.3 0 0 1-8.6 4.2 4.3 4.3 0 0 1 4.3-8.5Z" fill="currentColor" stroke="none" />
    <path d="M24 16v5" strokeWidth="2.1" />
    <path d="M10.5 38V26c0-5 3-8.3 6-10M37.5 38V26c0-5-3-8.3-6-10" strokeWidth="2.1" />
    <path d="M17 38V24a7 7 0 0 1 14 0v14" strokeWidth="2.1" />
    <path d="M7.5 38h33" strokeWidth="2.4" />
    <path d="M12.5 21.5V18M35.5 21.5V18" strokeWidth="1.8" />
  </svg>
);

export const RemindersIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M24 9a3.1 3.1 0 0 1 3.1 3.1v1.4c4.3 1.3 7.4 5.2 7.4 9.8v6.5l3 4.1H14.5l3-4.1v-6.5c0-4.6 3.1-8.5 7.4-9.8v-1.4A3.1 3.1 0 0 1 24 9Z" {...soft} />
    <path d="M24 9a3.1 3.1 0 0 1 3.1 3.1v1.4c4.3 1.3 7.4 5.2 7.4 9.8v6.5l3 4.1H14.5l3-4.1v-6.5c0-4.6 3.1-8.5 7.4-9.8v-1.4A3.1 3.1 0 0 1 24 9Z" />
    <path d="M20.3 33.5a3.7 3.7 0 0 0 7.4 0" strokeWidth="2.2" />
    <circle cx="33" cy="12.5" r="2.6" fill="currentColor" stroke="none" opacity="0.9" />
  </svg>
);
