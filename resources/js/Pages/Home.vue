<script setup>
import { Head, Link } from '@inertiajs/vue3';
import PagesLayout from '@/Layouts/PagesLayout.vue';

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
});
</script>

<template>

    <PagesLayout>

        <Head title="Welcome" />
    </PagesLayout>


</template>
