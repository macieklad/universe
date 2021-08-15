import { css } from 'linaria'
import { extendTheme, themeify } from '../lib/theming'

const config = {
  font: {
    primary: 'Arial'
  },
  space: {
    1: '.25rem',
    2: '.5rem',
    4: '1rem',
    8: '2rem',
    16: '4rem',
    32: '8rem',
  },
  fontSize: {
    sm: '12px',
    md: '16px',
    lg: '20px'
  },
  colors: {
    primary: '#00BBF9',
    primary600: '#009DD1', 
    white: '#FFF'
  }
}

const darkConfig = {

}

const { theme, stylesheet } = themeify(config)
const { stylesheet: darkStylesheet } = themeify(extendTheme(config, darkConfig))

const rootClass = css`${stylesheet}`
const darkRootClass = css`${darkStylesheet}`

export {
  theme,
  rootClass,
  darkRootClass
}