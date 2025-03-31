# Use Case 1 - Find the Value of a Variable in a Linear Equation with One Variable

This guide will help you use Desmos to solve linear equations with one variable on the Digital SAT.

## Question 1: 
<CopyableEquation equation="2(7x + 1) - 3(2x + 9) = -21" />

 What value of x satisfies the above equation?

## Interactive Calculator

<script setup>
import DesmosCalculator from '../../.vitepress/components/DesmosCalculator.vue'
import CopyableEquation from '../../.vitepress/components/CopyableEquation.vue'
</script>

<DesmosCalculator 
  :equations="[
    '2(7x+1)-3(2x+9)=-21',
  ]"
  height="500px"
/>

## Solution Method

### Step 1: Enter the Equation
- Type the equation <CopyableEquation equation="2(7x + 1) - 3(2x + 9) = -21" /> into Desmos
- The graph of the corresponding line will be displayed
- Desmos automatically creates a visual representation of where this equation is satisfied

### Step 2: Find the Solution
- Look for where the line intersects the x-axis
- Place your cursor over the intersection point
- Zoom in as needed for more precise reading
- In this case, **x = 0.5** is the solution (*Zoom to see the exact point*)

## Important Notes

A question may ask for additional operations on the solution. For example:
- Finding **x + 2**
- Calculating **4x**
- Determining other expressions involving x

In such cases:
1. First find the value of x using the steps above
2. Then perform the required operation with the found value

## Tips
- Always check if your equation is typed correctly
- Use parentheses to ensure proper order of operations
- Zoom in for more precise readings of decimal values
- Verify your answer by substituting it back into the original equation

## Common Mistakes to Avoid
1. Forgetting parentheses when entering the equation
2. Not zooming in enough to read decimal values accurately
3. Misreading the intersection point

## Practice
Try these steps with similar equations to build confidence in using Desmos for solving linear equations.