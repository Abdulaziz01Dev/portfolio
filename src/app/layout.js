import "./globals.css";
import Header from "@/Layouts/Header";
import { ThemeProvider } from 'next-themes'

export const metadata = {
    title: 'Dzero - Null | Portfolio',
    description: 'Built with Next.js and Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
     <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem className="bg-white dark:bg-[#1e1e1e] text-[#1e1e1e] dark:text-white">
            <Header />
            {children}
        </ThemeProvider>
     </body>
    </html>
  );
}
