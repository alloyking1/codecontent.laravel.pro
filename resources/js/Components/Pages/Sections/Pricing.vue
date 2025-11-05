<template>
  <section class="py-24 lg:py-32 bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="max-w-3xl">
        <h2 class="text-4xl lg:text-6xl font-bold tracking-tight text-black mb-6">
          Our Services
        </h2>
        <p class="text-xl text-gray-dark leading-relaxed">
          We partner with you to bring your vision to life through strategic development solutions. 
          Our flexible approach adapts to your unique needs while delivering exceptional results that drive real business impact.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="mt-20 grid gap-8 lg:gap-12">
        
        <!-- Service 1: MVP Development -->
        <div class="group relative">
          <div class="border border-gray-light rounded-lg p-8 lg:p-12 hover:border-blue transition-all duration-200">
            <div class="grid lg:grid-cols-3 gap-8 items-start">
              
              <div class="lg:col-span-2">
                <h3 class="text-2xl lg:text-3xl font-bold text-black mb-4">
                  MVP Development
                </h3>
                <p class="text-lg text-gray-dark leading-relaxed mb-6">
                  Transform your ideas into working prototypes that validate market demand. We build lean, 
                  functional MVPs that help you test assumptions, gather user feedback, and make data-driven 
                  decisions about your product's future.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="inline-flex items-center px-3 py-1 text-sm font-medium text-blue bg-blue/10 rounded-full">
                    Rapid Prototyping
                  </span>
                  <span class="inline-flex items-center px-3 py-1 text-sm font-medium text-blue bg-blue/10 rounded-full">
                    Market Validation
                  </span>
                  <span class="inline-flex items-center px-3 py-1 text-sm font-medium text-blue bg-blue/10 rounded-full">
                    User Feedback
                  </span>
                </div>
              </div>
              
              <div class="lg:text-right">
                <div class="text-3xl lg:text-4xl font-bold text-black mb-2">
                  Fast Track
                </div>
                <p class="text-gray-dark mb-6">Quick turnaround, proven results</p>
                <NuxtLink to="/services/mvp-development" 
                   class="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white bg-black hover:bg-blue transition-all duration-200 rounded">
                  Learn More
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Service 2: AI Code Review -->
        <div class="group relative">
          <div class="border border-gray-light rounded-lg p-8 lg:p-12 hover:border-blue transition-all duration-200">
            <div class="grid lg:grid-cols-3 gap-8 items-start">
              
              <div class="lg:col-span-2">
                <h3 class="text-2xl lg:text-3xl font-bold text-black mb-4">
                  AI-Powered Code Review
                </h3>
                <p class="text-lg text-gray-dark leading-relaxed mb-6">
                  Elevate your code quality with intelligent analysis that goes beyond human review. 
                  Our AI-powered system identifies security vulnerabilities, performance bottlenecks, 
                  and code quality issues before they impact your users or business.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="inline-flex items-center px-3 py-1 text-sm font-medium text-blue bg-blue/10 rounded-full">
                    Security Analysis
                  </span>
                  <span class="inline-flex items-center px-3 py-1 text-sm font-medium text-blue bg-blue/10 rounded-full">
                    Performance Review
                  </span>
                  <span class="inline-flex items-center px-3 py-1 text-sm font-medium text-blue bg-blue/10 rounded-full">
                    Quality Assurance
                  </span>
                </div>
              </div>
              
              <div class="lg:text-right">
                <div class="text-3xl lg:text-4xl font-bold text-black mb-2">
                  Intelligent
                </div>
                <p class="text-gray-dark mb-6">AI-enhanced quality control</p>
                <NuxtLink to="/services/ai-code-review" 
                   class="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 rounded">
                  Learn More
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Service 3: Internal Tools Development -->
        <div class="group relative">
          <div class="border border-gray-light rounded-lg p-8 lg:p-12 hover:border-blue transition-all duration-200">
            <div class="grid lg:grid-cols-3 gap-8 items-start">
              
              <div class="lg:col-span-2">
                <h3 class="text-2xl lg:text-3xl font-bold text-black mb-4">
                  Internal Tools Development
                </h3>
                <p class="text-lg text-gray-dark leading-relaxed mb-6">
                  Streamline your operations with custom tools designed specifically for your workflow. 
                  From automation scripts to comprehensive admin panels, we build solutions that boost 
                  productivity and eliminate manual processes.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="inline-flex items-center px-3 py-1 text-sm font-medium text-blue bg-blue/10 rounded-full">
                    Process Automation
                  </span>
                  <span class="inline-flex items-center px-3 py-1 text-sm font-medium text-blue bg-blue/10 rounded-full">
                    Admin Panels
                  </span>
                  <span class="inline-flex items-center px-3 py-1 text-sm font-medium text-blue bg-blue/10 rounded-full">
                    Workflow Optimization
                  </span>
                </div>
              </div>
              
              <div class="lg:text-right">
                <div class="text-3xl lg:text-4xl font-bold text-black mb-2">
                  Efficient
                </div>
                <p class="text-gray-dark mb-6">Streamlined operations</p>
                <NuxtLink to="/services/internal-tools-development" 
                   class="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 rounded">
                  Learn More
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Service 4: Legacy Code Refactoring -->
        <div class="group relative">
          <div class="border border-gray-light rounded-lg p-8 lg:p-12 hover:border-blue transition-all duration-200">
            <div class="grid lg:grid-cols-3 gap-8 items-start">
              
              <div class="lg:col-span-2">
                <h3 class="text-2xl lg:text-3xl font-bold text-black mb-4">
                  Legacy Code Modernization
                </h3>
                <p class="text-lg text-gray-dark leading-relaxed mb-6">
                  Breathe new life into your existing codebase with strategic modernization. We transform 
                  legacy systems into maintainable, scalable solutions while preserving business logic 
                  and minimizing disruption to your operations.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="inline-flex items-center px-3 py-1 text-sm font-medium text-blue bg-blue/10 rounded-full">
                    Code Modernization
                  </span>
                  <span class="inline-flex items-center px-3 py-1 text-sm font-medium text-blue bg-blue/10 rounded-full">
                    Performance Optimization
                  </span>
                  <span class="inline-flex items-center px-3 py-1 text-sm font-medium text-blue bg-blue/10 rounded-full">
                    Risk Mitigation
                  </span>
                </div>
              </div>
              
              <div class="lg:text-right">
                <div class="text-3xl lg:text-4xl font-bold text-black mb-2">
                  Strategic
                </div>
                <p class="text-gray-dark mb-6">Future-proof your systems</p>
                <NuxtLink to="/services/refactor-legacy-code" 
                   class="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 rounded">
                  Learn More
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>