
import React from 'react';
import { Skill } from '../types';
import { CogIcon, LightbulbIcon, CodeBracketIcon, BriefcaseIcon } from './icons/SkillIcons';

interface SkillCardProps {
  skill: Skill;
}

const getProficiencyDetails = (level: number): { text: string; dots?: number } => { // dots are no longer used for bar
  if (level >= 90) return { text: 'Expert' };
  if (level >= 75) return { text: 'Advanced' };
  if (level >= 60) return { text: 'Proficient' };
  if (level >= 40) return { text: 'Intermediate' };
  return { text: 'Familiar' };
};

const SkillCategoryIcon: React.FC<{ category: Skill['category']; className?: string }> = ({ category, className }) => {
  switch (category) {
    case 'Software':
      return <CogIcon className={className} />;
    case 'Design Principles':
      return <LightbulbIcon className={className} />;
    case 'Languages':
      return <CodeBracketIcon className={className} />;
    case 'Other':
      return <BriefcaseIcon className={className} />;
    default:
      return <CogIcon className={className} />; // Default icon
  }
};

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const { text: proficiencyText } = getProficiencyDetails(skill.level);

  return (
    <div className="interactive-cursor-target bg-[var(--card-bg)] p-5 rounded-xl shadow-lg hover:shadow-[var(--shadow-color-primary)]/25 transition-all duration-300 transform hover:scale-[1.03] flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center mb-3">
          <SkillCategoryIcon category={skill.category} className="w-6 h-6 text-[var(--accent-primary)] mr-3 shrink-0" />
          <h4 className="text-lg font-semibold text-[var(--text-primary)] leading-tight truncate" title={skill.name}>
            {skill.name}
          </h4>
        </div>

        <div className="my-4">
          <div className="h-3 w-full bg-[var(--input-bg)] bg-opacity-50 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] transition-all duration-500 ease-out"
              style={{ width: `${skill.level}%` }}
              role="progressbar"
              aria-valuenow={skill.level}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${skill.name} proficiency level`}
            ></div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-auto pt-2">
        <p className="text-xs sm:text-sm text-[var(--accent-secondary)] font-medium">
          {proficiencyText}
        </p>
        <p className="text-xs sm:text-sm text-[var(--text-primary)] font-semibold">
          {skill.level}%
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
