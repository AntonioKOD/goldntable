'use client'
import ProgramCard from '@/components/ui/enhanced-card'

export default function FeaturedPrograms() {
  return (
    <div className='text-center my-20 px-4'>
      <h2 className='text-3xl font-bold'>Featured Programs</h2>
    
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }} className='mx-auto flex justify-around max-w-5xl mt-10'>
      <ProgramCard
        badge="Bartending"
        title="Bartending Essentials"
        description="Learn classic builds, speed techniques, and responsible service basics."
      />
      <ProgramCard
        badge="Service"
        title="Guest Service 101"
        description="Greeting, pacing, and handling guest issues with confidence."
      />
      <ProgramCard
        badge="Safety"
        title="Food Safety Basics"
        description="Cross-contact, temperatures, and sanitation done right."
      />
    </div>
    </div>
  );
}