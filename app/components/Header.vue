<script setup lang="ts">
const links = [
  { label: 'Home', to: '/' },
  { label: 'Experience', to: '/#experience' },
  { label: 'Skills', to: '/#skills' },
  { label: 'Projects', to: '/#projects' },
  { label: 'Contact', to: '/#contact' }
]

const resumeUrl = '/resume/muhammad-ans-resume.pdf'

// Mobile menu — the desktop nav is hidden below md, so without this there is
// no way to reach the sections from a phone.
const menuOpen = ref(false)

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
        <NuxtLink to="/" class="inline-flex items-center min-h-11 text-xl font-bold font-mono">
          &lt;M.Ans /&gt;
        </NuxtLink>
      </div>

      <nav class="hidden md:flex items-center gap-2">
        <UButton
          v-for="link in links"
          :key="link.label"
          :to="link.to"
          :variant="link.label === 'Projects' ? 'soft' : 'ghost'"
          :color="link.label === 'Projects' ? 'primary' : 'gray'"
          :class="[
            'rounded-full',
            link.label === 'Projects' ? 'font-semibold' : ''
          ]"
        >
          {{ link.label }}
        </UButton>
      </nav>

      <div class="flex items-center gap-2">
        <UButton
          :to="resumeUrl"
          target="_blank"
          icon="i-heroicons-arrow-down-tray"
          size="sm"
          class="rounded-full hidden sm:inline-flex"
        >
          Resume
        </UButton>

        <ClientOnly>
          <UButton
            :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
            color="gray"
            variant="ghost"
            class="rounded-full min-h-11 min-w-11 justify-center"
            aria-label="Theme"
            @click="isDark = !isDark"
          />
          <template #fallback>
            <div class="w-11 h-11" />
          </template>
        </ClientOnly>

        <UButton
          icon="i-heroicons-bars-3"
          color="gray"
          variant="ghost"
          class="rounded-full min-h-11 min-w-11 justify-center md:hidden"
          aria-label="Open menu"
          @click="menuOpen = true"
        />
      </div>
    </UContainer>

    <USlideover v-model:open="menuOpen" :ui="{ content: 'w-[82vw] max-w-xs' }">
      <template #content>
        <div class="flex flex-col h-full p-4">
          <div class="flex items-center justify-between mb-6">
            <span class="text-xl font-bold font-mono">&lt;M.Ans /&gt;</span>
            <UButton
              icon="i-heroicons-x-mark"
              color="gray"
              variant="ghost"
              class="rounded-full min-h-11 min-w-11 justify-center"
              aria-label="Close menu"
              @click="menuOpen = false"
            />
          </div>

          <nav class="flex flex-col gap-1">
            <UButton
              v-for="link in links"
              :key="link.label"
              :to="link.to"
              size="lg"
              :variant="link.label === 'Projects' ? 'soft' : 'ghost'"
              :color="link.label === 'Projects' ? 'primary' : 'gray'"
              class="rounded-full min-h-11 justify-start"
              @click="menuOpen = false"
            >
              {{ link.label }}
            </UButton>
          </nav>

          <UButton
            :to="resumeUrl"
            target="_blank"
            icon="i-heroicons-arrow-down-tray"
            size="lg"
            class="rounded-full min-h-11 justify-center mt-6"
            @click="menuOpen = false"
          >
            Resume
          </UButton>
        </div>
      </template>
    </USlideover>
  </header>
</template>
