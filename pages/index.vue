<script lang="ts" setup>
const { data: items } = await useFetch("/api/items");
</script>
<template>
  <div>
    <form @submit.prevent="sendOrder">
      <div class="products">
        <div class="ind-product" v-for="item in items">
          <input type="checkbox" class="hidden" :id="'label-' + item.name" />
          <label class="ind-label" :for="'label-' + item.name">
            <div>{{ item.name }}</div>
            <div>{{ item.price }} kr</div>
          </label>
        </div>
        <button type="submit">Send Order</button>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
function sendOrder() {
  let test = document.querySelectorAll("input[type='checkbox']:checked");
  console.log(test);
}
</script>
<style scoped>
.hidden {
  opacity: 0;
  height: 0;
  width: 0;
}
.products {
  display: grid;
  grid-template: auto / 1fr 1fr 1fr 1fr 1fr;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  gap: 1rem;
}
.ind-product {
  border: 1px solid black;
  border-radius: 5px;
}
.ind-label {
  width: 100%;
  height: 100%;
}
.ind-product:hover {
  background-color: rgb(0, 200, 255);
}

.products input[type="checkbox"]:checked + label div {
  background-color: #76cf9f;
}
</style>
