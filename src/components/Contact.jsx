import { motion } from 'framer-motion'
import { useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline'

/**
 * Contact component handles the contact form and displays company contact information
 * Features:
 * - Interactive contact form with validation
 * - Form submission handling with loading states
 * - Success message display
 * - Company contact details with animated icons
 * - Responsive layout for all screen sizes
 */
const Contact = () => {
  // State management for form submission and loading states
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Form data state initialization
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  /**
   * Handles the contact form submission
   * - Prevents default form submission
   * - Shows loading state
   * - Simulates API call (replace with actual API call)
   * - Shows success message
   * - Resets form after success
   * 
   * @param {Event} e - Form submission event
   */
  /**
   * Handles the contact form submission by opening the user's email client
   * with pre-filled information from the form
   * @param {Event} e - Form submission event
   */
  const handleSubmit = (e) => {
    e.preventDefault()

    // Construct email body with form data
    const emailBody = `
Hello Communique Concrete,    
${formData.message}

Name: ${formData.name}
Company: ${formData.company}
Phone: ${formData.phone}
Email: ${formData.email}

`.trim()

    // Construct mailto URL with encoded parameters
    const mailtoUrl = `mailto:info@communiqueconcrete.com?subject= Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(emailBody)}`    // Open email client
    window.location.href = mailtoUrl

    // Show success message briefly
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      })
    }, 2000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Decorative elements */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 -top-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-2" />
            <div className="w-10 h-1 bg-blue-600 mx-auto" />
          </motion.div>
          <motion.div
            className="inline-block p-2 px-4 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-4"
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Let's Connect
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch With Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our concrete solutions? We're here to help! Reach out to us and our team will get back to you shortly.
          </p>
        </motion.div>

        {/* Animated connecting dots background */}
        <div className="absolute inset-0 grid grid-cols-8 gap-4 pointer-events-none opacity-10">
          {[...Array(64)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-blue-500 rounded-full"
              initial={{ opacity: 0.1 }}
              animate={{
                opacity: [0.1, 0.5, 0.1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                delay: i * 0.1,
                repeat: Infinity,
              }}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-20 h-20">
              <div className="absolute top-4 left-4 w-2 h-2 bg-blue-500 rounded-full" />
              <div className="absolute top-4 left-8 w-2 h-2 bg-blue-400 rounded-full" />
              <div className="absolute top-8 left-4 w-2 h-2 bg-blue-400 rounded-full" />
            </div>
            <div className="absolute bottom-0 right-0 w-20 h-20 transform rotate-180">
              <div className="absolute top-4 left-4 w-2 h-2 bg-blue-500 rounded-full" />
              <div className="absolute top-4 left-8 w-2 h-2 bg-blue-400 rounded-full" />
              <div className="absolute top-8 left-4 w-2 h-2 bg-blue-400 rounded-full" />
            </div>
            {/* Direct contact options */}
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-gray-700 mb-2">Prefer to email directly?</p>
              <a
                href="mailto:info@communiqueconcrete.com"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                info@communiqueconcrete.com
              </a>
              <p className="text-gray-600 text-sm mt-2">
                Or fill out the form below to compose your message
              </p>
            </div>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-white bg-opacity-95 flex items-center justify-center z-10"
              >
                <div className="text-center">
                  <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Opening Email Client</h3>
                  <p className="text-gray-600">Your message has been prepared</p>
                </div>
              </motion.div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 
                  text-white focus:outline-none focus:ring-2 focus:ring-blue-500 
                  focus:ring-offset-2 transition-all duration-300 transform hover:scale-[1.02]
                  flex items-center justify-center space-x-2"
              >
                <EnvelopeIcon className="w-5 h-5" />
                <span>Compose Email</span>
              </button>

              {/* Alternative contact methods */}
              <div className="mt-6 text-center relative">
                <motion.div
                  className="absolute -left-4 -right-4 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1 }}
                />
                <motion.p
                  className="text-gray-600 mb-4 mt-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Other ways to reach us:
                </motion.p>
                <div className="grid grid-cols-2 gap-4">
                  <motion.a
                    href="tel:+919474546259"
                    className="flex items-center justify-center p-3 text-gray-600 hover:text-blue-600 bg-gray-50 rounded-lg hover:bg-blue-50 transition-all transform hover:scale-105"
                    whileHover={{ y: -2 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <PhoneIcon className="w-5 h-5 mr-2" />
                    <span>Call Us</span>
                  </motion.a>
                  <motion.a
                    href="https://wa.me/919474546259?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20concrete%20services.%20Please%20share%20details.%20Thank%20you."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-3 text-gray-600 hover:text-green-600 bg-gray-50 rounded-lg hover:bg-green-50 transition-all transform hover:scale-105"
                    whileHover={{ y: -2 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <span>WhatsApp</span>
                  </motion.a>
                </div>
              </div>

              {/* Decorative footer element */}
              <motion.div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-16 h-1 bg-blue-200 rounded-full mb-2" />
                <div className="w-10 h-1 bg-blue-200 rounded-full mx-auto" />
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-8 text-white relative overflow-hidden">
              {/* Animated wave effect */}
              <motion.div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                }}
                animate={{
                  x: [0, -100],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <h3 className="text-2xl font-semibold mb-6">Reach Us</h3>
              <div className="space-y-6">
                <motion.div
                  className="flex items-start space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPinIcon className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-2">Our Locations</h4>
                    <div className="space-y-2 text-blue-100">
                      <p>West Bengal: Jalan Complex, Bagnan, Khardah</p>
                      <p>Jharkhand: Jamshedpur</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <PhoneIcon className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-2">Phone</h4>
                    <p className="text-blue-100">+91 9474546259</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <EnvelopeIcon className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-2">Email</h4>
                    <p className="text-blue-100">info@communiqueconcrete.com</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ClockIcon className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-2">Business Hours</h4>
                    <div className="text-blue-100">
                      <p>Sunday - Saturday : 00:00 AM - 23:59 PM</p>
                      <p>Excepts National Holidays</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact