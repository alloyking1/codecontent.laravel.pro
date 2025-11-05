<template>
    <div class="bg-white text-black font-sans leading-relaxed">
      <sectionHeroTwo />
    </div>
  
    <section class="px-6 pt-4 min-h-screen">
      <div class="max-w-6xl mx-auto">
  
        <!-- Hero Section -->
        <!-- <div class="text-center mb-20">
          <h1 class="text-5xl md:text-7xl font-extrabold text-gray-800 mb-6">🎙 Build Better Podcast</h1>
          <p class="text-gray-600 text-xl max-w-3xl mx-auto mb-8">
            Honest conversations with builders, makers, and founders — the real stories behind the products you love.
          </p>
        </div> -->
  
        <!-- Episodes Grid -->
        <div class="grid md:grid-cols-2 gap-10">
  
          <!-- Episode Card -->
          <div class="group relative overflow-hidden bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
            <div class="flex items-center gap-4 mb-6">
              <img 
                src="https://source.unsplash.com/100x100/?audio,microphone" 
                alt="Episode Cover" 
                class="w-20 h-20 rounded-2xl object-cover shadow-md"
              >
              <div>
                <h2 class="text-2xl font-bold text-gray-800 group-hover:text-blue transition-colors">Ep 01: The MVP Mindset</h2>
                <p class="text-gray-500 text-sm mt-1">April 25, 2025 • 28 min</p>
              </div>
            </div>
            <p class="text-gray-600 mb-6 text-base leading-relaxed">
              Dive deep into how to validate your startup ideas fast and avoid the biggest mistakes early builders make.
            </p>
  
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2 text-blue font-semibold cursor-pointer hover:underline">
                ▶️ <span>Play Episode</span>
              </div>
              <svg class="w-24 h-6 text-gray group-hover:text-blue transition" fill="none" stroke="currentColor" viewBox="0 0 144 24">
                <path d="M0 12h12m8-8h12m8 8h12m8-8h12m8 8h12m8-8h12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
  
          <!-- Episode Card -->
          <div class="group relative overflow-hidden bg-white/80 backdrop-blur-md border border-gray rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
            <div class="flex items-center gap-4 mb-6">
              <img 
                src="https://source.unsplash.com/100x100/?studio,mic" 
                alt="Episode Cover" 
                class="w-20 h-20 rounded-2xl object-cover shadow-md"
              >
              <div>
                <h2 class="text-2xl font-bold text-gray-800 group-hover:text-blue transition-colors">Ep 02: Funding vs Bootstrapping</h2>
                <p class="text-gray-500 text-sm mt-1">May 2, 2025 • 35 min</p>
              </div>
            </div>
            <p class="text-gray-600 mb-6 text-base leading-relaxed">
              Should you raise funding or bootstrap? Two founders share their brutally honest experiences and lessons.
            </p>
  
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2 text-blue font-semibold cursor-pointer hover:underline">
                ▶️ <span>Play Episode</span>
              </div>
              <svg class="w-24 h-6 text-gray group-hover:text-blue transition" fill="none" stroke="currentColor" viewBox="0 0 144 24">
                <path d="M0 12h12m8-8h12m8 8h12m8-8h12m8 8h12m8-8h12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
  
          <!-- Add more episodes easily... -->
  
        </div>
      </div>
    </section>
  </template>
  