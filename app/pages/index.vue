<script setup lang="ts">
useHead({
  title: 'Muhammad Ans — Full-Stack Developer (Laravel | Nuxt | Vue.js)',
  meta: [
    {
      name: 'description',
      content: 'Full-stack developer with 6+ years of experience building Laravel back-ends and modern Nuxt.js/Vue.js front-ends. Portfolio, experience, and featured projects.'
    }
  ]
})
</script>

<template>
  <div class="page-index min-h-screen flex flex-col">
    <Header class="header-section w-full" />
    <Hero class="hero-section w-full" />
    <main class="body-section w-full flex-grow">
      <Experience class="experience-subsection" />
      <Skills class="skills-subsection" />
      <Projects class="projects-subsection" />
      <Contact class="contact-subsection" />
    </main>
    <Footer class="footer-section w-full mt-auto" />
  </div>
</template>
