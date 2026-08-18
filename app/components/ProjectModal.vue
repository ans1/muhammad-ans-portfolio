<script setup lang="ts">
interface Project {
  title: string
  description: string
  tags: string[]
  image: string
  images?: string[]
  liveRestricted?: boolean
  links: { demo: string; repo: string }
}

const props = defineProps<{
  project: Project | null
}>()

const open = defineModel<boolean>('open', { default: false })

const galleryRef = ref<any>(null)
const activeIndex = ref(0)
const slideCount = computed(() => props.project?.images?.length ?? 0)
const isBeginning = computed(() => activeIndex.value <= 0)
const isEnd = computed(() => activeIndex.value >= slideCount.value - 1)

function onSlideChange() {
  const swiper = galleryRef.value?.swiper
  if (swiper) activeIndex.value = swiper.activeIndex
}

function goNext() {
  galleryRef.value?.swiper?.slideNext()
}

function goPrev() {
  galleryRef.value?.swiper?.slidePrev()
}

async function attachGallery() {
  await nextTick()
  const el = galleryRef.value
  if (!el) return

  // swiper-element web component; wait for it to upgrade + self-initialize
  if (customElements.get('swiper-container')) {
    await customElements.whenDefined('swiper-container')
  }

  let attempts = 0
  while (!el.swiper && attempts < 20) {
    await new Promise(r => setTimeout(r, 50))
    attempts++
  }

  activeIndex.value = el.swiper?.activeIndex ?? 0
  el.addEventListener('swiperslidechange', onSlideChange)
}

watch(() => props.project, async (project) => {
  activeIndex.value = 0
  if (project?.images?.length) {
    await attachGallery()
  }
})
</script>

<template>
  <UModal v-model:open="open" :ui="{ content: 'w-[95vw] sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl max-h-[90vh]' }">
    <template #content>
      <div v-if="project" class="max-h-[90vh] overflow-y-auto">
        <!-- Gallery header — only rendered when images are actually provided -->
        <div v-if="project.images?.length" class="relative bg-gray-100 dark:bg-gray-800 rounded-t-lg overflow-hidden">
          <ClientOnly>
            <swiper-container
              ref="galleryRef"
              class="w-full aspect-[16/10] sm:aspect-[16/9]"
              slides-per-view="1"
              grab-cursor="true"
            >
              <swiper-slide v-for="(img, i) in project.images" :key="i">
                <img
                  :src="img"
                  :alt="`${project.title} screenshot ${i + 1}`"
                  class="w-full h-full object-contain bg-gray-200 dark:bg-gray-900"
                >
              </swiper-slide>
            </swiper-container>
            <template #fallback>
              <div class="w-full aspect-video" :class="project.image" />
            </template>
          </ClientOnly>

          <!-- Explicit prev/next controls -->
          <template v-if="project.images.length > 1">
            <UButton
              icon="i-heroicons-chevron-left"
              size="md"
              class="absolute top-1/2 left-3 -translate-y-1/2 z-10 rounded-full !bg-gray-900/70 hover:!bg-gray-900/90 !text-white !ring-0 backdrop-blur"
              :disabled="isBeginning"
              @click="goPrev"
            />
            <UButton
              icon="i-heroicons-chevron-right"
              size="md"
              class="absolute top-1/2 right-3 -translate-y-1/2 z-10 rounded-full !bg-gray-900/70 hover:!bg-gray-900/90 !text-white !ring-0 backdrop-blur"
              :disabled="isEnd"
              @click="goNext"
            />

            <div class="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 px-3 py-1 rounded-full bg-gray-900/70 text-white text-xs font-medium backdrop-blur">
              {{ activeIndex + 1 }} / {{ slideCount }}
            </div>
          </template>

          <UButton
            icon="i-heroicons-x-mark"
            size="sm"
            class="absolute top-3 right-3 z-10 rounded-full !bg-gray-900/70 hover:!bg-gray-900/90 !text-white !ring-0 backdrop-blur"
            @click="open = false"
          />
        </div>

        <!-- No-gallery header — just a close button, no image/placeholder banner -->
        <div v-else class="flex justify-end p-3">
          <UButton
            icon="i-heroicons-x-mark"
            size="sm"
            variant="soft"
            color="gray"
            class="rounded-full"
            @click="open = false"
          />
        </div>

        <div class="p-6" :class="project.images?.length ? '' : 'pt-0'">
          <h3 class="text-2xl font-bold mb-3">{{ project.title }}</h3>

          <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            {{ project.description }}
          </p>

          <div class="flex flex-wrap gap-2 mb-6">
            <UBadge v-for="tag in project.tags" :key="tag" size="sm" variant="subtle" class="rounded-full">
              {{ tag }}
            </UBadge>
          </div>

          <div v-if="project.liveRestricted" class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <UIcon name="i-heroicons-lock-closed" class="w-4 h-4 shrink-0" />
            This project is live in production and not publicly viewable — screenshots shown above.
          </div>

          <div class="flex items-center gap-3">
            <UButton
              v-if="project.links.demo"
              :to="project.links.demo"
              target="_blank"
              icon="i-heroicons-arrow-top-right-on-square"
              class="rounded-full"
            >
              Visit Live Site
            </UButton>
            <UButton
              v-if="project.links.repo"
              :to="project.links.repo"
              target="_blank"
              variant="soft"
              color="gray"
              icon="i-simple-icons-github"
              class="rounded-full"
            >
              Code
            </UButton>
          </div>
        </div>
      </div>
    </template>
  </UModal>
</template>
