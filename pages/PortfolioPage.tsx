import React, { useState } from 'react';
import { Project } from '../types';
import PortfolioCard from '../components/PortfolioCard';
import SectionTitle from '../components/SectionTitle';
import PortfolioItemPreview from '../components/PortfolioItemPreview'; // Import the new component
import img1 from '../img/coffee/coffe.jpg';
import img2 from '../img/coffee/coffe2.jpg';
import img3 from '../img/coffee/coffe3.jpg';
import grp1 from '../img/GRP/IM1.png';

const initialProjects: Project[] = [
  {
    id: '1',
    title: 'Modern Loft Apartment',
    category: 'Interior Design',
    description: 'A complete redesign of a downtown loft, focusing on open space, natural light, and industrial-chic elements. Custom furniture and smart home integration. This project involved extensive space planning, material sourcing, and collaboration with architects and contractors to achieve a seamless blend of comfort and style. The lighting design was a key feature, utilizing a mix of ambient, task, and accent lighting to create different moods throughout the day. Sustainability was also a core consideration, with eco-friendly materials and energy-efficient appliances being prioritized.',
    imageUrls: [
      img1,
      img2,
      'https://picsum.photos/seed/loft-3/800/600',
      'https://picsum.photos/seed/loft-4/800/600',
      'https://picsum.photos/seed/loft-5/800/600',
    ],
  },
  {
    id: '2',
    title: 'Eco-Friendly Cafe Branding',
    category: 'Graphic Design',
    description: 'Full branding package for a new sustainable cafe, including logo, menu design, packaging, and digital assets. Earthy tones and minimalist style. The brand identity aimed to convey warmth, naturalness, and a commitment to sustainability. This involved creating custom illustrations, selecting eco-friendly printing techniques, and designing a responsive website that highlighted the cafe\'s story and offerings. Social media templates were also developed to ensure brand consistency across all platforms.',
    imageUrls: [
      img3,
      'https://picsum.photos/seed/cafebrand-2/800/600',
      'https://picsum.photos/seed/cafebrand-3/800/600',
      'https://picsum.photos/seed/cafebrand-4/800/600',
    ],
  },
  {
    id: '3',
    title: 'Tech Startup Website UI/UX',
    category: 'Web Design',
    description: 'User interface and user experience design for a cutting-edge tech startup. Focused on intuitive navigation and a futuristic aesthetic. The project included user research, wireframing, prototyping, and user testing to ensure a seamless and engaging experience. A comprehensive design system was developed to maintain consistency and scalability. Animations and micro-interactions were used to enhance usability and provide visual delight.',
    imageUrls: [
      grp1,
      
      'https://picsum.photos/seed/techui-3/800/600',
      'https://picsum.photos/seed/techui-4/800/600',
      'https://picsum.photos/seed/techui-5/800/600',
      'https://picsum.photos/seed/techui-6/800/600',
    ],
  },
  {
    id: '4',
    title: 'Luxury Retail Space',
    category: 'Interior Design',
    description: 'Interior concept and execution for a high-end fashion boutique. Emphasized opulent materials, ambient lighting, and unique display solutions. The design aimed to create an exclusive and memorable shopping experience. Custom-designed fixtures, curated art pieces, and a sophisticated color palette were key elements. The layout was carefully planned to optimize customer flow and product visibility.',
    imageUrls: [
      'https://picsum.photos/seed/retail-1/800/600',
      'https://picsum.photos/seed/retail-2/800/600',
      'https://picsum.photos/seed/retail-3/800/600',
      'https://picsum.photos/seed/retail-4/800/600',
    ],
  },
  {
    id: '5',
    title: 'Artisan Bakery Packaging',
    category: 'Graphic Design',
    description: 'Charming and rustic packaging design for an artisan bakery. Hand-drawn illustrations and sustainable materials were key features. The packaging aimed to reflect the bakery\'s commitment to quality ingredients and traditional baking methods. A range of packaging formats was designed, from bread bags to pastry boxes, all unified by a cohesive visual identity.',
    imageUrls: [
      'https://picsum.photos/seed/bakerypack-1/800/600',
      'https://picsum.photos/seed/bakerypack-2/800/600',
      'https://picsum.photos/seed/bakerypack-3/800/600',
      'https://picsum.photos/seed/bakerypack-4/800/600',
      'https://picsum.photos/seed/bakerypack-5/800/600',
    ],
  },
  {
    id: '6',
    title: 'Corporate Office Rejuvenation',
    category: 'Interior Design',
    description: 'Transforming a dated corporate office into a vibrant, collaborative workspace. Included biophilic design elements and flexible work zones. The goal was to create an environment that fostered creativity, productivity, and employee well-being. This involved redesigning meeting rooms, creating breakout areas, improving acoustics, and integrating technology seamlessly.',
    imageUrls: [
      'https://picsum.photos/seed/office-1/800/600',
      'https://picsum.photos/seed/office-2/800/600',
      'https://picsum.photos/seed/office-3/800/600',
      'https://picsum.photos/seed/office-4/800/600',
    ],
  },

  {
    id: '7',
    title: 'lol',
    category: 'Fine Arts',
    description: 'Transforming a dated corporate office into a vibrant, collaborative workspace. Included biophilic design elements and flexible work zones. The goal was to create an environment that fostered creativity, productivity, and employee well-being. This involved redesigning meeting rooms, creating breakout areas, improving acoustics, and integrating technology seamlessly.',
    imageUrls: [
      'https://picsum.photos/seed/office-1/800/600',
      'https://picsum.photos/seed/office-2/800/600',
      'https://picsum.photos/seed/office-3/800/600',
      'https://picsum.photos/seed/office-4/800/600',
    ],
  },
  {
    id: '8',
    title: 'sketching',
    category: 'Fine Arts',
    description: 'Transforming a dated corporate office into a vibrant, collaborative workspace. Included biophilic design elements and flexible work zones. The goal was to create an environment that fostered creativity, productivity, and employee well-being. This involved redesigning meeting rooms, creating breakout areas, improving acoustics, and integrating technology seamlessly.',
    imageUrls: [
      'https://picsum.photos/seed/office-1/800/600',
      'https://picsum.photos/seed/office-2/800/600',
      'https://picsum.photos/seed/office-3/800/600',
      'https://picsum.photos/seed/office-4/800/600',
    ],
  },
];

type FilterType = 'All' | 'Interior Design' | 'Graphic Design' | 'Web Design' | 'Fine Arts';

const PortfolioPage: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('All');
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);

  const filteredProjects = initialProjects.filter(project => 
    filter === 'All' || project.category === filter
  );

  const categories: FilterType[] = ['All', 'Interior Design', 'Graphic Design', 'Web Design','Fine Arts'];

  const handleOpenPreview = (projectToPreview: Project) => {
    const index = filteredProjects.findIndex(p => p.id === projectToPreview.id);
    if (index !== -1) {
      setSelectedProjectIndex(index);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
  };

  const handleClosePreview = () => {
    setSelectedProjectIndex(null);
    document.body.style.overflow = ''; // Restore background scrolling
  };

  const handleNavigatePreview = (newIndex: number) => {
    if (newIndex >= 0 && newIndex < filteredProjects.length) {
      setSelectedProjectIndex(newIndex);
    }
  };


  return (
    <div>
      <SectionTitle title="My Portfolio" subtitle="A collection of my favorite projects spanning interior, graphic, and web design." />
      
      <div className="mb-8 flex flex-wrap justify-center gap-2 md:gap-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`interactive-cursor-target px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105
              ${filter === category 
                ? 'bg-gradient-to-r from-[var(--filter-button-active-bg-gradient-from)] to-[var(--filter-button-active-bg-gradient-to)] text-[var(--filter-button-active-text)] shadow-lg' 
                : 'bg-[var(--filter-button-bg)] text-[var(--filter-button-text)] hover:bg-[var(--filter-button-hover-bg)]'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredProjects.map((project) => (
            <PortfolioCard 
              key={project.id} 
              project={project}
              onPreview={() => handleOpenPreview(project)} 
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-[var(--text-secondary)] text-xl py-10">No projects found for this category. Stay tuned for updates!</p>
      )}

      {selectedProjectIndex !== null && (
        <PortfolioItemPreview
          projects={filteredProjects}
          currentIndex={selectedProjectIndex}
          onClose={handleClosePreview}
          onNavigate={handleNavigatePreview}
        />
      )}
    </div>
  );
};

export default PortfolioPage;