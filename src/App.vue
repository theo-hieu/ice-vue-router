<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navigation">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/testing">Testing Page</RouterLink>
      <RouterLink to="/test/123">Test ID: 123</RouterLink>
      <RouterLink to="/test/abc">Test ID: abc</RouterLink>
    </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
