<script setup lang="ts">
const contactMethods = [
  {
    icon: 'i-heroicons-envelope',
    label: 'Email',
    value: 'ans2003@gmail.com',
    href: 'mailto:ans2003@gmail.com'
  },
  {
    icon: 'i-heroicons-phone',
    label: 'Phone',
    value: '+92 323 4535756',
    href: 'tel:+923234535756'
  },
  {
    icon: 'i-heroicons-map-pin',
    label: 'Location',
    value: 'Lahore, Pakistan',
    href: ''
  }
]

const socialLinks = [
  { icon: 'i-simple-icons-github', to: 'https://github.com/ans1', label: 'GitHub' },
  { icon: 'i-simple-icons-linkedin', to: 'https://linkedin.com/in/muhammadans', label: 'LinkedIn' }
]
</script>

<template>
  <section id="contact" v-reveal class="py-20">
    <UContainer>
      <div class="max-w-3xl mx-auto text-center">
        <div v-reveal="{ y: 12, delay: 60 }" class="mb-12">
          <h2 class="text-3xl font-bold mb-4">Get In Touch</h2>
          <p class="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            I'm currently available for freelance work and full-time opportunities.
            If you have a project that needs some creative touch, let's talk.
          </p>
        </div>

        <div v-reveal="{ y: 16, delay: 120 }" class="grid sm:grid-cols-3 gap-4 mb-10">
          <UCard
            v-for="method in contactMethods"
            :key="method.label"
            :ui="{ body: { padding: 'p-6' } }"
            class="text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div class="flex flex-col items-center gap-3">
              <div class="flex items-center justify-center w-14 h-14 rounded-full bg-primary-500/10 text-primary-500">
                <UIcon :name="method.icon" class="w-6 h-6" />
              </div>
              <div>
                <div class="text-sm text-gray-500 dark:text-gray-400 mb-0.5">{{ method.label }}</div>
                <a
                  v-if="method.href"
                  :href="method.href"
                  class="font-semibold hover:text-primary-500 transition-colors break-all"
                >
                  {{ method.value }}
                </a>
                <div v-else class="font-semibold">{{ method.value }}</div>
              </div>
            </div>
          </UCard>
        </div>

        <div v-reveal="{ y: 16, delay: 180 }" class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <UButton
            size="xl"
            to="mailto:ans2003@gmail.com"
            icon="i-heroicons-envelope"
            class="rounded-full"
          >
            Email Me
          </UButton>

          <div class="flex items-center gap-3">
            <UButton
              v-for="social in socialLinks"
              :key="social.label"
              :icon="social.icon"
              :to="social.to"
              target="_blank"
              variant="soft"
              size="lg"
              class="rounded-full hover:-translate-y-0.5 transition-transform"
              :aria-label="social.label"
            />
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
