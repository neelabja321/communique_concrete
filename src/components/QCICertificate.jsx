import { motion } from 'framer-motion';
import { Award, CheckCircle, X } from 'lucide-react';
import { useState } from 'react';
import SectionHeader from './common/SectionHeader';

const QCICertificate = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "RMC Capability Certification",
      subtitle: "The scope of certification covers production control of ready mix concrete as per building meterials and & Technology promotion council (BMTPC) criteria.",

      image: "/images/certificates/COMMUNIQUE CONCRETE - RMC_JALAN PLANT_page-0001.jpg",
      year: "2025",
    
    },
    {
      id: 2,
      title: "QCI Certification",
      subtitle: "The scope of certification covers production control of ready mix concrete as per building meterials and & Technology promotion council (BMTPC) criteria.",
      
      image: "/images/certificates/QCI CERTIFICATE COMMUNIQUE CONCRETE (KHARDAH) - RMC_page-0001.jpg",
      year: "2025",
    
    },
    {
      id: 3,
      title: "ISO 9001:2015",
      subtitle: "Quality Management System",

      image: "/images/certificates/3706-COMMUNIQUE_CONCRETE._page-0001.jpg",
      year: "2025",
      features: ["Security", "Availability", "Confidentiality"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="qci-certificate" className="py-20 relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          badge="Quality Assurance"
          title="Our Certifications"
          description="Industry-recognized certifications demonstrating our commitment to excellence and compliance"
        />

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certificates.map((cert) => (
            <motion.div key={cert.id} variants={itemVariants} className="group relative">
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-72 overflow-hidden cursor-pointer">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain bg-white transition-transform duration-500"
                    onClick={() => setSelectedImage(cert)}
                  />

                  <div className="absolute inset-0 bg-black/80 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                    <p className="text-xs text-blue-300 mb-3">{cert.subtitle}</p>

                  
                  </div>

                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md flex items-center gap-2">
                    <Award className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-semibold">{cert.year}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center border border-blue-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our certifications show our focus on quality, security, and global standards.
          </p>
        </motion.div>
      </div>

      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="relative max-w-4xl w-full px-4">
            <img src={selectedImage.image} alt={selectedImage.title} className="w-full object-contain max-h-[90vh]" />
            <button className="absolute top-4 right-4 text-white" onClick={() => setSelectedImage(null)}>
              <X className="w-8 h-8" />
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default QCICertificate;
