import React from 'react';

const SKILLS = [
  { label: 'UI/UX', color: 'bg-[#0154BC]' },
  { label: 'Product & Brand', color: 'bg-[#B69E7A]' },
  { label: 'Motion', color: 'bg-[#007751]' },
  { label: 'Game Dev', color: 'bg-[#FF2241]' },
  { label: 'Full Stack', color: 'bg-[#ECB93C]' },
];

export default function SkillsLine() {
  return (
    <div className='relative '>
      <div className='absolute left-3 top-3 bottom-3 w-[1px] bg-[#ebebebd9]' />
      <div className='flex flex-col gap-6'>
        {SKILLS.map((skill) => (
          <div key={skill.label} className='relative flex items-center'>
            <div
              className={`relative z-10 flex items-center h-7 rounded-full overflow-hidden w-7 group-hover:w-36 transition-all duration-300 ${skill.color}`}
            >
              <span className='w-8 h-8 rounded-full flex-shrink-0' />
              <span className='text-xs text-[#dddcd3] px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100 whitespace-nowrap'>
                {skill.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}