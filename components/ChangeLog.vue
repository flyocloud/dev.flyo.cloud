<template>
  <div
    v-for="(item,index) in data"
    :key="`${item.name}${index}`"
  >
    <h2>{{ item.name }}</h2>
    <p>{{ formatDate(item.released_at) }}</p>
    <div v-html="item.description_html" />
  </div>
</template>

<script setup>
const response = await fetch('https://api.flyo.cloud/releases')
const data = await response.json();

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(input) {
  const date = new Date(input)
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('/');
}
</script>
