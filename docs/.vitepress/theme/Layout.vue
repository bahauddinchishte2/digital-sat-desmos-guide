<!-- Extending the default theme layout -->
<script setup>
import { useData } from 'vitepress'
import { onMounted, nextTick } from 'vue'
import DefaultTheme from 'vitepress/theme'
import FloatingCalculator from '../components/FloatingCalculator.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()

// Add floating math symbols
onMounted(() => {
  nextTick(() => {
    const symbols = ['∫', '∑', '√', 'π', '∞', '∂', 'θ', '±', '≈', '≠', 'Δ', 'λ', 'Ω', '∇', '∀', '∃'];
    const container = document.body;
    
    // Clear existing symbols first (in case of rerendering)
    const existingSymbols = document.querySelectorAll('.math-symbol');
    existingSymbols.forEach(el => el.remove());
    
    // Add new symbols with a slight delay to avoid blocking render
    setTimeout(() => {
      for (let i = 0; i < 15; i++) {
        const symbol = document.createElement('div');
        symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        symbol.className = 'math-symbol';
        symbol.style.left = `${Math.random() * 100}%`;
        symbol.style.opacity = '0';
        symbol.style.animationDelay = `${Math.random() * 40}s`;
        symbol.style.animationDuration = `${20 + Math.random() * 20}s`;
        symbol.style.zIndex = '-1';
        container.appendChild(symbol);
      }
    }, 1000);
  });
})
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <FloatingCalculator />
    </template>
  </Layout>
</template>