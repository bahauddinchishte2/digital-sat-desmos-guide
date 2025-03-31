import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'Digital SAT Desmos Guide',
  description: 'A comprehensive guide for using Desmos on the Digital SAT',
  base: '/', // Ensure base path is correctly set

  head: [
    ['script', { src: 'https://www.desmos.com/api/v1.8/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Cambria:ital@0;1&display=swap', rel: 'stylesheet' }],
    ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.js' }]
  ],

  themeConfig: {
    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Algebra', link: '/algebra/' },
      { text: 'Advanced Math', link: '/advanced-math/' },
      { text: 'Statistics', link: '/statistics/' },
      { text: 'Geometry', link: '/geometry/' },
      { text: 'About', link: '/about' }
    ],

    footer: {
      copyright: 'Copyright © 2024 Digital SAT Desmos Guide'
    },

    outline: {
      level: [2, 3],
      label: 'On this page'
    },

    docFooter: {
      prev: 'Previous Page',
      next: 'Next Page'
    },

    sidebar: [
      {
        text: 'Algebra Use Cases',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/algebra/' },
          { 
            text: 'Variables in Linear Equations',
            collapsed: false,
            items: [
              { text: 'Use 1 - Find the Value of a Variable in a Linear Equation with One Variable', link: '/algebra/variables/one-variable' },
              { text: 'Use 2 - Find the Value of a Variable in a Linear Equation with Two Variables when the Value of One of the Variables is Given', link: '/algebra/variables/two-variables' }
            ]
          },
          { 
            text: 'Lines',
            collapsed: false,
            items: [
              { text: 'Use 3 - Find the y-intercept or x-intercept of a Line from an Equation of a Line', link: '/algebra/lines/intercepts-from-equation' },
              { text: 'Use 4 - Find the Slope, or y-intercept, or x-intercept, or an Equation of a Line from Two Points on a Line', link: '/algebra/lines/line-from-two-points' },
              { text: 'Use 5 - Find the y-intercept, or x-intercept, or an Equation of a Line from the Slope and One Point on the Line', link: '/algebra/lines/line-from-slope-point' },
              { text: 'Use 6 - Find an Equation of a Line from a Table Containing Points on a Line', link: '/algebra/lines/line-from-table' },
              { text: 'Use 7 - Match a Linear Equation to the Corresponding Graph and Vice-Versa', link: '/algebra/lines/match-equation-graph' },
              { text: 'Use 8 - Find if a Point is on the Graph of the Given Equation of a Line', link: '/algebra/lines/point-on-line' },
              { text: 'Use 9 - Find the y-intercept, x-intercept, or an Equation of a Line from One Point on a Line and the Slope of a Parallel Line', link: '/algebra/lines/line-from-parallel-slope' },
              { text: 'Use 10 - Find the y-intercept, x-intercept, or an Equation of a Line from One Point on a Line and the Slope of a Perpendicular Line', link: '/algebra/lines/line-from-perpendicular-slope' },
              { text: 'Use 11 - Find the x-intercept of a Vertically Translated Line from an Equation of a Line', link: '/algebra/lines/vertical-translation' },
              { text: 'Use 12 - Find the y-intercept or x-intercept of a Horizontally Translated Line from an Equation of a Line', link: '/algebra/lines/horizontal-translation' }
            ]
          },
          {
            text: 'Linear Functions',
            collapsed: false,
            items: [
              { text: 'Use 13 - Find the Output Value of a Linear Function for a Given Input Value from the Definition of a Function', link: '/algebra/functions/output-from-definition' },
              { text: 'Use 14 - Find the Output Value of a Linear Function for a Given Input Value from a Table Containing Points on a Line', link: '/algebra/functions/output-from-table' },
              { text: 'Use 15 - Find the Input Value of a Linear Function for a Given Output Value from the Definition of a Function', link: '/algebra/functions/input-from-definition' },
              { text: 'Use 16 - Find the y-intercept, x-intercept, or Definition of a Linear Function from Two Linear Function Input/Output Value Pairs', link: '/algebra/functions/function-from-pairs' }
            ]
          },
          {
            text: 'System of Linear Equations',
            collapsed: false,
            items: [
              { text: 'Use 17 - Find the Number of Solutions of a System of Linear Equations', link: '/algebra/systems/number-of-solutions' },
              { text: 'Use 18 - Find the Value of a Constant in a System of Linear Equations with No Solution', link: '/algebra/systems/no-solution-constants' },
              { text: 'Use 19 - Find the Value of a Constant in a System of Linear Equations with Infinitely Many Solutions', link: '/algebra/systems/infinite-solutions-constants' },
              { text: 'Use 20 - Find the Solution (x, y) of a System of Linear Equations with One Solution', link: '/algebra/systems/system-solution' }
            ]
          },
          {
            text: 'Linear Inequalities',
            collapsed: false,
            items: [
              { text: 'Use 21 - Match the Solution Set of a Linear Inequality to the Corresponding Graph', link: '/algebra/inequalities/match-solution-graph' },
              { text: 'Use 22 - Find the Points in the Solution Set of a Linear Inequality', link: '/algebra/inequalities/solution-set-points' },
              { text: 'Use 23 - Match the Solution Set of a System of Linear Inequalities to the Corresponding Graph', link: '/algebra/inequalities/match-system-graph' },
              { text: 'Use 24 - Find the Points in the Solution Set of a System of Linear Inequalities', link: '/algebra/inequalities/system-solution-points' },
              { text: 'Use 25 - Find the Quadrants that Contain the Solution Set of a System of Linear Inequalities', link: '/algebra/inequalities/solution-set-quadrants' }
            ]
          }
        ]
      },
      {
        text: 'Advanced Math Use Cases',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/advanced-math/' }
        ]
      },
      {
        text: 'Statistics Use Cases',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/statistics/' }
        ]
      },
      {
        text: 'Geometry Use Cases',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/geometry/' }
        ]
      }
    ]
  }
});