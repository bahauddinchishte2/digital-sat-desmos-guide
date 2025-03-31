# System of Equations Example

<script setup>
import DesmosCalculator from '../../.vitepress/components/DesmosCalculator.vue'
import CopyableEquation from '../../.vitepress/components/CopyableEquation.vue'
</script>

## Basic System of Linear Equations
Here's a system of two linear equations: 
<CopyableEquation equation="y = 2x + 1" /> and <CopyableEquation equation="y = -x + 4" />

<DesmosCalculator 
  :equations="[
    'y=2x+1',
    'y=-x+4'
  ]"
  height="400px"
/>

## Complex Example with Quadratic System
This example shows how to solve a quadratic system:

<CopyableEquation equation="y = 2x² + 1" /> and <CopyableEquation equation="y = 2x + 1" />

<DesmosCalculator 
  :equations="[
    'y=2x^2+1',
    'y=2x+1',
    '(x,y)=\\intersect(2x^2+1,2x+1)'
  ]"
  height="600px"
/>

## Parametric Equations
Here's an example with parametric equations:

<CopyableEquation equation="x = cos(t)" /> and <CopyableEquation equation="y = sin(t)" />
where <CopyableEquation equation="0 ≤ t ≤ 2π" />

<DesmosCalculator 
  :equations="[
    'x=\\cos(t)',
    'y=\\sin(t)',
    '0\\le t\\le 2\\pi'
  ]"
  height="500px"
/>