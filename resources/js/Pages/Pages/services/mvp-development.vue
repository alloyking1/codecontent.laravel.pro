<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <section class="">
        <servicesHero
        title="MVP Development"
        subtitle="Launch your startup idea in just 20 days. We turn your vision into a working MVP — without the guesswork, fluff, or endless delays."
        benefit1Title="Fast Launch"
        benefit1Description="Launch your MVP in 20 days, not months."
        benefit2Title="Proven Process"
        benefit2Description="Battle-tested methodology that eliminates guesswork."
        benefit3Title="Zero Risk"
        benefit3Description="Fixed pricing with guaranteed satisfaction."
        primaryCtaText="Start Your MVP"
        secondaryCtaText="See Our Process"
      />
    </section>

    <!-- What's Included -->
    <section class="py-16 lg:py-24 bg-gray-light">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="max-w-3xl mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-black mb-6">
            What's Included
          </h2>
          <p class="text-lg text-gray-dark leading-relaxed">
            Your complete MVP package includes everything needed to launch and validate your idea in the market.
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg p-8">
            <h3 class="text-xl font-bold text-black mb-4">Strategy & Planning</h3>
            <ul class="space-y-3 text-gray-dark">
              <li>• Free strategy call to define scope</li>
              <li>• User journey mapping</li>
              <li>• Technical architecture planning</li>
            </ul>
          </div>

          <div class="bg-white rounded-lg p-8">
            <h3 class="text-xl font-bold text-black mb-4">Full Development</h3>
            <ul class="space-y-3 text-gray-dark">
              <li>• Complete MVP build (20 days)</li>
              <li>• Laravel, Vue.js, Tailwind CSS</li>
              <li>• Database design & setup</li>
            </ul>
          </div>

          <div class="bg-white rounded-lg p-8">
            <h3 class="text-xl font-bold text-black mb-4">Launch & Support</h3>
            <ul class="space-y-3 text-gray-dark">
              <li>• Production deployment</li>
              <li>• Complete documentation</li>
              <li>• 30 days post-launch support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section id="process" class="py-16 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="max-w-3xl mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-black mb-6">
            Our 20-Day Process
          </h2>
          <p class="text-lg text-gray-dark leading-relaxed">
            We've refined our process to deliver high-quality MVPs quickly without cutting corners.
          </p>
        </div>

        <div class="space-y-12">
          <div class="grid lg:grid-cols-3 gap-8 items-center">
            <div>
              <div class="flex items-center gap-4 mb-6">
                <span class="text-2xl font-bold text-gray bg-gray-light rounded-full w-12 h-12 flex items-center justify-center">
                  01
                </span>
                <h3 class="text-2xl font-bold text-black">Discovery & Planning</h3>
              </div>
              <p class="text-gray-dark leading-relaxed">
                We start with a comprehensive strategy call to understand your vision, 
                define the MVP scope, and create a detailed project plan.
              </p>
            </div>
            <div class="lg:col-span-2 bg-gray-light rounded-lg p-8">
              <div class="text-center">
                <div class="text-2xl font-bold text-black mb-2">Days 1-3</div>
                <p class="text-gray-dark">Strategy, wireframes, and technical planning</p>
              </div>
            </div>
          </div>

          <div class="grid lg:grid-cols-3 gap-8 items-center">
            <div class="lg:order-2">
              <div class="flex items-center gap-4 mb-6">
                <span class="text-2xl font-bold text-gray bg-gray-light rounded-full w-12 h-12 flex items-center justify-center">
                  02
                </span>
                <h3 class="text-2xl font-bold text-black">Development & Testing</h3>
              </div>
              <p class="text-gray-dark leading-relaxed">
                Our team builds your MVP using modern technologies, with daily updates 
                and continuous testing to ensure quality.
              </p>
            </div>
            <div class="lg:order-1 bg-gray-light rounded-lg p-8">
              <div class="text-center">
                <div class="text-2xl font-bold text-black mb-2">Days 4-18</div>
                <p class="text-gray-dark">Full development with daily progress updates</p>
              </div>
            </div>
          </div>

          <div class="grid lg:grid-cols-3 gap-8 items-center">
            <div>
              <div class="flex items-center gap-4 mb-6">
                <span class="text-2xl font-bold text-gray bg-gray-light rounded-full w-12 h-12 flex items-center justify-center">
                  03
                </span>
                <h3 class="text-2xl font-bold text-black">Launch & Handover</h3>
              </div>
              <p class="text-gray-dark leading-relaxed">
                We deploy your MVP to production, provide comprehensive documentation, 
                and support you through the initial launch phase.
              </p>
            </div>
            <div class="lg:col-span-2 bg-gray-light rounded-lg p-8">
              <div class="text-center">
                <div class="text-2xl font-bold text-black mb-2">Days 19-20</div>
                <p class="text-gray-dark">Deployment, documentation, and launch support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <!-- <section class="py-16 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-black mb-6">
            Simple, Transparent Pricing
          </h2>
          <p class="text-lg text-gray-dark leading-relaxed">
            One fixed price for your complete MVP. No hidden fees, no surprises.
          </p>
        </div>

        <div class="max-w-2xl mx-auto">
          <div class="bg-gray-light rounded-lg p-8 lg:p-12 text-center">
            <div class="text-5xl lg:text-6xl font-bold text-black mb-4">$5,000</div>
            <p class="text-xl text-gray-dark mb-8">Complete MVP in 20 days</p>
            
            <a href="#contact" 
               class="inline-flex items-center justify-center w-full px-8 py-4 text-lg font-semibold text-white bg-black hover:bg-blue transition-all duration-200 rounded">
              Start Your MVP Project
            </a>
          </div>
        </div>
      </div>
    </section> -->

    <!-- CTA Section -->
    <section id="contact" class="py-16 lg:py-24 bg-gray-light">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold text-black mb-6">
          Ready to Launch Your MVP?
        </h2>
        <p class="text-lg text-gray-dark mb-8 max-w-2xl mx-auto">
          Let's discuss your idea and get your MVP to market in just 20 days. 
          No commitment required for the initial consultation.
        </p>
        <a href="https://calendly.com/moses-codecontent/30min" target="_blank" 
           class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-black hover:bg-blue transition-all duration-200 rounded">
          Schedule Your Free Strategy Call
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'MVP Development - Launch in 20 Days | codecontent',
  description: 'Launch your startup idea in just 20 days. Professional MVP development with Laravel, Vue.js, and Tailwind CSS. Fixed pricing, no surprises.',
  ogTitle: 'MVP Development - Launch in 20 Days | codecontent',
  ogDescription: 'Launch your startup idea in just 20 days. Professional MVP development with Laravel, Vue.js, and Tailwind CSS.',
})
</script>