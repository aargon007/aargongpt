import Link from "next/link"
import { LuArrowRight, LuHistory, LuLightbulb, LuUsers } from "react-icons/lu"

export default function AboutPage() {
    const teeams = [
        {
            name: "Md Muhaiminul",
            role: "CEO & Founder",
            image: "https://avatars.githubusercontent.com/u/108287484?v=4",
            description: "Visionary leader driving AargonGPT's strategic direction."
        },
        {
            name: "Jane Smith",
            role: "CTO",
            image: "https://randomuser.me/api/portraits/men/9.jpg",
            description: "Architect of our robust AI infrastructure and SDK."
        },
        {
            name: "John Doe",
            role: "Software Engineer",
            image: "https://randomuser.me/api/portraits/men/14.jpg",
            description: "Innovator behind our cutting-edge AI solutions."
        },
        {
            name: "Emily Johnson",
            role: "Product Manager",
            image: "https://randomuser.me/api/portraits/women/8.jpg",
            description: "Design expert shaping AargonGPT's user-friendly interface."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-noble-700 via-noble-800 to-noble-700">
            {/* About Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-day-blue-900/20 to-transparent"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                            About <span className="primaryGradient">AargonGPT</span>
                        </h1>
                        <p className="text-xl text-noble-300 mb-10 max-w-2xl mx-auto">
                            We are dedicated to empowering developers and businesses to build the next generation of intelligent
                            applications with ease and efficiency.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/pricing" className="primaryButton items-center gap-x-2">
                                Learn More
                                <LuArrowRight size={18} />
                            </Link>
                            <Link href="/contact" className="flex w-full justify-center rounded-[12px] border border-noble-500 bg-noble-700 px-4 py-2.5 font-semibold text-white shadow-xs hover:bg-noble-600 focus:outline-hidden">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="py-20 relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-6xl h-64 bg-gradient-to-t from-heisenberg-blue-500/20 to-transparent blur-3xl rounded-full"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Our Mission
                        </h2>
                        <p className="text-xl text-noble-300 max-w-2xl mx-auto">
                            To democratize AI development, making powerful AI tools accessible and easy to integrate for everyone.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-noble-600/50 backdrop-blur-sm border border-noble-500 rounded-xl p-6 hover:border-stem-green-500/50 transition-all duration-300">
                            <div className="w-12 h-12 bg-gradient-to-br from-heisenberg-blue-500/20 to-heisenberg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                                <LuLightbulb className="text-heisenberg-blue-500" size={24} />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                            <p className="text-noble-300">
                                Fostering a culture of continuous innovation to deliver cutting-edge AI solutions.
                            </p>
                        </div>

                        <div className="bg-noble-600/50 backdrop-blur-sm border border-noble-500 rounded-xl p-6 hover:border-stem-green-500/50 transition-all duration-300">
                            <div className="w-12 h-12 bg-gradient-to-br from-stem-green-500/20 to-stem-green-500/10 rounded-lg flex items-center justify-center mb-4">
                                <LuUsers className="text-stem-green-500" size={24} />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Empowerment</h3>
                            <p className="text-noble-300">
                                Empowering developers with intuitive tools to build powerful AI applications.
                            </p>
                        </div>

                        <div className="bg-noble-600/50 backdrop-blur-sm border border-noble-500 rounded-xl p-6 hover:border-stem-green-500/50 transition-all duration-300">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-blue-500/20 to-purple-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                                <LuHistory className="text-purple-blue-400" size={24} />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Impact</h3>
                            <p className="text-noble-300">
                                Driving positive change by making advanced AI accessible for real-world problems.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
                            Our Story
                        </h2>
                        <div className="bg-noble-600/50 backdrop-blur-sm border border-noble-500 rounded-xl p-8 space-y-6">
                            <p className="text-noble-300 text-lg">
                                AargonGPT was founded in 2025 by Md Muhaiminul who
                                believed that artificial intelligence should be a tool for everyone, not just a select few. We saw the
                                complexities and barriers to entry in AI development and set out to create a platform that simplifies
                                the process, allowing innovators to focus on their ideas rather than infrastructure.
                            </p>
                            <p className="text-noble-300 text-lg">
                                From our humble beginnings, we've grown into a thriving community, constantly evolving our AI SDK to
                                meet the demands of a rapidly changing technological landscape. Our journey is marked by a commitment to
                                open-source principles, robust security, and a user-centric approach to design.
                            </p>
                            <p className="text-noble-300 text-lg">
                                Today, AargonGPT stands as a testament to what can be achieved when passion meets purpose. We are proud
                                to be at the forefront of AI innovation, helping thousands of developers bring their intelligent
                                applications to life.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Team Section */}
            <section className="py-20 relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Meet Our Team</h2>
                        <p className="text-xl text-noble-300 max-w-2xl mx-auto">
                            A diverse group of experts united by a shared vision for the future of AI.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {
                            teeams?.map((team, index) => (
                                <div key={index} className="bg-noble-600/50 backdrop-blur-sm border border-noble-500 rounded-xl p-6 text-center">
                                    <img
                                        src={team.image}
                                        alt={team.name}
                                        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                                    />
                                    <h3 className="text-xl font-semibold text-white mb-1">
                                        {team.name}
                                    </h3>
                                    <p className="text-stem-green-500 text-sm mb-3">
                                        {team.role}
                                    </p>
                                    <p className="text-noble-300 text-sm">
                                        {team.description}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-6xl h-64 bg-gradient-to-t from-stem-green-500/20 to-transparent blur-3xl rounded-full"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto bg-noble-600/40 backdrop-blur-md border border-noble-500 rounded-2xl p-8 sm:p-12">
                        <div className="text-center">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                Join Our Journey
                            </h2>
                            <p className="text-xl text-noble-300 mb-8">
                                Be a part of the revolution in AI development.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link href='/login' className="primaryButton">
                                    Get Started Free
                                </Link>
                                <Link href="/contact" className="flex w-full justify-center rounded-[12px] border border-noble-500 bg-noble-700 px-4 py-2.5 font-semibold text-white shadow-xs hover:bg-noble-600 focus:outline-hidden">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
