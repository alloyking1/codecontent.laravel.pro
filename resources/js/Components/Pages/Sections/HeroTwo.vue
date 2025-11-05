<template>
    <section class="bg-blue m-4 rounded-4xl">
        <div class="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
            <!-- Back Navigation -->
            <div class="mb-8">
                <NuxtLink to="/" class="inline-flex items-center text-white/80 hover:text-white transition-colors duration-200">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
                    </svg>
                    Back to Home
                </NuxtLink>
            </div>

            <!-- Main Hero Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
                <!-- Content Column -->
                <div class="flex flex-col justify-center lg:col-span-2">
                    <h1 class="text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight mb-6">
                        Insights & Knowledge
                    </h1>
                    <p class="text-xl lg:text-2xl text-white/90 leading-relaxed mb-8 max-w-3xl">
                        Deep insights into software development, AI trends, and building successful products. 
                        Learn from our experiences and stay ahead of the curve.
                    </p>
                    
                    <!-- CTA Buttons -->
                    <!-- <div class="flex flex-col sm:flex-row gap-4">
                        <a href="#latest-posts" 
                           class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue bg-white hover:bg-gray-100 transition-all duration-200 rounded-lg shadow-lg">
                            Explore Articles
                        </a>
                        <a href="#newsletter" 
                           class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all duration-200 rounded-lg">
                            Subscribe to Updates
                        </a>
                    </div> -->
                </div>
                
                <!-- Icon Column -->
                <div class="flex justify-center lg:justify-end">
                    <div class="relative">
                        <!-- Book/Insights Icon -->
                        <svg class="w-48 h-48 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M21,4H3A2,2 0 0,0 1,6V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V6A2,2 0 0,0 21,4M3,19V6H8V19H3M10,19V6H21V19H10Z"/>
                        </svg>
                        <!-- Decorative elements -->
                        <div class="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full"></div>
                        <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-white/10 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>