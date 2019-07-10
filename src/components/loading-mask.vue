<template>
  <div class="loading">
    <img class="loading-content" src="../assets/loading.gif" alt />
  </div>
</template>
<script>
export default {
  name: "LoadingMask",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  font-family: -apple-system;
}
.loading {
  opacity: 0.8;
  background-color: #fff;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: 0;
}
.loading-content {
  display: block;
  margin: 0 auto;
  width: 400px;
  height: 300px;
  position: relative; /*脱离文档流*/
  top: 30%; /*偏移*/
}
.loading-img {
  width: 50%;
  height: 50%;
  display: inline-block;
  text-align: center;
}
</style>
