interface UpcomingCourseCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  participants: number;
  accentColor?: string;
}

const UpcomingCourseCard = ({
  title,
  date,
  time,
  location,
  participants,
  accentColor = '#F59E0B',
}: UpcomingCourseCardProps) => {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-amber-100 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <span className="absolute inset-y-0 left-0 w-1" style={{ backgroundColor: accentColor }} />
      <div className="pl-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-500">{date}</p>
            <h3 className="mt-1 text-lg font-semibold text-slate-900">{title}</h3>
          </div>
          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-600">
            {participants} apprenants
          </span>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-500">
          <span className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 7v5l3 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            {time}
          </span>
          <span className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 21s7-5.686 7-11a7 7 0 0 0-14 0c0 5.314 7 11 7 11Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            {location}
          </span>
        </div>
      </div>
    </article>
  );
};

export default UpcomingCourseCard;
