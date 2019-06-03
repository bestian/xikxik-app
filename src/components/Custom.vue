<template lang="jade">
  <div class="hello">
    <div class="ui grid">
      <div class="ui two column row">
        <div class="column ui segment">
          <div class="ui horizontal list" v-for="k in Object.keys(xikxik)">
            <div class="item">
              <h3><a class="ui big button" @click="myList = k" :class="[myList !== k ? 'blue' : 'green']">{{ k }}</a></h3>
            </div>
          </div>
        </div>
        <div class="column ui segment">
          <div class="ui horizontal list">
            <div class="item ui form">
              <div class="ui input">
                <input v-model="myText" /><a class="ui green button" @click="add(myList, myText)">+</a>
              </div>
            </div>
            <hr />
            <div class="item" v-for="o in xikxik[myList]" v-if="o">
              <h3>{{ o }}<a class="ui red button" @click="del(myList, o)">x</a></h3>
            </div>
          </div>
        </div>
      </div>
      <div class="ui one column row">
        <div class="column ui segment"><a class="ui huge teal button" @click="reset()">重設!!</a></div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      myText: '',
      myList: 'animal'
    }
  },
  props: ['xikxik'],
  methods: {
    add: function (n, i) {
      this.$emit('add', n, i)
      this.myText = ''
    },
    del: function (n, i) {
      this.$emit('del', n, i)
    },
    reset: function () {
      this.$emit('reset')
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
