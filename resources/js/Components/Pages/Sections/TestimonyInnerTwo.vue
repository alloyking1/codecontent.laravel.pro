<template>
  <div class="mt-16">
    <!-- Testimonial Card -->
    <div class="relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur shadow-xl ring-1 ring-gray-100">
      <div class="p-8 lg:p-12">
        <div class="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">

          <!-- Author Column -->
          <div class="w-full lg:w-auto flex flex-col items-center lg:items-start gap-4">
            <div class="relative">
              <img
                src="https://media.licdn.com/dms/image/v2/D4E03AQH6zwWOD2bDtQ/profile-displayphoto-scale_400_400/B4EZj8rnxUHgAk-/0/1756585951798?e=1759363200&v=beta&t=ApVHnA-cyjBDKgscTjDznQz1LzIbh32G-OCiJk-mV3I"
                alt="Dashboard"
                class="h-20 w-20 rounded-full ring-4 ring-blue-light/40 shadow-lg object-cover"
              />
            </div>

            <div class="text-center lg:text-left">
              <div class="flex items-center justify-center lg:justify-start gap-2">
                <h4 class="text-lg lg:text-xl font-semibold text-black">Kingsley Ihemere</h4>
               
              </div>
              <p class="mt-1 text-sm font-medium text-blue">CEO & Founder</p>

              <div class="flex gap-1">

                <div class="mt-2 inline-flex items-center px-2 rounded-full bg-gray-50 py-1 ring-1 ring-gray-200">
                  <svg class="w-4" width="54" height="" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="73" height="73" rx="36.5" fill="url(#paint0_linear_80_1171)"/>
                    <path d="M13.6396 36.5877L18.3116 41.2597L22.9836 36.5877L33.1521 46.7561L52.6646 27.2437L56.5121 31.0912L60.3596 27.2437" stroke="url(#paint1_linear_80_1171)" stroke-width="4.64545" stroke-linecap="round" stroke-linejoin="round"/>
                    <defs>
                      <linearGradient id="paint0_linear_80_1171" x1="43.0833" y1="19.2367" x2="33.5933" y2="6.58333" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#C0C0C0"/>
                        <stop offset="1" stop-color="#C0C0C0"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear_80_1171" x1="36.9996" y1="27.2437" x2="36.9996" y2="46.7561" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FAFAFA"/>
                        <stop offset="1" stop-color="#FAFAFA"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <span class="text-xs font-semibold text-[#C0C0C0]">Primlytics</span>
                </div>
              
                <div class="mt-3">
                  <a
                    href="https://www.linkedin.com/in/realdekings/"
                    target="_blank"
                    rel="noopener"
                    aria-label="LinkedIn profile"
                    class="text-blue hover:text-blue/80 transition-colors hover:text-black"
                  >
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="#C0C0C0" aria-hidden="true">
                      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v16h-4V8zm8 0h3.8v2.2h.05c.53-1 1.84-2.2 3.79-2.2 4.05 0 4.8 2.67 4.8 6.1V24h-4v-7.9c0-1.9-.03-4.3-2.62-4.3-2.62 0-3.02 2.05-3.02 4.17V24h-4V8z"/>
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </div>

          <!-- Quote Column -->
          <div class="flex-1 relative">
            <div class="mb-6">
              <svg class="w-12 h-12 text-blue/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            <blockquote class="text-lg lg:text-2xl text-gray-800 leading-relaxed font-medium">
              "We were blown away by how fast CodeContent turned our idea into a working product. Their ability to hit the ground running and deliver completely exceeded our expectations."
            </blockquote>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>