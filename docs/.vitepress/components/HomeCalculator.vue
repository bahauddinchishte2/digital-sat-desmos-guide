<script setup>
import { onMounted, ref } from 'vue'

const calculatorElement = ref(null)
const loaded = ref(false)

onMounted(() => {
  // Wait for Desmos to be loaded
  const initCalculator = () => {
    if (typeof Desmos !== 'undefined' && calculatorElement.value) {
      const calculator = Desmos.GraphingCalculator(calculatorElement.value, {
        expressions: true,
        settingsMenu: true,
        zoomButtons: true,
        border: false,
        lockViewport: false,
        expressionsCollapsed: false
      })
      
      // Add the system of linear equations from the example
      calculator.setExpression({ id: 'graph1', latex: '3x-12y=17', color: '#4C6EF5' })
      calculator.setExpression({ id: 'graph2', latex: '-\\frac{1}{2}x+2y=7', color: '#864AF9' })
      
      // Add an empty expression for user to add their own
      calculator.setExpression({ id: 'user1', latex: '', color: '#12B886' })
      
      // Set appropriate bounds
      calculator.setMathBounds({
        left: -10,
        right: 10,
        bottom: -5,
        top: 10
      });
      
      loaded.value = true
    } else {
      // If Desmos isn't loaded yet, try again in 100ms
      setTimeout(initCalculator, 100)
    }
  }
  
  initCalculator()
})
</script>

<template>
  <div class="home-calculator-wrapper">
    <div class="calculator-header">
      <span>How many solutions does this equation has?</span>
    </div>
    <div ref="calculatorElement" class="home-calculator"></div>
  </div>
</template>

<style scoped>
.home-calculator-wrapper {
  width: 100%;
  max-width: 450px;
  height: 450px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  border: 3px solid var(--vp-c-brand-1);
  background-color: #fff;
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.home-calculator-wrapper:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 50px rgba(0, 0, 0, 0.2);
}

.calculator-header {
  background-color: var(--vp-c-brand-1);
  color: white;
  padding: 8px 12px;
  font-weight: 600;
  font-size: 0.9rem;
  text-align: center;
}

.home-calculator {
  width: 100%;
  flex: 1;
  background: white;
}

@media (max-width: 960px) {
  .home-calculator-wrapper {
    width: 100%;
    max-width: 400px;
    height: 400px;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .home-calculator-wrapper {
    max-width: 100%;
    height: 320px;
  }
  
  .calculator-header {
    font-size: 0.8rem;
    padding: 6px;
  }
}
</style>