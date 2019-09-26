<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "黑体", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffc306;
}
body{
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}
html{
  font-size: 62.5%
}
.button{
  border-radius: 7px;
}
</style>
