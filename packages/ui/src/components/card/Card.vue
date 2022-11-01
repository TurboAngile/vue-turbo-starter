<script lang="ts">
</script>

<script setup lang="ts">
import { useTheme } from '../../composables/theme'

import theme from './Card.theme'
export default { name: 'XCard' }

const props = defineProps({
  tag: {
    type: String,
    default: 'div',
  },
  flat: Boolean,
})

const { styles, classes, className } = useTheme('card', theme, props)
</script>

<template>
  <component
    :is="tag"
    :styles="styles"
    :class="[
      className,
      classes.wrapper
    ]"
  >
    <slot />
  </component>
</template>
