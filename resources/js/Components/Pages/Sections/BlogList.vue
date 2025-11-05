<template>
  <div class="text-black font-sans leading-relaxed">
    <section class="px-6 py-24 lg:py-32">
      
    </section>
  </div>
</template>

<script setup>
  // Find all posts
  const allPosts = await queryCollection('blog').order('date', 'DESC').all()
</script>
  