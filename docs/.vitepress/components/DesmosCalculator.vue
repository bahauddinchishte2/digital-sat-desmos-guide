<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  height: {
    type: String,
    default: '500px'
  },
  equations: {
    type: Array,
    default: () => []
  },
  equation: {
    type: String,
    default: ''
  },
  state: {
    type: Object,
    default: () => ({})
  }
})

const calculatorElement = ref(null)

onMounted(() => {
  // Wait for Desmos to be loaded
  const initCalculator = () => {
    if (typeof Desmos !== 'undefined' && calculatorElement.value) {
      const calculator = Desmos.GraphingCalculator(calculatorElement.value)
      
      if (props.equation) {
        calculator.setExpression({ id: 'graph1', latex: props.equation })
      }
      
      // Handle multiple equations
      if (props.equations.length > 0) {
        props.equations.forEach((eq, index) => {
          calculator.setExpression({ id: `graph${index + 1}`, latex: eq })
        })
      }
      
      // Handle state object (variables, settings, etc)
      if (Object.keys(props.state).length > 0) {
        calculator.setState(props.state)
      }
    } else {
      // If Desmos isn't loaded yet, try again in 100ms
      setTimeout(initCalculator, 100)
    }
  }
  
  initCalculator()
})
</script>

<template>
  <div>
    <div ref="calculatorElement" :style="{ width: '100%', height: height }"></div>
  </div>
</template>