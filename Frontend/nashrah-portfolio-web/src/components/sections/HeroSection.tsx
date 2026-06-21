import Button from "@/components/ui/Button";

export default function HeroSection() {
    return (
        <section className="px-8 py-24">
            <div className="max-w-4xl">
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
            </div>
        </section>
    )
}