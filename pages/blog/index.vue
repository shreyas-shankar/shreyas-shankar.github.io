<template>
  <div class="blogindex">
    <h1 class="blogheading">Blog Posts</h1>
    <div class="blogcard" v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <div>
            <h2>{{ article.title }}</h2>
            <span class="date-float-right">{{ formatDate(article.createdAt) }}</span>
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
      .only(['title', 'description', 'img', 'slug', 'author', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      articles
    }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>
<style scoped>
a, a:visited {
  text-decoration: none;
  color: #472d30
}
a:hover {
  text-decoration: underline;
  color: #526488;
}
.blogcard {
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 0.5em;
  margin: 0.5em;
  width: 60%;
}
.blogindex {
  margin-left: 10%;
}
.blogheading {
  color: #472d30;
  font-size: 40px;
  padding-left: 10px;
}
.date-float-right {
  float: right;
}
</style>
