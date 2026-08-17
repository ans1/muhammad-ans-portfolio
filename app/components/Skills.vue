<script setup lang="ts">
const skillCategories = [
  {
    title: 'Frontend Development',
    icon: 'i-heroicons-computer-desktop',
    skills: [
      'Nuxt 4', 'Vue.js', 'Nuxt UI v4', 'Pinia', 'Tailwind CSS',
      'SCSS', 'HTML5', 'JavaScript (ES6+)'
    ]
  },
  {
    title: 'Backend Development',
    icon: 'i-heroicons-server',
    skills: [
      'PHP (8+)', 'Laravel', 'REST APIs', 'Eloquent ORM',
      'MySQL (8+)', 'Sanctum', 'Queues', 'AI Integration'
    ]
  },
  {
    title: 'Tools & Workflow',
    icon: 'i-heroicons-command-line',
    skills: [
      'Git', 'GitHub', 'Docker', 'Postman',
      'PhpStorm', 'Visual Studio Code', 'Laragon'
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

      <div class="grid md:grid-cols-3 gap-8">
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

          <div class="flex flex-wrap gap-2">
            <UBadge
              v-for="skill in category.skills"
              :key="skill"
              color="gray"
              variant="solid"
              class="px-3 py-1"
            >
              {{ skill }}
            </UBadge>
          </div>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>
