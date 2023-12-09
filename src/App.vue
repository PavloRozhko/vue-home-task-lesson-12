<template>
  <nav>
    <router-link :to="{ name: 'home' }">Головна</router-link> |
    <router-link :to="{ name: 'employees' }">Співробітники</router-link> |
    <router-link :to="{ name: 'candidates' }">Кандидати</router-link> |
    <router-link :to="{ name: 'interviews' }">Співбесіди</router-link> |
  </nav>
  <router-view />
</template>

<style lang="scss">
@import './assets/styles/index';

#app {
  max-width: 1200px;
  margin: 0 auto;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
