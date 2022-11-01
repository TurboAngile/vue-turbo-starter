<script lang="ts">
</script>

<script setup lang="ts">
import { useTheme } from '../../composables/theme'

import theme from './Container.theme'
export default { name: 'XContainer' }

const props = defineProps({
  tag: {
    type: String,
    default: 'div',
  },
})

const { styles, classes, className } = useTheme('container', theme, props)
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
