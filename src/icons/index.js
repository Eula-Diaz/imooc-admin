import SvgIcon from '@/components/SvgIcon/index'

// 通过 require.context() 创建自己的 context
const svgRequire = require.context('./svg', false, /\.svg$/)
svgRequire.keys().forEach((svgIcon) => svgRequire(svgIcon))

export default (app) => {
  app.component('svg-icon', SvgIcon)
}
