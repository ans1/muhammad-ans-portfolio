type RevealBinding =
  | number
  | {
      once?: boolean
      delay?: number
      duration?: number
      threshold?: number
      rootMargin?: string
      x?: number
      y?: number
    }

const getOptions = (value: RevealBinding | undefined) => {
  if (typeof value === 'number') {
    return { once: true, delay: value } as const
  }

  return {
    once: value?.once ?? true,
    delay: value?.delay ?? 0,
    duration: value?.duration ?? 650,
    threshold: value?.threshold ?? 0.12,
    rootMargin: value?.rootMargin ?? '0px 0px -10% 0px',
    x: value?.x ?? 0,
    y: value?.y ?? 16
  }
}

const OBS_KEY = Symbol('revealObserver')

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    mounted (el, binding) {
      const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false
      const options = getOptions(binding.value)

      el.classList.add('reveal')
      el.style.setProperty('--reveal-delay', `${options.delay}ms`)
      el.style.setProperty('--reveal-duration', `${options.duration}ms`)
      el.style.setProperty('--reveal-x', `${options.x}px`)
      el.style.setProperty('--reveal-y', `${options.y}px`)

      if (prefersReducedMotion) {
        el.classList.add('reveal--in')
        return
      }

      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          el.classList.add('reveal--in')
          if (options.once) observer.unobserve(el)
        }
      }, { threshold: options.threshold, rootMargin: options.rootMargin })

      ;(el as any)[OBS_KEY] = observer
      observer.observe(el)
    },
    unmounted (el) {
      const observer: IntersectionObserver | undefined = (el as any)[OBS_KEY]
      observer?.unobserve(el)
      observer?.disconnect()
      delete (el as any)[OBS_KEY]
    }
  })
})
