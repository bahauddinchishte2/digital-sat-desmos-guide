import DefaultTheme from 'vitepress/theme'
import FloatingCalculator from '../components/FloatingCalculator.vue'
import HomeCalculator from '../components/HomeCalculator.vue'
import Layout from './Layout.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    // Register global components
    app.component('FloatingCalculator', FloatingCalculator)
    app.component('HomeCalculator', HomeCalculator)
  }
}