<!-- App.vue -->
<template>
  <div class="w-screen min-h-screen bg-[#1a1919] p-8 md:p-24 md:pt-48">
    <div class="flex flex-col md:flex-row gap-8 items-center max-w-7xl mx-auto">
      <div class="relative order-2 md:order-1 md:w-1/2">
        <div class="mx-auto">
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-full w-full">
            <defs>
              <linearGradient
                id="purpleBlueGradient"
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stop-color="#9333EA" />
                <stop offset="50%" stop-color="#818CF8" />
                <stop offset="100%" stop-color="#38BDF8" />
              </linearGradient>
            </defs>

            <path d="M350,200 A150,150 0 0,1 200,350" stroke="white" stroke-width="4" fill="none" />
            <path d="M50,200 A150,150 0 0,0 200,50" stroke="white" stroke-width="4" fill="none" />
            <path d="M200,50 A150,150 0 0,1 350,200 L200,200 Z" fill="url(#purpleBlueGradient)" />
          </svg>
        </div>
      </div>

      <div class="order-1 md:order-2 md:w-1/2">
        <div class="flex">
          <div class="flex items-center gap-2">
            <span class="text-lg font-medium text-purple-500">MiMake</span>
            <span class="px-2 py-1 text-xs border border-purple-500 rounded-full text-purple-500">
              Non-profit
            </span>
          </div>
        </div>
        <h1 class="text-7xl font-normal mb-1 text-white font-display">
          Mississauga's
        </h1>
        <p class="text-6xl font-normal text-white font-serif mb-8">
          Industrial Makerspace
        </p>
        <p class="text-xl text-white/90 mb-12 max-w-xl">
          Building Mississauga's premier shared workspace for local businesses, tradespeople, hobbyists, and students. 
          Get access to advanced tools, expert training, and a collaborative community.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <button class="flex items-center justify-center rounded-full bg-white px-8 py-4 font-medium text-black transition hover:bg-white/90">
            Join our community 
            <svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button class="flex items-center justify-center rounded-full border border-white/20 px-8 py-4 font-medium text-white transition hover:bg-white/10">
            Learn more
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// For font handling, you'll need to configure your build system to handle fonts appropriately
</script>

<style>
/* Updated font imports */
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;700&family=Playfair+Display:ital@0;1&family=Space+Grotesk:wght@400;500;600&display=swap');

:root {
  font-family: 'Inter', sans-serif;
}

/* Add specific styling for headings */
h1 {
  font-family: 'Archivo Black', Arial, sans-serif;
}
</style>
