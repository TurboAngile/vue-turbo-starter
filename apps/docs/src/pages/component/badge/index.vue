<script setup lang="ts">
import { XBadge } from '@ui/main'
import UsageDemoCode from './usage.vue?raw'
import UsageDemo from './usage.vue'

const title = 'Badge'
const description = 'Badge.'
const components = [XBadge]
const demos = [{
  name: 'Usage',
  description: '',
  code: UsageDemoCode,
  component: UsageDemo,
}]
const back = 'avatar'
const next = 'breadcrumbs'
</script>

<template>
  <document-page
    github="https://github.com/laughing/ui/blob/main/packages/docs/src/pages/component/badge"
    :title="title"
    :description="description"
    :components="components"
    :demos="demos"
    :back="back"
    :next="next"
  />
</template>
