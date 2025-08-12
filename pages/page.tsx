"use client"
import { useState } from "react"
import type { Project } from "../types"
import PortfolioCard from "../components/PortfolioCard"
import SectionTitle from "../components/SectionTitle"

const initialProjects: Project[] = [
  {
    id: "1",
    title: "Modern Loft Apartment",
    category: "Interior Design",
    description:
      "A complete redesign of a downtown loft, focusing on open space, natural light, and industrial-chic elements. Custom furniture and smart home integration.",
    longDescription:
      "This project involved extensive space planning, material sourcing, and collaboration with architects and contractors to achieve a seamless blend of comfort and style. The lighting design was a key feature, utilizing a mix of ambient, task, and accent lighting to create different moods throughout the day. Sustainability was also a core consideration, with eco-friendly materials and energy-efficient appliances being prioritized.",
    imageUrls: ["/modern-loft.png", "/industrial-loft-living.png", "/modern-smart-kitchen.png"],
    technologies: ["AutoCAD", "3D Modeling", "Smart Home Integration"],
    duration: "4 months",
    role: "Lead Interior Designer",
  },
  {
    id: "2",
    title: "Eco-Friendly Cafe Branding",
    category: "Graphic Design",
    description:
      "Full branding package for a new sustainable cafe, including logo, menu design, packaging, and digital assets. Earthy tones and minimalist style.",
    longDescription:
      "The brand identity aimed to convey warmth, naturalness, and a commitment to sustainability. This involved creating custom illustrations, selecting eco-friendly printing techniques, and designing a responsive website that highlighted the cafe's story and offerings. Social media templates were also developed to ensure brand consistency across all platforms.",
    imageUrls: ["/eco-friendly-cafe-logo.png", "/sustainable-packaging.png", "/placeholder-pg7m9.png"],
    technologies: ["Adobe Illustrator", "Photoshop", "InDesign"],
    duration: "2 months",
    role: "Brand Designer",
  },
  {
    id: "3",
    title: "Tech Startup Website UI/UX",
    category: "Web Design",
    description:
      "User interface and user experience design for a cutting-edge tech startup. Focused on intuitive navigation and a futuristic aesthetic.",
    longDescription:
      "The project included user research, wireframing, prototyping, and user testing to ensure a seamless and engaging experience. A comprehensive design system was developed to maintain consistency and scalability. Animations and micro-interactions were used to enhance usability and provide visual delight.",
    imageUrls: ["/tech-startup-homepage.png", "/futuristic-ui.png", "/mobile-app-interface.png"],
    technologies: ["Figma", "React", "TypeScript", "Framer Motion"],
    duration: "3 months",
    role: "UI/UX Designer",
  },
  {
    id: "4",
    title: "Luxury Retail Space",
    category: "Interior Design",
    description:
      "Interior concept and execution for a high-end fashion boutique. Emphasized opulent materials, ambient lighting, and unique display solutions.",
    longDescription:
      "The design aimed to create an exclusive and memorable shopping experience. Custom-designed fixtures, curated art pieces, and a sophisticated color palette were key elements. The layout was carefully planned to optimize customer flow and product visibility.",
    imageUrls: ["/luxury-fashion-boutique.png", "/high-end-retail-fixtures.png", "/boutique-ambient-lighting.png"],
    technologies: ["3D Visualization", "Lighting Design", "Custom Fixtures"],
    duration: "5 months",
    role: "Interior Design Lead",
  },
  {
    id: "5",
    title: "Artisan Bakery Packaging",
    category: "Graphic Design",
    description:
      "Charming and rustic packaging design for an artisan bakery. Hand-drawn illustrations and sustainable materials were key features.",
    longDescription:
      "The packaging aimed to reflect the bakery's commitment to quality ingredients and traditional baking methods. A range of packaging formats was designed, from bread bags to pastry boxes, all unified by a cohesive visual identity.",
    imageUrls: ["/artisan-bakery-packaging.png", "/hand-drawn-bakery.png", "/rustic-bread-packaging.png"],
    technologies: ["Hand Illustration", "Adobe Creative Suite", "Sustainable Materials"],
    duration: "6 weeks",
    role: "Package Designer",
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
      "/digital-nature-tech-fusion.png",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    technologies: ["Procreate", "Photoshop", "Digital Painting"],
    duration: "3 months",
    role: "Digital Artist",
  },
]

type FilterType = "All" | "Interior Design" | "Graphic Design" | "Web Design" | "Fine Arts"

export default function HomePage() {
  const [filter, setFilter] = useState<FilterType>("All")

  const filteredProjects = initialProjects.filter((project) => filter === "All" || project.category === filter)

  const categories: FilterType[] = ["All", "Interior Design", "Graphic Design", "Web Design", "Fine Arts"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-6 py-12">
        <SectionTitle
          title="My Portfolio"
          subtitle="A collection of my favorite projects spanning interior, graphic, and web design."
        />

        <div className="mb-8 flex flex-wrap justify-center gap-2 md:gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105
                ${
                  filter === category
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                    : "bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600 shadow-md"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredProjects.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-600 dark:text-slate-400 text-xl py-10">
            No projects found for this category. Stay tuned for updates!
          </p>
        )}
      </div>
    </div>
  )
}
