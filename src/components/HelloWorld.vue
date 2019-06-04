<template>
  <div class="hello">
    <div class="ui container grid">
      <div class="one column row">
        <div class="column"><a class="ui huge green button" onclick="location.reload()">再來！</a></div>
      </div>
      <div class="two column doubling row" id="poet">
        <div class="six wide column ui teal segment">
          <h1>拾詩氏</h1><img src="http://lorempixel.com/400/200/animals/" />
          <hr />
          <div class="ui list">
            <div class="item" v-for="(p, idx) in poet" v-bind:key="idx">
              <h2>{{ parse(p) }}</h2>
            </div>
          </div>
        </div>
        <div class="ten wide column left aligned ui black segment">
          <h1>小道小報 {{ today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() }}</h1>
          <InArticleAdsense data-ad-client="ca-pub-7209910540592367" data-ad-slot="8130621052"></InArticleAdsense>
          <h2>(本報訊)</h2>
          <div class="ui bulleted celled list">
            <div class="item" v-for="(n, idx) in newsList" v-bind:key="idx">
              <h3>{{ parse(n) }}</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="one column row">
        <div class="column ui segment">
          <InArticleAdsense data-ad-client="ca-pub-7209910540592367" data-ad-slot="8130621052"></InArticleAdsense>
        </div>
      </div>
      <div class="one column row">
        <div class="column"><a class="ui huge green button" onclick="location.reload()">再來！</a></div>
      </div>
      <div class="one column row">
        <div class="column">
          <div class="fb-comments" data-href="http://xikxik.bestian.tw" data-width="" data-numposts="5"></div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      today: new Date()
    }
  },
  props: ['xikxik', 'newsList', 'poet'],
  methods: {
    p: function (k) {
      var list = this.xikxik[k]
      var r = Math.floor(Math.random() * list.length)
      return list[r]
    },
    parse: function (str) {
      var ans = str
      var list = Object.keys(this.xikxik).sort(function (a, b) { return b.length - a.length })
      for (var i = 0; i < list.length; i++) {
        var k = list[i]
        if (str.indexOf(k) > -1) {
          ans = ans.replace(k, this.p(k))
        }
      }
      var good = true
      for (var i$ = 0; i$ < list.length; i$++) {
        var j = list[i$]
        if (ans.indexOf(j) > -1) {
          good = false
        }
      }
      if (good) {
        return ans
      } else {
        return this.parse(ans)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}

#poet {
  font-family: 'Microsoft JhengHei', 'DFKai-SB', 'PMingLiU', 'Heiti TC', 'LiHei Pro', 'BiauKai';
}
</style>
