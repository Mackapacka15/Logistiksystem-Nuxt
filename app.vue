<template>
  <div>
    <div>
      <header>
        <h1>Logistiksystem</h1>
        <nav class="navbar">
          <nuxt-link to="/">Home</nuxt-link>
        </nav>
      </header>
    </div>
  </div>
</template>

<style scoped>
header {
  text-align: center;
}
.navbar {
  background-color: olivedrab;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
}
.navbar * {
  width: auto;
  background-color: red;
}
</style>
