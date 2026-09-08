<script setup lang="ts">
const experiences = [
  {
    title: 'Independent Full-Stack Developer (Contract)',
    company: 'Independent — Remote',
    date: 'Feb 2024 - Present',
    description: 'Delivering end-to-end Laravel and Vue/Nuxt systems for clients on contract. Led a five-person team building a collaborative web GIS platform, worked across the HR and finance modules of a multi-tenant back-office platform and co-led its ground-up rewrite onto Vue 3, and independently designed and built Safareva, a multi-vertical travel marketplace.',
    technologies: ['Laravel', 'Nuxt 4', 'Vue 3', 'Inertia.js', 'Team Lead']
  },
  {
    title: 'Senior Full-Stack Developer',
    company: 'Crewlogix Technologies',
    date: 'Jan 2023 - Feb 2024',
    description: 'Led end-to-end full-stack delivery of Laravel applications, designing and maintaining REST APIs consumed by web and mobile clients. Built user-facing features with Nuxt.js/Vue.js, keeping releases stable through task planning, code reviews, and team mentoring.',
    technologies: ['Laravel', 'Nuxt.js', 'Vue.js', 'REST APIs']
  },
  {
    title: 'Senior Full-Stack Developer',
    company: 'TechNation',
    date: 'Feb 2020 - Feb 2023',
    description: 'Built and maintained Laravel web services and core business logic for multiple client-facing applications. Delivered responsive front-ends with Nuxt.js/Vue.js, collaborating directly with stakeholders from requirements through production release.',
    technologies: ['Laravel', 'Nuxt.js', 'Vue.js', 'MySQL']
  },
  {
    title: 'Freelance Full-Stack Developer',
    company: 'Independent',
    date: 'Jun 2017 - Feb 2020',
    description: 'Delivered end-to-end web projects for independent clients, building Laravel back-ends and Vue.js front-ends across e-commerce, service, and content platforms. Managed the full project lifecycle for multiple concurrent client engagements.',
    technologies: ['Laravel', 'Vue.js', 'PHP', 'MySQL']
  },
  {
    title: 'Senior Web Developer',
    company: 'FaveThemes',
    date: 'Nov 2015 - Jun 2017',
    description: 'Developed and enhanced ThemeForest real-estate themes (Houzez, Homey) with a focus on WordPress and front-end engineering. Built reusable UI components adopted across multiple premium theme releases.',
    technologies: ['WordPress', 'PHP', 'JavaScript', 'SCSS']
  },
  {
    title: 'Web Developer',
    company: 'Emenac Inc.',
    date: 'Jun 2014 - Aug 2015',
    description: 'Implemented custom CMS features and e-booking flows using PHP, MySQL, and JavaScript. Maintained and enhanced travel websites with a focus on reliability and performance.',
    technologies: ['PHP', 'MySQL', 'JavaScript']
  }
]
</script>

<template>
  <section id="experience" v-reveal class="py-20 bg-gray-50 dark:bg-gray-800/50">
    <UContainer>
      <div v-reveal="{ y: 12, delay: 60 }" class="text-center mb-16">
        <h2 class="text-3xl font-bold mb-4">Professional Experience</h2>
        <p class="text-gray-500 dark:text-gray-400">My journey in software development</p>
      </div>

      <div class="max-w-4xl mx-auto space-y-8">
        <div 
          v-for="(exp, index) in experiences" 
          :key="index"
          v-reveal="{ y: 18, delay: 100 + index * 90 }"
          class="relative pl-8 md:pl-0"
        >
          <div class="md:hidden absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700"></div>
          <div class="md:hidden absolute left-[-4px] top-6 w-2 h-2 rounded-full bg-primary-500"></div>

          <UCard :ui="{ body: { padding: 'p-0 sm:p-0' } }">
            <div class="md:flex">
              <div class="p-6 md:w-1/3 bg-gray-50 dark:bg-gray-900/50 md:border-r border-gray-200 dark:border-gray-800 flex flex-col justify-between">
                <div>
                  <h3 class="font-bold text-lg text-primary-500">{{ exp.company }}</h3>
                  <div class="text-sm font-semibold mt-1">{{ exp.date }}</div>
                </div>
                <div class="mt-4 md:mt-0">
                  <UBadge color="gray" variant="soft" class="rounded-full">{{ exp.title }}</UBadge>
                </div>
              </div>

              <div class="p-6 md:w-2/3">
                <p class="text-gray-600 dark:text-gray-300 mb-4">{{ exp.description }}</p>
                <div class="flex flex-wrap gap-2">
                  <UBadge
                    v-for="tech in exp.technologies"
                    :key="tech"
                    size="xs"
                    variant="subtle"
                    class="rounded-full"
                  >
                    {{ tech }}
                  </UBadge>
                </div>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </UContainer>
  </section>
</template>
