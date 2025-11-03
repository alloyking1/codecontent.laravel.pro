<script setup>
import SectionHero from '@/Components/Pages/Sections/Hero.vue';
import SectionHowItWork from '@/Components/Pages/Sections/HowItWork.vue';
import SectionPortfolio from '@/Components/Pages/Sections/Portfolio.vue';
import SectionTestimony from '@/Components/Pages/Sections/Testimony.vue';
import SectionPricing from '@/Components/Pages/Sections/Pricing.vue';
import PagesLayout from '@/Layouts/PagesLayout.vue';
</script>

<template>
    <PagesLayout>

        <div>
            <div class="bg-white text-black font-sans leading-relaxed">
                <SectionHero />
                <SectionHowItWork />
                <!-- <SectionPortfolio/> -->
                <SectionTestimony />
                <SectionPricing />
            </div>

        </div>
    </PagesLayout>
</template>