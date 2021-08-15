import defu from "defu";

type Config = {[Key in string | number]?: Config | string };

export const themeify = <T extends Config>(config: T) => {
  let theme = config
  let stylesheet = ``
  traverse(theme)
  
  function traverse(obj: Config, prefix = '') {
    for (const [key, val] of Object.entries(obj)) {
      const flatKey = prefix === '' ? key : `${prefix}-${key}`
      if (typeof val === 'object') {
        traverse(val, flatKey)
      } else {
        parametrize(obj, key, flatKey)
        stylesheet += `--${flatKey}: ${val};\n`
      }
    }
  }

  function parametrize(obj: Config, key: string, referenceVar: string) {
    // If the value is a var referene, don't wrap it
    // as it would only create an unneeded alias
    if (key.startsWith('var(')) {
      return
    }

    obj[key] = `var(--${referenceVar})`
  }


  return {theme, stylesheet};
}

export const extendTheme = (base: Config, extension: Config) => defu(extension, base)