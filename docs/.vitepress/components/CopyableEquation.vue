<script setup>
import { ref } from 'vue'

const props = defineProps({
  equation: {
    type: String,
    required: true
  }
})

const copied = ref(false)

const copyEquation = () => {
  navigator.clipboard.writeText(props.equation)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>

<template>
  <div class="equation-container">
    <span class="equation" v-html="equation.replace(/([a-zA-Z](?![a-zA-Z]))/g, '<var>$1</var>')"></span>
    <button class="copy-button" @click="copyEquation">
      <span v-if="!copied">Copy</span>
      <span v-else>Copied!</span>
    </button>
  </div>
</template>

<style scoped>
.equation-container {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.copy-button {
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 4px;
  border: 1px solid var(--vp-c-divider-light);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition: all 0.2s;
}

.copy-button:hover {
  background: var(--vp-c-bg-mute);
  border-color: var(--vp-c-brand-1);
}
</style>