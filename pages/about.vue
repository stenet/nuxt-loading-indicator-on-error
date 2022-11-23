<template>
  <div>About</div>
</template>

<script setup>
await new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('something went wrong'));
  }, 500);
});
</script>
