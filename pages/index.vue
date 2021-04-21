<template>
  <div class="container">
    <div>
      <h3 class="title">Hi. I'm Shreyas.</h3>
      <div class="subtitle">
        <span> I'm a Software Engineer working at IBM. </span>
        <br />
        <span>
          Read more
          <a href="/aboutme" target="_blank" rel="noopener noreferrer">
            about me
          </a>
          or check out my
          <a href="/blog" target="_blank" rel="noopener noreferrer">
            blog.
          </a></span
        >
        <br />
        <span
          >I may also be tinkering on a few
          <a href="/aboutme" target="_blank" rel="noopener noreferrer">
            projects
          </a></span
        >
      </div>
    </div>
  </div>
</template>

<style>
.container {
  margin: 0 auto;
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #472d30;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 30px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
