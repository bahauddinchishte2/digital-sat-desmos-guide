<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const props = defineProps({
  height: {
    type: String,
    default: '400px'
  },
  width: {
    type: String,
    default: '500px'
  },
  equations: {
    type: Array,
    default: () => []
  }
})

const parseSize = (size) => {
  if (typeof size === 'string') {
    return parseInt(size.replace('px', '')) || 500
  }
  return 500
}

const isVisible = ref(false)
const calculatorElement = ref(null)
const containerElement = ref(null)
const position = ref({ x: 20, y: 20 })
const size = ref({
  width: parseSize(props.width),
  height: parseSize(props.height)
})
let calculator = null
let resizingFromLeft = false

const minWidth = 350
const minHeight = 300
let isResizing = false
let isDragging = false
let dragOffset = { x: 0, y: 0 }
let resizeStart = { x: 0, y: 0, width: 0, height: 0, posX: 0 }

const initDragListeners = () => {
  window.addEventListener('mousemove', onDrag)
  window.addEventListener('mouseup', stopDrag)
}

const removeDragListeners = () => {
  window.removeEventListener('mousemove', onDrag)
  window.removeEventListener('mouseup', stopDrag)
}

const initResizeListeners = () => {
  window.addEventListener('mousemove', handleResize)
  window.addEventListener('mouseup', stopResize)
}

const removeResizeListeners = () => {
  window.removeEventListener('mousemove', handleResize)
  window.removeEventListener('mouseup', stopResize)
}

const startDrag = (e) => {
  if (e.target.classList.contains('resize-handle')) return
  e.preventDefault()
  isDragging = true
  initDragListeners()
  dragOffset = {
    x: e.clientX - position.value.x,
    y: e.clientY - position.value.y
  }
}

const onDrag = (e) => {
  if (!isDragging) return
  e.preventDefault()
  position.value = {
    x: e.clientX - dragOffset.x,
    y: e.clientY - dragOffset.y
  }
}

const stopDrag = () => {
  isDragging = false
  removeDragListeners()
}

const startResize = (e) => {
  e.stopPropagation()
  e.preventDefault()
  isResizing = true
  resizingFromLeft = false
  initResizeListeners()
  resizeStart = {
    x: e.clientX,
    y: e.clientY,
    width: size.value.width,
    height: size.value.height,
    posX: position.value.x
  }
}

const startResizeLeft = (e) => {
  e.stopPropagation()
  e.preventDefault()
  isResizing = true
  resizingFromLeft = true
  initResizeListeners()
  resizeStart = {
    x: e.clientX,
    y: e.clientY,
    width: size.value.width,
    height: size.value.height,
    posX: position.value.x
  }
}

const handleResize = (e) => {
  if (!isResizing) return
  e.preventDefault()
  
  const deltaX = e.clientX - resizeStart.x
  const deltaY = e.clientY - resizeStart.y
  
  if (resizingFromLeft) {
    // For left corner resize, we need to adjust position as well as width
    const newWidth = Math.max(minWidth, resizeStart.width - deltaX)
    const newX = resizeStart.posX + (resizeStart.width - newWidth)
    
    position.value = {
      x: newX,
      y: position.value.y
    }
    
    size.value = {
      width: newWidth,
      height: Math.max(minHeight, resizeStart.height + deltaY)
    }
  } else {
    // Original bottom-right resize
    size.value = {
      width: Math.max(minWidth, resizeStart.width + deltaX),
      height: Math.max(minHeight, resizeStart.height + deltaY)
    }
  }
  
  if (calculator) {
    calculator.resize()
  }
}

const stopResize = () => {
  isResizing = false
  removeResizeListeners()
}

const toggleCalculator = () => {
  isVisible.value = !isVisible.value
  if (isVisible.value) {
    nextTick(() => {
      if (calculatorElement.value) {
        initCalculator()
      }
    })
  }
}

const initCalculator = () => {
  if (typeof Desmos !== 'undefined' && calculatorElement.value) {
    calculator = Desmos.GraphingCalculator(calculatorElement.value, {
      keypad: true,
      expressions: true,
      settingsMenu: false,
      zoomButtons: true,
      expressionsCollapsed: false,
      lockViewport: false
    })
    
    if (props.equations.length > 0) {
      props.equations.forEach((eq, index) => {
        calculator.setExpression({ id: `eq${index}`, latex: eq })
      })
    }
  }
}

onMounted(() => {
  // Initialize size on mount
  size.value = {
    width: parseSize(props.width),
    height: parseSize(props.height)
  }
})

onUnmounted(() => {
  removeDragListeners()
  removeResizeListeners()
  if (calculator) {
    calculator.destroy()
    calculator = null
  }
})
</script>
<template>
  <div>
    <button @click="toggleCalculator" class="floating-calc-button" title="Toggle Desmos Calculator">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <line x1="2" y1="10" x2="22" y2="10"/>
        <line x1="8" y1="16" x2="16" y2="16"/>
      </svg>
      Calculator
    </button>

    <div v-show="isVisible" 
         ref="containerElement"
         class="floating-calculator" 
         :style="{
           left: `${position.x}px`, 
           top: `${position.y}px`,
           width: `${size.width}px`,
           height: `${size.height}px`
         }"
         @mousedown="startDrag">
      <div class="calculator-header">
        <span>Desmos Calculator</span>
        <button class="close-button" @click="toggleCalculator">×</button>
      </div>
      <div ref="calculatorElement" class="calculator-content"></div>
      <div class="resize-handle bottom-right" @mousedown.stop="startResize"></div>
      <div class="resize-handle bottom-left" @mousedown.stop="startResizeLeft"></div>
    </div>
  </div>
</template>

<style scoped>
.floating-calc-button {
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 100;
  padding: 8px 16px;
  background: var(--vp-c-brand-1);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 6px;
}

.floating-calc-button:hover {
  background: var(--vp-c-brand-2);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.floating-calculator {
  position: fixed;
  z-index: 999;
  background: var(--vp-c-bg);
  border-radius: 8px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  display: grid;
  grid-template-rows: auto 1fr;
  overflow: hidden;
}

.calculator-header {
  padding: 8px 12px;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: move;
  user-select: none;
}

.close-button {
  background: none;
  border: none;
  font-size: 20px;
  color: var(--vp-c-text-2);
  cursor: pointer;
  padding: 0 4px;
}

.close-button:hover {
  color: var(--vp-c-text-1);
}

.calculator-content {
  flex: 1;
  min-width: v-bind('minWidth + "px"');
  min-height: v-bind('(minHeight - 37) + "px"');
  width: 100% !important;
  height: 100% !important;
  background: white;
  transition: none;
}

.resize-handle {
  position: absolute;
  width: 24px;
  height: 24px;
  background: transparent;
  touch-action: none;
  z-index: 1000;
}

.resize-handle.bottom-right {
  right: 0;
  bottom: 0;
  cursor: se-resize;
}

.resize-handle.bottom-left {
  left: 0;
  bottom: 0;
  cursor: sw-resize;
}

.resize-handle.bottom-right::after {
  content: '';
  position: absolute;
  right: 6px;
  bottom: 6px;
  width: 10px;
  height: 10px;
  border-right: 2px solid var(--vp-c-text-3);
  border-bottom: 2px solid var(--vp-c-text-3);
  pointer-events: none;
}

.resize-handle.bottom-left::after {
  content: '';
  position: absolute;
  left: 6px;
  bottom: 6px;
  width: 10px;
  height: 10px;
  border-left: 2px solid var(--vp-c-text-3);
  border-bottom: 2px solid var(--vp-c-text-3);
  pointer-events: none;
}

.resize-handle:hover::after {
  opacity: 1;
}
</style>