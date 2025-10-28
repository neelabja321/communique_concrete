import { motion } from 'framer-motion'
import SectionHeader from './common/SectionHeader'

/**
 * Product catalog data structure
 * Each product category contains:
 * - category: The name/title of the concrete category
 * - items: Array of specific products/variants in that category
 */

const products = [
  {
    category: "Normal Concrete",
    items: ["Normal Concrete up to M50 Grade"]
  },
  {
    category: "High Performance Concrete / Special Concrete",
    items: [
      "High Strength Concrete (up to M70)",
      "Self-Compacting Concrete (SCC) & High Flow Concrete (HFC)",
      "Early Strength Concrete (M20, M25, M30, M40 – 100% Strength in 3day/7days)",
      "Delay Set Concrete (M20 to M50 – Concrete with retention up to 5 hrs.)",
      "Polypropylene Fiber reinforced Concrete (PPF) - (M20 to M40)",
      "Steel Fiber reinforced Concrete (SFRC) - (M25 – M40)"
    ]
  }
]

const Products = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Solutions"
          title="Our Products"
          description="We offer tailored mix designs using the latest technological advances in superplastisizers and unique concrete design techniques."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <motion.div 
              key={index}
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow ${
                product.items.length === 1 ? 'md:col-span-1' : 'md:col-span-2'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{product.category}</h3>
              </div>
              
              <ul className="grid gap-3 md:grid-cols-2">
                
                {product.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex} 
                    className={`flex items-start ${product.items.length === 1 ? 'md:col-span-2' : ''}`}
                  >
                    <svg className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              
            </motion.div>
            
          ))}
          

        </div>
      </div>
    </section>
  )
}

export default Products