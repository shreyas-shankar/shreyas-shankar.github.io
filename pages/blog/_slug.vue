<template>
    <div class=blogscreen>
        <h2 class="blogheading"> {{ article.title }}</h2>
        <nuxt-content :document="article" />
    </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  }
}
</script>
<style>
.blogscreen {
    width: 90%;
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom:5%;
    padding: 2%;
}
.blogheading {
  font-weight: 500;
  font-size: 50px;
  color: #526488;
  word-spacing: 5px;
  padding-top: 1%;
  padding-bottom: 1%;
  margin-bottom: 10px;
}
.nuxt-content p {
    width: 80%;
    font-size: 20px;
    display: block;
    margin-bottom: 20px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    /* color:#526488; */
  }
</style>
