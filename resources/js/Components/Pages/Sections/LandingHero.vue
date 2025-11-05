<script setup>
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <div>
        <section class="relative bg-white max-w-7xl mx-auto md:py-20">
            <div class="grid md:grid-cols-2">
                <div class="">
                    <div class="p-4">
                        <div class="">

                            <h1 class="text-4xl md:text-8xl font-bold tracking-tight text-gray-900 leading-tight">
                                Empowering your vision,
                                fueled by our passion
                            </h1>

                            <p class="mt-8 text-lg lg:text-xl text-gray-600 leading-relaxed">
                                A suite of tools built to redefine how you work — crafted for
                                teams of any size by a company that puts your privacy first.
                            </p>


                        </div>
                    </div>
                </div>

                <div class="bg-gradient-to-br from-blue via-blue/100 to-blue/90 rounded-3xl m-4 text-white shadow-2xl">
                    <div class="p-8 space-y-6">
                        <div>
                            <h1 class="text-3xl font-extrabold tracking-tight leading-tight">
                                Featured Apps
                            </h1>
                            <p class="mt-2 text-blue-100 text-lg">
                                Tools we’ve built to power businesses and creators.
                            </p>
                        </div>

                        <ul class="space-y-4">
                            <li>
                                <a href="https://payzora.com" target="_blank" rel="noopener noreferrer"
                                    class="group flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all rounded-xl px-5 py-4">
                                    <div
                                        class="flex items-center justify-center w-10 h-10 rounded-xl bg-white/20 text-white font-bold text-lg">
                                        P
                                    </div>
                                    <div>
                                        <p class="font-semibold text-lg group-hover:text-white">
                                            Payzora
                                        </p>
                                        <p class="text-blue-200 text-sm">Invoice, expenses, and payroll management</p>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="2" stroke="currentColor"
                                        class="ml-auto w-6 h-6 opacity-60 group-hover:opacity-100 transition-all">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg>
                                </a>
                            </li>

                            <!-- Add more apps here -->
                            <li>
                                <a href="#"
                                    class="group flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all rounded-xl px-5 py-4">
                                    <div
                                        class="flex items-center justify-center w-10 h-10 rounded-xl bg-white/20 text-white font-bold text-lg">
                                        A
                                    </div>
                                    <div>
                                        <p class="font-semibold text-lg group-hover:text-white">
                                            AppName
                                        </p>
                                        <p class="text-blue-200 text-sm">Short tagline about the app</p>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="2" stroke="currentColor"
                                        class="ml-auto w-6 h-6 opacity-60 group-hover:opacity-100 transition-all">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg>
                                </a>
                            </li>
                        </ul>

                        <div class="">
                            <!-- <a href="/tools"
                                class="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-full hover:bg-blue-100 transition-all shadow-md">
                                Explore All Tools →
                            </a> -->
                            <Link :href="route('all-tools')">
                            <button
                                class="rounded inline-flex items-center justify-center px-8 py-4 text-lg font-semibold
                                            text-white bg-blue border border-blue-200 hover:bg-blue-light hover:text-white transition-all duration-200">
                                Explore All Tools →
                            </button>
                            </Link>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    </div>

</template>