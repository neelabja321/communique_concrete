import { motion } from 'framer-motion'

const facilities = [
  {
    title: "Manufacturing Plants",
    description: "3 M1 Plants in West Bengal (60cum/hr capacity) and 1 M1 Plant in Jamshedpur with Twin Shaft Mixer technology.",
    icon: "🏭"
  },
  {
    title: "Transit Mixers",
    description: "Fleet of 30 transit mixers in West Bengal and 12 in Jamshedpur, with rated capacity of 7 & 8 Cum.",
    icon: "🚛"
  },
  {
    title: "Concrete Pumps",
    description: "5 concrete pumps in West Bengal and 2 in Jamshedpur, including Aquarius and Putzmeister models.",
    icon: "⚙️"
  },
  {
    title: "Quality Control",
    description: "State-of-the-art quality control systems adhering to IS 4926 standards for manufacturing and testing.",
    icon: "✔️"
  }
]

const Facilities = () => {
  return (
    <section id="facilities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Facilities</h2>
          <p className="text-lg text-gray-600">
            State-of-the-art infrastructure to deliver quality concrete solutions across regions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{facility.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900">{facility.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{facility.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div 
          className="mt-16 bg-white p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality System Highlights</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-600">Raw material quality checks before use</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-600">Regular physical testing of materials</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-600">NABL accredited third-party testing</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-600">Regular equipment calibration</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default Facilities