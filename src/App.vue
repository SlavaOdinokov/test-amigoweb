<template>
  <div id="app">
    <FormRegister />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    FormRegister: () => import("@/components/FormRegister")
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/global.scss";

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
