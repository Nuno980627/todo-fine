<template>
  <div>
    <div
      v-if="type === 0"
      @dblclick="dbclick"
      class="mission"
      :style="{ color: item.state ? '#c4c4c4' : '' }"
    >
      <div>
        <el-checkbox
          :disabled="item.isUploading"
          v-model="item.state"
        ></el-checkbox>
      </div>
      <div>
        {{ item.info }}
      </div>
      <div>
        <el-dropdown v-if="!item.isUploading" trigger="click">
          <span class="el-dropdown-link">
            <i
              :style="{ color: item.state ? '#c4c4c4' : '' }"
              class="el-icon-more"
            ></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <i class="el-icon-close"></i>删除</el-dropdown-item
            >
            <el-dropdown-item v-if="!item.important">
              <i class="el-icon-star-off"></i>特别事件</el-dropdown-item
            >
            <el-dropdown-item v-else-if="item.important">
              <i style="color:#ff9090;" class="el-icon-star-off"></i
              >取消特别</el-dropdown-item
            >
            <el-dropdown-item>
              <i class="el-icon-time"></i>定时</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
        <i v-else class="el-icon-loading"/>
      </div>
    </div>
    <el-input
      v-else-if="type === 1"
      ref="input"
      type="textarea"
      placeholder="请输入内容"
      v-model="item.info"
      autosize
      resize="none"
      style="width:97%;margin:8px;"
      autofocus
      @blur="inputBlur"
    >
    </el-input>
  </div>
</template>

<script>
export default {
  name: 'MissionItem',
  data() {
    return {
      type: 0,
      base: '',
    }
  },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    dbclick() {
      if (this.item.isUploading) {
        return
      }
      this.type = 1
      this.base = this.item.info
      this.$nextTick(() => {
        this.$refs.input.focus()
      })
    },
    inputBlur() {
      this.type = 0
      if (this.item.info !== this.base) {
        console.log('change')
      } else {
        console.log('nochange')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.mission {
  color: #616161;
  font-weight: 500;
  padding: 8px 6px;
  border-bottom: 1px solid #e3e3e3;
  display: flex;
  align-content: center;
  margin-top: 5px;
  margin-bottom: 1px;
  div:nth-child(1) {
    width: 5%;
    text-align: center;
    >>> .el-checkbox__input.is-checked .el-checkbox__inner {
      background-color: #c4c4c4;
      border-color: #f2f2f2;
    }
  }
  div:nth-child(2) {
    flex: 1;
    line-height: 18.4px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  div:nth-child(3) {
    width: 3%;
    cursor: pointer;
  }
}
</style>
