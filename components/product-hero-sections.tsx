"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "SOUL CLARITY",
    subtitle: "Intuitive Decision Making",
    description: "Premium botanical blend designed to enhance clarity and align with your authentic purpose. Meticulously crafted for the modern executive seeking authentic transformation through ancient wisdom.",
    benefits: ["Enhanced Intuition", "Clear Decision Making", "Purpose Alignment"],
    color: "from-mocha to-amber",
    layout: "left"
  },
  {
    id: 2,
    name: "EXECUTIVE FOCUS",
    subtitle: "Mental Clarity & Resilience", 
    description: "Adaptogenic formula supporting mental clarity and emotional resilience during high-pressure moments. Designed for conscious leaders navigating complex business landscapes.",
    benefits: ["Mental Clarity", "Stress Resilience", "Peak Performance"],
    color: "from-amber to-lime",
    layout: "right"
  },
  {
    id: 3,
    name: "ENERGETIC BALANCE",
    subtitle: "Mind-Body Harmony",
    description: "Holistic wellness formula harmonizing mind, body, and spirit for conscious leaders. Bridging ancient wisdom with modern neuroscience for breakthrough results.",
    benefits: ["Energy Balance", "Holistic Wellness", "Mind-Body Connection"],
    color: "from-lime to-mocha",
    layout: "left"
  },
  {
    id: 4,
    name: "TRANSFORMATION",
    subtitle: "Breakthrough Catalyst",
    description: "Advanced energetics blend combining ancient wisdom with modern business acumen. The ultimate catalyst for executives ready to transform their leadership approach.",
    benefits: ["Breakthrough Results", "Transformation", "Ancient Wisdom"],
    color: "from-mocha-600 to-amber-600",
    layout: "right"
  }
]

export function ProductHeroSections() {
  return (
    <div className="space-y-0">
      {products.map((product, index) => (
        <ProductHeroSection key={product.id} product={product} index={index} />
      ))}
    </div>
  )
}

function ProductHeroSection({ product, index }: { product: typeof products[0], index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section 
      ref={ref} 
      className={`min-h-[50vh] flex items-center py-10 ${
        index % 2 === 0 ? 'bg-gradient-to-br from-mocha-50 to-golden-amber-50' : 'bg-gradient-to-br from-golden-amber-50 to-bright-lime-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
          product.layout === 'right' ? 'lg:grid-flow-col-dense' : ''
        }`}>
          
          {/* Content */}
          <motion.div
            initial={{ x: product.layout === 'left' ? -100 : 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`space-y-8 ${product.layout === 'right' ? 'lg:col-start-2' : ''}`}
          >
            <div>
              <motion.h2 
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl lg:text-6xl font-display font-medium text-mocha mb-4"
              >
                {product.name}
              </motion.h2>
              
              <motion.p 
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-golden-amber-600 font-medium mb-6"
              >
                {product.subtitle}
              </motion.p>
              
              <motion.p 
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg text-gray-600 leading-relaxed mb-8 font-sans"
              >
                {product.description}
              </motion.p>
            </div>

            {/* Benefits */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              <h4 className="text-sm font-medium text-gray-900 uppercase tracking-wide">
                Key Benefits
              </h4>
              <div className="flex flex-wrap gap-3">
                {product.benefits.map((benefit, benefitIndex) => (
                  <motion.span 
                    key={benefitIndex}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 + (benefitIndex * 0.1) }}
                    className="px-4 py-2 bg-bright-lime-100 text-bright-lime-800 rounded-full text-sm font-medium"
                  >
                    {benefit}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button 
                size="lg"
                className="bg-energetic-red hover:bg-energetic-red-600 text-white px-large py-base rounded-md font-medium text-lg"
              >
                Explore {product.name}
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ x: product.layout === 'left' ? 100 : -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`relative ${product.layout === 'right' ? 'lg:col-start-1' : ''}`}
          >
            <div className={`aspect-square rounded-2xl bg-gradient-to-br ${product.color} p-8 shadow-2xl relative overflow-hidden`}>
              {/* Background Image */}
              <div className="absolute inset-0 opacity-40">
                <Image
                  src={index % 2 === 0 ? "/images/136A2676.jpg" : "/images/136A2808.jpg"}
                  alt={`${product.name} botanical background`}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute top-8 right-8 w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm"
              />
              
              <motion.div
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, -5, 5, 0]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute bottom-8 left-8 w-12 h-12 bg-white/15 rounded-full backdrop-blur-sm"
              />

              {/* Product Badge */}
              <motion.div
                animate={{ rotate: [0, 3, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-lime text-black rounded-full px-4 py-2 font-medium text-sm shadow-lg"
              >
                PREMIUM
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
