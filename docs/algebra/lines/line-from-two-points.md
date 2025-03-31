# Use Case 4 - Find the Equation of a Line Given Two Points

<script setup>
import DesmosCalculator from '../../.vitepress/components/DesmosCalculator.vue'
import CopyableEquation from '../../.vitepress/components/CopyableEquation.vue'
</script>

Learn how to find the equation of a line when given two points using Desmos.

## Example Problem
Find the equation of a line that passes through the points (2, 3) and (4, 7).

<DesmosCalculator 
  :equations="[
    '(2,3)',
    '(4,7)',
    'y-3=\\frac{7-3}{4-2}(x-2)'
  ]"
  height="500px"
/>

## Steps to Find the Line Equation

1. Plot the two points
   - Enter the first point <CopyableEquation equation="(2,3)" />
   - Enter the second point <CopyableEquation equation="(4,7)" />

2. Use point-slope form
   - Calculate slope: m = (y₂-y₁)/(x₂-x₁)
   - In this case: m = (7-3)/(4-2) = 2
   - Use either point in point-slope form: <CopyableEquation equation="y - y₁ = m(x - x₁)" />

3. Verify the equation
   - The line should pass through both points
   - You can check by substituting both points into the equation

## Tips
- Use the point-slope form first, then convert to slope-intercept if needed
- Double-check your slope calculation
- Verify that your line passes through both points
- Use the zoom feature to get a better view of your graph

## Common Mistakes to Avoid
1. Reversing the points when calculating slope
2. Forgetting to subtract coordinates in the correct order
3. Not verifying that the line passes through both points

## Practice Problems
Try finding the equation of a line through these pairs of points:
1. (0,0) and (3,6)
2. (-1,4) and (2,-2)
3. (5,1) and (5,7)