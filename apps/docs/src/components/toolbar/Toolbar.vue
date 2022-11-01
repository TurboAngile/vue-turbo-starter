<script setup lang="ts">
import { version } from '@ui/main'
</script>

<template>
  <div class="bg-white dark:bg-secondary-700 px-4">
    <div class="flex justify-items-center items-center py-5">
      <x-spacer/>

      <div class="flex items-center font-semibold text-sm">
        <div class="tracking-wide text-xs">v{{ version }}</div>
        <x-divider vertical style="height: 10px;" class="px-2"/>
        <x-link href="https://github.com/laughing-team/ui" target="_blank" external>Github</x-link>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.logo-white {
  display: none;
}
html.dark .logo-white {
  display: block;
}

html.dark .logo-dark {
  display: none;
}
</style>
