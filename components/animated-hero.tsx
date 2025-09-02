"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"

const heroVariations = [
  {
    staticTitle: "Transforming leadership",
    staticPrefix: "through",
    animatedText: "ancient wisdom",
    subtitle: "for today's conscious leaders",
    background: "from-gray-800 via-[#7D5A3B] to-[#D4A843]",
    textColor: "text-white",
    subtitleColor: "text-amber-300",
    image: "/home/images/image-from-rawpixel-id-16410290-png.png"
  },
  {
    staticTitle: "Transforming leadership",
    staticPrefix: "through",
    animatedText: "energetics",
    subtitle: "for visionary executives",
    background: "from-gray-800 via-gray-600 to-[#7D5A3B]",
    textColor: "text-white",
    subtitleColor: "text-orange-200",
    image: "/home/images/image-from-rawpixel-id-16410290-png.png"
  },
  {
    staticTitle: "Transforming leadership",
    staticPrefix: "through",
    animatedText: "soul mission alignment",
    subtitle: "for breakthrough results",
    background: "from-gray-800 via-gray-700 to-[#D4A843]",
    textColor: "text-white",
    subtitleColor: "text-green-200",
    image: "/home/images/image-from-rawpixel-id-16410290-png.png"
  },
  {
    staticTitle: "Transforming leadership",
    staticPrefix: "through",
    animatedText: "conscious evolution",
    subtitle: "for transformational impact",
    background: "from-gray-900 via-gray-700 to-[#DC542A]",
    textColor: "text-white",
    subtitleColor: "text-pink-200",
    image: "/home/images/image-from-rawpixel-id-16410290-png.png"
  },
  {
    staticTitle: "Transforming leadership",
    staticPrefix: "through",
    animatedText: "authentic purpose",
    subtitle: "for lasting impact",
    background: "from-gray-800 via-gray-600 to-[#7D5A3B]",
    textColor: "text-white",
    subtitleColor: "text-cyan-200",
    image: "/home/images/image-from-rawpixel-id-16410290-png.png"
  }
]

export function AnimatedHero() {
  const ref = useRef(null)
  const [currentVariation, setCurrentVariation] = useState(0)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  
  // Cycle through variations every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVariation((prev) => (prev + 1) % heroVariations.length)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [])
  
  const currentHero = heroVariations[currentVariation]

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden dark:bg-gray-900">
      {/* Animated Background */}
      <motion.div 
        style={{ y }}
        className={`absolute inset-0 bg-gradient-to-br ${currentHero.background} transition-all duration-1000 ease-in-out`}
      >
      </motion.div>

        {/* Circular Transition Overlay - From Bottom Center */}
        <motion.div
          key={`transition-${currentVariation}`}
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute bg-white/30 rounded-full"
          style={{
            transformOrigin: "center bottom",
            zIndex: 5,
            bottom: "-50vh",
            left: "20%",
            transform: "translateX(-50%)",
            width: "150vh",
            height: "150vh"
          }}
        />

      {/* Content - Split Layout */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 min-h-screen flex flex-col"
      >
        {/* Top 1/3 - Text Content */}
        <div className="flex-1 flex items-start justify-center pt-16">
          <div className={`max-w-[90vw] mx-auto px-8 sm:px-12 lg:px-16 text-center ${currentHero.textColor} transition-colors duration-2000 ease-in-out`}>
            {/* Static Title + Animated Text */}
            <div className="mb-6">
              {/* Static part - never changes - 50% larger */}
              <div className="mb-4">
                <h1 className="inline text-[6rem] lg:text-[8rem] font-display font-medium leading-tight">{currentHero.staticTitle}</h1>
              </div>
              
              {/* Second line with static 'through' and animated words */}
              <div className="text-[4rem] lg:text-[5rem] font-display font-medium leading-relaxed">
                {/* Static 'through' - never animates */}
                <span className="inline-block mr-2">through</span>
                {/* Animated words container */}
                <motion.span
                  key={`animated-text-${currentVariation}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  className="inline-block"
                >
                  {currentHero.animatedText.split(' ').map((word, index) => (
                    <motion.span
                      key={`${currentVariation}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.2 + (index * 0.1),
                        ease: "easeOut"
                      }}
                      className="inline-block mr-2"
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.span>
              </div>
            </div>
            
            {/* Subtitle and Button on same line */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center justify-center gap-3"
            >
              {/* Centered Subtitle */}
              <motion.div
                key={`subtitle-wrapper-${currentVariation}`}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="relative overflow-hidden"
              >
                <p className={`${currentHero.subtitleColor} text-xl lg:text-2xl font-medium transition-colors duration-1000`}>
                  {currentHero.subtitle.split(' ').map((word, index) => (
                    <motion.span
                      key={`${currentVariation}-sub-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.3 + (index * 0.08),
                        ease: "easeOut"
                      }}
                      className="inline-block mr-2"
                    >
                      {word}
                    </motion.span>
                  ))}
                </p>
              </motion.div>
              
              {/* Button right next to subtitle */}
              <Button 
                size="lg" 
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30 px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300"
              >
                start today →
              </Button>
            </motion.div>
          </div>
        </div>
        
        {/* Lower 2/3 - Animated Graphics */}
        <div className="flex-[2] relative">
          {/* Current Product */}
          <motion.div
            key={`current-product-${currentVariation}`}
            initial={{ opacity: 1, y: "0%", rotateZ: 0 }}
            animate={{ opacity: 0, y: "50%", rotateZ: 15 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-[42rem] h-[42rem] overflow-hidden shadow-2xl" style={{clipPath: "ellipse(50% 80% at 50% 50%)"}}>
              <Image
                src={currentHero.image}
                alt={`${currentHero.animatedText} screenshot`}
                width={384}
                height={384}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </motion.div>
          
          {/* Next Product - Arc Animation */}
          <motion.div
            key={`next-product-${currentVariation}`}
            initial={{ opacity: 0, y: "50%", rotateZ: -15 }}
            animate={{ opacity: 1, y: "0%", rotateZ: 0 }}
            transition={{ duration: 1.2, delay: 0.15, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-[42rem] h-[42rem] overflow-hidden shadow-2xl"
              style={{clipPath: "ellipse(50% 80% at 50% 50%)"}}
            >
              <Image
                src={currentHero.image}
                alt={`${currentHero.animatedText} screenshot`}
                width={384}
                height={384}
                className="w-full h-full object-cover"
                unoptimized
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

    </section>
  )
}
