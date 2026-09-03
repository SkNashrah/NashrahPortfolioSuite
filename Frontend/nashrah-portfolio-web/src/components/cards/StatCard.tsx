type StatCardProps = {
    value: string;
    title: string;
};

export default function StatCard({ value, title }: StatCardProps) {
    return(
        <div className="glass-card rounded-2xl p-5 text-center">
            <p className="mb-0.5 text-2xl font-bold gradient-text">
                {value}
            </p>
            <p className="text-xs font-medium" style={{ color: "var(--muted)" }}>
                {title}
            </p>
        </div>
    );
}