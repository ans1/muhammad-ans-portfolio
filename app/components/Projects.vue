<script setup lang="ts">
const projects = [
  {
    title: 'Safareva',
    description: 'A multi-vertical travel package marketplace where agencies list packages and travellers browse and enquire. Built the full stack — Laravel REST API, admin panel, and a Nuxt 4/Nuxt UI v4 front-end — architected around dynamic service types (Pilgrimage, Leisure, and more) with an AI-assisted package builder.',
    tags: ['Laravel', 'Nuxt 4', 'Nuxt UI v4', 'Pinia', 'AI Integration'],
    image: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    links: { demo: 'http://80.241.217.55/', repo: '' }
  },
  {
    title: 'UQU Journals System',
    description: 'A full-stack journal article publishing tool for Umm Al-Qura University. Built the Laravel API that parses uploaded Word documents (PHPWord/Pandoc) into structured sections and compiles content into PDFs via a custom LaTeX pipeline, plus the Vue 3/CKEditor front-end with Arabic/English RTL support.',
    tags: ['Laravel', 'Vue 3', 'CKEditor 5', 'LaTeX', 'i18n'],
    image: 'bg-gradient-to-br from-emerald-500 to-teal-500',
    links: { demo: 'https://production.uqujournalsys.org/', repo: '' }
  },
  {
    title: 'Kargenic',
    description: 'Back-end development and team leadership on a Laravel-based platform, owning core business logic and coordinating delivery across the development team.',
    tags: ['Laravel', 'MySQL', 'Team Leadership'],
    image: 'bg-gradient-to-br from-purple-500 to-pink-500',
    links: { demo: 'https://kargenic.com/', repo: '' }
  },
  {
    title: 'Houzez',
    description: 'A best-selling ThemeForest real-estate WordPress theme. Built the entire front-end from the ground up — templates, listings, agent/agency profiles, search & filters, and responsive UI — as the front-end developer on the theme.',
    tags: ['WordPress', 'PHP', 'JavaScript', 'SCSS'],
    image: 'bg-gradient-to-br from-orange-500 to-amber-500',
    links: { demo: 'https://themeforest.net/item/houzez-real-estate-wordpress-theme/15752549', repo: '' }
  }
]

const containerRef = ref(null)

useSwiper(containerRef, {
  slidesPerView: 1,
  spaceBetween: 16,
  navigation: true,
  pagination: { clickable: true },
  grabCursor: true,
  breakpoints: {
    768: { slidesPerView: 2, spaceBetween: 24 },
    1024: { slidesPerView: 3, spaceBetween: 24 }
  }
})
</script>

<template>
  <section id="projects" v-reveal class="py-20 bg-gray-50 dark:bg-gray-800/50">
    <UContainer>
      <div v-reveal="{ y: 12, delay: 60 }" class="text-center mb-16">
        <h2 class="text-3xl font-bold mb-4">Featured Projects</h2>
        <p class="text-gray-500 dark:text-gray-400">Some of my recent work</p>
      </div>

      <div v-reveal="{ y: 18, delay: 120 }">
        <ClientOnly>
          <swiper-container ref="containerRef" :init="false" class="w-full">
            <swiper-slide v-for="(project, index) in projects" :key="index" class="h-auto">
              <UCard :ui="{ body: { padding: 'p-0 sm:p-0' } }" class="overflow-hidden group h-full">
                <div :class="['h-48 w-full transition-transform duration-500 group-hover:scale-105', project.image]"></div>

                <div class="p-6 flex flex-col h-full">
                  <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
                  <p class="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {{ project.description }}
                  </p>

                  <div class="flex flex-wrap gap-2 mb-6">
                    <UBadge
                      v-for="tag in project.tags"
                      :key="tag"
                      size="xs"
                      variant="subtle"
                    >
                      {{ tag }}
                    </UBadge>
                  </div>

                  <div class="flex items-center gap-3 mt-auto">
                    <UButton
                      v-if="project.links.demo"
                      icon="i-heroicons-eye"
                      size="sm"
                      variant="soft"
                      :to="project.links.demo"
                      target="_blank"
                    >
                      Live Site
                    </UButton>
                    <UButton
                      v-if="project.links.repo"
                      icon="i-simple-icons-github"
                      size="sm"
                      variant="ghost"
                      color="gray"
                      :to="project.links.repo"
                      target="_blank"
                    >
                      Code
                    </UButton>
                  </div>
                </div>
              </UCard>
            </swiper-slide>
          </swiper-container>
        </ClientOnly>
      </div>
    </UContainer>
  </section>
</template>
