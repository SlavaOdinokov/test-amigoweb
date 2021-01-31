<template>
  <div class="input-group">
    <div class="select">
      <span class="input__label">Язык</span>
      <p
        @click="areOptionsVisible = !areOptionsVisible"
        class="select__name field"
        :class="{ focus: areOptionsVisible, selected: selected !== 'Язык' }"
      >
        {{ selected }}
      </p>
      <div v-if="areOptionsVisible" class="options">
        <p
          class="options-items"
          v-for="(option, index) in options"
          :key="index"
          @click="selectOption(option)"
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
  props: {
    selected: {
      type: String,
      default: ""
    }
  },
  data: () => ({
    areOptionsVisible: false,
    options: ["Русский", "Английский", "Китайский", "Испанский"]
  }),
  methods: {
    selectOption(value) {
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
@import "@/assets/styles/global.scss";

.select {
  position: relative;

  &__name {
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    font-size: 16px;
    line-height: 21px;
    color: $light-blue-text;

    &::after {
      content: url(/images/select-arrow.svg);
      width: 30px;
      height: 30px;
    }
  }
}
.options {
  padding: 12px 0;
  position: absolute;
  z-index: 2;
  background: #fff;
  width: 100%;
  top: 83px;
  left: 0;
  border: 1px solid $light-gray;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04),
    0px 20px 20px rgba(44, 39, 56, 0.04);
  border-radius: 6px;
}
.options-items {
  padding: 11px 15px;
  color: $gray;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: $light-gray-text;
  }
}
.focus {
  color: $black-text;
  border: 2px solid $dark-blue;
}
.selected {
  color: $black-text;
}
</style>
