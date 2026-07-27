type StatCardProps = {
    value: string;
    title: string;
};

export default function StatCard({ value, title }: StatCardProps) {
    return(
        <div className="rounded-xl bg-surface p-6 shadow-card">
            <h3 className="text-3xl font-bold" style={{ color: "var(--text)" }}>
                {value}
            </h3>
            <p style={{ color: "var(--muted)" }}>
                {title}
            </p>
        </div>
    );
}