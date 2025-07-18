import Link from 'next/link';
import { FaGithub } from 'react-icons/fa6';
import { BiLogoLinkedinSquare } from 'react-icons/bi';
import { RiFacebookCircleFill } from 'react-icons/ri';

const Footer = () => {
    const footerNavs = [
        {
            title: 'Product',
            navs: [
                {
                    name: 'Features',
                    href: '/',
                },
                {
                    name: 'Pricing',
                    href: '/pricing',
                },
            ]
        },
        {
            title: 'Company',
            navs: [
                {
                    name: 'About',
                    href: '/about',
                },
                {
                    name: 'Contact',
                    href: '/contact',
                },
            ]
        },
        {
            title: 'Legal',
            navs: [
                {
                    name: 'Privacy Policy',
                    href: '/privacy',
                },
                {
                    name: 'Terms of Service',
                    href: '/terms',
                },
            ]
        },
    ];

    return (
        <footer className="border-t border-noble-600 bg-noble-700">
            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <div className="mb-4 flex items-center space-x-2">
                            <div className="h-8 w-8">
                                <svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16 0L29.8564 8V24L16 32L2.14359 24V8L16 0Z"
                                        fill="url(#paint1_linear_1_2)"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="paint1_linear_1_2"
                                            x1="16"
                                            y1="0"
                                            x2="16"
                                            y2="32"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#82dbf7" />
                                            <stop
                                                offset="1"
                                                stopColor="#b6f09c"
                                            />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <span className="text-xl font-bold text-white">
                                AargonGPT
                            </span>
                        </div>
                        <p className="mb-4 text-noble-300">
                            Building the future of AI-powered applications with
                            the Vercel AI SDK.
                        </p>
                        <div className="flex space-x-4">
                            <Link
                                href="#"
                                className="text-noble-300 hover:text-stem-green-500"
                            >
                                <RiFacebookCircleFill className="h-5 w-5" />
                            </Link>
                            <Link
                                href="#"
                                className="text-noble-300 hover:text-stem-green-500"
                            >
                                <BiLogoLinkedinSquare className="h-5 w-5" />
                            </Link>
                            <Link
                                href="#"
                                className="text-noble-300 hover:text-stem-green-500"
                            >
                                <FaGithub className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {
                        footerNavs.map((sectionNav, index) => (
                            <div key={index}>
                                <h3 className="mb-4 font-semibold text-white">
                                    {sectionNav.title}
                                </h3>
                                <ul className="space-y-2">
                                    {
                                        sectionNav?.navs?.map((nav, index) => (
                                            <li key={index}>
                                                <Link
                                                    href={nav.href}
                                                    className="text-noble-300 hover:text-stem-green-500"
                                                >
                                                    {nav.name}
                                                </Link>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        ))
                    }
                </div>

                <div className="mt-12 flex flex-col items-center justify-between border-t border-noble-600 pt-8 md:flex-row">
                    <p className="text-sm text-noble-300">
                        © 2025 AargonGPT. All Rights Reserved.
                    </p>

                    {/* designed by */}
                    <div className="mt-4 md:mt-0">
                        <p className="text-sm text-noble-300">
                            Designed by{' '}
                            <Link
                                href='https://www.linkedin.com/in/aargon/'
                                className="font-semibold text-stem-green-500"
                            >
                                Md Muhaiminul
                            </Link>
                        </p>
                    </div>

                    <div className="mt-4 md:mt-0">
                        <Link
                            href="/privacy"
                            className="text-sm text-noble-300 hover:text-stem-green-500"
                        >
                            Privacy Policy
                        </Link>
                        <span className="mx-2 text-noble-500">|</span>
                        <Link
                            href="#"
                            className="text-sm text-noble-300 hover:text-stem-green-500"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
