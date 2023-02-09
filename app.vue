<template>
  <div>
    <div>
      <header>
        <h1>Logistiksystem</h1>
        <nav class="navbar">
          <nuxt-link class="nav-item" to="/">Home</nuxt-link>
          <nuxt-link class="nav-item" to="/orders">Orders</nuxt-link>
          <nuxt-link class="nav-item" to="/">Workers</nuxt-link>
        </nav>
      </header>
    </div>

    <div>
      <NuxtPage />
    </div>
  </div>
</template>

<style scoped>
header {
  text-align: center;
}
h1 {
  margin: 1rem;
}

.navbar {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  width: 100%;
  background-color: rgb(73, 188, 255);
}
.nav-item {
  font-size: 1.3rem;
  font-weight: bold;
  padding: 0.7rem;
  width: 100%;
  background-color: rgb(73, 188, 255);
  color: black;
  text-decoration: none;
  transition: background 100ms linear;
  border-radius: 3px;
  border: 1px solid black;
}
.nav-item:hover {
  background-color: rgb(4, 141, 220);
  color: rgb(240, 240, 240);
}
</style>
