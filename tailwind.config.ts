import type { Config } from 'tailwindcss';

export default {
    darkMode: ['class'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Noble Black
                noble: {
                    100: "var(--noble-100)",
                    200: "var(--noble-200)",
                    300: "var(--noble-300)",
                    400: "var(--noble-400)",
                    500: "var(--noble-500)",
                    600: "var(--noble-600)",
                    700: "var(--noble-700)",
                    800: "var(--noble-800)",
                    900: "var(--noble-900)",
                },
                // Day Blue
                "day-blue": {
                    100:"var(--day-blue-100)",
                    200:"var(--day-blue-200)",
                    300:"var(--day-blue-300)",
                    400:"var(--day-blue-400)",
                    500:"var(--day-blue-500)",
                    600:"var(--day-blue-600)",
                    700:"var(--day-blue-700)",
                    800:"var(--day-blue-800)",
                    900:"var(--day-blue-900)",
                },
                // Stem Green
                "stem-green": {
                    100: "var(--stem-green-100)",
                    200: "var(--stem-green-200)",
                    300: "var(--stem-green-300)",
                    400: "var(--stem-green-400)",
                    500: "var(--stem-green-500)",
                    600: "var(--stem-green-600)",
                    700: "var(--stem-green-700)",
                    800: "var(--stem-green-800)",
                    900: "var(--stem-green-900)",
                },
                // Heisenberg Blue
                "heisenberg-blue": {
                    100: "var(--heisenberg-blue-100)",
                    200: "var(--heisenberg-blue-200)",
                    300: "var(--heisenberg-blue-300)",
                    400: "var(--heisenberg-blue-400)",
                    500: "var(--heisenberg-blue-500)",
                    600: "var(--heisenberg-blue-600)",
                    700: "var(--heisenberg-blue-700)",
                    800: "var(--heisenberg-blue-800)",
                    900: "var(--heisenberg-blue-900)",
                },
                // Purple Blue
                "purple-blue": {
                    100: "var(--purple-blue-100)",
                    200: "var(--purple-blue-200)",
                    300: "var(--purple-blue-300)",
                    400: "var(--purple-blue-400)",
                    500: "var(--purple-blue-500)",
                    600: "var(--purple-blue-600)",
                    700: "var(--purple-blue-700)",
                    800: "var(--purple-blue-800)",
                    900: "var(--purple-blue-900)",
                },
                // Sunglow
                sunglow: {
                    100: "var(--sunglow-100)",
                    200: "var(--sunglow-200)",
                    300: "var(--sunglow-300)",
                    400: "var(--sunglow-400)",
                    500: "var(--sunglow-500)",
                    600: "var(--sunglow-600)",
                    700: "var(--sunglow-700)",
                    800: "var(--sunglow-800)",
                    900: "var(--sunglow-900)",
                },
                // Happy Orange
                "happy-orange": {
                    100: "var(--happy-orange-100)",
                    600: "var(--happy-orange-600)",
                    900: "var(--happy-orange-900)",
                },
                // Electric Green
                "electric-green": {
                    100: "var(--electric-green-100)",
                    400: "var(--electric-green-400)",
                    900: "var(--electric-green-900)",
                },
                // Red Power
                "red-power": {
                    100: "var(--red-power-100)",
                    600: "var(--red-power-600)",
                    900: "var(--red-power-900)",
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
        },
    },
    plugins: [],
} satisfies Config;
