<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
import NavBar from '@/Components/Pages/NavBar.vue';
import Footer from '@/Components/Pages/Footer.vue';
</script>

<template>
    <div>
        <NavBar />
        <slot />
        <Footer />
    </div>
</template>
