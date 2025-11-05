<template>
    <div>
        <footer class="bg-gray-900 text-gray-200 pt-20 pb-10 px-6">
            <div class="border-b border-gray-800 max-w-7xl mx-auto pb-10">
                <h2 class="text-4xl font-thin text-white tracking-tight">
                    <span class="bg-gradient-to-r from-blue to-blue-dark bg-clip-text text-white">
                        Design without boundaries.
                        <br>
                        Grow without doubt.
                    </span>
                </h2>
            </div>
            <!-- <div class="pt-10 max-w-7xl mx-auto grid md:grid-cols-5 gap-10 border-b border-gray-800 pb-10 px-6"> -->
            <div class="pt-10 max-w-7xl mx-auto grid md:flex justify-between gap-10 border-b border-gray-800 pb-10">

                <!-- Logo & Tagline -->
                <div class="md:col-span-2">
                    <a href="#" class="text-2xl font-bold text-white tracking-tight">
                        <span class="bg-gradient-to-r from-blue to-blue-dark bg-clip-text text-white">codecontent</span>
                    </a>
                    <p class="mt-4 text-sm text-gray-400 max-w-sm">
                        We help founders bring their ideas to life — with design, code, and strategy that just works.
                    </p>
                </div>

                <!-- Navigation -->
                <div class="md:pt-10">
                    <nav class="grid md:flex md:items-center space-x-8">
                        <NuxtLink to="/"
                            class="text-gray-400 hover:text-white transition-colors duration-200 font-thin">
                            Home
                        </NuxtLink>
                        <NuxtLink to="/services"
                            class="text-gray-400 hover:text-white transition-colors duration-200 font-thin">
                            Service
                        </NuxtLink>
                        <NuxtLink to="/works"
                            class="text-gray-400 hover:text-white transition-colors duration-200 font-thin">
                            Works
                        </NuxtLink>
                        <NuxtLink to="/blog"
                            class="text-gray-400 hover:text-white transition-colors duration-200 font-thin">
                            Blog
                        </NuxtLink>
                        <NuxtLink to="/contact"
                            class="text-gray-400 hover:text-white transition-colors duration-200 font-thin">
                            Contact
                        </NuxtLink>
                    </nav>
                </div>
            </div>

            <!-- Footer Bottom -->
            <div
                class="mt-10 flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-between gap-4 text-sm text-gray-500">
                <p>&copy; {{ new Date().getFullYear() }} {{ $page.props.appName }}. All rights reserved.</p>
                <div class="flex gap-4">
                    <a href="https://x.com/Codecontent_pro" target="_blank" class="hover:text-white transition">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M22.54 6.42a8.59 8.59 0 01-2.46.67 4.27 4.27 0 001.88-2.36 8.64 8.64 0 01-2.72 1.04 4.25 4.25 0 00-7.26 3.87A12.06 12.06 0 013 4.64a4.25 4.25 0 001.32 5.67 4.24 4.24 0 01-1.93-.53v.05a4.25 4.25 0 003.41 4.17 4.27 4.27 0 01-1.92.07 4.26 4.26 0 003.97 2.95 8.53 8.53 0 01-5.28 1.82c-.34 0-.67-.02-1-.06a12.06 12.06 0 006.52 1.91c7.83 0 12.11-6.49 12.11-12.11l-.01-.55A8.72 8.72 0 0023 6.01a8.47 8.47 0 01-2.46.67z" />
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/codecontent-agency" target="_blank">
                        <!-- linkedin -->
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    </div>
</template>