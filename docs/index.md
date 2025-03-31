---
layout: home

hero:
  name: SAT Desmos Guide
  text: Are You Stuck in 500-600 on Your Sat Math?
  tagline: Our comprehensive digital sat desmos guide will help you to improve 150-200+ point and even more
  actions:
    - theme: brand
      text: Get Started
      link: /algebra/
---

<script setup>
import HomeCalculator from './.vitepress/components/HomeCalculator.vue'
</script>

<div class="custom-hero-layout">
  <div class="hero-content">
    <h1>SAT Desmos Guide</h1>
    <!-- <p class="hero-text">Break Through Your<br>500-600 SAT Math Score</p>
    -->
    <p class="hero-tagline">Our comprehensive Digital SAT Desmos Guide will help you improve your score by 150-200+ points or even more</p>
    <div class="hero-actions">
      <a href="/algebra/index.html" class="hero-button">Get Started</a>
    </div>
  </div>
  <div class="hero-calculator">
    <HomeCalculator />
  </div>
</div>

<style>
.custom-hero-layout {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  margin: 0 auto;
  max-width: 1152px;
  padding: 6rem 2rem 4rem;
  min-height: 450px;
}

.hero-content {
  flex: 1;
  max-width: 500px;
}

.hero-content h1 {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 2rem;
  background: linear-gradient(to right, var(--vp-c-brand-1), var(--vp-c-brand-2));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: -0.5px;
}

.hero-text {
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 2.5rem;
  color: var(--vp-c-text-1);
}

.hero-tagline {
  font-size: 1.4rem;
  color: var(--vp-c-text-2);
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.hero-button {
  display: inline-block;
  border-radius: 6px;
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  background-color: var(--vp-c-brand-1);
  color: white !important;
  text-decoration: none !important;
  transition: all 0.3s;
  border: none;
  box-shadow: 0 4px 12px rgba(var(--vp-c-brand-1), 0.3);
}

.hero-button:hover {
  background-color: var(--vp-c-brand-2);
  text-decoration: none !important;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(var(--vp-c-brand-1), 0.4);
}

/* Hide the default VitePress hero */
.VPHero {
  display: none;
}

.hero-calculator {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 450px;
}

@media (max-width: 960px) {
  .custom-hero-layout {
    flex-direction: column;
    text-align: center;
    padding-top: 3rem;
    gap: 2rem;
  }
  
  .hero-content {
    flex: 1 1 auto;
    max-width: 100%;
  }
  
  .hero-content h1 {
    font-size: 2.6rem;
    margin-bottom: 1.8rem;
  }
  
  .hero-text {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .hero-tagline {
    margin-bottom: 2rem;
  }
  
  .hero-calculator {
    max-width: 100%;
    width: 100%;
  }
}
</style>

## Desmos: Your Secret Weapon for the SAT

Desmos is more than just a graphing calculator. It's a powerful tool that can significantly improve your SAT Math performance.

Our guide teaches you how to leverage Desmos to its full potential, helping you visualize problems, speed up calculations, and gain a deeper understanding of mathematical concepts.

With proper mastery, you can boost your SAT Math score by up to 200 points!