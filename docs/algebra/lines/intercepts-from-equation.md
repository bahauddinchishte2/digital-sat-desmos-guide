# Use Case 3 - Find the y-intercept or x-intercept of a Line from an Equation of a Line

## Question 1

What is the x-coordinate of the x-intercept of a line defined by the equation <CopyableEquation equation="2x - 5y = -8" />?

## Interactive Calculator

<script setup>
import DesmosCalculator from '../../.vitepress/components/DesmosCalculator.vue'
import CopyableEquation from '../../.vitepress/components/CopyableEquation.vue'
</script>

<DesmosCalculator 
  :equations="[
    '2x-5y=-8'
  ]"
  height="500px"
/>

## Solution Method

### Step 1: Enter the Equation
- Type the equation <CopyableEquation equation="2x - 5y = -8" />
- The graph of the corresponding line is displayed

### Step 2: Find the Solution
- Place the cursor over the dot where the line intersects the x-axis and read the coordinates of the point
- The point is (-4, 0). This is the x-intercept of the line
- The x-coordinate of the x-intercept is the value of x = -4

The answer is -4.

## Question 2

What is the y-coordinate of the y-intercept of a line defined by the equation <CopyableEquation equation="2x - 5y = -8" />?

## Interactive Calculator

<DesmosCalculator 
  :equations="[
    '2x-5y=-8',
    'x=0'
  ]"
  height="500px"
/>

## Solution Method

### Step 1: Enter the Equation
- Type the equation <CopyableEquation equation="2x - 5y = -8" />
- The graph of the corresponding line is displayed

### Step 2: Find the Solution
- Place the cursor over the dot where the line intersects the y-axis and read the coordinates of the point
- Zoom in as needed to clearly view the value of y
- The point is (0, 1.6). This is the y-intercept of the line
- The y-coordinate of the y-intercept is the value of y = 1.6

The answer is 1.6.

## Notes

The equation may be given in the standard form as in the above example or in the slope-intercept form.

The Desmos graphing calculator is not needed to determine the y-coordinate of the y-intercept of a line from an equation in the slope-intercept form (y = mx + b). It can be directly read from the equation as the value of b.

See below a variation of a question on this use case:
The graph of the equation 2x - 5y = -8 has an x-intercept of (a, 0) and a y-intercept of (0, b), what is the value of a + b? In this example, a is the x-coordinate of the x-intercept and b is the y-coordinate of the y-intercept. Determine them as shown in this use case and then add a and b.