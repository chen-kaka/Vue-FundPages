<template>
  <div class="container">
      <mt-header fixed title="基金详情">
          <router-link to="/" slot="left">
              <mt-button icon="back">返回</mt-button>
          </router-link>
      </mt-header>
      <div>
          <div>{{itemData.name}} (股票代码：{{itemData.code}})</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    let itemData = this.$route.params.data
    if (!itemData) {
      itemData = {}
    }
    alert(JSON.stringify(itemData))
    return {
      itemData: itemData
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container{
        border:1px solid #ddd;
    }
</style>
