import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                The Perfect
                <br />
                <span className="text-green-600">Energy</span>
              </h1>
              <div className="space-y-2">
                <h2 className="text-xl lg:text-2xl font-semibold text-gray-700">
                  Simple. Natural. Powerful.
                </h2>
                <p className="text-lg text-gray-600 max-w-lg">
                  A versatile, energy-powered way to reimagine your favorite wellness routine.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                Shop Now
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                Learn More
              </Button>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-sm text-gray-600">Natural</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">Zero</div>
                <div className="text-sm text-gray-600">Additives</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">Pure</div>
                <div className="text-sm text-gray-600">Energy</div>
              </div>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-green-50 to-green-100 rounded-3xl flex items-center justify-center">
              <div className="w-80 h-80 bg-green-200 rounded-full flex items-center justify-center">
                <div className="text-6xl">🌿</div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
              <div className="text-2xl">⚡</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg">
              <div className="text-2xl">🌱</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
