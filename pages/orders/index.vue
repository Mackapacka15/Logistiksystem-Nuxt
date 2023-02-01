<script setup lang="ts">
const { data: orders } = await useFetch("/api/orders");
</script>

<template>
  <div class="order-list">
    <div class="order-header">
      <span>Order Number</span>
      <span>Name</span>
      <span>Date Received</span>
      <span>Total Value</span>
    </div>
    <div v-for="order in orders" class="ind-order">
      <div class="order-container">
        <span>{{ order.orderNumber }}</span>
        <span>{{ order.customer }}</span>
        <span>{{ dateFormatter(order.date) }}</span>
        <span>{{ order.orderValue }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
function dateFormatter(date: Date): string {
  let split = (date as unknown as string).split("");
  return (
    split[8] +
    split[9] +
    " - " +
    split[5] +
    split[6] +
    " - " +
    split[0] +
    split[1] +
    split[2] +
    split[3] +
    " " +
    split[11] +
    split[12] +
    split[13] +
    split[14] +
    split[15]
  );
}
</script>

<style>
.order-header {
  display: grid;
  grid-template-columns: 10% 1fr 20% 20%;
  width: 80%;
  background-color: rgb(160, 219, 160);
}
.order-container {
  display: grid;
  grid-template-columns: 10% 1fr 20% 20%;
  padding: 0;
}
.order-container * {
  border: 2px solid black;
  border-top: 0;
}

.order-container * + * {
  border-left: 0;
}

.order-header * {
  border: 2px solid black;
}

.order-header * + * {
  border-left: 0;
}
.order-header span {
  padding: 1rem;
}
.order-list {
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
}
.ind-order {
  background-color: yellow;
  width: 80%;
}
.ind-order span {
  padding: 1rem;
}
</style>
