import "./globals.css";
import Header from "@/Layouts/Header";
import { ThemeProvider } from "next-themes";
import Footer from "@/Layouts/Footer";
import React from "react";
import BackgroundVideo from "@/Layouts/BackgroundVideo";

export const metadata = {
    title: "Dzero - Null | Portfolio",
    description: "Built with Next.js and Tailwind CSS",
    icons: {
        icon: '/Remove-bg.ai_1745424329358.png', // yoki .png bo'lsa: '/favicon.png'
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head />
        <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
        >
            <div className="bg-white text-black relative z-10 dark:bg-[#1e1e1e] dark:text-white transition-colors duration-300">
                <BackgroundVideo />
                <Header />
                {children}
                <Footer />
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}
