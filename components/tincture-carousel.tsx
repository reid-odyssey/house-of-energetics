"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const tinctures = [
  {
    id: 1,
    name: "SOUL CLARITY",
    subtitle: "Intuitive Decision Making",
    description: "Premium botanical blend designed to enhance clarity and align with your authentic purpose.",
    benefits: ["Enhanced Intuition", "Clear Decision Making", "Purpose Alignment"],
    color: "from-mocha to-golden-amber"
  },
  {
    id: 2,
    name: "EXECUTIVE FOCUS",
    subtitle: "Mental Clarity & Resilience", 
    description: "Adaptogenic formula supporting mental clarity and emotional resilience during high-pressure moments.",
    benefits: ["Mental Clarity", "Stress Resilience", "Peak Performance"],
    color: "from-golden-amber to-bright-lime"
  },
  {
    id: 3,
    name: "ENERGETIC BALANCE",
    subtitle: "Mind-Body Harmony",
    description: "Holistic wellness formula harmonizing mind, body, and spirit for conscious leaders.",
    benefits: ["Energy Balance", "Holistic Wellness", "Mind-Body Connection"],
    color: "from-bright-lime to-mocha"
  },
  {
    id: 4,
    name: "TRANSFORMATION",
    subtitle: "Breakthrough Catalyst",
    description: "Advanced energetics blend combining ancient wisdom with modern neuroscience.",
    benefits: ["Breakthrough Results", "Transformation", "Ancient Wisdom"],
    color: "from-mocha-600 to-golden-amber-600"
  },
  {
    id: 5,
    name: "GROUNDING RITUAL",
    subtitle: "Stability & Presence",
    description: "Grounding botanical formula for stability, presence, and centered leadership.",
    benefits: ["Grounding", "Presence", "Centered Leadership"],
    color: "from-golden-amber-600 to-mocha-700"
  }
]

export function TinctureCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % tinctures.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + tinctures.length) % tinctures.length)
  }

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-mocha-50 to-golden-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-display font-medium text-gray-900 mb-4">
            Premium <span className="text-mocha">Tincture</span> Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
            Meticulously crafted botanical formulations designed for the modern executive seeking 
            authentic transformation through ancient wisdom.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Carousel */}
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px]"
          >
            {/* Product Info */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-3xl lg:text-4xl font-display font-medium text-mocha mb-2">
                  {tinctures[currentIndex].name}
                </h3>
                <p className="text-lg text-golden-amber-600 font-medium mb-4">
                  {tinctures[currentIndex].subtitle}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6 font-sans">
                  {tinctures[currentIndex].description}
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-gray-900 uppercase tracking-wide">
                  Key Benefits
                </h4>
                <div className="flex flex-wrap gap-2">
                  {tinctures[currentIndex].benefits.map((benefit, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-lime-100 text-lime-800 rounded-full text-sm font-medium"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              <Button 
                size="lg"
                className="bg-energetic hover:bg-energetic-600 text-white px-large py-base rounded-md font-medium"
              >
                Explore Formula
              </Button>
            </motion.div>

            {/* Product Visual */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className={`aspect-square rounded-lg bg-gradient-to-br ${tinctures[currentIndex].color} p-large shadow-2xl`}>
                <div className="w-full h-full bg-white/10 rounded-md backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
                  {/* Background botanical image */}
                  <div className="absolute inset-0 opacity-30">
                    <Image
                      src="/home/images/136A2808.jpg"
                      alt="Botanical herbs"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-12 space-x-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full w-12 h-12 border-2 border-mocha text-mocha hover:bg-mocha hover:text-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            {/* Dots */}
            <div className="flex space-x-3">
              {tinctures.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-mocha scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full w-12 h-12 border-2 border-mocha text-mocha hover:bg-mocha hover:text-white"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
