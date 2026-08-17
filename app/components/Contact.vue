<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  message: ''
})

const onSubmit = () => {
  alert('Thanks for your message! This is a demo form.')
}
</script>

<template>
  <section id="contact" v-reveal class="py-20">
    <UContainer>
      <div class="max-w-4xl mx-auto">
        <div v-reveal="{ y: 12, delay: 60 }" class="text-center mb-16">
          <h2 class="text-3xl font-bold mb-4">Get In Touch</h2>
          <p class="text-gray-500 dark:text-gray-400">
            Have a project in mind or want to discuss new opportunities?
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-12 items-start">
          <div v-reveal="{ x: -12, y: 0, delay: 120 }" class="space-y-8">
            <h3 class="text-xl font-bold">Contact Information</h3>
            <p class="text-gray-600 dark:text-gray-300">
              I'm currently available for freelance work and full-time opportunities.
              If you have a project that needs some creative touch, let's discuss it!
            </p>

            <div class="space-y-4">
              <div class="flex items-center gap-4">
                <div class="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-500">
                  <UIcon name="i-heroicons-envelope" class="w-6 h-6" />
                </div>
                <div>
                  <div class="text-sm text-gray-500">Email Me</div>
                  <a href="mailto:ans2003@gmail.com" class="font-medium hover:text-primary-500">ans2003@gmail.com</a>
                </div>
              </div>
              
              <div class="flex items-center gap-4">
                <div class="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-500">
                  <UIcon name="i-heroicons-map-pin" class="w-6 h-6" />
                </div>
                <div>
                  <div class="text-sm text-gray-500">Location</div>
                  <div class="font-medium">Lahore, Pakistan</div>
                </div>
              </div>
            </div>
          </div>

          <UCard v-reveal="{ x: 12, y: 0, delay: 180 }">
            <form @submit.prevent="onSubmit" class="space-y-4">
              <UFormGroup label="Name" name="name">
                <UInput v-model="form.name" placeholder="John Doe" />
              </UFormGroup>
              
              <UFormGroup label="Email" name="email">
                <UInput v-model="form.email" type="email" placeholder="john@example.com" />
              </UFormGroup>
              
              <UFormGroup label="Message" name="message">
                <UTextarea v-model="form.message" placeholder="Tell me about your project..." :rows="4" />
              </UFormGroup>

              <UButton type="submit" block color="primary">
                Send Message
              </UButton>
            </form>
          </UCard>
        </div>
      </div>
    </UContainer>
  </section>
</template>
