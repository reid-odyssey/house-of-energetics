import { Navigation } from "@/components/navigation"
import { AnimatedHero } from "@/components/animated-hero"
import { MailingListOverlap } from "@/components/mailing-list-overlap"
import { ProductHeroSections } from "@/components/product-hero-sections"
import { ProductCarousel } from "@/components/product-carousel"
import { FeaturesSection } from "@/components/features-section"
import { Footer } from "@/components/footer"
import { SmoothScroll } from "@/components/smooth-scroll"

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <main className="min-h-screen bg-background">
        <Navigation />
        <AnimatedHero />
        <MailingListOverlap />
        <ProductHeroSections />
        <FeaturesSection />
        <ProductCarousel />
        <Footer />
      </main>
    </>
  )
}
