<script>
import ToolbarColorToggle from './ToolbarColorToggle.vue'

export default {
  components: {
    ToolbarColorToggle,
  },
}
</script>

<template>
  <div class="flex justify-items-center items-center py-2 text-gray-500 dark:text-gray-300 px-4">
    <toolbar-color-toggle />
    <x-spacer />
    <a target="_blank" href="https://github.com/laughing-team/ui"><x-icon icon="github" /></a>
  </div>
</template>
