<template>
    <nav class="navbar">
      <a class="nav_button" href="/">Home</a>
      <a class="nav_button" href="/blog">Blog</a>
      <a class="nav_button" href="/about">About</a>
      <a class="nav_button" href="/projects">Projects</a>
    </nav>
</template>

<style scoped>
.navbar {
  width: 90%;
  margin-left: 10%;
  margin-right: 10%;
  padding-top: 1em;
  padding-right: 3em;
  padding-bottom: 1em;
}

.nav_button {
  padding-top: 8px;
  padding-left:12px;
  padding-right: 12px;
  padding-bottom: 8px;
  color: #472d30;
  height: 2em;
  font-style: normal;
  text-decoration: none;
  font-weight: 10;
}

.nav_button:hover {
  padding-top: 8px;
  padding-left:12px;
  padding-right: 12px;
  padding-bottom: 8px;
  color: white;
  background-color: #526488;
  height: 2em;
  text-decoration: none;
  font-weight: 10;
}
</style>
