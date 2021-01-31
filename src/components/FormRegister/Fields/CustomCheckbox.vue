<template>
  <div class="input-group">
    <input
      id="check"
      type="checkbox"
      class="custom-checkbox"
      v-model="check"
      @change="$emit('handleCheck', check)"
    />
    <label for="check">
      Принимаю{{ "\xa0" }}
      <a href="#" class="form__link">условия</a>
      {{ "\xa0" }}использования
    </label>
  </div>
</template>

<script>
export default {
  name: "CustomCheckbox",
  data: () => ({
    check: false
  })
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/global.scss";

.input-group {
  display: flex;
  align-items: center;
  position: relative;
}
.custom-checkbox {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
  height: 100%;
}
label {
  display: flex;
  align-items: center;
}
.custom-checkbox + label:before {
  content: "";
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  display: inline-block;
  width: 22px;
  height: 22px;
  border: 1px solid $light-gray;
  box-sizing: border-box;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
  border-radius: 4px;
}
.custom-checkbox:checked + label:before {
  border: 2px solid $dark-blue;
  background-image: url(/images/check.svg);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
