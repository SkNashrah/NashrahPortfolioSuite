import Button from "@/components/ui/Button";
import StatCard from "@/components/cards/StatCard";


export default function HeroSection() {
    return (
        <section className="px-8 py-24">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-16">

                <div className="flex-1">
                    <p className="text-lg text-gray-500 mb-4">
                        Hello, I&apos;m
                    </p>

                    <h1 className="text-6xl font-bold mb-5">
                        Nashrah Fatema Shaikh
                    </h1>

                    <h2 className="text-2xl text-gray-400 mb-8">
                        Software Developer ● UI/UX Designer
                    </h2>

                    <p className="text-lg text-gray-500 max-w-2xl mb-10">
                        Designing and developing mobile,
                        web, and desktop applications
                        that solve real business problems.
                    </p>

                    <div className="flex gap-4">
                        <Button text="View Projects" />
                        <Button text="Hire Me" />
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
                    <div className="flex h-80 w-80 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900">
                        <span className="text-6xl font-bold">
                            NFS
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}