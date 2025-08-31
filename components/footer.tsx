import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white dark:bg-gray-950 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-medium text-white">HOUSEOFENERGETICS</h3>
            <p className="text-gray-400 dark:text-gray-300 text-sm font-sans">
              Modern energetics practice designed for today's conscious leaders.
            </p>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-medium font-sans">Energetics Practice</h4>
            <ul className="space-y-2 text-sm text-gray-400 font-sans">
              <li><Link href="/soul-mission-clarity" className="hover:text-golden-amber dark:hover:text-golden-amber">Soul Mission Clarity</Link></li>
              <li><Link href="/executive-grounding" className="hover:text-golden-amber dark:hover:text-golden-amber">Executive Grounding</Link></li>
              <li><Link href="/energetic-alignment" className="hover:text-golden-amber dark:hover:text-golden-amber">Energetic Alignment</Link></li>
              <li><Link href="/transformation-catalyst" className="hover:text-golden-amber dark:hover:text-golden-amber">Transformation Catalyst</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-medium font-sans">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400 dark:text-gray-300 font-sans">
              <li><Link href="/about" className="hover:text-golden-amber dark:hover:text-golden-amber">About Us</Link></li>
              <li><Link href="/philosophy" className="hover:text-golden-amber dark:hover:text-golden-amber">Brand Philosophy</Link></li>
              <li><Link href="/conscious-leadership" className="hover:text-golden-amber dark:hover:text-golden-amber">Conscious Leadership</Link></li>
              <li><Link href="/contact" className="hover:text-golden-amber dark:hover:text-golden-amber">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-medium font-sans">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400 dark:text-gray-300 font-sans">
              <li><Link href="/faq" className="hover:text-golden-amber dark:hover:text-golden-amber">FAQ</Link></li>
              <li><Link href="/getting-started" className="hover:text-golden-amber dark:hover:text-golden-amber">Getting Started</Link></li>
              <li><Link href="/practice-guides" className="hover:text-golden-amber dark:hover:text-golden-amber">Practice Guides</Link></li>
              <li><Link href="/support" className="hover:text-golden-amber dark:hover:text-golden-amber">Support</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 dark:text-gray-300 font-sans">
            © 2025 HOUSEOFENERGETICS. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-gray-400 dark:text-gray-300 hover:text-golden-amber dark:hover:text-golden-amber font-sans">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-gray-400 dark:text-gray-300 hover:text-golden-amber dark:hover:text-golden-amber font-sans">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
