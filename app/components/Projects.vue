<script setup lang="ts">
const config = useRuntimeConfig()
const base = (config.app.baseURL || '/').replace(/\/$/, '')
const asset = (path: string) => `${base}${path}`

const projects = [
  {
    title: 'Safareva',
    description: 'A multi-vertical travel package marketplace where agencies list packages and travellers browse and enquire. Built the full stack — Laravel REST API, admin panel, and a Nuxt 4/Nuxt UI v4 front-end — architected around dynamic service types (Pilgrimage, Holidays, and more), each with its own theme and navigation, with an AI-assisted package builder.',
    tags: ['Laravel', 'Nuxt 4', 'Nuxt UI v4', 'Pinia', 'AI Integration'],
    image: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    images: [
      asset('/images/projects/safareva/01-homepage.png'),
      asset('/images/projects/safareva/02-homepage-holidays.png'),
      asset('/images/projects/safareva/03-listing-holidays.png'),
      asset('/images/projects/safareva/04-packages-menu.jpg'),
      asset('/images/projects/safareva/05-agencies.png')
    ],
    liveRestricted: true,
    links: { demo: '', repo: '' }
  },
  {
    title: 'UQU Journals System',
    description: 'A full-stack journal article publishing tool for Umm Al-Qura University. Built the Laravel API that parses uploaded Word documents (PHPWord/Pandoc) into structured sections and compiles content into PDFs via a custom LaTeX pipeline, plus the Vue 3/CKEditor front-end with Arabic/English RTL support.',
    tags: ['Laravel', 'Vue 3', 'CKEditor 5', 'LaTeX', 'i18n'],
    image: 'bg-gradient-to-br from-emerald-500 to-teal-500',
    images: [],
    links: { demo: 'https://production.uqujournalsys.org/', repo: '' }
  },
  {
    title: 'Kargenic',
    description: 'Back-end development and team leadership on a Laravel-based platform, owning core business logic and coordinating delivery across the development team.',
    tags: ['Laravel', 'MySQL', 'Team Leadership'],
    image: 'bg-gradient-to-br from-purple-500 to-pink-500',
    images: [],
    links: { demo: 'https://kargenic.com/', repo: '' }
  },
  {
    title: 'Houzez',
    description: 'A best-selling ThemeForest real-estate WordPress theme. Built the entire front-end from the ground up — templates, listings, agent/agency profiles, search & filters, and responsive UI — as the front-end developer on the theme.',
    tags: ['WordPress', 'PHP', 'JavaScript', 'SCSS'],
    image: 'bg-gradient-to-br from-orange-500 to-amber-500',
    images: [],
    links: { demo: 'https://themeforest.net/item/houzez-real-estate-wordpress-theme/15752549', repo: '' }
  }
]

const modalOpen = ref(false)
const selectedProject = ref<(typeof projects)[number] | null>(null)

function openProject(project: (typeof projects)[number]) {
  selectedProject.value = project
  modalOpen.value = true
}
</script>

<template>
  <section id="projects" v-reveal class="py-20 bg-gray-50 dark:bg-gray-800/50">
    <UContainer>
      <div v-reveal="{ y: 12, delay: 60 }" class="text-center mb-16">
        <h2 class="text-3xl font-bold mb-4">Featured Projects</h2>
        <p class="text-gray-500 dark:text-gray-400">Some of my recent work</p>
      </div>

      <div class="grid sm:grid-cols-2 gap-6">
        <div
          v-for="(project, index) in projects"
          :key="index"
          v-reveal="{ y: 18, delay: 100 + index * 80 }"
        >
          <UCard :ui="{ body: { padding: 'p-0 sm:p-0' } }" class="overflow-hidden group h-full">
            <component
              :is="project.images.length ? 'button' : 'div'"
              :type="project.images.length ? 'button' : undefined"
              class="relative block w-full h-48 overflow-hidden"
              :class="project.images.length ? 'cursor-pointer' : ''"
              @click="project.images.length ? openProject(project) : null"
            >
              <img
                v-if="project.images.length"
                :src="project.images[0]"
                :alt="project.title"
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              >
              <div
                v-else
                :class="['h-full w-full transition-transform duration-500 group-hover:scale-105', project.image]"
              />

              <UBadge
                v-if="project.liveRestricted"
                color="gray"
                variant="solid"
                size="sm"
                class="absolute top-3 left-3 backdrop-blur !bg-gray-900/70 !text-white rounded-full"
              >
                <UIcon name="i-heroicons-lock-closed" class="w-3.5 h-3.5 mr-1" />
                In Production
              </UBadge>
            </component>

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
                  class="rounded-full"
                >
                  {{ tag }}
                </UBadge>
              </div>

              <div class="flex items-center gap-3 mt-auto">
                <UButton
                  v-if="project.images.length"
                  icon="i-heroicons-photo"
                  size="sm"
                  variant="soft"
                  class="rounded-full"
                  @click="openProject(project)"
                >
                  View Gallery
                </UButton>
                <UButton
                  v-if="project.links.demo"
                  icon="i-heroicons-eye"
                  size="sm"
                  variant="soft"
                  class="rounded-full"
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
                  class="rounded-full"
                  :to="project.links.repo"
                  target="_blank"
                >
                  Code
                </UButton>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </UContainer>

    <ProjectModal v-model:open="modalOpen" :project="selectedProject" />
  </section>
</template>
