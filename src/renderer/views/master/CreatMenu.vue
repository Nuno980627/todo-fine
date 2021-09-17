<template>
  <div>
    <div v-if="type === 'button'" @click="generate" class="generate">
      <div>+</div>
      <div>新建任务</div>
    </div>
    <div v-else class="textarea_wrap">
      <el-input
        ref="input"
        type="textarea"
        placeholder="请输入内容"
        v-model="textarea"
        autosize
        resize="none"
        style="width:100%;"
        autofocus
        @blur="inputBlur"
      >
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreatMenu',
  data() {
    return {
      type: 'button',
      textarea: '',
    }
  },
  methods: {
    generate() {
      this.type = 'input'
      this.$nextTick(() => {
        this.$refs.input.focus()
      })
    },
    inputBlur() {
      this.type = 'button'
      if (this.textarea) {
        this.$emit('creat-new',{
          id: 1,
          info: this.textarea,
          state: false, //是否完成
          type: 0, //定时
          belone_id: 0,
          update_time: '',
          important: 0,
          isUploading:true
        })
        this.textarea = ''
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.generate {
  color: #31c27c;
  font-weight: 600;
  padding: 6px;
  border-bottom: 1px solid #31c27c;
  display: flex;
  align-content: center;
  cursor: pointer;
  div:nth-child(1) {
    width: 5%;
    text-align: center;
  }
  div:nth-child(2) {
    line-height: 18.4px;
  }
}
.textarea_wrap {
  width: 97%;
  margin: 0 auto;
}
</style>
