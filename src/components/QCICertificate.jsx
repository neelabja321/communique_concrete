import { motion } from 'framer-motion';
import SectionHeader from './common/SectionHeader';

const QCICertificate = () => {
  return (
    <section id="qci-certificate" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          badge="Quality Assurance"
          title="QCI Certification"
          description="Details coming soon"
        />
        
        <div className="mt-12 text-center text-gray-600">
          <p>QCI Certificate information will be updated shortly.</p>
        </div>
      </div>
    </section>
  );
};

export default QCICertificate;