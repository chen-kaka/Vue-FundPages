<template>
  <div class="maindiv">
    <mt-header fixed title="基金推荐">
    </mt-header>

    <!--<div align="center" class="titlediv">-->
      <!--<p>基金推荐</p>-->
      <!--<hr/>-->
    <!--</div>-->
    <div class="mainBox">
      <div>
        <p>更新日期: {{update_at}}</p>
        <hr/>
      </div>
      <mt-loadmore :top-method="loadTop" :bottom-all-loaded="allLoaded" ref="loadmore">
        <ul v-for="item in list">
            <router-link to="/detail">
          <div class="fund_name">
            <span>{{item.fields.name}}</span>
            (代码: <span>{{item.fields.code}}</span>)
            <span> 推荐排名： {{item.fields.rank}}</span>
          </div>
            </router-link>
          <div class="mainArea">
          <p>三年夏普比率：{{ item.fields.threeYearSharp }}</p>
          <p>三年风险系数: {{ item.fields.threeYearRisk }}</p>
          <p> 三年标准差: {{ item.fields.threeYearStandard }}</p>
          </div>
          <div>
              <span>基金经理：{{ item.fields.manager }} ，任职时间：{{ item.fields.manageStart }}</span><br/>
              <span>管理期收益：{{ item.fields.manageAchive }}，基金成立时间：{{ item.fields.establishDate }}</span>
          </div>
          <hr/>
        </ul>
      </mt-loadmore>
    </div>
    </div>
</template>

<script>
export default {
  name: 'main',
  data () {
    this.fetchData(0)
    return {
      msg: '推荐基金列表',
      bottomStatus: '',
      allLoaded: false,
      update_at: null,
      list: []
    }
  },
  methods: {
    loadTop (id) {
      this.fetchData(id)
      this.$refs.loadmore.onTopLoaded(id)
    },
    fetchData (id) {
      if (this.allLoaded) {
        return
      }
      // GET /someUrl
      this.$http.get('http://localhost:8000/mutual_fund/fetch_fundrecomend/').then(response => {
        // get body data
        let respList = response.body

        for (var i = 0, item; (item = respList[i]) != null; i++) {
          this.list.push(item)
        }
        let date = new Date()
        this.update_at = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' +
            date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
        this.allLoaded = true
      }, response => {
        // error callback
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mainBox{
    padding-top:50px;
  }
  .maindiv {
    padding-left: 15px;
    /*box-sizing: border-box;*/
    /*font-size: 36px;*/

  }
  .mainArea {
      padding-top: 10px;
      font-weight:bold;
      padding-bottom: 10px;
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
