<template>
  <div class="input-group">
    <!-- <select
      name="language"
      v-model="selected"
      @change="$emit('handleSelect', selected)"
    >
      <option selected disabled>Язык</option>
      <option v-for="(option, index) in options" :key="index">
        {{ option }}
      </option>
    </select> -->

    <div class="select">
      <p
        @click="areOptionsVisible = !areOptionsVisible"
        class="select__name field"
      >
        {{ selected }}
      </p>
      <div v-if="areOptionsVisible" class="options">
        <p
          class="options-items"
          v-for="(option, index) in options"
          :key="index"
          @click="clickSelect(option)"
        >
          {{ option }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomSelect",
  data: () => ({
    areOptionsVisible: false,
    selected: "Язык",
    options: ["Русский", "Английский", "Китайский", "Испанский"]
  }),
  methods: {
    clickSelect(value) {
      this.selected = value;
      this.$emit("handleSelect", value);
    },
    hideSelect() {
      this.areOptionsVisible = false;
    }
  },
  mounted() {
    document.addEventListener("click", this.hideSelect.bind(this), true);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.hideSelect());
  }
};
</script>

<style lang="scss" scoped>
.select {
  position: relative;

  &__name {
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    &::after {
      content: url(/images/select-arrow.svg);
      width: 30px;
      height: 30px;
    }
  }
}
.options {
  position: absolute;
  z-index: 2;
  background: #fff;
  width: 100%;
  top: 56px;
  left: 0;
  border: 1px solid #dbe2ea;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04),
    0px 20px 20px rgba(44, 39, 56, 0.04);
  border-radius: 6px;
}
.options-items {
  padding: 12px 15px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #ebf4f8;
  }
}
</style>
