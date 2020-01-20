<template>
  <div id="app">
    <p>Hello World!</p>
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "app",
  components: {}
})
export default class App extends Vue {
  private create() {
    console.log("started!");
  }
}
</script>
