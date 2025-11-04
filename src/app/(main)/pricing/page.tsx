import Link from "next/link";
import { LuCheck } from "react-icons/lu"

export default function PricingPage() {
    const pricingTiers = [
        {
            name: "Free",
            price: "$0",
            frequency: "per month",
            description: "Perfect for individuals and small projects.",
            features: [
                "Basic AI model access",
                "5,000 monthly requests",
                "Community support",
                "Standard API access",
                "Limited data storage",
            ],
            buttonText: "Get Started Free",
            buttonVariant: "outline",
        },
        {
            name: "Pro",
            price: "$29",
            frequency: "per month",
            description: "For growing teams and advanced AI applications.",
            features: [
                "All Free features",
                "Advanced AI model access",
                "500,000 monthly requests",
                "Priority email support",
                "Enhanced API access",
                "Increased data storage",
                "Customizable dashboards",
            ],
            buttonText: "Start 14-day Free Trial",
            buttonVariant: "primary",
            highlight: true,
        },
        {
            name: "Enterprise",
            price: "Custom",
            frequency: "",
            description: "Tailored solutions for large organizations and specific needs.",
            features: [
                "All Pro features",
                "Unlimited monthly requests",
                "Dedicated account manager",
                "SLA and uptime guarantees",
                "On-premise deployment options",
                "Advanced security features",
                "Custom integrations",
            ],
            buttonText: "Contact Sales",
            buttonVariant: "outline",
        },
    ];

    const faqs = [
        {
            question: "What is a monthly request?",
            answer:
                "A monthly request refers to a single API call to our AI models. Different models and complexities might consume varying amounts of your monthly quota.",
        },
        {
            question: "Can I change my plan later?",
            answer:
                "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be prorated.",
        },
        {
            question: "Do you offer discounts for non-profits or educational institutions?",
            answer:
                "We offer special pricing for non-profit organizations and educational institutions. Please contact our sales team for more information.",
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, including Visa, MasterCard, American Express, and Discover.",
        },
    ];

    return (
        <div className="min-h-screen bg-linear-to-br from-noble-700 via-noble-800 to-noble-700">
            {/* Pricing Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-b from-day-blue-900/20 to-transparent"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                            Flexible <span className="primaryGradient">Pricing</span> for Every Need
                        </h1>
                        <p className="text-xl text-noble-300 mb-10 max-w-2xl mx-auto">
                            Choose the plan that best fits your project, from individual developers to large enterprises.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/pricing#features" className="primaryButton items-center gap-x-2">
                                View Features
                            </Link>
                            <Link href="/contact" className="flex w-full justify-center rounded-xl border border-noble-500 bg-noble-700 px-4 py-2.5 font-semibold text-white shadow-xs hover:bg-noble-600 focus:outline-hidden">
                                Contact Sales
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Tiers Section */}
            <section className="py-20 relative" id="features">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-full max-w-6xl h-64 bg-linear-to-t from-heisenberg-blue-700/20 to-transparent blur-3xl rounded-full"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8" >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                        {pricingTiers.map((tier) => (
                            <div
                                key={tier.name}
                                className={`bg-noble-600/50 backdrop-blur-sm border rounded-xl p-8 flex flex-col ${tier.highlight ? "border-stem-green-500 shadow-lg" : "border-noble-500"
                                    }`}
                            >
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    {tier.name}
                                </h3>
                                <p className="text-noble-300 mb-6">
                                    {tier.description}
                                </p>
                                <div className="flex items-baseline mb-6">
                                    <span className="text-5xl font-bold text-white">{tier.price}</span>
                                    {tier.frequency && <span className="text-xl text-noble-300 ml-2">{tier.frequency}</span>}
                                </div>
                                <ul className="space-y-3 mb-8 flex-1">
                                    {tier.features.map((feature, index) => (
                                        <li key={index} className="flex items-center text-noble-300">
                                            <LuCheck size={18} className="text-stem-green-500 mr-2 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className={`w-full justify-center rounded-xl px-4 py-2.5 font-semibold shadow-xs focus:outline-hidden ${tier.buttonVariant === "primary"
                                        ? "bg-stem-green-600 text-day-blue-900 hover:bg-stem-green-700"
                                        : "border border-noble-500 bg-noble-700 text-white hover:bg-noble-600"
                                        }`}
                                >
                                    {tier.buttonText}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-noble-600/50 backdrop-blur-sm border border-noble-500 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-2">{faq.question}</h3>
                                    <p className="text-noble-300">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-6xl h-64 bg-linear-to-t from-stem-green-500/20 to-transparent blur-3xl rounded-full"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto bg-noble-600/40 backdrop-blur-md border border-noble-500 rounded-2xl p-8 sm:p-12">
                        <div className="text-center">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Power Your AI?</h2>
                            <p className="text-xl text-noble-300 mb-8">
                                Start building intelligent applications with Artificium today.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link href="/signup" className="primaryButton">
                                    Get Started Free
                                </Link>
                                <button className="flex w-full justify-center rounded-xl border border-noble-500 bg-noble-700 px-4 py-2.5 font-semibold text-white shadow-xs hover:bg-noble-600 focus:outline-hidden">
                                    Talk to Sales
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
