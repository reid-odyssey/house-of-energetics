"use client"

import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRef, useState } from "react"

export function MailingListOverlap() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  return (
    <section className="relative -mt-10 z-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-mocha to-golden-amber rounded-lg shadow-2xl p-4 lg:p-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-white">
              <motion.h2 
                initial={{ x: -50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl lg:text-4xl font-display font-medium mb-4"
              >
                Join our conscious
                <br />
                leadership community
              </motion.h2>
              
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex items-center mb-6"
              >
                <div className="bg-golden-amber rounded-full p-3 mr-4">
                  <div className="text-2xl">⚡</div>
                </div>
                <div className="text-sm font-sans">
                  Access exclusive energetics practices, soul mission guidance, and transformative tools for conscious leaders
                </div>
              </motion.div>
            </div>

            {/* Right Form */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name*"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-base py-3 rounded-md bg-white/90 backdrop-blur-sm border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-golden-amber focus:outline-none font-sans"
                />
                <input
                  type="text"
                  placeholder="Last name*"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-base py-3 rounded-md bg-white/90 backdrop-blur-sm border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-golden-amber focus:outline-none font-sans"
                />
              </div>
              
              <input
                type="email"
                placeholder="Email address*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-base py-3 rounded-md bg-white/90 backdrop-blur-sm border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-golden-amber focus:outline-none font-sans"
              />
              
              <select className="w-full px-base py-3 rounded-md bg-white/90 backdrop-blur-sm border-0 text-gray-900 focus:ring-2 focus:ring-golden-amber focus:outline-none font-sans">
                <option value="">Country*</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="UK">United Kingdom</option>
              </select>
              
              <input
                type="text"
                placeholder="Zip code*"
                className="w-full px-base py-3 rounded-md bg-white/90 backdrop-blur-sm border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-golden-amber focus:outline-none font-sans"
              />
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  className="bg-bright-lime hover:bg-bright-lime-600 text-black px-large py-base rounded-md font-medium"
                >
                  JOIN THE MOVEMENT
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
