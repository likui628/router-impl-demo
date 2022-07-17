<template>
  <div class="main">

    <router-link class="link" to="/">Home</router-link>

    <router-link class="link" to="/about">About</router-link>

    <router-view class="main"></router-view>
  </div>
</template>
<style>
.link {
  padding: 3px 5px;
}

.main {
  padding: 10px;
  font-size: 26px;
}
</style>