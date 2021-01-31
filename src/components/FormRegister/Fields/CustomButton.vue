<template>
  <div class="input-group">
    <button class="custom-btn" type="submit" :disabled="isDisabled">
      Зарегистрироваться
    </button>
  </div>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    isDisabled: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/global.scss";

.input-group {
  margin-bottom: 0;
}
.custom-btn {
  height: 56px;
  background: $dark-blue;
  box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08),
    0px 4px 8px rgba(44, 39, 56, 0.08);
  border-radius: 6px;
  font-family: $font;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  color: $light-gray-text;
  transition: all 0.2s;

  &:disabled {
    background: $light-gray;
    color: $gray-text;
  }
  &:hover:enabled {
    box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.08),
      0px 24px 48px rgba(44, 39, 56, 0.16);
  }
  &:active:enabled {
    border: 2px solid rgba(44, 39, 56, 0.86);
  }
}
</style>
