<script setup lang="ts">
const links = [
  { label: 'Home', to: '/' },
  { label: 'Experience', to: '/#experience' },
  { label: 'Skills', to: '/#skills' },
  { label: 'Projects', to: '/#projects' },
  { label: 'Contact', to: '/#contact' }
]

const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<template>
  <header class="border-b border-gray-200 dark:border-gray-800 bg-white/75 dark:bg-gray-900/75 backdrop-blur sticky top-0 z-50">
    <UContainer class="flex items-center justify-between h-16">
      <div class="flex items-center gap-2">
        <NuxtLink to="/" class="text-xl font-bold font-mono">
          &lt;M.Ans /&gt;
        </NuxtLink>
      </div>

      <nav class="hidden md:flex items-center gap-4">
        <UButton
          v-for="link in links"
          :key="link.label"
          :to="link.to"
          variant="ghost"
          color="gray"
        >
          {{ link.label }}
        </UButton>
      </nav>

      <div class="flex items-center gap-2">
        <ClientOnly>
          <UButton
            :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
            color="gray"
            variant="ghost"
            aria-label="Theme"
            @click="isDark = !isDark"
          />
          <template #fallback>
            <div class="w-8 h-8" />
          </template>
        </ClientOnly>
      </div>
    </UContainer>
  </header>
</template>
