<template lang="pug">
  .hello
    .ui.container.grid
      .one.column.row
        .column
          a.ui.huge.green.button(onclick="location.reload()") 再來！
      #poet.two.column.doubling.row
        .six.wide.column.ui.teal.segment
          h1 拾詩氏
          hr
          .ui.list
            .item(v-for="(p, idx) in poet" v-bind:key="idx")
              h2 {{ parse(p) }}
        .ten.wide.column.left.aligned.ui.black.segment
          h1 小道小報
          h2 (本報訊)
          .ui.bulleted.celled.list
            .item(v-for="(n, idx) in newsList" v-bind:key="idx")
              h3 {{ parse(n) }}
      .one.column.row
        .column.ui.segment
      .one.column.row
        .column
          a.ui.huge.green.button(onclick="location.reload()") 再來！

</template>


<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
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
