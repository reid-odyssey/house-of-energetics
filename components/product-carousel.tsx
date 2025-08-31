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
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-200px" })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-orange-50"
      />
      
      {/* Floating Background Elements */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-mocha via-golden-amber to-bright-lime rounded-full blur-3xl"
      />

      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-display font-medium text-golden-amber-600 mb-8">
              Sophisticated. <span className="text-mocha">Grounded.</span>
              <br />
              <span className="text-energetic-red">Transformative.</span>
            </h2>
            <Button className="bg-energetic-red hover:bg-energetic-red-600 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Learn More
            </Button>
          </motion.div>

          {/* Carousel */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ y: 50, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className={`aspect-square rounded-lg bg-gradient-to-br ${product.color} p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105`}>
                    <div className="w-full h-full bg-white/20 rounded-md backdrop-blur-sm flex flex-col items-center justify-center text-center">
                      <motion.div
                        animate={{ 
                          rotate: [0, 5, -5, 0],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5
                        }}
                        className="bg-golden-amber rounded-full p-4 mb-6"
                      >
                        ⚡
                      </motion.div>
                      <h3 className="text-white font-display font-medium text-sm mb-2">
                        {product.name}
                      </h3>
                      <p className="text-white/80 text-xs leading-tight">
                        {product.description.substring(0, 60)}...
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
