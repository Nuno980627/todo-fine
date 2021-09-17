<template>
  <el-scrollbar class="menu-view scroll-page">
    <div class="menu-group">
      <div class="menu-title">special collections</div>
      <div class="menu-item active">
        <div class="left"><i class="iconfont icon-shoucang2"></i>特别TODO</div>
      </div>

    </div>

    <div class="menu-group">
      <div class="menu-title">normal collections</div>
    
      <div class="menu-item">
        <div class="left"><i class="iconfont icon-lishi"></i>普通TODO</div>
      </div>

    </div>


  </el-scrollbar>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.scroll-page {
  overflow: hidden;
  /deep/ .el-scrollbar__wrap {
    overflow-x: hidden;
  }
}

.menu-view {
  flex: 1;
  overflow: hidden;

  .menu-group {
    margin-bottom: 25px;
    padding: 0 20px;
    .menu-title {
      margin-bottom: 10px;
      font-size: 12px;
      padding-left: 10px;
      display: flex;
      align-items: center;
      color: #666;
      .left {
        flex: 1;
      }
      .right {
        width: 80px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .iconfont {
          font-size: 14px;
          color: #888;
          margin-left: 10px;
        }
      }
    }
    .menu-item {
      padding: 5px 10px;
      font-size: 13px;
      border-radius: 2px;
      margin-bottom: 5px;
      cursor: pointer;
      .left {
        .iconfont {
          margin-right: 10px;
        }
        .iconfont.hot {
          color: #ff4400;
        }
      }
    }
    .menu-item:hover {
      background: #e6e7e7;
    }

    .menu-item.active {
      background: #31c27c;
      color: #fff;
    }
  }
}
</style>
