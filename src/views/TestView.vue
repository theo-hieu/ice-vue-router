<script setup>
import { ref } from 'vue'

const message = ref('Click the button below.')

function handleClick() {
  message.value = 'Button click'
}
</script>

<template>
  <h1>Testing Page</h1>
  <p>{{ message }}</p>
  <button @click="handleClick">Click</button>
</template>