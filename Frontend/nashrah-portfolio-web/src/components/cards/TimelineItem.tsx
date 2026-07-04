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
    <div className="flex gap-8">

      {/* Timeline Column */}

      <div className="flex flex-col items-center">

        <div
          className="
          h-5
          w-5
          rounded-full
          border-2
          border-[#9882B9]
            bg-[#722548]
            shadow-[0_0_20px_rgba(152,130,185,0.8)]
          "
        />

        <div className="mt-2 h-full w-px bg-zinc-700" />

      </div>

      {/* Content Column */}

      <div className="pb-16">

        <p className="mb-2 text-sm text-zinc-400">
          {year}
        </p>

        <div className="mb-3 flex items-center gap-3">

          <h3 className="text-3xl font-semibold">
            {title}
          </h3>

          {iscurrent && (
            <span
              className="
              rounded-full
              border
              border-green-500/30
              bg-green-500/10
              px-3
              py-1
              text-xs
              text-green-400
              "
            >
              Current
            </span>
          )}

        </div>

        <p className="mb-4 text-lg text-blue-400">
          {company}
        </p>

        <p className="max-w-3xl text-zinc-400">
          {description}
        </p>

      </div>

    </div>
  );
}