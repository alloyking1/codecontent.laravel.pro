<template>
  <header class="sticky top-0 z-50 bg-white backdrop-blur-sm">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        
        <!-- Logo -->
        <NuxtLink to="/" class="flex-shrink-0">
          <span class="text-xl font-bold text-black tracking-tight hover:text-blue transition-colors duration-200">
            codecontent
          </span>
        </NuxtLink>
        
        <!-- Navigation Links + CTA Button (grouped together on right) -->
        <div class="hidden md:flex items-center space-x-8">
          <nav class="flex items-center space-x-8">
            <!-- Services Dropdown -->
            <div class="relative group">
              <button class="flex items-center text-gray-dark hover:text-black transition-colors duration-200 font-medium">
                Services
                <svg class="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              
              <!-- Dropdown Menu -->
              <div class="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-light opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div class="py-2">
                  <NuxtLink to="/services/mvp-development" 
                            class="block px-4 py-3 text-gray-dark hover:text-black hover:bg-gray-light transition-all duration-200">
                    <div class="font-medium"> MVP Development</div>
                    <div class="text-sm text-gray">Fast MVP Development. Launch in 20 days</div>
                  </NuxtLink>
                  <NuxtLink to="/services/ai-code-review" 
                            class="block px-4 py-3 text-gray-dark hover:text-black hover:bg-gray-light transition-all duration-200">
                    <div class="font-medium"> AI Code Reviews</div>
                    <div class="text-sm text-gray">Review your AI code before deployment to production</div>
                  </NuxtLink>
                  <NuxtLink to="/services/internal-tools-development" 
                            class="block px-4 py-3 text-gray-dark hover:text-black hover:bg-gray-light transition-all duration-200">
                    <div class="font-medium">Internal Tools Development</div>
                    <div class="text-sm text-gray">Build a tool to replace that repeated manual process</div>
                  </NuxtLink>
                  <NuxtLink to="/services/refactor-legacy-code" 
                            class="block px-4 py-3 text-gray-dark hover:text-black hover:bg-gray-light transition-all duration-200">
                    <div class="font-medium"> Refactor Legacy Code</div>
                    <div class="text-sm text-gray">Legacy codebase that needs refactor and maintenance</div>
                  </NuxtLink>
                </div>
              </div>
            </div>
            
            <NuxtLink to="/works" class="text-gray-dark hover:text-black transition-colors duration-200 font-medium">
              Works
            </NuxtLink>
            <NuxtLink to="/blog" class="text-gray-dark hover:text-black transition-colors duration-200 font-medium">
              Blog
            </NuxtLink>
            <!-- <NuxtLink to="/podcast" class="text-gray-dark hover:text-black transition-colors duration-200 font-medium">
              Podcast
            </NuxtLink> -->
            <!-- <NuxtLink to="/contact" class="text-gray-dark hover:text-black transition-colors duration-200 font-medium">
              Contact
            </NuxtLink> -->

            <div class="relative group">
              <button class="flex items-center text-gray-dark hover:text-black transition-colors duration-200 font-medium">
                More
                <svg class="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              
              <!-- Dropdown Menu -->
              <div class="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-light opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div class="py-2">
                  <NuxtLink to="/podcast" 
                            class="block px-4 py-3 text-gray-dark hover:text-black hover:bg-gray-light transition-all duration-200">
                    <div class="font-medium">Podcast</div>
                  </NuxtLink>
                  <NuxtLink to="#" 
                            class="block px-4 py-3 text-gray-dark hover:text-black hover:bg-gray-light transition-all duration-200">
                    <div class="font-medium">Events</div>
                  </NuxtLink>
                  <NuxtLink to="#" 
                            class="block px-4 py-3 text-gray-dark hover:text-black hover:bg-gray-light transition-all duration-200">
                    <div class="font-medium">Mentorship</div>
                  </NuxtLink>
                  <NuxtLink to="#" 
                            class="block px-4 py-3 text-gray-dark hover:text-black hover:bg-gray-light transition-all duration-200">
                    <div class="font-medium">Bootcamp</div>
                  </NuxtLink>
                  <NuxtLink to="/contact" 
                            class="block px-4 py-3 text-gray-dark hover:text-black hover:bg-gray-light transition-all duration-200">
                    <div class="font-medium">Contact</div>
                  </NuxtLink>
                  <!-- <NuxtLink to="/services/ai-code-review" 
                            class="block px-4 py-3 text-gray-dark hover:text-black hover:bg-gray-light transition-all duration-200">
                    <div class="font-medium"> AI Code Reviews</div>
                    <div class="text-sm text-gray">Review your AI code before deployment to production</div>
                  </NuxtLink>
                  <NuxtLink to="/services/internal-tools-development" 
                            class="block px-4 py-3 text-gray-dark hover:text-black hover:bg-gray-light transition-all duration-200">
                    <div class="font-medium">Internal Tools Development</div>
                    <div class="text-sm text-gray">Build a tool to replace that repeated manual process</div>
                  </NuxtLink>
                  <NuxtLink to="/services/refactor-legacy-code" 
                            class="block px-4 py-3 text-gray-dark hover:text-black hover:bg-gray-light transition-all duration-200">
                    <div class="font-medium"> Refactor Legacy Code</div>
                    <div class="text-sm text-gray">Legacy codebase that needs refactor and maintenance</div>
                  </NuxtLink> -->
                </div>
              </div>
            </div>
          </nav>
          
          <!-- CTA Button -->
          <a href="https://calendly.com/moses-codecontent/30min" target="_blank" 
             class="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-black hover:bg-blue transition-all duration-200 rounded">
            Schedule a Call
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden inline-flex items-center justify-center p-2 text-gray-dark hover:text-black focus:outline-none transition-colors duration-200"
          :aria-expanded="mobileMenuOpen">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden border-t border-gray-light">
        <div class="py-4 space-y-3">
          <!-- Mobile Services Submenu -->
          <div>
            <button @click="toggleMobileServices" 
                    class="flex items-center justify-between w-full px-4 py-2 text-gray-dark hover:text-black hover:bg-gray-light transition-all duration-200 font-medium">
              Services
              <svg class="w-4 h-4 transition-transform duration-200" :class="{'rotate-180': mobileServicesOpen}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div v-if="mobileServicesOpen" class="pl-4 space-y-1">
              <NuxtLink to="/services/mvp-development" @click="closeMobileMenu"
                        class="block px-4 py-2 text-gray-dark hover:text-black hover:bg-gray-light transition-all duration-200">
                MVP Development
              </NuxtLink>
              <NuxtLink to="/services/ai-code-review" @click="closeMobileMenu"
                        class="block px-4 py-2 text-gray-dark hover:text-black hover:bg-gray-light transition-all duration-200">
                AI Code Reviews
              </NuxtLink>
              <NuxtLink to="/services/internal-tools-development" @click="closeMobileMenu"
                        class="block px-4 py-2 text-gray-dark hover:text-black hover:bg-gray-light transition-all duration-200">
                Internal Tools Development
              </NuxtLink>
              <NuxtLink to="/services/refactor-legacy-code" @click="closeMobileMenu"
                        class="block px-4 py-2 text-gray-dark hover:text-black hover:bg-gray-light transition-all duration-200">
                Refactor Legacy Code
              </NuxtLink>
            </div>
          </div>
          
          <NuxtLink to="/works" 
                    class="block px-4 py-2 text-gray-dark hover:text-black hover:bg-gray-light transition-all duration-200 font-medium">
            Works
          </NuxtLink>
          <NuxtLink to="/blog" 
                    class="block px-4 py-2 text-gray-dark hover:text-black hover:bg-gray-light transition-all duration-200 font-medium">
            Blog
          </NuxtLink>
          <!-- <NuxtLink to="/podcast" 
                    class="block px-4 py-2 text-gray-dark hover:text-black hover:bg-gray-light transition-all duration-200 font-medium">
            Podcast
          </NuxtLink> -->
          <NuxtLink to="/contact" 
             class="block px-4 py-2 text-gray-dark hover:text-black hover:bg-gray-light transition-all duration-200 font-medium">
            Contact
          </NuxtLink>
          <div class="px-4 pt-2">
            <a href="https://calendly.com/moses-codecontent/30min" target="_blank"  
               class="block w-full text-center px-4 py-2 text-sm font-semibold text-white bg-black hover:bg-blue transition-all duration-200 rounded">
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
  
<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
const mobileServicesOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  // Reset services submenu when closing main menu
  if (!mobileMenuOpen.value) {
    mobileServicesOpen.value = false
  }
}

const toggleMobileServices = () => {
  mobileServicesOpen.value = !mobileServicesOpen.value
}

// Close mobile menu when clicking outside or on navigation
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  mobileServicesOpen.value = false
}
</script>
  