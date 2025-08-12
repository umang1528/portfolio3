import type React from "react"

interface SectionTitleProps {
  title: string
  subtitle?: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
        {title}
      </h1>
      {subtitle && <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  )
}

export default SectionTitle
