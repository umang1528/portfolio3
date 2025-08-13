
import type React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import type { Project } from "../types"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"

interface PortfolioCardProps {
  project: Project
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const navigate = useNavigate()

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? project.imageUrls.length - 1 : prevIndex - 1))
  }

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImageIndex((prevIndex) => (prevIndex === project.imageUrls.length - 1 ? 0 : prevIndex + 1))
  }

  const goToImage = (e: React.MouseEvent, index: number) => {
    e.stopPropagation()
    setCurrentImageIndex(index)
  }

  const handleCardClick = () => {
    navigate(`/project/${project.id}`)
  }

  const handleViewDetails = (e: React.MouseEvent) => {
    e.stopPropagation()
    navigate(`/project/${project.id}`)
  }

  return (
    <div
      className="group/card bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-3 hover:scale-[1.02] cursor-pointer border border-slate-200/50 dark:border-slate-700/50"
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleCardClick()
      }}
    >
      <div className="relative aspect-[4/3] overflow-hidden group/slider">
        {/* Image container that slides */}
        <div
          className="flex h-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {project.imageUrls.map((url, index) => (
            <img
              key={index}
              src={url || "/placeholder.svg"}
              alt={`${project.title} - Image ${index + 1}`}
              className="w-full h-full object-cover flex-shrink-0 group-hover/card:scale-110 transition-transform duration-700"
              loading="lazy"
            />
          ))}
        </div>

        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover/card:opacity-40 transition-opacity duration-500"></div>

        {/* Category Badge with improved styling */}
        <div className="absolute top-4 right-4 z-20">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg backdrop-blur-sm border border-white/20">
            {project.category}
          </span>
        </div>

        {/* Navigation Buttons with improved styling */}
        {project.imageUrls.length > 1 && (
          <>
            <button
              onClick={prevImage}
              aria-label="Previous image"
              className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-blue-500/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 z-20 opacity-0 group-hover/slider:opacity-100 hover:scale-110"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextImage}
              aria-label="Next image"
              className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-blue-500/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 z-20 opacity-0 group-hover/slider:opacity-100 hover:scale-110"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        {/* Enhanced Dots Indicator */}
        {project.imageUrls.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {project.imageUrls.map((_, index) => (
              <button
                key={index}
                onClick={(e) => goToImage(e, index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 hover:scale-125
                  ${
                    currentImageIndex === index
                      ? "bg-blue-500 scale-125 ring-2 ring-white/50"
                      : "bg-white/60 hover:bg-white/90"
                  }`}
                aria-label={`Go to image ${index + 1}`}
                aria-current={currentImageIndex === index ? "true" : "false"}
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-6 space-y-4">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent group-hover/card:from-blue-600 group-hover/card:to-purple-600 transition-all duration-500">
            {project.title}
          </h3>

          {/* Project meta info */}
          <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            {project.duration && (
              <span className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                {project.duration}
              </span>
            )}
            {project.role && (
              <span className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                {project.role}
              </span>
            )}
          </div>

          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed line-clamp-3 group-hover/card:line-clamp-none transition-all duration-500">
            {project.description}
          </p>
        </div>

        {/* Technologies tags */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 rounded-md">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex items-center justify-between pt-2">
          <button
            onClick={handleViewDetails}
            className="text-blue-600 dark:text-blue-400 font-semibold hover:text-purple-600 dark:hover:text-purple-400 transition-colors group-hover/card:underline flex items-center gap-1 text-sm"
          >
            View Details
            <span className="transform group-hover/card:translate-x-1 transition-transform duration-300">→</span>
          </button>

          <div className="flex items-center gap-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
            {project.liveUrl && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(project.liveUrl, "_blank")
                }}
                className="p-2 text-slate-400 hover:text-blue-500 transition-colors"
                aria-label="View live site"
              >
                <ExternalLink className="w-4 h-4" />
              </button>
            )}
            {project.githubUrl && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(project.githubUrl, "_blank")
                }}
                className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                aria-label="View source code"
              >
                <Github className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard
