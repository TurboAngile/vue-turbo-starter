<script lang="ts">
</script>

<script setup lang="ts">
import { useTheme } from '../../composables/theme'

import theme from './PopoverContainer.theme'
export default { name: 'XPopoverContainer' }

const props = defineProps({
  tag: {
    default: 'div',
    type: String,
  },
})

const { styles, classes, className } = useTheme('popover-container', theme, props)
</script>

<template>
  <component
    :is="tag"
    :style="styles"
    :class="[
      className,
      classes.wrapper
    ]"
  >
    <slot />
  </component>
</template>
