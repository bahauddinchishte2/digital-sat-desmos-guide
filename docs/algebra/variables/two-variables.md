# Use Case 2 - Find the Value of a Variable in a Linear Equation with Two Variables when the Value of One of the Variables is Given

This guide will help you use Desmos to solve linear equations with two variables when one variable's value is known on the Digital SAT.

## Question 1

In the equation <CopyableEquation equation="2x + 3y + 9 = 31" />, what is the value of y when x = 5?

## Interactive Calculator

<script setup>
import DesmosCalculator from '../../.vitepress/components/DesmosCalculator.vue'
import CopyableEquation from '../../.vitepress/components/CopyableEquation.vue'
</script>

<DesmosCalculator 
  :equations="[
    '2x+3y+9=31',
    'x=5'
  ]"
  height="500px"
/>

## Solution Method

### Step 1: Enter the Original Equation
- Type the equation <CopyableEquation equation="2x + 3y + 9 = 31" /> into Desmos
- Add a second equation `x = 5` to represent the known value
- The graph will show a line and a vertical line at x = 5
- Their intersection point gives us our solution

### Step 2: Find the Solution
- Look for where the two lines intersect
- Place your cursor over the intersection point
- The y-coordinate of this point is your answer
- In this case, **y = 4** is the solution

## Important Notes

A question may ask for additional operations on the solution. For example:
- Finding **y + 3**
- Calculating **2y**
- Determining other expressions involving y

In such cases:
1. First find the value of y using the steps above
2. Then perform the required operation with the found value

## Tips
- Always check if your equations are typed correctly
- Use the intersection point tool for precise readings
- Verify your answer by substituting both x and y back into the original equation
- Make sure to use the correct variable in your final answer

## Common Mistakes to Avoid
1. Confusing x and y coordinates at the intersection point
2. Not substituting the known value correctly
3. Forgetting to include all terms of the original equation
4. Not verifying the solution in the original equation

## Practice
Try these steps with similar equations to build confidence in using Desmos for solving two-variable linear equations.