// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-black text-white">
      <div className="text-xl font-bold">
        DEW Solutions
      </div>

      <div className="flex gap-4">
        {/* Call Button */}
        <a
          href="tel:+16107518710"
          className="px-4 py-2 rounded-md border border-white hover:bg-white hover:text-black transition"
        >
          Call Now
        </a>

        {/* Book Demo Button */}
        <Link
          href="https://cal.com/dew-solutions/demo-meeting"
          target="_blank"
          className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition"
        >
          Book a Demo
        </Link>
      </div>
    </nav>
  );
}