
<script setup lang="ts">
const allPosts  =  await queryCollection('blog').all()
const featuredPost = allPosts.find(post => post.meta.featured === "true")

// Format date helper
const formatDate = (date) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<template>
  <div class="bg-white text-black font-sans leading-relaxed">
    <!-- Hero Section -->
    <sectionHeroFeaturedBlog :featuredPost="featuredPost" />
    
    <!-- Blog Posts Section -->
    <section class="py-18 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <!-- Blog Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article 
            v-for="post of allPosts" 
            :key="post.id"
            class="group"
          >
            <NuxtLink :to="post.path" class="block">
              <div class="rounded-2xl bg-white hover:shadow-xl shadow transition-all duration-300 p-6 flex flex-col h-full border-gray-light">
                <!-- Featured Image -->
                <div class="overflow-hidden rounded-xl mb-6">
                  <!-- <img 
                    :src="post.image || 'https://cdn.pixabay.com/photo/2021/11/11/07/02/nature-6785521_1280.jpg'" 
                    :alt="post.title" 
                    class="w-full h-52 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                  > -->
                </div>
                
                <!-- Content -->
                <div class="flex-1 mb-4">
                  <!-- Category Badge -->
                  <span 
                    v-if="post.category"
                    class="inline-block text-xs font-semibold text-blue bg-blue/10 rounded-full px-3 py-1 mb-3"
                  >
                    {{ post.category }}
                  </span>
                  
                  <!-- Title -->
                  <h3 class="text-xl font-bold text-black leading-snug mb-3 group-hover:text-blue transition-colors duration-200">
                    {{ post.title }}
                  </h3>
                  
                  <!-- Description -->
                  <p class="text-gray-dark text-sm leading-relaxed mb-4">
                    {{ post.description }}
                  </p>
                  
                  <!-- Meta -->
                  <div class="flex items-center justify-between text-xs text-gray">
                    <span v-if="post.author">{{ post.author }}</span>
                    <span v-if="post.date">{{ formatDate(post.date) }}</span>
                  </div>
                </div>
                
                <!-- Read More -->
                <div class="pt-4 text-blue font-semibold text-sm group-hover:underline">
                  Read More →
                </div>
              </div>
            </NuxtLink>
          </article>
        </div>

        <!-- No posts message -->
        <div v-if="!allPosts || allPosts.length === 0" class="text-center py-12">
          <h3 class="text-2xl font-bold text-gray-dark mb-4">No Blog Posts Found</h3>
          <p class="text-gray-dark">Check that blog posts exist in the content/blog directory.</p>
        </div>
      </div>
    </section>
  </div>
</template>

