<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <section>
      <servicesHero
        title="AI Code Reviews"
        subtitle="Review your AI code before deployment to production. Ensure quality, security, and best practices with expert code review services."
        benefit1Title="Expert Review"
        benefit1Description="Senior AI engineers review your code for best practices and potential issues."
        benefit2Title="Security Focus"
        benefit2Description="Identify security vulnerabilities and data privacy concerns in AI systems."
        benefit3Title="Production Ready"
        benefit3Description="Ensure your AI code is optimized and ready for production deployment."
        primaryCtaText="Get Code Review"
        secondaryCtaText="Review Process"
      />
    </section>

    <!-- What We Review -->
    <section class="py-16 lg:py-24 bg-gray-light">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="max-w-3xl mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-black mb-6">
            What We Review
          </h2>
          <p class="text-lg text-gray-dark leading-relaxed">
            Comprehensive code review covering all aspects of your AI implementation 
            to ensure production-ready quality.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-8">
          <div class="bg-white rounded-lg p-8">
            <h3 class="text-xl font-bold text-black mb-4">Code Quality & Best Practices</h3>
            <ul class="space-y-3 text-gray-dark">
              <li>• Code structure and organization</li>
              <li>• Naming conventions and readability</li>
              <li>• Error handling and edge cases</li>
              <li>• Performance optimization</li>
            </ul>
          </div>

          <div class="bg-white rounded-lg p-8">
            <h3 class="text-xl font-bold text-black mb-4">AI-Specific Concerns</h3>
            <ul class="space-y-3 text-gray-dark">
              <li>• Model integration and API usage</li>
              <li>• Data validation and preprocessing</li>
              <li>• Security and privacy considerations</li>
              <li>• Scalability and resource management</li>
            </ul>
          </div>

          <div class="bg-white rounded-lg p-8">
            <h3 class="text-xl font-bold text-black mb-4">Security & Compliance</h3>
            <ul class="space-y-3 text-gray-dark">
              <li>• API key management</li>
              <li>• Data protection measures</li>
              <li>• Input validation and sanitization</li>
              <li>• Compliance with regulations</li>
            </ul>
          </div>

          <div class="bg-white rounded-lg p-8">
            <h3 class="text-xl font-bold text-black mb-4">Testing & Documentation</h3>
            <ul class="space-y-3 text-gray-dark">
              <li>• Test coverage and quality</li>
              <li>• Documentation completeness</li>
              <li>• Deployment readiness</li>
              <li>• Monitoring and logging</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Review Process -->
    <section id="process" class="py-16 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="max-w-3xl mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-black mb-6">
            Our Review Process
          </h2>
          <p class="text-lg text-gray-dark leading-relaxed">
            A systematic approach to ensure your AI code is production-ready and follows industry best practices.
          </p>
        </div>

        <div class="space-y-12">
          <div class="grid lg:grid-cols-3 gap-8 items-center">
            <div>
              <div class="flex items-center gap-4 mb-6">
                <span class="text-2xl font-bold text-gray bg-gray-light rounded-full w-12 h-12 flex items-center justify-center">
                  01
                </span>
                <h3 class="text-2xl font-bold text-black">Initial Assessment</h3>
              </div>
              <p class="text-gray-dark leading-relaxed">
                We analyze your codebase structure, identify key areas for review, 
                and create a comprehensive review plan tailored to your project.
              </p>
            </div>
            <div class="lg:col-span-2 bg-gray-light rounded-lg p-8">
              <div class="text-center">
                <div class="text-2xl font-bold text-black mb-2">Day 1</div>
                <p class="text-gray-dark">Codebase analysis and review planning</p>
              </div>
            </div>
          </div>

          <div class="grid lg:grid-cols-3 gap-8 items-center">
            <div class="lg:order-2">
              <div class="flex items-center gap-4 mb-6">
                <span class="text-2xl font-bold text-gray bg-gray-light rounded-full w-12 h-12 flex items-center justify-center">
                  02
                </span>
                <h3 class="text-2xl font-bold text-black">Detailed Review</h3>
              </div>
              <p class="text-gray-dark leading-relaxed">
                Our experts conduct thorough code reviews, checking for quality issues, 
                security vulnerabilities, and AI-specific best practices.
              </p>
            </div>
            <div class="lg:order-1 bg-gray-light rounded-lg p-8">
              <div class="text-center">
                <div class="text-2xl font-bold text-black mb-2">Days 2-3</div>
                <p class="text-gray-dark">Comprehensive code analysis and feedback</p>
              </div>
            </div>
          </div>

          <div class="grid lg:grid-cols-3 gap-8 items-center">
            <div>
              <div class="flex items-center gap-4 mb-6">
                <span class="text-2xl font-bold text-gray bg-gray-light rounded-full w-12 h-12 flex items-center justify-center">
                  03
                </span>
                <h3 class="text-2xl font-bold text-black">Report & Recommendations</h3>
              </div>
              <p class="text-gray-dark leading-relaxed">
                We deliver a detailed report with prioritized recommendations, 
                code examples, and actionable next steps for implementation.
              </p>
            </div>
            <div class="lg:col-span-2 bg-gray-light rounded-lg p-8">
              <div class="text-center">
                <div class="text-2xl font-bold text-black mb-2">Day 4</div>
                <p class="text-gray-dark">Comprehensive report and recommendations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <!-- <section class="py-16 lg:py-24 bg-gray-light">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-black mb-6">
            Transparent Pricing
          </h2>
          <p class="text-lg text-gray-dark leading-relaxed">
            Fixed pricing based on codebase size. No surprises, no hidden fees.
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg p-8 text-center">
            <h3 class="text-xl font-bold text-black mb-4">Small Project</h3>
            <div class="text-3xl font-bold text-black mb-4">$500</div>
            <p class="text-gray-dark mb-6">Up to 1,000 lines of code</p>
            <ul class="text-left space-y-2 text-gray-dark mb-8">
              <li>• Basic code review</li>
              <li>• Security assessment</li>
              <li>• 1-week turnaround</li>
            </ul>
            <a href="#contact" 
               class="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold text-white bg-black hover:bg-blue transition-all duration-200 rounded">
              Get Started
            </a>
          </div>

          <div class="bg-white rounded-lg p-8 text-center border-2 border-blue">
            <div class="text-blue text-sm font-semibold mb-2">MOST POPULAR</div>
            <h3 class="text-xl font-bold text-black mb-4">Medium Project</h3>
            <div class="text-3xl font-bold text-black mb-4">$1,200</div>
            <p class="text-gray-dark mb-6">Up to 5,000 lines of code</p>
            <ul class="text-left space-y-2 text-gray-dark mb-8">
              <li>• Comprehensive review</li>
              <li>• AI-specific analysis</li>
              <li>• Performance optimization</li>
              <li>• 1-week turnaround</li>
            </ul>
            <a href="#contact" 
               class="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold text-white bg-blue hover:bg-blue-dark transition-all duration-200 rounded">
              Get Started
            </a>
          </div>

          <div class="bg-white rounded-lg p-8 text-center">
            <h3 class="text-xl font-bold text-black mb-4">Large Project</h3>
            <div class="text-3xl font-bold text-black mb-4">$2,500</div>
            <p class="text-gray-dark mb-6">Up to 15,000 lines of code</p>
            <ul class="text-left space-y-2 text-gray-dark mb-8">
              <li>• Full-stack review</li>
              <li>• Architecture assessment</li>
              <li>• Team consultation</li>
              <li>• 2-week turnaround</li>
            </ul>
            <a href="#contact" 
               class="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold text-white bg-black hover:bg-blue transition-all duration-200 rounded">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section> -->

    <!-- CTA Section -->
    <section id="contact" class="py-16 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold text-black mb-6">
          Ready for Expert Code Review?
        </h2>
        <p class="text-lg text-gray-dark mb-8 max-w-2xl mx-auto">
          Ensure your AI code is production-ready with our expert review services. 
          Get detailed feedback and recommendations to improve quality and security.
        </p>
        <a href="https://calendly.com/moses-codecontent/30min" target="_blank" 
           class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-black hover:bg-blue transition-all duration-200 rounded">
          Start Your Code Review
        </a>
      </div>
    </section>
  </div>
</template>