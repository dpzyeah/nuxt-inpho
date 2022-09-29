<template>
    <div>
      <AppNavigation/>
      <div>
        <Nuxt/>
      </div>
    </div>
  </template>
  
  <script>
  import AppNavigation from '~/components/AppNavigation.vue';
  export default {
      components: { AppNavigation }
  }
  </script>
  