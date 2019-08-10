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
  font-family: a-otf-jun-pro, sans-serif;
  font-style: normal;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #6BBC94;
}

.name {
  border-bottom: solid 2px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;

  padding: 1em;
  margin-bottom: 1em;
}

.profile {
  border:2px solid;
  border-radius: 1em;
  -webkit-border-radius: 1em;
  -moz-border-radius: 1em;
  text-align: left;
  padding: 2em;
  margin: 1em;
}
.profile-2 {
  font-size: 80%;
}

.mail-box {
  border:2px solid;
  position: relative;
  display: inline-block;
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.mail-box p {
  position: absolute;
  display: inline-block;
  left: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  width :150px;
  text-align:center;
}

h2 {
  font-family: fot-tsukuardgothic-std, sans-serif;
  font-weight: 700;
  font-style: normal;
  border-bottom: solid 2px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}


h3 {
  font-family: fot-tsukuardgothic-std, sans-serif;
  font-weight: 700;
  font-style: normal;
}

h5 {
  font-family: fot-tsukuardgothic-std, sans-serif;
  font-weight: 700;
  font-style: normal;

  background: #6BBC94; /*背景色*/
  padding: 0.5em;/*文字周りの余白*/
  color: white;/*文字を白に*/
  border-radius: 0.5em;/*角の丸み*/
}
@media (min-width: 768px) {
  .serviceUp {
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);/*位置調整*/
  }
  .serviceDown {
    -webkit-transform: translateY(+50%);
    transform: translateY(+50%);/*位置調整*/
  }
  .serviceCenter {
    -webkit-transform: translateY(+55%);
    transform: translateY(+55%);/*位置調整*/
  }
}

</style>
