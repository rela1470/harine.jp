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

ul {
   list-style-type: none;
   padding: 0;
 }
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983 !important;;
}

#app {
  font-family: a-otf-jun-pro, sans-serif;
  font-style: normal;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #6BBC94;
  font-size: 90%;
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
.text-80 {
  font-size: 80%;
}

.button-link {
  border:2px solid;
  border-radius: 1em;
  -webkit-border-radius: 1em;
  -moz-border-radius: 1em;
  text-align: center;
  padding: 0.5em 2em;
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

.modal-content {

  border: none !important;
  border-radius: 0.5em !important;
  border-style: solid !important;
  border-width: 2px 2px 0px 2px !important;
  border-color: #6BBC94 !important;

  box-shadow: none !important;
  background: none !important;

  font-family: fot-tsukuardgothic-std, sans-serif !important;
  font-weight: 700 !important;
  font-style: normal !important;

  background: #6BBC94 !important;
  background-color: #6BBC94 !important;
  color: #FFFFFF !important;

}


.modal-content h5 {
  font-family: fot-tsukuardgothic-std, sans-serif;
  font-weight: 700;
  font-style: normal;

  background: #FFFFFF;
  color: #6BBC94;
  padding: 0.5em;
  border-radius: 0.5em;
}

.modal-service {

  border-radius: 0em 0em 0.5em 0.5em;

  box-shadow: none;
  background: none;

  font-family: fot-tsukuardgothic-std, sans-serif;
  font-weight: 700;
  font-style: normal;

  background: #FFFFFF;
  color: #6BBC94;

  margin: -1em;
  padding: 0.5em;

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
@media (min-width: 992px) {


  .modal-content h3 {
    font-family: fot-tsukuardgothic-std, sans-serif;
    font-weight: 700;
    font-style: normal;

    background: #FFFFFF;
    color: #6BBC94;
    padding: 0.5em;
    border-radius: 0.5em;
    border-style: solid;
    border-width: 2px 2px 0px 2px;

    max-width: 500px;

    -webkit-transform: translateX(17px) translateY(110%);
    transform: translateX(-17px) translateY(-110%);

    z-index: -1;
    position: relative;
  }

  .modal-up {
    -webkit-transform: translateY(20%);
    transform:  translateY(-20%);
  }

}

</style>
