<template>
  <div class="input-group">
    <span>{{ field.name }}</span>
    <input
      :name="field.label"
      type="text"
      :placeholder="field.placeholder"
      v-model="value"
      @blur="handleInput"
    />
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    field: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    value: ""
  }),
  methods: {
    handleInput() {
      this.$emit("handleInput", {
        label: this.field.label,
        value: this.value
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/global.scss";
</style>
