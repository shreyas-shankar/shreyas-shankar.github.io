<template>
  <div class="blogindex">
    <h1 class="blogheading">Blog Posts</h1>
    <div class="blogcard" v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <div>
            <h2>{{ article.title }}</h2>
            <p>{{ article.description }}</p>
          </div>
        </NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData ({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles
    }
  }
}
</script>
<style scoped>
.blogcard {
  border-radius: 10px;
  padding-top: 1em;
  padding-bottom: 1em;
  padding-left: 0.5em;
  margin: 0.5em;
  width: 60%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
.blogcard:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.5);
}
.blogindex {
  margin-left: 10%;
}
.blogheading {
  color: #472d30;
  font-size: 40px;
  padding-left: 10px;
}
</style>
