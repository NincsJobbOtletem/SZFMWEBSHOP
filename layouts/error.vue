<template>
  <div class="error-page">
    <h1>Oops, rossz helyre tévedtél</h1>
    <p>Vissza <a href="/">főoldalra</a>!</p>
  </div>
</template>

<style scoped>
.error-page {
  text-align: center;
}

.error-page a {
  text-decoration: none;
  color: red;
}

.error-page a:hover,
.error-page a:active {
  color: salmon;
}
</style>
