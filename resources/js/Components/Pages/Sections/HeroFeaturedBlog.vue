<script setup>
    // get the featured post as props
    const props = defineProps({
        featuredPost: {
            type: Object,
            required: true
        }
    })
    console.log(props.featuredPost);
</script>

<template>
    <NuxtLink :to="featuredPost.path">
    <section class="relative overflow-hidden bg-blue rounded-2xl shadow-sm hover:shadow-lg hover:shadow-blue/20 mx-6 my-8 transition-all duration-300">
        <div class="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-3 ">
            <div class="relative  lg:py-12 col-span-2">
                <div class="max-w-4xl w-full py-4">
                    <div class=" w-fit rounded-full px-4 py-2 text-sm bg-white text-black">Featured</div>
                    <h1 class="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight hover:text-gray-200 transition-all duration-300">
                    {{ featuredPost.title }}
                    </h1>
                    
                    <p class="mt-8 text-xl text-white max-w-2xl leading-relaxed">
                    {{ featuredPost.description }}
                    </p>
                </div>
            </div>

            <div class="w-full py-14 hidden lg:block">
                <img :src="featuredPost.image" alt="featured post image" class="w-full h-auto py-auto object-cover rounded-2xl">
            </div>
        </div>
    </section>
    </NuxtLink>
</template>