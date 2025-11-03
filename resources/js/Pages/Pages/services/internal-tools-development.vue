<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <section>
      <servicesHero
        title="Internal Tools Development"
        subtitle="Build a tool to replace that repeated manual process. Automate workflows, streamline operations, and boost team productivity with custom internal tools."
        benefit1Title="Automation Focus"
        benefit1Description="Replace manual processes with automated workflows that save time and reduce errors."
        benefit2Title="Custom Solutions"
        benefit2Description="Tailored tools designed specifically for your team's unique needs and processes."
        benefit3Title="Productivity Boost"
        benefit3Description="Streamline operations and boost team efficiency with purpose-built tools."
        primaryCtaText="Build Your Tool"
        secondaryCtaText="Our Process"
      />
    </section>

    <!-- What We Build -->
    <section class="py-16 lg:py-24 bg-gray-light">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="max-w-3xl mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-black mb-6">
            What We Build
          </h2>
          <p class="text-lg text-gray-dark leading-relaxed">
            Custom internal tools designed to automate your most time-consuming processes 
            and improve team efficiency.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-8">
          <div class="bg-white rounded-lg p-8">
            <h3 class="text-xl font-bold text-black mb-4">Admin Dashboards</h3>
            <ul class="space-y-3 text-gray-dark">
              <li>• User management systems</li>
              <li>• Content management tools</li>
              <li>• Analytics and reporting</li>
              <li>• Configuration panels</li>
            </ul>
          </div>

          <div class="bg-white rounded-lg p-8">
            <h3 class="text-xl font-bold text-black mb-4">Data Processing Tools</h3>
            <ul class="space-y-3 text-gray-dark">
              <li>• Import/export automation</li>
              <li>• Data validation systems</li>
              <li>• Batch processing tools</li>
              <li>• Data transformation utilities</li>
            </ul>
          </div>

          <div class="bg-white rounded-lg p-8">
            <h3 class="text-xl font-bold text-black mb-4">Workflow Automation</h3>
            <ul class="space-y-3 text-gray-dark">
              <li>• Approval systems</li>
              <li>• Task management tools</li>
              <li>• Process automation</li>
              <li>• Integration connectors</li>
            </ul>
          </div>

          <div class="bg-white rounded-lg p-8">
            <h3 class="text-xl font-bold text-black mb-4">Reporting & Analytics</h3>
            <ul class="space-y-3 text-gray-dark">
              <li>• Custom report generators</li>
              <li>• Data visualization tools</li>
              <li>• KPI dashboards</li>
              <li>• Automated reporting</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Development Process -->
    <section id="process" class="py-16 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="max-w-3xl mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-black mb-6">
            Our Development Process
          </h2>
          <p class="text-lg text-gray-dark leading-relaxed">
            A streamlined approach to building internal tools that actually solve your problems 
            and improve team productivity.
          </p>
        </div>

        <div class="space-y-12">
          <div class="grid lg:grid-cols-3 gap-8 items-center">
            <div>
              <div class="flex items-center gap-4 mb-6">
                <span class="text-2xl font-bold text-gray bg-gray-light rounded-full w-12 h-12 flex items-center justify-center">
                  01
                </span>
                <h3 class="text-2xl font-bold text-black">Process Analysis</h3>
              </div>
              <p class="text-gray-dark leading-relaxed">
                We analyze your current manual processes, identify bottlenecks, 
                and design the optimal automation solution.
              </p>
            </div>
            <div class="lg:col-span-2 bg-gray-light rounded-lg p-8">
              <div class="text-center">
                <div class="text-2xl font-bold text-black mb-2">Week 1</div>
                <p class="text-gray-dark">Process mapping and tool design</p>
              </div>
            </div>
          </div>

          <div class="grid lg:grid-cols-3 gap-8 items-center">
            <div class="lg:order-2">
              <div class="flex items-center gap-4 mb-6">
                <span class="text-2xl font-bold text-gray bg-gray-light rounded-full w-12 h-12 flex items-center justify-center">
                  02
                </span>
                <h3 class="text-2xl font-bold text-black">Rapid Development</h3>
              </div>
              <p class="text-gray-dark leading-relaxed">
                We build your tool using modern technologies, with regular updates 
                and feedback sessions to ensure it meets your needs.
              </p>
            </div>
            <div class="lg:order-1 bg-gray-light rounded-lg p-8">
              <div class="text-center">
                <div class="text-2xl font-bold text-black mb-2">Weeks 2-4</div>
                <p class="text-gray-dark">Development with weekly demos</p>
              </div>
            </div>
          </div>

          <div class="grid lg:grid-cols-3 gap-8 items-center">
            <div>
              <div class="flex items-center gap-4 mb-6">
                <span class="text-2xl font-bold text-gray bg-gray-light rounded-full w-12 h-12 flex items-center justify-center">
                  03
                </span>
                <h3 class="text-2xl font-bold text-black">Deployment & Training</h3>
              </div>
              <p class="text-gray-dark leading-relaxed">
                We deploy your tool, provide comprehensive training, and ensure 
                your team can use it effectively from day one.
              </p>
            </div>
            <div class="lg:col-span-2 bg-gray-light rounded-lg p-8">
              <div class="text-center">
                <div class="text-2xl font-bold text-black mb-2">Week 5</div>
                <p class="text-gray-dark">Deployment, training, and handover</p>
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
            Simple Pricing
          </h2>
          <p class="text-lg text-gray-dark leading-relaxed">
            Fixed pricing based on complexity. No surprises, no hidden costs.
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg p-8 text-center">
            <h3 class="text-xl font-bold text-black mb-4">Simple Tool</h3>
            <div class="text-3xl font-bold text-black mb-4">$3,000</div>
            <p class="text-gray-dark mb-6">Basic automation tool</p>
            <ul class="text-left space-y-2 text-gray-dark mb-8">
              <li>• Single-purpose tool</li>
              <li>• Basic UI/UX</li>
              <li>• 3-week development</li>
              <li>• Team training</li>
            </ul>
            <a href="#contact" 
               class="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold text-white bg-black hover:bg-blue transition-all duration-200 rounded">
              Get Started
            </a>
          </div>

          <div class="bg-white rounded-lg p-8 text-center border-2 border-blue">
            <div class="text-blue text-sm font-semibold mb-2">MOST POPULAR</div>
            <h3 class="text-xl font-bold text-black mb-4">Standard Tool</h3>
            <div class="text-3xl font-bold text-black mb-4">$6,000</div>
            <p class="text-gray-dark mb-6">Multi-feature internal tool</p>
            <ul class="text-left space-y-2 text-gray-dark mb-8">
              <li>• Multiple features</li>
              <li>• Professional UI/UX</li>
              <li>• 5-week development</li>
              <li>• Integration support</li>
            </ul>
            <a href="#contact" 
               class="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold text-white bg-blue hover:bg-blue-dark transition-all duration-200 rounded">
              Get Started
            </a>
          </div>

          <div class="bg-white rounded-lg p-8 text-center">
            <h3 class="text-xl font-bold text-black mb-4">Complex Tool</h3>
            <div class="text-3xl font-bold text-black mb-4">$12,000</div>
            <p class="text-gray-dark mb-6">Enterprise-grade solution</p>
            <ul class="text-left space-y-2 text-gray-dark mb-8">
              <li>• Advanced features</li>
              <li>• Custom integrations</li>
              <li>• 8-week development</li>
              <li>• Ongoing support</li>
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
          Ready to Automate Your Processes?
        </h2>
        <p class="text-lg text-gray-dark mb-8 max-w-2xl mx-auto">
          Let's discuss your manual processes and build a custom tool that will 
          save your team hours every week. No commitment required for the initial consultation.
        </p>
        <a href="https://calendly.com/moses-codecontent/30min" target="_blank" 
           class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-black hover:bg-blue transition-all duration-200 rounded">
          Start Your Tool Project
        </a>
      </div>
    </section>
  </div>
</template>