<script lang="ts">
</script>

<script setup lang="ts">
import { useTheme } from '../../composables/theme'

import theme from './Skeleton.theme'
export default { name: 'XSkeleton' }

const props = defineProps({
  tag: {
    type: String,
    default: 'div',
  },
})

const { styles, classes, className } = useTheme('skeleton', theme, props)
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
    &#8203;
  </component>
</template>
