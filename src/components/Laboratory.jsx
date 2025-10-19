import { motion } from 'framer-motion'
import SectionHeader from './common/SectionHeader'

const labEquipment = [
  {
    category: "Testing Equipment",
    items: [
      "Concrete Batching Plant (1 CuM)",
      "Compression Testing Machine (3000 KN)",
      "Electronic Weigh Bridge (60 MT)",
      "Digital Thermometer",
      "Hot Air Oven"
    ]
  },
  {
    category: "Measurement Tools",
    items: [
      "Vernier Calipers",
      "Steel Scale",
      "Hydrometer",
      "Glass Cylinders",
      "I.S Sieves"
    ]
  },
  {
    category: "Sample Preparation",
    items: [
      "Cement Mortar Vibrator",
      "Cube Moulds for Concrete",
      "Cube Moulds for Cement",
      "Bulk Density Cylinders",
      "Concrete Mixer (Pan Type)"
    ]
  }
]

const testingPlans = [
  {
    material: "Cement",
    tests: [
      "Visual Inspection",
      "Dry Sieve Analysis",
      "Normal Consistency",
      "Initial & Final Setting Time",
      "Compressive Strength"
    ]
  },
  {
    material: "Aggregates",
    tests: [
      "Sieve Analysis",
      "Moisture Content",
      "Specific Gravity",
      "Water Absorption",
      "Impact Value"
    ]
  },
  {
    material: "Fresh Concrete",
    tests: [
      "Slump Test",
      "Yield Test",
      "Temperature",
      "Air Content",
      "Unit Weight"
    ]
  }
]

const Laboratory = () => {
  return (
    <section id="laboratory" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Quality Assurance"
          title="Laboratory & Testing"
          description="State-of-the-art laboratory equipped with modern testing facilities"
        />

        {/* Lab Equipment Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Laboratory Equipment</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {labEquipment.map((category, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h4 className="text-xl font-medium text-gray-900 mb-4">{category.category}</h4>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testing Plans Section */}
        <motion.div
          className="bg-gray-50 rounded-xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Testing Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testingPlans.map((plan, index) => (
              <div key={index} className="space-y-4">
                <h4 className="text-xl font-medium text-gray-900">{plan.material}</h4>
                <ul className="space-y-3">
                  {plan.tests.map((test, testIndex) => (
                    <li key={testIndex} className="flex items-start">
                      <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                      <span className="text-gray-600">{test}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Laboratory