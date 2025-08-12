import PortfolioCard from "../components/PortfolioCard"
import type { Project } from "../types"
import img1 from'../img/coffee/coffe.jpg';
import img2 from'../img/coffee/coffe2.jpg';


const portfolioProjects: Project[] = [
  {
    id: "1",
    title: "Modern Loft Apartment",
    category: "Interior Design",
    description:
      "A complete redesign of a downtown loft, focusing on open space, natural light, and industrial-chic elements. Custom furniture and smart home integration.",
    imageUrls: [
      img1,
      img2,
      "https://picsum.photos/seed/loft-3/800/600",
      "https://picsum.photos/seed/loft-4/800/600",
      "https://picsum.photos/seed/loft-5/800/600",
    ],
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
     imageUrls: [
      img1,
      img2,
      "https://picsum.photos/seed/loft-3/800/600",
      "https://picsum.photos/seed/loft-4/800/600",
      "https://picsum.photos/seed/loft-5/800/600",
    ],
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
    imageUrls: [
      img1,
      img2,
      "https://picsum.photos/seed/loft-3/800/600",
      "https://picsum.photos/seed/loft-4/800/600",
      "https://picsum.photos/seed/loft-5/800/600",
    ],
    technologies: ["Figma", "React", "TypeScript", "Framer Motion"],
    duration: "3 months",
    role: "UI/UX Designer",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: "4",
    title: "Tech Startup Website UI/UX",
    category: "Web Design",
    description:
      "User interface and user experience design for a cutting-edge tech startup. Focused on intuitive navigation and a futuristic aesthetic.",
    imageUrls: [
      img1,
      img2,
      "https://picsum.photos/seed/loft-3/800/600",
      "https://picsum.photos/seed/loft-4/800/600",
      "https://picsum.photos/seed/loft-5/800/600",
    ],
    technologies: ["Figma", "React", "TypeScript", "Framer Motion"],
    duration: "3 months",
    role: "UI/UX Designer",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: "5",
    title: "Tech Startup Website UI/UX",
    category: "Web Design",
    description:
      "User interface and user experience design for a cutting-edge tech startup. Focused on intuitive navigation and a futuristic aesthetic.",
    imageUrls: [
      img1,
      img2,
      "https://picsum.photos/seed/loft-3/800/600",
      "https://picsum.photos/seed/loft-4/800/600",
      "https://picsum.photos/seed/loft-5/800/600",
    ],
    technologies: ["Figma", "React", "TypeScript", "Framer Motion"],
    duration: "3 months",
    role: "UI/UX Designer",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: "6",
    title: "Tech Startup Website UI/UX",
    category: "Web Design",
    description:
      "User interface and user experience design for a cutting-edge tech startup. Focused on intuitive navigation and a futuristic aesthetic.",
    imageUrls: [
      img1,
      img2,
      "https://picsum.photos/seed/loft-3/800/600",
      "https://picsum.photos/seed/loft-4/800/600",
      "https://picsum.photos/seed/loft-5/800/600",
    ],
    technologies: ["Figma", "React", "TypeScript", "Framer Motion"],
    duration: "3 months",
    role: "UI/UX Designer",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-blur bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container backdrop-blur-md bg-white/5 mx-auto px-6 py-16 rounded-lg mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent mb-4">
            My Portfolio
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Explore my creative journey through various design and development projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
