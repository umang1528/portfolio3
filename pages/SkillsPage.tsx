
import React from 'react';
import { Skill } from '../types';
import SkillCard from '../components/SkillCard';
import SectionTitle from '../components/SectionTitle';

const skillsData: Skill[] = [
  // Software
  { id: 's4', name: 'Coreldraw', level: 92, category: 'Software' },
  { id: 's1', name: 'Adobe Photoshop', level: 95, category: 'Software' },
  { id: 's2', name: 'Adobe Illustrator', level: 75, category: 'Software' },
  { id: 's3', name: 'Adobe InDesign', level: 85, category: 'Software' },
  // { id: 's5', name: 'Sketch', level: 80, category: 'Software' },
  { id: 's6', name: 'AutoCAD', level: 88, category: 'Software' },
  // { id: 's7', name: 'SketchUp', level: 85, category: 'Software' },
  // { id: 's8', name: '3ds Max / V-Ray', level: 75, category: 'Software' },
  // Design Principles
  { id: 'dp1', name: 'Typography', level: 90, category: 'Design Principles' },
  { id: 'dp2', name: 'Color Theory', level: 95, category: 'Design Principles' },
  { id: 'dp3', name: 'Layout & Composition', level: 92, category: 'Design Principles' },
  { id: 'dp4', name: 'Photo Editing', level: 85, category: 'Design Principles' },
  // { id: 'dp5', name: 'User Interface (UI)', level: 88, category: 'Design Principles' },
  { id: 'dp6', name: 'Space Planning', level: 90, category: 'Design Principles' },
  // { id: 'dp7', name: 'Material Selection', level: 87, category: 'Design Principles' },
  // Languages
  // { id: 'l1', name: 'HTML5', level: 90, category: 'Languages' },
  // { id: 'l2', name: 'CSS3', level: 90, category: 'Languages' },
  // { id: 'l3', name: 'JavaScript', level: 70, category: 'Languages' },
  // Other (Soft Skills)
  { id: 'o1', name: 'Water Colour Painting', level: 85, category: 'Other' },
  { id: 'o2', name: 'Charcoal Painting', level: 95, category: 'Other' },
  { id: 'o3', name: 'Portrait Sketching', level: 92, category: 'Other' },
];

interface MajorSkillSectionConfig {
  title: string;
  category: Skill['category'];
  description: string;
}

const majorSkillSections: MajorSkillSectionConfig[] = [
  { 
    title: "Software Proficiency", 
    category: 'Software',
    description: "Expertise in industry-standard software for design and development tasks."
  },
  { 
    title: " Professional Skill",
    category: 'Other', // 'Other' category data maps to these skills
    description: "Key interpersonal and professional skills for successful collaboration and project execution."
  },
  { 
    title: "Core Design Principles", 
    category: 'Design Principles',
    description: "Strong foundation in the fundamental theories and practices that drive effective design."
  },
  // { 
  //   title: "Languages & Frameworks", 
  //   category: 'Languages',
  //   description: "Proficiency in web technologies and coding languages relevant to digital design."
  // },
];

const SkillsPage: React.FC = () => {
  return (
    <div>
      <SectionTitle 
        title="My Expertise" 
        subtitle="A comprehensive overview of my technical, creative, and professional skills, organized by core competencies." 
      />
      
      <div className="space-y-12 md:space-y-16">
        {majorSkillSections.map(majorSection => {
          const categorySkills = skillsData.filter(skill => skill.category === majorSection.category);
          if (categorySkills.length === 0) return null;

          return (
            <section 
              key={majorSection.title} 
              className="bg-[var(--card-bg)] p-6 sm:p-8 rounded-xl shadow-2xl hover:shadow-[var(--shadow-color-secondary)]/25 transition-all duration-300 ease-out transform hover:-translate-y-1"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] via-[var(--accent-secondary)] to-[var(--accent-tertiary)] mb-2">
                {majorSection.title}
              </h3>
              <p className="text-[var(--text-secondary)] mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                {majorSection.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {categorySkills.map(skill => (
                  <SkillCard key={skill.id} skill={skill} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsPage;
