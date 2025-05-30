import "./globals.css";
import Header from "@/Layouts/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-[#1e1e1e] text-[#1e1e1e] dark:text-white">
      <Header />
        {children}
      </body>
    </html>
  );
}
