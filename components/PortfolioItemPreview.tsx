
import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import type { Project } from "../types"
import {
  ArrowLeft,
  Calendar,
  User,
  Zap,
  Target,
  ChevronLeft,
  ChevronRight,
  Play,
  Code,
  Lightbulb,
  Award,
} from "lucide-react"
import img1 from'../img/coffee/coffe.jpg'
import img2 from'../img/coffee/coffe2.jpg'

const portfolioProjects: Project[] = [
  {
    id: "1",
    title: "Modern Loft Apartment",
    category: "Interior Design",
    description:
      "A complete redesign of a downtown loft, focusing on open space, natural light, and industrial-chic elements. Custom furniture and smart home integration.",
    longDescription:
      "This project involved extensive space planning, material sourcing, and collaboration with architects and contractors to achieve a seamless blend of comfort and style. The lighting design was a key feature, utilizing a mix of ambient, task, and accent lighting to create different moods throughout the day. Sustainability was also a core consideration, with eco-friendly materials and energy-efficient appliances being prioritized.",
 imageUrls: [
      img1,
      img2,
      "https://picsum.photos/seed/loft-3/800/600",
      "https://picsum.photos/seed/loft-4/800/600",
      "https://picsum.photos/seed/loft-5/800/600",
    ],    technologies: ["AutoCAD", "3D Modeling", "Smart Home Integration"],
    duration: "4 months",
    role: "Lead Interior Designer",
    features: [
      "Open-concept living space design",
      "Industrial-chic aesthetic with modern comfort",
      "Smart home automation integration",
      "Custom furniture and lighting solutions",
      "Sustainable material selection",
    ],
    challenges: [
      "Balancing industrial elements with comfort",
      "Integrating smart home technology seamlessly",
      "Maximizing natural light in urban setting",
    ],
  },
  {
    id: "2",
    title: "Eco-Friendly Cafe Branding",
    category: "Graphic Design",
    description:
      "Full branding package for a new sustainable cafe, including logo, menu design, packaging, and digital assets. Earthy tones and minimalist style.",
    longDescription:
      "The brand identity aimed to convey warmth, naturalness, and a commitment to sustainability. This involved creating custom illustrations, selecting eco-friendly printing techniques, and designing a responsive website that highlighted the cafe's story and offerings. Social media templates were also developed to ensure brand consistency across all platforms.",
 imageUrls: [
      img1,
      img2,
      "https://picsum.photos/seed/loft-3/800/600",
      "https://picsum.photos/seed/loft-4/800/600",
      "https://picsum.photos/seed/loft-5/800/600",
    ],     technologies: ["Adobe Illustrator", "Photoshop", "InDesign"],
    duration: "2 months",
    role: "Brand Designer",
    features: [
      "Complete visual identity system",
      "Eco-friendly packaging design",
      "Digital and print marketing materials",
      "Social media template library",
      "Responsive website design",
    ],
    challenges: [
      "Conveying sustainability through visual design",
      "Creating cohesive brand across multiple touchpoints",
      "Balancing modern aesthetics with natural elements",
    ],
  },
  {
    id: "3",
    title: "Tech Startup Website UI/UX",
    category: "Web Design",
    description:
      "User interface and user experience design for a cutting-edge tech startup. Focused on intuitive navigation and a futuristic aesthetic.",
    longDescription:
      "The project included user research, wireframing, prototyping, and user testing to ensure a seamless and engaging experience. A comprehensive design system was developed to maintain consistency and scalability. Animations and micro-interactions were used to enhance usability and provide visual delight.",
 imageUrls: [
      img1,
      img2,
      "https://picsum.photos/seed/loft-3/800/600",
      "https://picsum.photos/seed/loft-4/800/600",
      "https://picsum.photos/seed/loft-5/800/600",
    ],     technologies: ["Figma", "React", "TypeScript", "Framer Motion"],
    duration: "3 months",
    role: "UI/UX Designer",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    features: [
      "User-centered design approach",
      "Comprehensive design system",
      "Interactive prototypes and animations",
      "Mobile-first responsive design",
      "Accessibility-focused implementation",
    ],
    challenges: [
      "Balancing futuristic aesthetics with usability",
      "Creating scalable design system",
      "Optimizing performance with complex animations",
    ],
  },
  {
    id: "4",
    title: "Luxury Retail Space",
    category: "Interior Design",
    description:
      "Interior concept and execution for a high-end fashion boutique. Emphasized opulent materials, ambient lighting, and unique display solutions.",
    longDescription:
      "The design aimed to create an exclusive and memorable shopping experience. Custom-designed fixtures, curated art pieces, and a sophisticated color palette were key elements. The layout was carefully planned to optimize customer flow and product visibility.",
 imageUrls: [
      img1,
      img2,
      "https://picsum.photos/seed/loft-3/800/600",
      "https://picsum.photos/seed/loft-4/800/600",
      "https://picsum.photos/seed/loft-5/800/600",
    ],     technologies: ["3D Visualization", "Lighting Design", "Custom Fixtures"],
    duration: "5 months",
    role: "Interior Design Lead",
    features: [
      "Luxury material selection and sourcing",
      "Custom fixture design and fabrication",
      "Strategic lighting design for product display",
      "Optimized customer flow and experience",
      "Curated art and decor integration",
    ],
    challenges: [
      "Creating exclusive atmosphere within budget",
      "Balancing aesthetics with functional retail needs",
      "Coordinating with multiple vendors and craftspeople",
    ],
  },
  {
    id: "5",
    title: "Artisan Bakery Packaging",
    category: "Graphic Design",
    description:
      "Charming and rustic packaging design for an artisan bakery. Hand-drawn illustrations and sustainable materials were key features.",
    longDescription:
      "The packaging aimed to reflect the bakery's commitment to quality ingredients and traditional baking methods. A range of packaging formats was designed, from bread bags to pastry boxes, all unified by a cohesive visual identity.",
 imageUrls: [
      img1,
      img2,
      "https://picsum.photos/seed/loft-3/800/600",
      "https://picsum.photos/seed/loft-4/800/600",
      "https://picsum.photos/seed/loft-5/800/600",
    ],     technologies: ["Hand Illustration", "Adobe Creative Suite", "Sustainable Materials"],
    duration: "6 weeks",
    role: "Package Designer",
    features: [
      "Hand-drawn illustration style",
      "Sustainable packaging materials",
      "Complete product line packaging system",
      "Brand storytelling through design",
      "Cost-effective production methods",
    ],
    challenges: [
      "Maintaining hand-crafted aesthetic in mass production",
      "Sourcing sustainable materials within budget",
      "Creating cohesive system across diverse product types",
    ],
  },
  {
    id: "6",
    title: "Digital Art Collection",
    category: "Fine Arts",
    description:
      "A series of digital artworks exploring themes of nature and technology. Created using various digital painting techniques.",
    longDescription:
      "This collection represents a fusion of organic forms with digital aesthetics, exploring the relationship between natural beauty and technological advancement. Each piece was carefully crafted using advanced digital painting techniques.",
     imageUrls: [
      img1,
      img2,
      "https://picsum.photos/seed/loft-3/800/600",
      "https://picsum.photos/seed/loft-4/800/600",
      "https://picsum.photos/seed/loft-5/800/600",
    ], 
    technologies: ["Procreate", "Photoshop", "Digital Painting"],
    duration: "3 months",
    role: "Digital Artist",
    features: [
      "Original digital artwork series",
      "Nature and technology theme exploration",
      "Advanced digital painting techniques",
      "High-resolution artwork suitable for print",
      "Cohesive artistic vision across collection",
    ],
    challenges: [
      "Balancing organic and digital aesthetics",
      "Developing consistent artistic style",
      "Creating meaningful narrative through visual art",
    ],
  },
]

export default function ProjectDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const project = portfolioProjects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 px-4">
        <div className="text-center space-y-4 sm:space-y-6 p-4 sm:p-8 max-w-md mx-auto">
          <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <Target className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-200">Project Not Found</h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            The project you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/portfolio")}
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </button>
        </div>
      </div>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.imageUrls.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.imageUrls.length) % project.imageUrls.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Enhanced Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated background elements - responsive sizing */}
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-32 h-32 sm:w-72 sm:h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-8 relative z-10">
          <button
            onClick={() => navigate("/portfolio")}
            className="group mb-4 sm:mb-8 inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-700 dark:text-slate-300 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl border border-slate-200/50 dark:border-slate-700/50 text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Portfolio
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Enhanced Project Info - responsive spacing and typography */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                  {project.category}
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 dark:from-slate-100 dark:via-slate-200 dark:to-slate-300 bg-clip-text text-transparent leading-tight">
                  {project.title}
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.longDescription || project.description}
                </p>
              </div>

              <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6">
                {project.duration && (
                  <div className="flex items-center space-x-3 p-3 sm:p-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-200/50 dark:border-slate-700/50">
                    <div className="p-1.5 sm:p-2 bg-blue-500/20 rounded-lg">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Duration</p>
                      <p className="text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300">
                        {project.duration}
                      </p>
                    </div>
                  </div>
                )}
                {project.role && (
                  <div className="flex items-center space-x-3 p-3 sm:p-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-200/50 dark:border-slate-700/50">
                    <div className="p-1.5 sm:p-2 bg-purple-500/20 rounded-lg">
                      <User className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Role</p>
                      <p className="text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300">
                        {project.role}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
                  >
                    <Play className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    View Live Site
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
                  >
                    <Code className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    View Code
                  </a>
                )}
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700">
                <img
                  src={project.imageUrls[currentImageIndex] || "/placeholder.svg"}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover transition-all duration-700"
                />

                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>

                {project.imageUrls.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 p-2 sm:p-3 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 touch-manipulation"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 p-2 sm:p-3 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 touch-manipulation"
                    >
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </>
                )}
              </div>

              {project.imageUrls.length > 1 && (
                <div className="flex justify-center mt-4 sm:mt-6 space-x-2 sm:space-x-3">
                  {project.imageUrls.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 touch-manipulation ${
                        currentImageIndex === index
                          ? "bg-blue-500 scale-125 ring-2 sm:ring-4 ring-blue-500/30"
                          : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500 hover:scale-110"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 space-y-12 sm:space-y-16 lg:space-y-20">
        {/* Technologies Section */}
        {project.technologies && (
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-orange-400/5 rounded-2xl sm:rounded-3xl"></div>
            <div className="relative p-4 sm:p-6 lg:p-8 xl:p-12 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-slate-200/50 dark:border-slate-700/50 shadow-xl">
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="p-2 sm:p-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg sm:rounded-xl">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 dark:text-slate-200">
                  Technologies Used
                </h2>
              </div>
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="group p-3 sm:p-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 rounded-lg sm:rounded-xl border border-slate-200/50 dark:border-slate-600/50 hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 block text-center">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Features Section */}
          {project.features && (
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-emerald-400/5 rounded-2xl sm:rounded-3xl"></div>
              <div className="relative p-4 sm:p-6 lg:p-8 xl:p-10 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-slate-200/50 dark:border-slate-700/50 shadow-xl">
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="p-2 sm:p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg sm:rounded-xl">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200">Key Features</h2>
                </div>
                <ul className="space-y-3 sm:space-y-4">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3 sm:space-x-4 group">
                      <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mt-0.5">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed group-hover:text-slate-800 dark:group-hover:text-slate-100 transition-colors duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Challenges Section */}
          {project.challenges && (
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-red-400/5 rounded-2xl sm:rounded-3xl"></div>
              <div className="relative p-4 sm:p-6 lg:p-8 xl:p-10 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-slate-200/50 dark:border-slate-700/50 shadow-xl">
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="p-2 sm:p-3 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg sm:rounded-xl">
                    <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200">
                    Challenges Overcome
                  </h2>
                </div>
                <ul className="space-y-3 sm:space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start space-x-3 sm:space-x-4 group">
                      <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mt-0.5">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed group-hover:text-slate-800 dark:group-hover:text-slate-100 transition-colors duration-300">
                        {challenge}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="text-center py-8 sm:py-12 lg:py-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl sm:rounded-3xl border border-blue-200/50 dark:border-blue-700/50 max-w-2xl mx-auto">
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                Interested in working together?
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                Let's discuss your next project and bring your ideas to life.
              </p>
            </div>
            <button
              onClick={() => navigate("/portfolio")}
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap text-sm sm:text-base"
            >
              View More Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
