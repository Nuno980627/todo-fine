<template>
  <div v-loading="loading" class="master-body">
    <master-header style="position: fixed;top: 50px;" />

    <div class="list">
      <creat-menu @creat-new="creatNew" />
      <mission-item
        v-for="(item, index) in missionList"
        :key="index"
        :item="item"
      />
      <div style="height:50px;" />
    </div>
  </div>
</template>

<script>
import MasterHeader from './MasterHeader'
import CreatMenu from './CreatMenu'
import MissionItem from './MissionItem'

export default {
  name: 'Master',
  components: {
    MasterHeader,
    CreatMenu,
    MissionItem
  },
  data() {
    return {
      loading: false,
      missionList: [
        {
          id: 1,
          info: 'todo第一条',
          state: true, // 是否完成
          type: 0, // 定时
          belone_id: 0,
          update_time: '',
          important: 0
        }
      ]
    }
  },
  methods: {
    creatNew(e) {
      this.missionList.unshift(e)
    }
  }
}
</script>

<style lang="scss" scoped>
.master-body {
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #f5f5f5;

  .list {
    margin: 10px;
    margin-top: 85px;
    overflow: auto;
  }
}
</style>
