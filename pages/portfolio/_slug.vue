<template>
    <main class="post individual">
        <div v-if="post">
            <h1>{{ post.title.rendered }}</h1>
      <small class="date">{{ post.date }}</small>
      <section v-html="post.content.rendered"></section>
        </div>
      <!--  -->
    </main>
</template>

<script>
    export default {
        data() {
            return {
                slug: this.$route.params.slug
            };
        },
        computed: {
            posts() {
                return this.$store.state.works;
            },
            post() {
                return this.posts.find(el => el.slug === this.slug);
            }
        },
        created() {
            this.$store.dispatch("getWorks");
        }
    };
</script>