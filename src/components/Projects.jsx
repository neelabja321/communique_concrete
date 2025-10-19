import { motion } from 'framer-motion'
import SectionHeader from './common/SectionHeader'

const projectCategories = [
  {
    title: "Government Sector",
    projects: {
      "Healthcare": [
        "Neuroscience Institute",
        "JIMS Hospital",
        "SSKM Hospital",
        "Sambhunath Pandit Hospital",
        "Howrah Hospital",
        "Bangur Hospital"
      ],
      "Education": [
        "Hindi University",
        "Mrinalini Dutta College"
      ],
      "Infrastructure": [
        "Sankrail ROB Project",
        "Bauria ROB Project"
      ],
      "Railways": [
        "Shalimar Station project",
        "Santragachi Station project",
        "Liluah Workshop project",
        "Kanchrapara Workshop project",
        "Dakhineswar Railway Station",
        "Dumdum Railway Station"
      ],
      "Others": [
        "Shyamnagar WTP (PHE)",
        "2nd Hooghly Bridge (HRBC)"
      ]
    }
  },
  {
    title: "Industries",
    projects: {
      "Manufacturing & Logistics": [
        "Jindal India LTD",
        "Fort Gloster Industries",
        "Srijan Logistics Park",
        "Asbesco India Pvt Ltd",
        "Kamals Ice Cream",
        "Mescab India Pvt. Ltd.",
        "Vinayak Oil & Fat",
        "Haldiram"
      ]
    }
  },
  {
    title: "Real Estate Developers",
    projects: [
      "Siddha Waterfront llp",
      "Srijan Realty Pvt Ltd",
      "Eden Group",
      "Swastic Group",
      "KIC Group",
      "Sky Line Group",
      "Nikki Group",
      "Jain Group"
    ]
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Work"
          title="Our Projects"
          description="Trusted by leading organizations across various sectors"
        />

        <div className="space-y-12">
          {projectCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">{category.title}</h3>
              
              {category.title === "Real Estate Developers" ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {category.projects.map((project, projectIndex) => (
                    <div 
                      key={projectIndex}
                      className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      {project}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-8">
                  {Object.entries(category.projects).map(([sector, projects], sectorIndex) => (
                    <div key={sectorIndex}>
                      <h4 className="text-xl font-medium text-gray-900 mb-4">{sector}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {projects.map((project, projectIndex) => (
                          <div 
                            key={projectIndex}
                            className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            {project}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects