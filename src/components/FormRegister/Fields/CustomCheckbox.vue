<template>
  <div class="input-group">
    <input
      id="check"
      type="checkbox"
      class="custom-checkbox"
      v-model="check"
      @change="$emit('handleCheck', check)"
    />
    <label for="check">Принимаю условия использования</label>
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
  margin-right: 10px;
  display: inline-block;
  width: 22px;
  height: 22px;
  border: 1px solid #dbe2ea;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
  border-radius: 4px;
}
.custom-checkbox:checked + label:before {
  background: #70aeff;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}
</style>
