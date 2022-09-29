<template>
  <div class="posts">
    <main>
      <h2>Portfolio</h2>
    <!-- here we loop through the posts -->
      <div class="post" v-for="post in works" :key="post.id">
        <h3>
        <!-- for each one of them, we’ll render their title, and link off to their individual page -->
          <a :href="`/portfolio/${post.slug}`">{{ post.title.rendered }}</a>
        </h3>
        <!-- <div v-html="post.excerpt.rendered"></div> -->
        <a :href="`/portfolio/${post.slug}`" class="readmore">Read more ⟶</a>
      </div>
    </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PortfolioPage',
    computed: {
    works() {
      return this.$store.state.works;
    },
   },
  created() {
    this.$store.dispatch("getWorks");
  },
  
  };
  </script>