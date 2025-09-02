"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "SOUL MISSION CLARITY",
    description: "Premium botanical tincture designed to enhance intuitive decision-making and align with your authentic purpose.",
    color: "from-mocha to-amber",
    textColor: "text-mocha",
    bgColor: "bg-mocha-50"
  },
  {
    id: 2,
    name: "EXECUTIVE GROUNDING",
    description: "Adaptogenic blend that supports mental clarity and emotional resilience during high-pressure leadership moments.",
    color: "from-amber to-lime",
    textColor: "text-amber-700",
    bgColor: "bg-amber-50"
  },
  {
    id: 3,
    name: "ENERGETIC ALIGNMENT",
    description: "Holistic wellness formula that harmonizes mind, body, and spirit for conscious leaders seeking peak performance.",
    color: "from-lime to-mocha",
    textColor: "text-energetic-700",
    bgColor: "bg-energetic-50"
  },
  {
    id: 4,
    name: "TRANSFORMATION CATALYST",
    description: "Advanced energetics practice toolkit combining ancient wisdom with modern neuroscience for breakthrough results.",
    color: "from-mocha-600 to-amber-600",
    textColor: "text-mocha-700",
    bgColor: "bg-mocha-100"
  },
  {
    id: 5,
    name: "CONSCIOUS LEADERSHIP",
    description: "Comprehensive program bridging ancient wisdom with modern business strategy for transformational leadership.",
    color: "from-energetic to-mocha",
    textColor: "text-energetic",
    bgColor: "bg-energetic-50"
  }
]

export function ProductCarousel() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-br from-gray-800 via-gray-600 to-[#7D5A3B]">
      <div className="max-w-full mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        {/* Section Header */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-display font-medium text-white mb-4">
            Five Formulas. <span className="text-golden-amber">Infinite</span>
            <br />
            <span className="text-energetic-red">Possibilities.</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            A sophisticated approach to conscious leadership and energetic alignment.
          </p>
        </motion.div>

        {/* Product Grid - Egglife Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ y: 80, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 overflow-hidden">
                {/* Product Image/Visual */}
                <div className={`aspect-[3/4] bg-gradient-to-br ${product.color} relative overflow-hidden`}>
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                    className="absolute inset-4 bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center"
                  >
                    <div className="text-6xl text-white/90">⚡</div>
                  </motion.div>
                  
                  {/* Product Badge */}
                  <div className="absolute top-4 right-4 bg-white text-mocha rounded-full px-3 py-1 text-xs font-bold">
                    PREMIUM
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-display font-medium text-lg text-mocha mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {product.description.substring(0, 80)}...
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
