type StatCardProps = {
    value: string;
    title: string;
};

export default function StatCard({ value, title }: StatCardProps) {
    return(
        <div className="rounded-xl border border-zinc-800 p-6">
            <h3 className="text-3xl font-bold">
                {value}
            </h3>
            <p className="text-zinc-400">
                {title}
            </p>
        </div>
    );
}
