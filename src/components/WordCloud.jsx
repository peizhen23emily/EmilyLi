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
  { text: 'R Studio', weight: 'small' },
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
  { top: 25, left: 2 },
  { top: 35, left: 72 },
  { top: 5, left: 80 },
  { top: 70, left: 5 },
  { top: 41, left: 7 },
  { top: 30, left: 75 },
  { top: 48, left: 3 },
  { top: 45, left: 78 },
  { top: 60, left: 6 },
  { top: 58, left: 72 },
  { top: 75, left: 18 },
  { top: 68, left: 76 },
  { top: 84, left: 10 },
  { top: 76, left: 82 },
  { top: 90, left: 10 },
  { top: 88, left: 78 },
  { top: 52, left: 88 },
  { top: 35, left: 10 },
  { top: 80, left: 80 },
  { top: 92, left: 70 },
  { top: 43, left: 20 },
  { top: 95, left: 75 },
]

export default function WordCloud() {
  const [visible, setVisible] = useState(words.map(() => true))

  useEffect(() => {
    const timers = []
    words.forEach((word, idx) => {
      if (word.highlighted) return
      const startDelay = Math.random() * 3000
      const t = setTimeout(() => {
        const id = setInterval(() => {
          setVisible(prev => {
            const next = [...prev]
            next[idx] = !next[idx]
            return next
          })
        }, 2000 + Math.random() * 3000)
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
              opacity: word.highlighted ? 0.85 : visible[idx] ? 0.5 : 0.08,
              transition: 'opacity 1.4s ease',
              whiteSpace: 'nowrap',
              animation: word.highlighted
                ? `float ${3 + idx * 0.3}s ease-in-out infinite alternate`
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
          100% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  )
}