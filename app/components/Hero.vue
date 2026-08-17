<script setup lang="ts">
const socialLinks = [
  { icon: 'i-simple-icons-github', to: 'https://github.com/ans1', label: 'GitHub' },
  { icon: 'i-simple-icons-linkedin', to: 'https://linkedin.com/in/muhammadans', label: 'LinkedIn' },
  { icon: 'i-heroicons-envelope', to: 'mailto:ans2003@gmail.com', label: 'Email' }
]
</script>

<template>
  <section id="home" v-reveal="{ y: 24, duration: 800 }" class="py-20 md:py-32 flex items-center justify-center min-h-[calc(100vh-4rem)]">
    <UContainer>
      <div class="flex flex-col md:flex-row items-center gap-12">
        <div v-reveal="{ y: 16, delay: 80, duration: 800 }" class="flex-1 text-center md:text-left space-y-6">
          <UBadge variant="subtle" size="lg" class="rounded-full mb-4">
            Available for hire
          </UBadge>
          
          <h1 class="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
            Hi, I'm <span class="text-primary-500">Muhammad</span>
            <br />
            Fullstack Developer
          </h1>
          
          <p class="text-xl text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
            I build exceptional digital experiences with 6+ years of expertise in 
            <span class="text-gray-900 dark:text-gray-200 font-semibold">Laravel</span>, 
            <span class="text-gray-900 dark:text-gray-200 font-semibold">Nuxt</span>, and 
            <span class="text-gray-900 dark:text-gray-200 font-semibold">Modern Web Technologies</span>.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
            <UButton 
              size="xl" 
              to="#projects"
              icon="i-heroicons-briefcase"
            >
              View Projects
            </UButton>
            
            <UButton 
              size="xl" 
              variant="soft" 
              to="#contact"
              icon="i-heroicons-chat-bubble-bottom-center-text"
            >
              Contact Me
            </UButton>
          </div>

          <div class="flex items-center justify-center md:justify-start gap-4 pt-8 border-t border-gray-100 dark:border-gray-800">
            <UButton
              v-for="social in socialLinks"
              :key="social.label"
              :icon="social.icon"
              :to="social.to"
              target="_blank"
              variant="ghost"
              color="gray"
              size="lg"
              :aria-label="social.label"
            />
          </div>
        </div>

        <div v-reveal="{ x: 16, y: 0, delay: 160, duration: 900 }" class="flex-1 relative w-full max-w-md">
            <div class="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-purple-500/20 rounded-full blur-3xl" />
            <div class="relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-2xl">
              <div class="space-y-4">
                <div class="flex items-center gap-3 mb-6">
                  <div class="w-3 h-3 rounded-full bg-red-500" />
                  <div class="w-3 h-3 rounded-full bg-yellow-500" />
                  <div class="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div class="space-y-2 font-mono text-sm">
                  <div class="flex">
                    <span class="text-purple-500 mr-2">const</span>
                    <span class="text-blue-500 mr-2">developer</span>
                    <span class="text-gray-400">=</span>
                    <span class="text-gray-400 ml-2">{</span>
                  </div>
                  <div class="pl-4">
                    <span class="text-gray-400">name:</span>
                    <span class="text-green-500 ml-2">'Muhammad'</span>,
                  </div>
                  <div class="pl-4">
                    <span class="text-gray-400">role:</span>
                    <span class="text-green-500 ml-2">'Fullstack Dev'</span>,
                  </div>
                  <div class="pl-4">
                    <span class="text-gray-400">experience:</span>
                    <span class="text-orange-500 ml-2">6</span>,
                  </div>
                  <div class="pl-4">
                    <span class="text-gray-400">stack:</span>
                    <span class="text-gray-400">[</span>
                    <span class="text-green-500">'Laravel'</span>,
                    <span class="text-green-500">'Nuxt'</span>
                    <span class="text-gray-400">]</span>
                  </div>
                  <div class="text-gray-400">}</div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
