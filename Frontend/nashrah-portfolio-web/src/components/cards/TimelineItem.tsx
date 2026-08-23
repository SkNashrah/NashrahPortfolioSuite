type TimelineItemProps = {
  year: string;
  title: string;
  company: string;
  description: string;
  iscurrent?: boolean;
};

export default function TimelineItem({
  year,
  title,
  company,
  description,
  iscurrent = false,
}: TimelineItemProps) {
  return (
    <div className="flex gap-6">

      {/* Timeline Column */}

      <div className="flex flex-col items-center pt-1">

        <div
          className="h-4 w-4 flex-shrink-0 rounded-full border-2 shadow-lg"
          style={{
            borderColor:  "var(--secondary)" ,
            backgroundColor: "var(--primary)" ,
            boxShadow: "0 0 14px var(--glow-1)" ,
          }}
        />

        <div className="mt-2 h-full w-px"
            style={{
                backgroundColor: "var(--border)",
            }}
         />

      </div>

      {/* Content Column */}

      <div className="pb-12">

        <p className="mb-1 text-sm font-semibold uppercase tracking-wide"
        style={{ color: "var(--accent)" }}>
          {year}
        </p>

        <div className="mb-1 flex flex-wrap items-center gap-3">

          <h3 className="text-2xl font-semibold"
          style={{ color: "var(--text)" }}>
            {title}
          </h3>

          {iscurrent && (
            <span
              className="rounded-full px-3 py-0.5 text-xs font-bold"
              style={{
                background: "color-mix(in srgb, var(--secondary) 15%, transparent)",
                border: "1px solid color-mix(in srgb, var(--secondary) 40%, transparent)",
                color: "var(--secondary)",
              }}
            >
              Current
            </span>
          )}

        </div>

        <p className="mb-3 font-medium gradient-text text-sm">
          {company}
        </p>

        <p className="max-w-2xl text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          {description}
        </p>

      </div>

    </div>
  );
}