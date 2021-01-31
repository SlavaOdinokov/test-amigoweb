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
.input-group {
  margin-bottom: 0;
}
.custom-btn {
  height: 56px;
  background: #0880ae;
  box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08),
    0px 4px 8px rgba(44, 39, 56, 0.08);
  border-radius: 6px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  color: #ebf4f8;
  transition: all 0.2s;

  &:disabled {
    background: #dbe2ea;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    color: #b1b5bf;
  }
}
</style>
