<template>
  <section class="relative overflow-hidden bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="relative py-24 lg:py-32">
        
        <!-- Main Hero Content -->
        <div class="max-w-4xl">
          <h1 class="text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-black leading-tight">
            Great vision needs 
            <span class="relative">
              great people
              <!-- Underline accent -->
              <div class="absolute bottom-2 left-0 w-full h-3 bg-blue opacity-20 -z-10"></div>
            </span>
            to bring it to life.
          </h1>
          
          <p class="mt-8 text-xl lg:text-2xl text-gray-dark max-w-2xl leading-relaxed">
            We are a talent partner for the tech ecosystem.
          </p>
          
          <!-- CTA Section -->
          <div class="mt-12 flex flex-col sm:flex-row gap-4">
            <a href="https://calendly.com/moses-codecontent/30min" target="_blank"
               class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-black hover:bg-blue transition-all duration-200 rounded">
              Schedule a Call
            </a>
            <NuxtLink to="/services"
               class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 rounded">
              Explore Our Offerings
            </NuxtLink>
          </div>
        </div>

        <!-- Feature Pills -->
        <div class="mt-16 flex flex-wrap gap-3">
          <span class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-dark bg-gray-light rounded-full">
            FLEXIBILITY
          </span>
          <span class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-dark bg-gray-light rounded-full">
            VELOCITY
          </span>
          <span class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-dark bg-gray-light rounded-full">
            QUALITY
          </span>
          <span class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-dark bg-gray-light rounded-full">
            COMMUNICATION
          </span>
        </div>

        <!-- Stats Section -->
        <div class="mt-20 pt-12 border-t border-gray-light">
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center lg:text-left">
              <div class="text-3xl lg:text-4xl font-bold text-black">150+</div>
              <div class="text-sm text-gray-dark mt-1">Projects Delivered</div>
            </div>
            <div class="text-center lg:text-left">
              <div class="text-3xl lg:text-4xl font-bold text-black">50+</div>
              <div class="text-sm text-gray-dark mt-1">Happy Clients</div>
            </div>
            <div class="text-center lg:text-left">
              <div class="text-3xl lg:text-4xl font-bold text-black">98%</div>
              <div class="text-sm text-gray-dark mt-1">Success Rate</div>
            </div>
            <div class="text-center lg:text-left">
              <div class="text-3xl lg:text-4xl font-bold text-black">20</div>
              <div class="text-sm text-gray-dark mt-1">Day Average</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>