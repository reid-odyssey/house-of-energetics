"use client"

import { motion, useInView } from "framer-motion"
import { Zap, Target, TrendingUp, Heart } from "lucide-react"
import { useRef } from "react"

export function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Zap,
      title: "Energetic",
      description: "Dynamic and powerful approach to conscious leadership"
    },
    {
      icon: Target,
      title: "Minimalist", 
      description: "Clean and precise design philosophy"
    },
    {
      icon: TrendingUp,
      title: "Progressive",
      description: "Forward-thinking approach to modern business"
    },
    {
      icon: Heart,
      title: "Holistic",
      description: "Integrated wellness approach bridging all aspects"
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div 
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  index === 0 ? 'bg-bright-lime' : 
                  index === 1 ? 'bg-mocha' : 
                  index === 2 ? 'bg-golden-amber' : 
                  'bg-energetic-red'
                }`}>
                  <IconComponent className={`w-8 h-8 ${
                    index === 1 || index === 3 ? 'text-white' : 'text-black'
                  }`} />
                </div>
                <h3 className="text-xl font-display font-medium text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 font-sans">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
