<script setup lang="ts">
const socialLinks = [
  { icon: 'i-simple-icons-github', to: 'https://github.com/ans1', label: 'GitHub' },
  { icon: 'i-simple-icons-linkedin', to: 'https://linkedin.com/in/muhammadans', label: 'LinkedIn' },
  { icon: 'i-heroicons-envelope', to: 'mailto:ans2003@gmail.com', label: 'Email' }
]

const links = [
  { label: 'Home', to: '/' },
  { label: 'Experience', to: '/#experience' },
  { label: 'Skills', to: '/#skills' },
  { label: 'Projects', to: '/#projects' },
  { label: 'Contact', to: '/#contact' }
]
</script>

<template>
  <footer v-reveal="{ y: 10, delay: 60 }" class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
    <UContainer class="py-12">
      <div v-reveal="{ y: 8, delay: 120 }" class="grid md:grid-cols-3 gap-8 items-center">
        <div class="text-center md:text-left">
          <NuxtLink to="/" class="text-xl font-bold font-mono mb-2 inline-block">
            &lt;M.Ans /&gt;
          </NuxtLink>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            &copy; {{ new Date().getFullYear() }} Muhammad. All rights reserved.
          </p>
        </div>

        <div class="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <NuxtLink
            v-for="link in links"
            :key="link.label"
            :to="link.to"
            class="text-sm text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
          >
            {{ link.label }}
          </NuxtLink>
        </div>

        <div class="flex justify-center md:justify-end gap-4">
          <UButton
            v-for="social in socialLinks"
            :key="social.label"
            :icon="social.icon"
            :to="social.to"
            target="_blank"
            variant="ghost"
            color="gray"
            :aria-label="social.label"
          />
        </div>
      </div>
    </UContainer>
  </footer>
</template>
