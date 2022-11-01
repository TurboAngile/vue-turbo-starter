import type { App } from 'vue'
import type { ColorLibrary } from './composables/colors'
import { injectColorsKey, injectIconsKey, injectThemeKey } from './composables/keys'

export type LaughingUIOptions = {
  prefix?: string,
  components?: any,
  colors?: ColorLibrary,
  icons?: any
  theme?: any
}

const defaultOptions: LaughingUIOptions = {
  prefix: 'X',
}

const create = (createOptions: LaughingUIOptions = {}) => {
  const install = (app: App, installOptions: LaughingUIOptions = {}) => {
    const options = {
      ...defaultOptions,
      ...createOptions,
      ...installOptions,
    }

    if (options.components)
      options.components.forEach((component: any) => {
        // TODO: remove me
        const name = component.name.startsWith('X') ? component.name.slice(1) : component.name

        app.component(`${options.prefix}${name}`, component)
      })

    app.provide(injectColorsKey, options.colors)
    app.provide(injectIconsKey, options.icons || {})
    app.provide(injectThemeKey, options.theme || {})
  }

  return {
    install,
  }
}

export default create
