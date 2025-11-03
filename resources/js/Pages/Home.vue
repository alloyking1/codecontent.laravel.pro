<script setup>
// import SectionHero from '@/Components/Pages/Sections/Hero.vue';
// import SectionHowItWork from '@/Components/Pages/Sections/HowItWork.vue';
// import SectionPortfolio from '@/Components/Pages/Sections/Portfolio.vue';
// import SectionTestimony from '@/Components/Pages/Sections/Testimony.vue';
// import SectionPricing from '@/Components/Pages/Sections/Pricing.vue';
import PagesLayout from '@/Layouts/PagesLayout.vue';
import LandingHero from '@/Components/Pages/Sections/LandingHero.vue';
import LandingVideoIntro from '@/Components/Pages/Sections/LandingVideoIntro.vue';
</script>

<template>
    <PagesLayout>
        <LandingHero />
        <LandingVideoIntro />
    </PagesLayout>
</template>