<script setup lang="ts">
const route = useRoute();

const { data } = await useFetch(`/api/orders/${route.params.orderid}`);
console.log(data.value);
</script>
<template>
  <div>
    <h1>{{ data?.customer }}</h1>
  </div>
</template>
