"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ProductCarousel } from "@/components/product-carousel"

const products = [
  {
    id: 1,
    name: "SOUL CLARITY",
    subtitle: "Intuitive Decision Making",
    description: "Premium botanical blend designed to enhance clarity and align with your authentic purpose. Meticulously crafted for the modern executive seeking authentic transformation through ancient wisdom.",
    benefits: ["Enhanced Intuition", "Clear Decision Making", "Purpose Alignment"],
    color: "from-gray-800 via-[#7D5A3B] to-[#D4A843]",
    layout: "left"
  },
  {
    id: 2,
    name: "EXECUTIVE FOCUS",
    subtitle: "Mental Clarity & Resilience", 
    description: "Adaptogenic formula supporting mental clarity and emotional resilience during high-pressure moments. Designed for conscious leaders navigating complex business landscapes.",
    benefits: ["Mental Clarity", "Stress Resilience", "Peak Performance"],
    color: "from-gray-800 via-gray-600 to-[#7D5A3B]",
    layout: "right"
  },
  {
    id: 3,
    name: "ENERGETIC BALANCE",
    subtitle: "Mind-Body Harmony",
    description: "Holistic wellness formula harmonizing mind, body, and spirit for conscious leaders. Bridging ancient wisdom with modern neuroscience for breakthrough results.",
    benefits: ["Energy Balance", "Holistic Wellness", "Mind-Body Connection"],
    color: "from-gray-800 via-gray-700 to-[#D4A843]",
    layout: "left"
  },
  {
    id: 4,
    name: "TRANSFORMATION",
    subtitle: "Breakthrough Catalyst",
    description: "Advanced energetics blend combining ancient wisdom with modern business acumen. The ultimate catalyst for executives ready to transform their leadership approach.",
    benefits: ["Breakthrough Results", "Transformation", "Ancient Wisdom"],
    color: "from-gray-900 via-gray-700 to-[#DC542A]",
    layout: "right"
  }
]

export function ProductHeroSections() {
  return (
    <div className="space-y-0">
      {products.slice(0, 2).map((product, index) => (
        <ProductHeroSection key={product.id} product={product} index={index} />
      ))}
      {/* Product Carousel after Executive Focus */}
      <ProductCarousel />
      {products.slice(2).map((product, index) => (
        <ProductHeroSection key={product.id} product={product} index={index + 2} />
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
      className={`min-h-[80vh] flex items-center py-20 bg-gradient-to-br ${product.color}`}
    >
      <div className="max-w-full mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 w-full">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${
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
                className="text-4xl lg:text-6xl font-display font-medium text-white mb-4"
              >
                {product.name}
              </motion.h2>
              
              <motion.p 
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-amber-300 font-medium mb-6"
              >
                {product.subtitle}
              </motion.p>
              
              <motion.p 
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg text-white/80 leading-relaxed mb-8 font-sans"
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
              <h4 className="text-sm font-medium text-white uppercase tracking-wide">
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
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30 px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300"
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
            <div className="aspect-square rounded-2xl bg-white/10 backdrop-blur-sm p-8 shadow-2xl relative overflow-hidden w-3/4 h-3/4 mx-auto">
              {/* Background Image */}
              <div className="absolute inset-0 opacity-40">
                <Image
                  src="/home/images/image-from-rawpixel-id-16410290-png.png"
                  alt={`${product.name} botanical background`}
                  fill
                  className="object-cover"
                  unoptimized
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
