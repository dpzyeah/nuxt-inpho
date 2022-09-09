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
    name: "DefaultPage",
      components: { AppNavigation }
  }
  </script>
  