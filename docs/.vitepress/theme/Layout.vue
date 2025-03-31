<!-- Extending the default theme layout -->
<script setup>
import { useData } from 'vitepress'
import { onMounted } from 'vue'
import DefaultTheme from 'vitepress/theme'
import FloatingCalculator from '../components/FloatingCalculator.vue'

const { Layout } = DefaultTheme

// Add floating math symbols
onMounted(() => {
  const symbols = ['∫', '∑', '√', 'π', '∞', '∂', 'θ', '±', '≈', '≠', 'Δ', 'λ', 'Ω', '∇', '∀', '∃'];
  const container = document.body;
  
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const symbol = document.createElement('div');
      symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      symbol.className = 'math-symbol';
      symbol.style.left = `${Math.random() * 100}%`;
      symbol.style.opacity = '0';
      symbol.style.animationDelay = `${Math.random() * 40}s`;
      symbol.style.animationDuration = `${20 + Math.random() * 20}s`;
      container.appendChild(symbol);
    }, i * 2000);
  }
})
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <FloatingCalculator />
    </template>
  </Layout>
</template>