<script setup lang="ts">
const config = useRuntimeConfig()
const base = (config.app.baseURL || '/').replace(/\/$/, '')
const asset = (path: string) => `${base}${path}`

const projects = [
  {
    title: 'Safareva',
    role: 'Solo — product, design & full stack',
    period: '2026 — present',
    description: 'A multi-vertical travel package marketplace where agencies list packages and travellers browse and enquire. Built the full stack — Laravel REST API, admin panel, and a Nuxt 4 / Nuxt UI v4 front-end — architected around dynamic service types (Pilgrimage, Holidays, and more), each with its own theme and navigation. Built two production AI features end-to-end on the Laravel AI SDK (Gemini with Groq failover): a natural-language "vibe search" that turns free-text queries like "7-day Umrah in Ramadan for a family" into structured catalogue filters, using pgvector cosine similarity over taxonomy embeddings so prompt size stays flat as the catalogue grows; and an AI package builder that extracts structured package data from pasted supplier text or generates a draft from a short brief, applied transactionally with server-side name resolution and per-field confidence reporting. Hardened the prompts to treat supplier text as untrusted data, and bounded AI spend with caching, rate limiting and graceful degradation to keyword search. Owned this one solo end-to-end: market research, complete UX/UI design, and the full implementation — no dedicated designer involved.',
    tags: ['Laravel', 'Nuxt 4', 'Laravel AI SDK', 'Gemini', 'pgvector', 'Solo Build'],
    image: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    images: [
      asset('/images/projects/safareva/01-homepage.png'),
      asset('/images/projects/safareva/ai-assist-magic-fill.png'),
      asset('/images/projects/safareva/02-homepage-holidays.png'),
      asset('/images/projects/safareva/03-listing-holidays.png'),
      asset('/images/projects/safareva/04-packages-menu.jpg'),
      asset('/images/projects/safareva/05-agencies.png'),
      asset('/images/projects/safareva/06-prefrencies.png')
    ],
    captions: [
      '',
      'AI Assist in the package builder — Magic Fill extracts a complete structured package from pasted WhatsApp, Word or email text; AI Generate drafts one from a short brief. Built on the Laravel AI SDK with Gemini and Groq failover.',
      '', '', '', '', ''
    ],
    links: { demo: 'https://safareva.com/', repo: '' }
  },
  {
    title: 'GIS Cloud',
    role: 'Tech lead — team of 5',
    period: '2024 — 2025',
    description: 'A collaborative web GIS platform where teams upload, style, edit and share geospatial data straight in the browser. Designed the database and data model for map shapes: a layer metadata table plus a shapes table created per uploaded layer, with its columns derived from that shapefile\'s own attributes — so any shapefile imports without a fixed schema, and removing a layer cleans up its data with it. Built the import path that turns an uploaded shapefile into stored map features, the rendering path that draws those layers on an OpenLayers map with per-layer colour and opacity, and full create, edit and delete of individual shapes on the map. Also built the layer-sharing model and a modules-and-roles permission system. Led a five-person team, authoring the bulk of the codebase and reviewing the rest through pull requests.',
    tags: ['Laravel', 'Vue 3', 'OpenLayers', 'MySQL Spatial', 'Shapefiles', 'Team Lead'],
    image: 'bg-gradient-to-br from-lime-500 to-emerald-600',
    images: [],
    liveRestricted: true,
    links: { demo: '', repo: '' }
  },
  {
    title: 'Multi-Tenant Back-Office Platform',
    role: 'Core developer, then co-lead on the rewrite',
    period: '2024',
    description: 'A modular back-office platform that runs several client organisations from a single Laravel codebase, each tenant with its own module set, branding and permission model. Worked across the HR and finance modules — employee records (employment history, documents, qualifications, bank and pension details), a safe-deposit-box register with transaction and summary reporting, and petty-cash tracking with printable reports — plus the modules-and-roles permission layer and national digital-ID single sign-on for government-linked tenants. Later co-led the ground-up rewrite onto Vue 3, building an in-house component library of 40+ Radix-based UI primitives and adding a Gmail-integrated support desk and team-based tenancy.',
    tags: ['Laravel', 'Inertia.js', 'Vue 3', 'Multi-Tenancy', 'RBAC'],
    image: 'bg-gradient-to-br from-slate-500 to-gray-700',
    images: [],
    liveRestricted: true,
    links: { demo: '', repo: '' }
  },
  {
    title: 'UQU Journals System',
    role: 'Full-stack developer',
    period: '2023 — 2024',
    description: 'A full-stack journal article publishing tool for Umm Al-Qura University. Built the Laravel API that parses uploaded Word documents (PHPWord/Pandoc) into structured sections and compiles content into PDFs via a custom LaTeX pipeline, plus the Vue 3 / CKEditor front-end with Arabic/English RTL support.',
    tags: ['Laravel', 'Vue 3', 'CKEditor 5', 'LaTeX', 'i18n (AR/EN)'],
    image: 'bg-gradient-to-br from-emerald-500 to-teal-500',
    images: [],
    links: { demo: 'https://production.uqujournalsys.org/', repo: '' }
  },
  {
    title: 'Kargenic',
    role: 'Back-end developer & team lead',
    period: '2022 — 2023',
    description: 'Back-end development and team leadership on a Laravel-based platform, owning core business logic and coordinating delivery across the development team.',
    tags: ['Laravel', 'MySQL', 'Team Leadership'],
    image: 'bg-gradient-to-br from-purple-500 to-pink-500',
    images: [],
    links: { demo: 'https://kargenic.com/', repo: '' }
  },
  {
    title: 'Houzez',
    role: 'Front-end developer',
    period: '2015 — 2017',
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
        <p class="text-gray-500 dark:text-gray-400">
          Selected work from the last decade. Several are behind client logins or under NDA — those show
          screenshots and detail instead of a live link.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 gap-6">
        <div
          v-for="(project, index) in projects"
          :key="index"
          v-reveal="{ y: 18, delay: 100 + index * 80 }"
        >
          <UCard :ui="{ body: { padding: 'p-0 sm:p-0' } }" class="overflow-hidden group h-full">
            <button
              type="button"
              class="relative block w-full h-48 overflow-hidden cursor-pointer"
              @click="openProject(project)"
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
                Private / NDA
              </UBadge>
            </button>

            <div class="p-6 flex flex-col h-full">
              <div class="flex items-start justify-between gap-3 mb-1">
                <h3 class="text-xl font-bold">{{ project.title }}</h3>
                <span class="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap pt-1.5">
                  {{ project.period }}
                </span>
              </div>
              <p class="text-xs font-medium text-primary-500 mb-3">{{ project.role }}</p>

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
                  :icon="project.images.length ? 'i-heroicons-photo' : 'i-heroicons-document-text'"
                  size="sm"
                  variant="soft"
                  class="rounded-full"
                  @click="openProject(project)"
                >
                  {{ project.images.length ? 'View Gallery' : 'View Details' }}
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
