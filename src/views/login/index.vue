<template>
  <div>Hello</div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

//类组件@Component 必写
@Component({
  name: "login"
})
export default class extends Vue {
  private loading: boolean = false; // data变量

  private get pageSize() {
    // 计算属性
    return 10;
  }

  private created() {}

  private mounted() {}

  private handleLogin() {} // methods方法

  public destroyed() {} // 销毁声明周期
}
</script>
