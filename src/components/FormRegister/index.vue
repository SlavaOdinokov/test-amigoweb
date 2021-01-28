<template>
  <div class="form">
    <h3>Регистрация</h3>
    <div class="form__title-group">
      <span>Уже есть аккаунт? </span>
      <a href="!#">Войти</a>
    </div>
    <div v-for="(field, index) in fields" :key="index">
      <CustomInput :field="field" @handleInput="onInput" />
    </div>
    <CustomSelect @handleSelect="onSelected" />
    <CustomCheckbox />
    <CustomButton />
  </div>
</template>

<script>
import { fields } from "./setup";

export default {
  name: "FormRegister",
  components: {
    CustomButton: () => import("./Fields/CustomButton"),
    CustomCheckbox: () => import("./Fields/CustomCheckbox"),
    CustomInput: () => import("./Fields/CustomInput"),
    CustomSelect: () => import("./Fields/CustomSelect")
  },
  data: () => ({
    fields,
    formData: {
      name: "",
      email: "",
      phone: "",
      language: ""
    }
  }),
  methods: {
    onInput(data) {
      Object.keys(this.formData).forEach(item => {
        if (item === data.label) {
          this.formData[item] = data.value;
        }
      });
    },
    onSelected(value) {
      this.formData.language = value;
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  padding: 40px 30px;
  background: #fff;
  box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.02),
    0px 32px 64px rgba(44, 39, 56, 0.04);
  border-radius: 24px;

  &__title-group {
    margin-bottom: 55px;
  }
}
</style>
