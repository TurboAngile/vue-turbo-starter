<script lang="ts">
</script>

<script setup lang="ts">
import XPopover from '../../components/popover/Popover.vue'
import XPopoverContainer from '../../components/popover/PopoverContainer.vue'
export default { name: 'XTooltip' }
</script>

<template>
  <x-popover hover>
    <slot />
    <template #content>
      <div class="dark">
        <x-popover-container class="p-2 text-white text-sm w-max max-w-xs">
          <slot name="tooltip" />
        </x-popover-container>
      </div>
    </template>
  </x-popover>
</template>
