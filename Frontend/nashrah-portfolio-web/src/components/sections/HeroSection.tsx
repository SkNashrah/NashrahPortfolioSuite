import Button from "@/components/ui/Button";
import StatCard from "@/components/cards/StatCard";


export default function HeroSection() {
    return (
        <section className="relative px-8 py-20 overflow-hidden">
            <div className="pointer-events-none absolute -top-24 right-0 h-\[500px\] w-\[500px\] rounded-full blur-[120px]" 
            style={{ background: "var(--glow-1)" }}/>

            <div className="pointer-events-none absolute bottom-24 left-0 h-\[400px\] w-\[400px\] rounded-full blur-[100px]"
            style={{ background: "var(--glow-2)" }}/>

            <div className="relative z-10 mx-auto flex max-w-7x1 flex-col-reverse items-center justify-between gap-16 lg:flex-row ">

                <div className="flex-1 text-center lg:text-left">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest"
                    style={{ color: "var(--accent)" }}>
                        Welcome to my portfolio
                    </p>

                    <h1 className="mb-4 text-5xl font-serif font-bold leading-tight sm:text-6xl lg:text-7xl"
                    style={{ color: "var(--text)" }}>
                        Hi, I&apos;m{" "}
                        <span className="gradient-text">
                        Nashrah Fatema Shaikh
                        </span>
                    </h1>

                    <h2 className="mb-6 text-xl font-medium sm:text-2xl"
                    style={{ color: "var(--secondary)" }}>
                        Software Developer ● UI/UX Designer
                    </h2>

                    <p className="mb-10 max-w-xl text-base leading-relaxed sm:text-lg"
                    style={{ color: "var(--muted)" }}>
                        Designing and developing mobile,
                        web, and desktop applications
                        that solve real business problems.
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                        <Button text="View Projects" />
                        <a
                            href="#contact"
                            className="rounded-lg border px-6 py-2.5 text-sm font-semibold transition-all hover:opacity-80"
                            style={{
                                borderColor: "var(--border)",
                                color: "var(--text)",
                                backgroundColor: "var(--surface)",
                            }}
                            >
                            Contact Me →
                        </a>
                    </div>

                    <div className="mt-8 grid grid-cols-3 gap-4">
                        <StatCard 
                            value="7+"
                            title="Projects"
                        />
                        <StatCard
                            value="1+"
                            title="Years of Experience"
                        />

                        <StatCard
                            value="3"
                            title="Platforms"
                        />
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <div className="flex h-64 w-64 items-center justify-center rounded-full border sm:h-80 sm:w-80 transition-all duration-500"
                    style={{
                        backgroundColor: "var(--surface)",
                        borderColor: "var(--border)",
                        boxShadow: "0 0 50px var(--glow-1)",
                    }}>
                        <span className="font-serif text-5xl font-bold gradient-text sm:text-6xl">
                            NFS
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}