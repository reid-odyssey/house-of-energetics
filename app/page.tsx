import { Navigation } from "@/components/navigation"
import { AnimatedHero } from "@/components/animated-hero"
import { MailingListOverlap } from "@/components/mailing-list-overlap"
import { ProductHeroSections } from "@/components/product-hero-sections"
import { FeaturesSection } from "@/components/features-section"
import { Footer } from "@/components/footer"
import { SmoothScroll } from "@/components/smooth-scroll"

export default function Home() {
  console.log('Home page rendering...')
  console.log('COSMIC_MOUNT_PATH:', process.env.COSMIC_MOUNT_PATH)
  
  return (
    <>
      <SmoothScroll />
      <main className="min-h-screen bg-background">
        <div style={{ position: 'fixed', top: 0, left: 0, background: 'red', color: 'white', padding: '5px', zIndex: 9999 }}>
          Debug: Page loaded at {new Date().toISOString()}
        </div>
        <Navigation />
        <AnimatedHero />
        <MailingListOverlap />
        <ProductHeroSections />
        <FeaturesSection />
        <Footer />
      </main>
    </>
  )
}
