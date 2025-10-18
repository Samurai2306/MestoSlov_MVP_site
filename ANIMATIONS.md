# 🎬 Руководство по анимациям МестоСлов

## Обзор анимационной системы

МестоСлов использует многоуровневую систему анимаций для создания плавного и захватывающего пользовательского опыта.

## Технологии анимации

### 1. Framer Motion (Сложные анимации)

- Page transitions
- Component animations
- Gesture-based interactions
- Layout animations

### 2. CSS Animations (Простые эффекты)

- Hover states
- Loading indicators
- Micro-interactions

### 3. Canvas API (Визуализация)

- Audio visualizer
- Custom effects

## Основные анимации

### Page Transitions

\`\`\`typescript
// Появление страницы
<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.6 }}

> {content}
> </motion.div>
> \`\`\`

### Scroll Animations

\`\`\`typescript
// Intersection Observer
const [ref, inView] = useInView({
triggerOnce: true,
threshold: 0.1,
})

<motion.div
ref={ref}
initial={{ opacity: 0, y: 30 }}
animate={inView ? { opacity: 1, y: 0 } : {}}
transition={{ duration: 0.6 }}

> {content}
> </motion.div>
> \`\`\`

### Staggered Children

\`\`\`typescript
const containerVariants = {
hidden: { opacity: 0 },
visible: {
opacity: 1,
transition: {
staggerChildren: 0.15,
},
},
}

const itemVariants = {
hidden: { opacity: 0, y: 30 },
visible: {
opacity: 1,
y: 0,
transition: { duration: 0.6 },
},
}

<motion.div
variants={containerVariants}
initial="hidden"
animate="visible"

> {items.map(item => (

    <motion.div key={item.id} variants={itemVariants}>
      {item.content}
    </motion.div>

))}
</motion.div>
\`\`\`

## Компонентные анимации

### Hover Effects

\`\`\`typescript
<motion.button
whileHover={{ scale: 1.05, y: -8 }}
whileTap={{ scale: 0.95 }}
transition={{ duration: 0.2 }}

> Click me
> </motion.button>
> \`\`\`

### 3D Card Flip

\`\`\`typescript
<motion.div
whileHover={{
    rotateY: 5,
    rotateX: 5,
  }}
style={{
    transformStyle: 'preserve-3d',
  }}
transition={{
    duration: 0.6,
    ease: 'easeOut',
  }}

> {content}
> </motion.div>
> \`\`\`

### Floating Elements

\`\`\`typescript
<motion.div
animate={{
    y: [0, -20, 0],
  }}
transition={{
    duration: 6,
    repeat: Infinity,
    ease: 'easeInOut',
  }}

> {content}
> </motion.div>
> \`\`\`

## Специализированные анимации

### Audio Visualizer

\`\`\`typescript
const AudioVisualizer = () => {
const canvasRef = useRef<HTMLCanvasElement>(null)

useEffect(() => {
const canvas = canvasRef.current
const ctx = canvas?.getContext('2d')
if (!ctx) return

    const bars = 40
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < bars; i++) {
        const height = Math.random() * canvas.height * 0.8
        const x = i * (canvas.width / bars)
        const y = (canvas.height - height) / 2

        const gradient = ctx.createLinearGradient(0, y, 0, y + height)
        gradient.addColorStop(0, '#38B2AC')
        gradient.addColorStop(1, '#F59E0B')

        ctx.fillStyle = gradient
        ctx.fillRect(x, y, barWidth - 2, height)
      }

      requestAnimationFrame(animate)
    }

    animate()

}, [])

return <canvas ref={canvasRef} />
}
\`\`\`

### Map Markers Pulse

\`\`\`typescript
<motion.div
animate={{
    scale: [1, 2, 1],
    opacity: [0.5, 0, 0.5],
  }}
transition={{
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
className="absolute inset-0 bg-primary-teal rounded-full"
/>
\`\`\`

### Progress Bar

\`\`\`typescript
<motion.div
initial={{ width: 0 }}
animate={{ width: \`\${progress}%\` }}
transition={{ duration: 1, ease: 'easeOut' }}
className="h-2 bg-gradient-to-r from-primary-teal to-accent-amber"
/>
\`\`\`

## Layout Animations

### Tab Switcher

\`\`\`typescript
<motion.div
layoutId="activeTab"
className="absolute bottom-0 left-0 right-0 h-1 bg-primary-teal"
/>
\`\`\`

### Expanding Search

\`\`\`typescript
<motion.div
animate={{
    width: isFocused ? '100%' : '300px',
  }}
transition={{ duration: 0.3 }}

> <input ... />
> </motion.div>
> \`\`\`

## Gesture Animations

### Swipe to Delete

\`\`\`typescript
<motion.div
drag="x"
dragConstraints={{ left: -100, right: 0 }}
onDragEnd={(e, info) => {
if (info.offset.x < -50) {
handleDelete()
}
}}

> {content}
> </motion.div>
> \`\`\`

### Pull to Refresh

\`\`\`typescript
<motion.div
drag="y"
dragConstraints={{ top: 0, bottom: 100 }}
onDragEnd={(e, info) => {
if (info.offset.y > 50) {
handleRefresh()
}
}}

> {content}
> </motion.div>
> \`\`\`

## CSS Animations

### Shimmer Effect

\`\`\`css
@keyframes shimmer {
0% { background-position: -1000px 0; }
100% { background-position: 1000px 0; }
}

.shimmer {
animation: shimmer 2s linear infinite;
background: linear-gradient(
to right,
#f0f0f0 0%,
#e0e0e0 50%,
#f0f0f0 100%
);
background-size: 1000px 100%;
}
\`\`\`

### Gradient Animation

\`\`\`css
@keyframes gradient {
0%, 100% { background-position: 0% 50%; }
50% { background-position: 100% 50%; }
}

.gradient-animate {
background: linear-gradient(270deg, #38B2AC, #F59E0B);
background-size: 200% 200%;
animation: gradient 8s ease infinite;
}
\`\`\`

## Performance Best Practices

### 1. Use transform и opacity

\`\`\`typescript
// ✅ Good - GPU accelerated
<motion.div
animate={{ transform: 'translateY(-10px)', opacity: 0.8 }}
/>

// ❌ Bad - triggers layout
<motion.div
animate={{ top: '-10px' }}
/>
\`\`\`

### 2. Используйте will-change

\`\`\`css
.animated-element {
will-change: transform, opacity;
}
\`\`\`

### 3. Debounce тяжелые анимации

\`\`\`typescript
const debouncedAnimation = useMemo(
() => debounce(animationFunction, 100),
[]
)
\`\`\`

### 4. Reduce motion для accessibility

\`\`\`typescript
const shouldReduceMotion = useReducedMotion()

<motion.div
animate={shouldReduceMotion ? {} : animations}
/>
\`\`\`

## Timing Functions

### Ease Options

\`\`\`typescript
// Linear
transition={{ ease: 'linear' }}

// Ease out (замедление в конце)
transition={{ ease: 'easeOut' }}

// Ease in (ускорение в начале)
transition={{ ease: 'easeIn' }}

// Custom cubic bezier
transition={{ ease: [0.43, 0.13, 0.23, 0.96] }}
\`\`\`

### Spring Physics

\`\`\`typescript
transition={{
  type: 'spring',
  stiffness: 300,
  damping: 20,
}}
\`\`\`

## Анимации для страниц

### Hero Section

- Staggered fade-in для элементов
- Floating background элементы
- Scroll indicator bounce

### Tours Catalog

- Cards hover lift
- Filter animations
- Infinite scroll loading

### Tour Detail

- Image parallax
- Audio visualizer
- Map marker pulse
- Tab transitions

### Profile

- Stats count-up animation
- Progress bars
- Achievement unlocks

## Accessibility

### Уважайте prefers-reduced-motion

\`\`\`typescript
const prefersReducedMotion = window.matchMedia(
'(prefers-reduced-motion: reduce)'
).matches

const animation = prefersReducedMotion
? { opacity: 1 }
: { opacity: 1, y: 0, transition: { duration: 0.6 } }
\`\`\`

### Keyboard Navigation

Сохраняйте focus states при анимациях

### Loading States

Показывайте индикаторы загрузки

---

Эти анимации создают:

- ✨ Плавный UX
- 🎨 Визуальную привлекательность
- 🚀 Чувство скорости
- 💫 Engaging experience
