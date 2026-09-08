<script setup lang="ts">
const skillCategories = [
  {
    title: 'Frontend Development',
    icon: 'i-heroicons-computer-desktop',
    skills: [
      { name: 'Nuxt 4', icon: 'i-simple-icons-nuxtdotjs', color: '#00DC82' },
      { name: 'Vue.js', icon: 'i-simple-icons-vuedotjs', color: '#4FC08D' },
      { name: 'Nuxt UI v4', icon: 'i-simple-icons-nuxtdotjs', color: '#00DC82' },
      { name: 'Pinia', icon: 'i-heroicons-cube', color: '#FFD859' },
      { name: 'Tailwind CSS', icon: 'i-simple-icons-tailwindcss', color: '#38BDF8' },
      { name: 'SCSS', icon: 'i-simple-icons-sass', color: '#CC6699' },
      { name: 'HTML5', icon: 'i-simple-icons-html5', color: '#E34F26' },
      { name: 'JavaScript (ES6+)', icon: 'i-simple-icons-javascript', color: '#F7DF1E' },
      { name: 'Inertia.js', icon: 'i-heroicons-bolt', color: '#9553E9' },
      { name: 'OpenLayers', icon: 'i-heroicons-map', color: '#1F6B75' }
    ]
  },
  {
    title: 'Backend Development',
    icon: 'i-heroicons-server',
    skills: [
      { name: 'PHP (8+)', icon: 'i-simple-icons-php', color: '#777BB4' },
      { name: 'Laravel', icon: 'i-simple-icons-laravel', color: '#FF2D20' },
      { name: 'REST APIs', icon: 'i-heroicons-globe-alt', color: '#38BDF8' },
      { name: 'Eloquent ORM', icon: 'i-heroicons-circle-stack', color: '#FF2D20' },
      { name: 'MySQL (8+)', icon: 'i-simple-icons-mysql', color: '#4479A1' },
      { name: 'Sanctum', icon: 'i-heroicons-shield-check', color: '#FF2D20' },
      { name: 'Queues', icon: 'i-heroicons-queue-list', color: '#A78BFA' },
      { name: 'AI Integration', icon: 'i-heroicons-cpu-chip', color: '#F59E0B' }
    ]
  },
  {
    title: 'AI Engineering',
    icon: 'i-heroicons-sparkles',
    skills: [
      { name: 'Laravel AI SDK', icon: 'i-simple-icons-laravel', color: '#FF2D20' },
      { name: 'Gemini', icon: 'i-heroicons-sparkles', color: '#4285F4' },
      { name: 'Groq', icon: 'i-heroicons-bolt', color: '#F55036' },
      { name: 'Structured / JSON-Schema Output', icon: 'i-heroicons-code-bracket-square', color: '#38BDF8' },
      { name: 'Embeddings & pgvector Search', icon: 'i-heroicons-magnifying-glass-circle', color: '#10B981' },
      { name: 'Prompt Design & Injection Hardening', icon: 'i-heroicons-shield-check', color: '#A78BFA' },
      { name: 'AI Cost Control & Failover', icon: 'i-heroicons-currency-dollar', color: '#F59E0B' },
      { name: 'AI-Assisted Development', icon: 'i-heroicons-cpu-chip', color: '#D97757' }
    ]
  },
  {
    title: 'DevOps & Deployment',
    icon: 'i-heroicons-server-stack',
    skills: [
      { name: 'Linux / Ubuntu VPS', icon: 'i-simple-icons-ubuntu', color: '#E95420' },
      { name: 'Apache & PHP-FPM', icon: 'i-simple-icons-apache', color: '#D22128' },
      { name: 'Nginx', icon: 'i-simple-icons-nginx', color: '#009639' },
      { name: 'PM2 (Nuxt SSR)', icon: 'i-heroicons-cpu-chip', color: '#2B037A' },
      { name: 'Zero-Downtime Deploys', icon: 'i-heroicons-arrow-path', color: '#10B981' },
      { name: 'SSH & Server Provisioning', icon: 'i-heroicons-key', color: '#F59E0B' },
      { name: 'Docker', icon: 'i-simple-icons-docker', color: '#2496ED' },
      { name: 'Git & GitHub', icon: 'i-simple-icons-github', color: '#F0F6FC' },
      { name: 'Postman', icon: 'i-simple-icons-postman', color: '#FF6C37' }
    ]
  }
]
</script>

<template>
  <section id="skills" v-reveal class="py-20">
    <UContainer>
      <div v-reveal="{ y: 12, delay: 60 }" class="text-center mb-16">
        <h2 class="text-3xl font-bold mb-4">Technical Skills</h2>
        <p class="text-gray-500 dark:text-gray-400">Technologies I work with</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <UCard 
          v-for="(category, index) in skillCategories" 
          :key="category.title"
          v-reveal="{ y: 16, delay: 120 + index * 90 }"
          class="hover:ring-2 hover:ring-primary-500/50 transition-all duration-300"
        >
          <template #header>
            <div class="flex items-center gap-3">
              <UIcon :name="category.icon" class="w-6 h-6 text-primary-500" />
              <h3 class="font-bold text-lg">{{ category.title }}</h3>
            </div>
          </template>

          <div class="flex flex-wrap items-start content-start gap-2">
            <UBadge
              v-for="skill in category.skills"
              :key="skill.name"
              color="gray"
              variant="solid"
              class="px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 leading-none whitespace-nowrap"
            >
              <UIcon :name="skill.icon" class="w-3.5 h-3.5 shrink-0" :style="{ color: skill.color }" />
              <span>{{ skill.name }}</span>
            </UBadge>
          </div>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>
