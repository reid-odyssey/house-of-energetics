"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Left Menu Items */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/energetics" className="text-gray-700 hover:text-golden-amber px-3 py-2 text-sm font-medium transition-colors dark:text-gray-300 dark:hover:text-golden-amber">
              Energetics Practice
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-golden-amber px-3 py-2 text-sm font-medium transition-colors dark:text-gray-300 dark:hover:text-golden-amber">
              Holistic Products
            </Link>
          </div>

          {/* Centered Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Logo />
            </Link>
          </div>

          {/* Right Menu Items */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-700 hover:text-golden-amber px-3 py-2 text-sm font-medium transition-colors dark:text-gray-300 dark:hover:text-golden-amber">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-golden-amber px-3 py-2 text-sm font-medium transition-colors dark:text-gray-300 dark:hover:text-golden-amber">
                Contact
              </Link>
            </div>
            <ThemeToggle />
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/energetics" className="text-gray-700 hover:text-golden-amber block px-3 py-2 text-base font-medium">
                Energetics Practice
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-golden-amber block px-3 py-2 text-base font-medium">
                Holistic Products
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-golden-amber transition-colors duration-200 block px-3 py-2 text-base font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-golden-amber block px-3 py-2 text-base font-medium">
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
