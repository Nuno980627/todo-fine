<template>
  <div class="master-body-header">
    <div class="title">Header中文示范123?</div>
    <div class="tools">
      <span class="tools-item"><i class="el-icon-star-off"></i> </span>
      <span class="tools-item"
        ><el-popconfirm title="确定删除该任务吗？">
          <i class="el-icon-delete" slot="reference"></i>
        </el-popconfirm>
      </span>
    </div>
  </div>
</template>

<script>
export default {
    name:'MasterHeader'
}
</script>

<style lang="scss" scoped>
  .master-body-header {
    width: 100%;
    height: 73px;
    overflow: hidden;
    background-color: #fafafa;
    display: flex;
    .title {
      color: #565656;
      font-size: 25px;
      font-weight: 600;
      margin: 23px;
      width: 50%;
    }
    .tools {
      align-self: flex-end;
      margin-bottom: 20px;
      width: 18%;
      text-align: right;
      .tools-item {
        margin: 0 5px;
        cursor: pointer;
      }
    }
  }
</style>
