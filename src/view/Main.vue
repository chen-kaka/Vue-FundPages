<template>
  <div class="f16">
    <div align="center" class="titlediv">
      <p>基金推荐</p>
      <hr/>
    </div>
    <div>
      <p>更新日期: {{update_at}}</p>
      <hr/>
    </div>
    <mt-loadmore :top-method="loadTop" :bottom-all-loaded="allLoaded" ref="loadmore">
        <ul v-for="item in list">
          <div class="fund_name">
            <span>{{item.fields.name}}</span>
            (代码: <span>{{item.fields.code}}</span>)
            <span> 推荐排名： {{item.fields.rank}}</span>
          </div>
          <p></p>
          <p>三年夏普比率：{{ item.fields.threeYearSharp }}</p>
          <p>三年风险系数: {{ item.fields.threeYearRisk }}</p>
          <p> 三年标准差: {{ item.fields.threeYearStandard }}</p>
          <div>
            <span>基金经理：{{ item.fields.manager }} ，任职时间：{{ item.fields.manageStart }}，管理期收益：{{ item.fields.manageAchive }}，基金成立时间：{{ item.fields.establishDate }}</span>
          </div>
          <hr/>
        </ul>
    </mt-loadmore>
  </div>
</template>

<script>

export default {
  name: 'main',
  data () {
    return {
      msg: '推荐基金列表',
      bottomStatus: '',
      allLoaded: false,
      update_at: '2017-03-24',
      list: []
    }
  },
  methods: {
    loadTop (id) {
      // GET /someUrl
      this.$http.get('http://192.168.0.102:8000/mutual_fund/fetch_fundrecomend/').then(response => {
        // get body data
        let respList = response.body

        for (var i = 0, item; (item = respList[i]) != null; i++) {
          this.list.push(item)
        }
      }, response => {
        // error callback
      })
      this.$refs.loadmore.onTopLoaded(id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .maindiv {
    /*padding-left: 15px;*/
    /*box-sizing: border-box;*/
    /*font-size: 36px;*/
  }
  .titlediv {
    /*height: 60px;*/
  }
  .fund_name {
    /*font-weight: 400;*/
    /*color: #424242;*/
    /*font-size: 42px;*/
  }
</style>
