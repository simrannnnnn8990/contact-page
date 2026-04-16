import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f9fafb] text-gray-900">

        {/* NAVBAR */}
        <nav className="w-full flex items-center justify-between px-6 md:px-16 py-4 bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
          
          <h1 className="text-2xl font-bold tracking-tight">
            Write<span className="text-blue-600">Nest</span>
          </h1>

          <div className="hidden md:flex gap-8 text-gray-600 font-medium">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <Link href="/contact" className="hover:text-blue-600 transition">Contact Us</Link>
          </div>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:scale-105 transition">
            Get Quote
          </button>
        </nav>

        {children}

      </body>
    </html>
  );
}