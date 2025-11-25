# 💼 Portafolio de José Huerta

> Portafolio profesional y minimalista desarrollado con Next.js 14, React, TypeScript y Tailwind CSS.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

---

## ⚡ Inicio Rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Abrir http://localhost:3000
```

**📖 ¿Primera vez?** Lee **[INICIO-RAPIDO.md](./INICIO-RAPIDO.md)** (5 minutos)

---

## 🚀 Características

- ⚡ Next.js 14 con App Router
- 🎨 Tailwind CSS para estilos
- 🌙 Modo oscuro/claro
- 📱 Diseño responsive
- ♿ Accesible
- 🎯 SEO optimizado
- 🧩 Metodología BEM para CSS
- 📦 TypeScript para type safety

## 📋 Requisitos previos

- Node.js 18.17 o superior
- npm o yarn

## 🛠️ Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📝 Editar proyectos

Para agregar o editar proyectos, modifica el archivo `data/projects.tsx`:

```typescript
export const projects: Project[] = [
  {
    title: 'Nombre del Proyecto',
    description: 'Descripción breve del proyecto',
    image: '/projects/imagen.jpg', // Coloca las imágenes en public/projects/
    url: 'https://tu-proyecto.com',
    technologies: [
      {
        name: 'Next.js',
        icon: <svg>...</svg>, // Icono SVG de la tecnología
      },
    ],
  },
]
```

## 🎨 Personalización

### Colores
Los colores se pueden modificar en `tailwind.config.js`.

### Información personal
- **Nombre y descripción**: `components/Hero.tsx`
- **Experiencia**: `components/Experience.tsx`
- **Redes sociales**: `components/Contact.tsx`

## 📦 Build para producción

```bash
npm run build
npm start
```

## 🚀 Deploy

Este proyecto está optimizado para desplegarse en Vercel:

1. Sube tu código a GitHub
2. Importa el proyecto en Vercel
3. Vercel detectará automáticamente Next.js y configurará el build

## 📄 Estructura del proyecto

```
portafolio/
├── app/                 # Next.js App Router
├── components/          # Componentes React
│   ├── Hero.tsx        # ⭐ Tu nombre y foto
│   ├── Experience.tsx  # ⭐ Tu experiencia
│   ├── Projects.tsx    # Grid de proyectos
│   └── Contact.tsx     # ⭐ Tus redes sociales
├── data/
│   └── projects.tsx    # ⭐ EDITA TUS PROYECTOS AQUÍ
├── styles/
│   └── components.css  # Estilos BEM
└── public/
    ├── profile-photo.jpg      # ⭐ Tu foto
    └── projects/              # ⭐ Imágenes de proyectos

⭐ = Archivos que necesitas editar
```

## 📚 Documentación Completa

| Guía | Descripción | Tiempo |
|------|-------------|--------|
| **[INICIO-RAPIDO.md](./INICIO-RAPIDO.md)** | Empezar en 5 minutos | ⚡ 5 min |
| **[INSTRUCCIONES.md](./INSTRUCCIONES.md)** | Guía completa paso a paso | 📖 10 min |
| **[ESTRUCTURA.md](./ESTRUCTURA.md)** | Entender el proyecto | 🏗️ 5 min |
| **[COMANDOS-UTILES.md](./COMANDOS-UTILES.md)** | Comandos y troubleshooting | 🛠️ 3 min |
| **[OPTIMIZACION-SEO.md](./OPTIMIZACION-SEO.md)** | SEO y performance | 🚀 8 min |
| **[RESUMEN-PROYECTO.md](./RESUMEN-PROYECTO.md)** | Resumen completo | 📋 5 min |

## 🎯 SEO

El sitio incluye:
- Meta tags optimizados
- Open Graph tags
- Semantic HTML
- Imágenes optimizadas con Next.js Image

## 📱 Responsive

El diseño es completamente responsive y se adapta a:
- 📱 Mobile (< 640px)
- 💻 Tablet (640px - 1024px)
- 🖥️ Desktop (> 1024px)
