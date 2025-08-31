import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "Original",
    description: "A clean, pure canvas for your energy needs.",
    icon: "🌿",
    color: "bg-green-50 border-green-200"
  },
  {
    id: 2,
    name: "Citrus Burst",
    description: "A refreshing blend of natural citrus extracts and energizing botanicals.",
    icon: "🍊",
    color: "bg-orange-50 border-orange-200"
  },
  {
    id: 3,
    name: "Berry Blend",
    description: "A powerful combination of antioxidant-rich berries and natural energy.",
    icon: "🫐",
    color: "bg-purple-50 border-purple-200"
  },
  {
    id: 4,
    name: "Mint Fresh",
    description: "A cooling mint infusion with invigorating natural compounds.",
    icon: "🌱",
    color: "bg-emerald-50 border-emerald-200"
  },
  {
    id: 5,
    name: "Tropical Fusion",
    description: "An exotic blend of tropical fruits and energizing plant extracts.",
    icon: "🥥",
    color: "bg-yellow-50 border-yellow-200"
  },
  {
    id: 6,
    name: "Herbal Harmony",
    description: "A balanced mix of traditional herbs and modern energy science.",
    icon: "🌿",
    color: "bg-green-50 border-green-200"
  }
]

export function ProductShowcase() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Six Flavors. Infinite Possibilities.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each blend is carefully crafted to deliver pure, natural energy while supporting your wellness journey.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <Card key={product.id} className={`${product.color} hover:shadow-lg transition-shadow duration-300`}>
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{product.icon}</div>
                <CardTitle className="text-xl font-semibold">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 mb-4">
                  {product.description}
                </CardDescription>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
            Shop All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
