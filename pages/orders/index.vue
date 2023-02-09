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
    <nuxt-link
      v-for="order in orders"
      class="ind-order"
      :to="'/orders/' + order.orderNumber"
    >
      <div class="order-container">
        <span>{{ order.orderNumber }}</span>
        <span>{{ order.customer }}</span>
        <span>{{ dateFormatter(order.date) }}</span>
        <span>{{ order.orderValue }} kr</span>
      </div>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
function dateFormatter(date: any): string {
  // console.dir(typeof date);
  const dateObject = new Date(Date.parse(date));

  return dateObject
    .toLocaleDateString(undefined, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    })
    .replace(",", "");
}
</script>

<style>
.order-header {
  display: grid;
  grid-template-columns: 10% 1fr 10% 10%;
  width: 80%;
  background-color: rgb(160, 219, 160);
}
.order-container {
  display: grid;
  grid-template-columns: 10% 1fr 10% 10%;
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
  margin-top: 1rem;
}
.ind-order {
  background-color: yellow;
  width: 80%;
  text-decoration: none;
  color: black;
}
.ind-order:hover {
  background-color: rgb(222, 222, 1);
}
.ind-order span {
  padding: 1rem;
}
</style>
