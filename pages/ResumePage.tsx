import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { Experience, Education } from '../types';
import { NavLink } from 'react-router-dom';

const experiences: Experience[] = [
  {
    id: 'exp1',
    title: 'Senior Interior & Graphic Designer',
    company: 'Creative Solutions Inc.',
    duration: '2020 - Present',
    responsibilities: [
      'Led design projects from concept to completion for both interior and graphic domains.',
      'Managed client relationships and presented design proposals.',
      'Collaborated with cross-functional teams including architects and marketing specialists.',
      'Mentored junior designers and improved team workflows.'
    ],
  },
  {
    id: 'exp2',
    title: 'Mid-Level Designer',
    company: 'Studio DesignVerse',
    duration: '2017 - 2020',
    responsibilities: [
      'Developed creative concepts for branding, print, and digital media.',
      'Created detailed 2D/3D visualizations for interior design projects.',
      'Assisted in material sourcing and vendor coordination.',
      'Contributed to multiple award-winning design campaigns.'
    ],
  },
];

const educations: Education[] = [
  {
    id: 'edu1',
    degree: 'Master of Fine Arts (MFA) in Design',
    institution: 'University of Creative Arts',
    year: '2017',
  },
  {
    id: 'edu2',
    degree: 'Bachelor of Science (BS) in Graphic Design',
    institution: 'State Design College',
    year: '2015',
  },
];

const ResumePage: React.FC = () => {
  return (
    <div>
      <SectionTitle title="My Journey" subtitle="A summary of my professional experience and educational background." />

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Experience Section */}
        <section>
          <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] mb-6 pb-2 border-b-2 border-[var(--border-color)]">
            Experience
          </h3>
          <div className="space-y-8">
            {experiences.map(exp => (
              <div key={exp.id} className="bg-[var(--card-bg)] p-6 rounded-lg shadow-xl hover:shadow-[var(--shadow-color-primary)]/20 transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                  <h4 className="text-xl font-bold text-[var(--accent-primary)]">{exp.title}</h4>
                  <span className="text-sm text-[var(--text-secondary)] mt-1 sm:mt-0">{exp.duration}</span>
                </div>
                <p className="text-lg text-[var(--accent-secondary)] mb-3">{exp.company}</p>
                <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-1 pl-4 text-sm leading-relaxed">
                  {exp.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] mb-6 pb-2 border-b-2 border-[var(--border-color)]">
            Education
          </h3>
          <div className="space-y-6">
            {educations.map(edu => (
              <div key={edu.id} className="bg-[var(--card-bg)] p-6 rounded-lg shadow-xl hover:shadow-[var(--shadow-color-secondary)]/20 transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1">
                  <h4 className="text-xl font-bold text-[var(--accent-primary)]">{edu.degree}</h4>
                  <span className="text-sm text-[var(--text-secondary)] mt-1 sm:mt-0">{edu.year}</span>
                </div>
                <p className="text-lg text-[var(--accent-secondary)]">{edu.institution}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center pt-8">
            <NavLink 
                to="/contact" 
                className="interactive-cursor-target px-8 py-3 bg-gradient-to-r from-[var(--button-primary-bg-gradient-from)] to-[var(--button-primary-bg-gradient-to)] text-[var(--button-primary-text)] font-semibold rounded-lg shadow-md hover:from-[var(--button-primary-hover-bg-gradient-from)] hover:to-[var(--button-primary-hover-bg-gradient-to)] transition-all duration-300 transform hover:scale-105"
            >
                Download Full CV (Request via Contact)
            </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;