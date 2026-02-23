import React from 'react'

export default function Timeline({ items }) {
  return (
    <div className="relative">
      {/* Center line for desktop */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-beige transform -translate-x-1/2" />

      <div className="space-y-8 md:space-y-12">
        {items.map((item, index) => (
          <div key={index} className={`flex flex-col md:flex-row gap-6 md:gap-0 ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}>
            {/* Left/Right content */}
            <div className="md:w-1/2 md:px-8 flex justify-end">
              <div className="max-w-sm">
                {/* Circle dot */}
                <div className="hidden md:block absolute left-1/2 top-6 w-4 h-4 bg-navy rounded-full transform -translate-x-1/2 border-4 border-cream" />
                
                {/* Card */}
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                  <div className="flex items-center gap-2 mb-2">
                    {item.type === 'education' ? (
                      <span className="text-lg">🎓</span>
                    ) : (
                      <span className="text-lg">💼</span>
                    )}
                    <span className="text-xs font-semibold text-navy uppercase">
                      {item.type}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-dark mb-1">
                    {item.title}
                  </h3>
                  <p className="text-navy font-medium mb-1">{item.organization}</p>
                  <p className="text-sm text-gray-600 mb-3">{item.date}</p>
                  <p className="text-sm text-dark">{item.description}</p>
                </div>
              </div>
            </div>

            {/* Right/Left spacer for mobile */}
            <div className="md:w-1/2" />
          </div>
        ))}
      </div>
    </div>
  )
}
