<template>
  <div id="app">
    <div class="ui labeled icon menu">
      <router-link class="item" to="/"><i class="home icon"></i>首頁</router-link>
      <router-link class="item" to="/custom"><i class="pencil alternate icon"></i>自訂元素</router-link>
      <router-link class="item" to="/editPoet"><i class="random icon"></i>自訂小詩</router-link>
      <router-link class="item" to="/editnews"><i class="copy icon"></i>自訂小報</router-link>
      <router-link class="item" to="/zoo"><i class="universal access icon"></i>隨機圖</router-link>
      <div class="right menu"><a class="item" href="https://github.com/bestian/xikxik/" target="_blank"><i class="github icon"></i>專案網址</a>
        <div class="item">
          <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fxikxik.bestian.tw&amp;layout=button_count&amp;size=small&amp;appId=485195848253155&amp;width=70&amp;height=20" width="70" height="20" style="border:none;overflow:hidden;" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        </div>
      </div>
    </div>
    <router-view :xikxik="$localStorage.xikxik" :newsList="$localStorage.newsList" :poet="$localStorage.poet" @add="add" @del="del" @reset="reset" @addNews="addNews" @delNews="delNews" @resetNews="resetNews" @addPoet="addPoet" @delPoet="delPoet" @resetPoet="resetPoet"></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
