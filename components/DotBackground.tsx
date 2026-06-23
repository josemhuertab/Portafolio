// El fondo se implementa 100% en CSS — sin SVG, sin JS, sin animaciones por elemento.
// Esto es significativamente más liviano en mobile.
export default function DotBackground() {
  return <div aria-hidden="true" className="dot-background" />
}
