import React, { useEffect, useState } from 'react'

const words = [
  { text: 'Instructional Design', weight: 'hero', highlighted: true },
  { text: 'Learning Analytics', weight: 'hero', highlighted: true },
  { text: 'adaptive', weight: 'small' },
  { text: 'UX Research', weight: 'large', highlighted: true },
  { text: 'data-informed', weight: 'medium' },
  { text: 'Figma', weight: 'medium' },
  { text: 'Prototyping', weight: 'large', highlighted: true },
  { text: 'dashboards', weight: 'large' },
  { text: 'self-regulated learning', weight: 'large' },
  { text: 'Articulate 360', weight: 'large' },
  { text: 'trace data', weight: 'medium' },
  { text: 'Data Visualization', weight: 'large', highlighted: true },
  { text: 'Scratch', weight: 'small' },
  { text: 'feedback loops', weight: 'medium' },
  { text: 'usability testing', weight: 'large' },
  { text: 'Looker Studio', weight: 'medium' },
  { text: 'engagement', weight: 'small' },
  { text: 'e-learning', weight: 'large' },
  { text: 'Personalization', weight: 'large', highlighted: true },
  { text: 'R Studio', weight: 'medium' },
  { text: 'design thinking', weight: 'medium' },
  { text: 'SQL', weight: 'medium' },
]

const weightStyle = {
  hero: { fontSize: '2.2rem', fontWeight: 700 },
  large: { fontSize: '1.6rem', fontWeight: 600 },
  medium: { fontSize: '0.95rem', fontWeight: 400 },
  small: { fontSize: '0.78rem', fontWeight: 300 },
}

const positions = [
  { top: 7, left: 2 },
  { top: 6, left: 72 },
  { top: 13, left: 80 },
  { top: 27, left: 5 },
  { top: 41, left: 7 },
  { top: 30, left: 75 },
  { top: 48, left: 3 },
  { top: 21, left: 78 },
  { top: 60, left: 6 },
  { top: 45, left: 72 },
  { top: 55, left: 18 },
  { top: 66, left: 80 },
  { top: 34, left: 10 },
  { top: 55, left: 82 },
  { top: 36, left: 10 },
  { top: 40, left: 73 },
  { top: 52, left: 88 },
  { top: 15, left: 10 },
  { top: 35, left: 80 },
  { top: 27, left: 90 },
  { top: 42, left: 20 },
  { top: 63, left: 75 },
]

export default function WordCloud() {
  const [visible, setVisible] = useState(words.map(() => true))

  useEffect(() => {
    const timers = []
    words.forEach((word, idx) => {
      const startDelay = Math.random() * 3000
      const t = setTimeout(() => {
        const id = setInterval(() => {
          setVisible(prev => {
            const next = [...prev]
            next[idx] = !next[idx]
            return next
          })
        }, 800 + Math.random() * 1200)
        timers.push(id)
      }, startDelay)
      timers.push(t)
    })
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {words.map((word, idx) => {
        const pos = positions[idx] || { top: 50, left: 50 }
        return (
          <span
            key={idx}
            style={{
              position: 'absolute',
              top: `${pos.top}%`,
              left: `${pos.left}%`,
              ...weightStyle[word.weight],
              color: word.highlighted ? '#c0614a' : '#2d2d2d',
              opacity: visible[idx] ? (word.highlighted ? 0.85 : 0.5) : 0.08,
              transition: 'opacity 1.4s ease',
              whiteSpace: 'nowrap',
              animation: word.highlighted
                ? `float ${1.5 + idx * 0.2}s ease-in-out infinite alternate`
                : undefined,
            }}
          >
            {word.text}
          </span>
        )
      })}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-35px); }
        }
      `}</style>
    </div>
  )
}