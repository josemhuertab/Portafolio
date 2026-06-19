'use client'

// Genera una secuencia pseudo-aleatoria determinista a partir de un seed
function seededRandom(seed: number) {
  let s = seed
  return () => {
    s = (s * 16807 + 0) % 2147483647
    return (s - 1) / 2147483646
  }
}

interface Dot {
  x: number
  y: number
  baseOpacity: number
  peakOpacity: number
  duration: number
  delay: number
  size: number
}

function generateDots(cols: number, rows: number): Dot[] {
  const rand = seededRandom(42)
  const dots: Dot[] = []

  // Frecuencia de las "ondas" — valores más bajos = zonas más grandes
  const waveFreqX = 0.18
  const waveFreqY = 0.14

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (rand() > 0.65) continue

      const noise = rand()

      // El delay está basado en la posición para crear efecto de zona/wave
      // Combinamos dos ondas en distintos ángulos para que no sea una línea recta
      const waveOffset =
        Math.sin(col * waveFreqX + row * waveFreqY * 0.5) * 6 +
        Math.sin(col * waveFreqX * 0.4 + row * waveFreqY) * 5

      // Noise individual encima de la onda — hace que no sea perfecto
      const individualNoise = (noise - 0.5) * 4

      dots.push({
        x: col,
        y: row,
        baseOpacity: 0.05 + noise * 0.1,   // muy tenue en reposo
        peakOpacity: 0.5 + noise * 0.35,    // brillante en el pico
        duration: 5 + noise * 5,             // entre 5s y 10s
        delay: waveOffset + individualNoise, // combinación de onda + ruido
        size: noise > 0.85 ? 2 : 1.5,
      })
    }
  }

  return dots
}

const COLS = 48
const ROWS = 80
const GAP = 28

const dots = generateDots(COLS, ROWS)

export default function DotBackground() {
  return (
    <div aria-hidden="true" className="dot-background">
      <svg
        className="dot-background__svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        {dots.map((dot, i) => (
          <circle
            key={i}
            cx={dot.x * GAP + GAP / 2}
            cy={dot.y * GAP + GAP / 2}
            r={dot.size}
            className="dot-background__dot"
            style={{
              animationDuration: `${dot.duration}s`,
              animationDelay: `${dot.delay}s`,
              '--dot-base': dot.baseOpacity,
              '--dot-peak': dot.peakOpacity,
            } as React.CSSProperties}
          />
        ))}
      </svg>
    </div>
  )
}
