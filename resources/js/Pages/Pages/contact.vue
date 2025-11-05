<template>
  <div class="bg-white text-black font-sans leading-relaxed">
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="relative py-12 lg:py-24">
          <div class="max-w-4xl">
            <h1 class="text-4xl lg:text-6xl font-bold tracking-tight text-black mb-6 leading-tight">
              Let's build 
              <span class="relative">
                something
                <div class="absolute bottom-2 left-0 w-full h-3 bg-blue opacity-20 -z-10"></div>
              </span>
              amazing together.
            </h1>
            
            <p class="mt-8 text-xl text-gray-dark max-w-2xl leading-relaxed">
              Ready to bring your vision to life? We're here to help you build, scale, and succeed.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form & Info Section -->
    <section class="py-24 lg:py-32 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          <!-- Contact Form -->
          <div>
            <h2 class="text-3xl lg:text-4xl font-bold tracking-tight text-black mb-8">
              Start Your Project
            </h2>
            <p class="text-lg text-gray-dark mb-12 leading-relaxed">
              Tell us about your project and we'll get back to you within 24 hours with a personalized proposal.
            </p>
            
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-black mb-2">First Name *</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    v-model="form.firstName"
                    required
                    class="w-full px-4 py-3 border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all duration-200"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label for="lastName" class="block text-sm font-medium text-black mb-2">Last Name *</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    v-model="form.lastName"
                    required
                    class="w-full px-4 py-3 border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all duration-200"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label for="email" class="block text-sm font-medium text-black mb-2">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email"
                    required
                    class="w-full px-4 py-3 border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all duration-200"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label for="phone" class="block text-sm font-medium text-black mb-2">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    v-model="form.phone"
                    class="w-full px-4 py-3 border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all duration-200"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label for="company" class="block text-sm font-medium text-black mb-2">Company</label>
                  <input 
                    type="text" 
                    id="company" 
                    v-model="form.company"
                    class="w-full px-4 py-3 border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all duration-200"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label for="projectType" class="block text-sm font-medium text-black mb-2">Project Type *</label>
                  <select 
                    id="projectType" 
                    v-model="form.projectType"
                    required
                    class="w-full px-4 py-3 border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select project type</option>
                    <option value="mvp-development">MVP Development</option>
                    <option value="ai-code-review">AI Code Review</option>
                    <option value="internal-tools">Internal Tools Development</option>
                    <option value="legacy-refactor">Legacy Code Refactor</option>
                    <option value="embedded-team">Embedded Team</option>
                    <option value="recruiting">Recruiting Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label for="description" class="block text-sm font-medium text-black mb-2">Project Description *</label>
                <textarea 
                  id="description" 
                  v-model="form.description"
                  required
                  rows="6"
                  class="w-full px-4 py-3 border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                ></textarea>
              </div>

              <div class="pt-4">
                <button 
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-black hover:bg-blue disabled:bg-gray disabled:cursor-not-allowed transition-all duration-200 rounded"
                >
                  <span v-if="isSubmitting">Sending...</span>
                  <span v-else>Send Message</span>
                </button>
              </div>
            </form>
          </div>

          <!-- Contact Information -->
        <div class="space-y-12">
            <div>
              <h3 class="text-2xl font-bold text-black mb-6">Get in Touch</h3>
              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-blue/10 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-blue" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-black">Email</h4>
                    <p class="text-gray-dark">hello@codecontent.com</p>
                    <p class="text-sm text-gray">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-blue/10 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-blue" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-black">Schedule a Call</h4>
                    <p class="text-gray-dark">Book a 30-minute consultation</p>
                    <a href="https://calendly.com/moses-codecontent/30min" target="_blank"  class="text-blue hover:text-blue-dark transition-colors duration-200">Book Now →</a>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-blue/10 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-blue" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-black">Location</h4>
                    <p class="text-gray-dark">Remote-first team</p>
                    <p class="text-sm text-gray">Serving clients worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-gray-light/50 rounded-lg p-6">
              <h4 class="text-lg font-semibold text-black mb-3">What to Expect</h4>
              <ul class="space-y-2 text-gray-dark">
                <li class="flex items-center space-x-2">
                  <svg class="w-4 h-4 text-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span>Response within 24 hours</span>
                </li>
                <li class="flex items-center space-x-2">
                  <svg class="w-4 h-4 text-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span>Free consultation call</span>
                </li>
                <li class="flex items-center space-x-2">
                  <svg class="w-4 h-4 text-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span>Detailed project proposal</span>
                </li>
              </ul>
            </div>

            <div class="grid grid-cols-2 gap-6">
              <div class="text-center">
                <div class="text-3xl font-bold text-black">24h</div>
                <div class="text-sm text-gray-dark mt-1">Response Time</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-black">98%</div>
                <div class="text-sm text-gray-dark mt-1">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  projectType: '',
  description: ''
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  console.log('Form submitted:', form)
  
  // Reset form
  Object.keys(form).forEach(key => {
    form[key] = ''
  })
  
  isSubmitting.value = false
  alert('Thank you for your message! We\'ll get back to you within 24 hours.')
}
</script>