<!-- App.vue -->
<template>
  <div class="w-screen min-h-screen bg-[#1a1919] pt-6 md:pt-10">
    <div class="flex flex-col gap-8 items-center max-w-7xl mx-auto">
      <div class="relative order-1 w-full mt-8 md:mt-0">
        <!-- Add gradient overlay -->
        <div class="absolute inset-x-0 bottom-0 h-32 md:h-64 bg-gradient-to-t from-[#1a1919] to-transparent"></div>
        
        <!-- Desktop SVG -->
        <div class="mx-auto px-4 md:px-0 hidden md:block">
          <svg viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-full w-full">
            <!-- Grid Background -->
            <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/>
            </pattern>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <rect width="50" height="50" fill="url(#smallGrid)"/>
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
            </pattern>
            <rect width="800" height="300" fill="url(#grid)"/>

            <!-- Front View -->
            <g transform="translate(200, 25) scale(0.9)">
              <!-- Main Shape -->
              <path d="M50 50 L200 50 L200 200 L50 200 Z" stroke="white" stroke-width="1.5" fill="none"/>
              <path d="M50 50 L80 20 L230 20 L200 50" stroke="white" stroke-width="1.5" fill="none"/>
              <path d="M200 200 L230 170 L230 20" stroke="white" stroke-width="1.5" fill="none"/>
              
              <!-- Interior Details -->
              <line x1="125" y1="50" x2="125" y2="200" stroke="white" stroke-width="0.5" stroke-dasharray="4 4"/>
              <circle cx="125" cy="125" r="30" stroke="white" stroke-width="1" fill="none"/>
              <path d="M105 125 L145 125 M125 105 L125 145" stroke="white" stroke-width="0.5"/>

              <!-- Measurements -->
              <line x1="50" y1="230" x2="200" y2="230" stroke="white" stroke-width="0.5">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" repeatCount="indefinite"/>
              </line>
              <text x="125" y="245" fill="white" font-size="10" text-anchor="middle">150mm</text>
              
              <!-- Annotation Lines -->
              <path d="M95 95 L40 40" stroke="white" stroke-width="0.5" stroke-dasharray="2 2"/>
              <circle cx="30" cy="30" r="15" stroke="white" stroke-width="0.5" fill="none"/>
              <text x="30" y="33" fill="white" font-size="8" text-anchor="middle">A</text>
            </g>

            <!-- Side View -->
            <g transform="translate(500, 25) scale(0.9)">
              <!-- Main Shape -->
              <path d="M20 50 L120 50 L120 200 L20 200 Z" stroke="white" stroke-width="1.5" fill="none"/>
              <line x1="20" y1="125" x2="120" y2="125" stroke="white" stroke-width="0.5" stroke-dasharray="4 4"/>
              
              <!-- Measurements -->
              <line x1="140" y1="50" x2="140" y2="200" stroke="white" stroke-width="0.5">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" repeatCount="indefinite" begin="2s"/>
              </line>
              <text x="155" y="125" fill="white" font-size="10" transform="rotate(-90 155 125)">150mm</text>
            </g>

            <!-- Technical Labels -->
            <text x="325" y="20" fill="white" font-size="12" text-anchor="middle">FRONT ELEVATION</text>
            <text x="610" y="20" fill="white" font-size="12" text-anchor="middle">SIDE VIEW</text>

            <!-- Scale Indicator - moved to top right -->
            <g transform="translate(650, 50)">
              <line x1="0" y1="0" x2="100" y2="0" stroke="white" stroke-width="1"/>
              <line x1="0" y1="-5" x2="0" y2="5" stroke="white" stroke-width="1"/>
              <line x1="100" y1="-5" x2="100" y2="5" stroke="white" stroke-width="1"/>
              <text x="50" y="20" fill="white" font-size="10" text-anchor="middle">SCALE 1:2</text>
            </g>
          </svg>
        </div>

        <!-- Mobile SVG -->
        <div class="mx-auto px-4 md:px-0 md:hidden">
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-[300px] w-full">
            <!-- Grid Background -->
            <pattern id="smallGridMobile" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/>
            </pattern>
            <pattern id="gridMobile" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect width="40" height="40" fill="url(#smallGridMobile)"/>
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
            </pattern>
            <rect width="400" height="400" fill="url(#gridMobile)"/>

            <!-- Centered Single View - adjusted transform -->
            <g transform="translate(75, 75) scale(1)">
              <!-- Main Shape -->
              <path d="M50 50 L200 50 L200 200 L50 200 Z" stroke="white" stroke-width="1.5" fill="none"/>
              <path d="M50 50 L80 20 L230 20 L200 50" stroke="white" stroke-width="1.5" fill="none"/>
              <path d="M200 200 L230 170 L230 20" stroke="white" stroke-width="1.5" fill="none"/>
              
              <!-- Interior Details -->
              <line x1="125" y1="50" x2="125" y2="200" stroke="white" stroke-width="0.5" stroke-dasharray="4 4"/>
              <circle cx="125" cy="125" r="30" stroke="white" stroke-width="1" fill="none"/>
              <path d="M105 125 L145 125 M125 105 L125 145" stroke="white" stroke-width="0.5"/>

              <!-- Annotation Lines -->
              <path d="M95 95 L40 40" stroke="white" stroke-width="0.5" stroke-dasharray="2 2"/>
              <circle cx="30" cy="30" r="15" stroke="white" stroke-width="0.5" fill="none"/>
              <text x="30" y="33" fill="white" font-size="8" text-anchor="middle">A</text>
            </g>

            <!-- Label - adjusted y position -->
            <text x="200" y="280" fill="white" font-size="12" text-anchor="middle">FRONT ELEVATION</text>

            <!-- Scale Indicator - adjusted position -->
            <g transform="translate(150, 310)">
              <line x1="0" y1="0" x2="100" y2="0" stroke="white" stroke-width="1"/>
              <line x1="0" y1="-5" x2="0" y2="5" stroke="white" stroke-width="1"/>
              <line x1="100" y1="-5" x2="100" y2="5" stroke="white" stroke-width="1"/>
              <text x="50" y="20" fill="white" font-size="10" text-anchor="middle">SCALE 1:2</text>
            </g>
          </svg>
        </div>
      </div>

      <div class="order-2 text-center md:-mt-24 z-10 px-4 md:px-0">
        <div class="flex mb-2 md:mb-0 w-full justify-center items-center gap-2">
            <!-- <p class="text-lg font-medium bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">MiMake</p> -->
            <span class="px-3 py-1 text-sm border border-red-800 rounded-full text-white bg-gradient-to-r from-red-900 to-red-700">
              MiMake
            </span>
          </div>
        <h1 class="text-5xl md:text-7xl font-normal mb-2 md:mb-1 text-white font-display">
          Mississauga's
        </h1>
        <p class="text-4xl md:text-6xl font-normal text-white font-serif mb-6 md:mb-8">
          Industrial Makerspace
        </p>
        <p class="text-sm md:text-xl text-white/90 mb-10 md:mb-12 max-w-xl mx-auto">
          Building Mississauga's premier shared workspace for local businesses, tradespeople, hobbyists, and students. 
          Get access to advanced tools, expert training, and a collaborative community.
        </p>
        <div class="flex flex-col md:flex-row items-center justify-center gap-4 px-0">
          <button class="w-full md:w-auto flex bg-white items-center justify-center rounded-full bg-white px-8 py-4 text-base md:text-lg font-medium text-black transition hover:bg-white/90">
            Get in touch
            <svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
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
