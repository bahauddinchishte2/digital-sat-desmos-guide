<script setup>
const props = defineProps({
  position: {
    type: String,
    default: 'sidebar'
  }
})
</script>

<template>
  <div class="ad-space" :class="position">
    <!-- Ad placeholder - Content will be added later -->
  </div>
</template>

<style scoped>
.ad-space {
  width: 100%;
  margin: 1rem 0;
  min-height: 250px;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ad-space.sidebar {
  min-height: 250px;
}

.ad-space.content-top {
  min-height: 90px;
  margin: 1rem 0 2rem;
}

.ad-space.content-bottom {
  min-height: 250px;
  margin: 2rem 0 1rem;
}
</style>