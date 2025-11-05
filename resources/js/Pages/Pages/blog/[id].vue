<script setup>
const route = useRoute()
const post = await queryCollection('blog').path(route.path).first()

// Set SEO meta tags
useSeoMeta({
  title: post.value?.title,
  description: post.value?.description,
  ogImage: post.value?.image,
  ogTitle: post.value?.title,
  ogDescription: post.value?.description,
  twitterCard: 'summary_large_image',
})

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
    <section class="relative overflow-hidden bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="relative py-4 lg:py-4">
          <div class="max-w-4xl mx-auto">
            <!-- Back Navigation -->
            <div class="mb-8">
              <NuxtLink to="/blog" class="inline-flex items-center text-gray-dark hover:text-black transition-colors duration-200">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
                </svg>
                Back to Blog
              </NuxtLink>
            </div>

            <!-- Featured Image -->
            <div v-if="post?.image" class="overflow-hidden rounded-2xl mb-8">
              <img 
                :src="post.image" 
                :alt="post.title" 
                class="w-full h-80 object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
              >
            </div>

            <!-- Title and Meta -->
            <div class="text-center mb-12">
              <span 
                v-if="post?.category"
                class="inline-block text-xs font-semibold text-black bg-gray-light rounded-full px-4 py-2 mb-4"
              >
                {{ post.category }}
              </span>
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight mb-6">
                {{ post?.title }}
              </h1>
              <div class="text-gray-dark text-sm mb-4">
                <span v-if="post?.author" class="text-black font-semibold">{{ post.author }}</span>
                <span v-if="post?.author && post?.date"> • </span>
                <span v-if="post?.date">{{ formatDate(post.date) }}</span>
              </div>
              
              <!-- Tags -->
              <div v-if="post?.tags && post.tags.length > 0" class="flex flex-wrap justify-center gap-2">
                <span 
                  v-for="tag in post.tags" 
                  :key="tag"
                  class="inline-block text-xs font-medium text-gray-dark bg-gray-light rounded-full px-3 py-1"
                >
                  #{{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Content Section -->
    <section class="py-4 lg:py-4 bg-white">
      <div class="max-w-4xl mx-auto px-6 lg:px-8">
        <!-- Blog Content -->
        <article class="prose prose-xl max-w-none">
            <ContentRenderer v-if="post" :value="post" />
            <div v-else class="text-center py-12">
                <h2 class="text-2xl font-bold text-gray-dark mb-4">Post Not Found</h2>
                <p class="text-gray-dark mb-6">The blog post you're looking for doesn't exist.</p>
                <NuxtLink 
                to="/blog" 
                class="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white bg-black hover:bg-gray-800 transition-all duration-200 rounded"
                >
                Back to Blog
                </NuxtLink>
            </div>
        </article>

        <!-- Author Bio (if available) -->
        <div v-if="post?.author" class="mt-16 pt-12 border-t border-gray-light">
          <div class="flex items-center space-x-6">
            <div class="w-20 h-20 bg-gray-light rounded-full flex items-center justify-center">
              <span class="text-3xl font-bold text-black">{{ post.author.charAt(0) }}</span>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-black mb-2">{{ post.author }}</h3>
              <p class="text-gray-dark">Technical writer and developer advocate</p>
            </div>
          </div>
        </div>

        <!-- Related Posts -->
        <div class="mt-16 pt-12 border-t border-gray-light">
          <h3 class="text-2xl font-bold text-black mb-8">Related Posts</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <!-- This could be populated with related posts based on tags/category -->
            <NuxtLink 
              to="/blog" 
              class="block p-6 border border-gray-light rounded-lg hover:border-black transition-colors duration-200"
            >
              <h4 class="font-semibold text-black mb-2">View All Posts</h4>
              <p class="text-gray-dark text-sm">Explore more insights and tutorials</p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="py-24 lg:py-32 bg-gray-light/30">
      <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h3 class="text-3xl lg:text-4xl font-bold text-black mb-6">Ready to Build Something Amazing?</h3>
        <p class="text-xl text-gray-dark mb-8 max-w-2xl mx-auto leading-relaxed">
          Let's discuss your project and bring your vision to life.
        </p>
        <NuxtLink 
          to="/contact" 
          class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-black hover:bg-gray-800 transition-all duration-200 rounded"
        >
          Start Your Project
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<style>
/* Custom prose styles for better typography and readability */
/* .prose {
  color: #374151;
  font-size: 1.125rem;
  line-height: 1.8;
} */

.prose h1 {
  color: #111827;
  font-size: 2.5rem;
  font-weight: 700;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.prose h2 {
  color: #cfcfcf;
  font-size: 2rem;
  font-weight: 300;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.prose h3 {
  color: #cfcfcf;
  font-size: 1.5rem;
  font-weight: 300;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.prose h4 {
  color: #cfcfcf;
  font-size: 1.25rem;
  font-weight: 300;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.prose p {
  margin-bottom: 1rem;
  margin-top: 1rem;
  line-height: 1.5;
  font-size: 1.125rem;
  font-weight: 100;
  color: #858585;
}

.prose blockquote {
  border-left: 4px solid #374151;
  padding-left: 1.5rem;
  font-style: italic;
  color: #6b7280;
  margin: 2.5rem 0;
  font-size: 1.125rem;
  line-height: 1.7;
}

/* .prose code {
  background-color: #f3f4f6;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
} */

.prose pre {
  background-color: #1f2937;
  color: #f9fafb;
  padding: 1.5rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin: 2rem 0;
  font-size: 0.875rem;
  line-height: 1.6;
}

.prose ul {
  list-style-type: disc;
  padding-left: 1.75rem;
  margin: 1.5rem 0;
  margin-bottom: 0.5rem;
  line-height: 1.5;
  font-size: 1.125rem;
  font-weight: 100;
  color: #858585;
}

.prose ol {
  list-style-type: decimal;
  padding-left: 1.75rem;
  margin: 1.5rem 0;
  margin-bottom: 0.5rem;
  line-height: 1.5;
  font-size: 1.125rem;
  font-weight: 100;
  color: #858585;
}

.prose li {
  margin-bottom: 0.75rem;
  line-height: 1.7;
  margin-bottom: 0.5rem;
  line-height: 1.5;
  font-size: 1.125rem;
  font-weight: 100;
  color: #858585;
}

.prose a {
  color: #111827;
  /* text-decoration: underline; */
  text-decoration-color: #d1d5db;
  text-underline-offset: 2px;
}

.prose a:hover {
  color: #374151;
  text-decoration-color: #9ca3af;
}

.prose strong {
  font-weight: 600;
  color: #111827;
}

.prose em {
  font-style: italic;
  color: #374151;
}

.prose hr {
  border: none;
  border-top: 1px solid #e5e7eb;
  margin: 3rem 0;
}

.prose table {
  width: 100%;
  border-collapse: collapse;
  margin: 2rem 0;
  font-size: 1rem;
}

.prose th,
.prose td {
  border: 1px solid #e5e7eb;
  padding: 0.75rem;
  text-align: left;
}

.prose th {
  background-color: #f9fafb;
  font-weight: 600;
  color: #111827;
}
</style>


