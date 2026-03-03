import React, { useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

const visitedCountryNames = [
  'China', 'United Kingdom', 'United States of America',
  'Spain', 'France', 'Canada', 'Thailand', 'Turkey', 'Australia', 'Japan'
]

const cities = [
  { name: 'Chengdu', lat: 30.5728, lng: 104.0668, type: 'hometown', description: '🌍 Hometown' },
  { name: 'Manchester', lat: 53.4808, lng: -2.2426, type: 'undergrad', description: '🎓 Undergrad' },
  { name: 'Chapel Hill', lat: 35.9132, lng: -79.0558, type: 'master', description: '📚 Master' },
  { name: 'Barcelona', lat: 41.3851, lng: 2.1734, type: 'visited', description: '✈️ Visited' },
  { name: 'Paris', lat: 48.8566, lng: 2.3522, type: 'visited', description: '✈️ Visited' },
  { name: 'Vancouver', lat: 49.2827, lng: -123.1207, type: 'visited', description: '✈️ Visited' },
  { name: 'Montreal', lat: 45.5017, lng: -73.5673, type: 'visited', description: '✈️ Visited' },
  { name: 'Kelowna', lat: 49.6832, lng: -120.4055, type: 'visited', description: '✈️ Visited' },
  { name: 'Quebec City', lat: 46.8139, lng: -71.2080, type: 'visited', description: '✈️ Visited' },
  { name: 'London', lat: 51.5074, lng: -0.1278, type: 'visited', description: '✈️ Visited' },
  { name: 'Bangkok', lat: 13.7563, lng: 100.5018, type: 'visited', description: '✈️ Visited' },
  { name: 'Istanbul', lat: 41.0082, lng: 28.9784, type: 'visited', description: '✈️ Visited' },
  { name: 'Sydney', lat: -33.8688, lng: 151.2093, type: 'visited', description: '✈️ Visited' },
  { name: 'New York', lat: 40.7128, lng: -74.0060, type: 'visited', description: '✈️ Visited' },
  { name: 'Tampa', lat: 27.9506, lng: -82.4572, type: 'visited', description: '✈️ Visited' },
  { name: 'Orlando', lat: 28.5421, lng: -81.3774, type: 'visited', description: '✈️ Visited' },
  { name: 'Chicago', lat: 41.8781, lng: -87.6298, type: 'visited', description: '✈️ Visited' },
  { name: 'Hawaii', lat: 21.3099, lng: -157.8581, type: 'visited', description: '✈️ Visited' },
  { name: 'Osaka', lat: 34.6852, lng: 135.4328, type: 'visited', description: '✈️ Visited' },
]

const pinColor = {
  hometown: '#e74c3c',
  undergrad: '#f39c12',
  master: '#9b59b6',
  visited: '#3498db',
}

const isVisited = (geoName) => {
  return visitedCountryNames.some(name => geoName.includes(name) || name.includes(geoName))
}

export default function WorldMap() {
  const [tooltip, setTooltip] = useState(null) // { name, description, x, y }

  return (
    <div className="w-full relative" style={{ background: '#b8d4e8' }}>
      {/* Tooltip */}
      {tooltip && (
        <div
          className="absolute z-10 bg-white text-dark text-sm px-3 py-2 rounded-lg shadow-lg pointer-events-none"
          style={{ left: tooltip.x + 12, top: tooltip.y - 40, whiteSpace: 'nowrap' }}
        >
          <div className="font-bold">{tooltip.name}</div>
          <div className="text-gray-500">{tooltip.description}</div>
        </div>
      )}

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 140, center: [10, 20] }}
        style={{ width: '100%', height: 'auto' }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const visited = isVisited(geo.properties.name)
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: visited ? '#ffffff' : '#9db8c8',
                      stroke: '#7a9bb0',
                      strokeWidth: 0.4,
                      outline: 'none',
                    },
                    hover: {
                      fill: visited ? '#f0f8ff' : '#8aaabb',
                      stroke: '#7a9bb0',
                      strokeWidth: 0.4,
                      outline: 'none',
                    },
                    pressed: { outline: 'none' },
                  }}
                />
              )
            })
          }
        </Geographies>

        {cities.map((city) => (
          <Marker
            key={city.name}
            coordinates={[city.lng, city.lat]}
            onMouseEnter={(e) => {
              const rect = e.currentTarget.closest('svg').getBoundingClientRect()
              const mapRect = e.currentTarget.closest('.relative').getBoundingClientRect()
              setTooltip({
                name: city.name,
                description: city.description,
                x: e.clientX - mapRect.left,
                y: e.clientY - mapRect.top,
              })
            }}
            onMouseMove={(e) => {
              const mapRect = e.currentTarget.closest('.relative').getBoundingClientRect()
              setTooltip(prev => prev ? {
                ...prev,
                x: e.clientX - mapRect.left,
                y: e.clientY - mapRect.top,
              } : null)
            }}
            onMouseLeave={() => setTooltip(null)}
            style={{ cursor: 'pointer' }}
          >
            <circle
              r={city.type === 'visited' ? 3.5 : 5}
              fill={pinColor[city.type]}
              stroke="#fff"
              strokeWidth={1.5}
            />
          </Marker>
        ))}
      </ComposableMap>

      {/* Legend */}
      <div className="absolute bottom-3 left-3 bg-white bg-opacity-90 rounded-lg px-3 py-2 text-xs flex flex-col gap-1 shadow">
        <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-red-500 inline-block"/> Hometown</div>
        <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"/> Undergrad</div>
        <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-purple-500 inline-block"/> Master's</div>
        <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-blue-400 inline-block"/> Visited</div>
      </div>
    </div>
  )
}
