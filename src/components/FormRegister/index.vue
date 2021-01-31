<template>
  <form class="form" @submit.prevent="onSubmit" ref="form">
    <h3 class="form__heading">Регистрация</h3>
    <div class="form__title-group">
      <span>Уже есть аккаунт? </span>
      <a class="form__link" href="#">Войти</a>
    </div>
    <CustomInputName @handleInputName="onInputName" />
    <CustomInputEmail @handleInputEmail="onInputEmail" />
    <CustomInputPhone @handleInputPhone="onInputPhone" />
    <CustomSelect @handleSelect="onSelected" :selected="formData.language" />
    <CustomCheckbox @handleCheck="onCheck" />
    <CustomButton :isDisabled="isDisabled" />
  </form>
</template>

<script>
export default {
  name: "FormRegister",
  components: {
    CustomButton: () => import("./Fields/CustomButton"),
    CustomCheckbox: () => import("./Fields/CustomCheckbox"),
    CustomInputName: () => import("./Fields/CustomInputName"),
    CustomInputEmail: () => import("./Fields/CustomInputEmail"),
    CustomInputPhone: () => import("./Fields/CustomInputPhone"),
    CustomSelect: () => import("./Fields/CustomSelect")
  },
  data: () => ({
    isDisabled: true,
    formData: {
      name: "",
      email: "",
      phone: "",
      language: "Язык",
      checked: false
    }
  }),
  methods: {
    onInputName(value) {
      this.formData.name = value;
      this.validForm();
    },
    onInputEmail(value) {
      this.formData.email = value;
      this.validForm();
    },
    onInputPhone(value) {
      this.formData.phone = value;
      this.validForm();
    },
    onSelected(value) {
      this.formData.language = value;
      this.validForm();
    },
    onCheck(value) {
      this.formData.checked = value;
      this.validForm();
    },
    validForm() {
      const values = Object.values(this.formData);

      for (let i = 0; i <= values.length; i++) {
        if (values[i] === "" || values[i] === false || values[i] === "Язык") {
          this.isDisabled = true;
          return;
        }
      }

      this.isDisabled = false;
    },
    onSubmit() {
      console.log(this.formData);
      this.$refs.form.reset();
      this.formData = {
        name: "",
        email: "",
        phone: "",
        language: "Язык",
        checked: false
      };
      this.isDisabled = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/global.scss";

.form {
  width: 460px;
  min-width: 300px;
  padding: 40px 30px;
  background: #fff;
  box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.02),
    0px 32px 64px rgba(44, 39, 56, 0.04);
  border-radius: 24px;
  font-size: 16px;
  line-height: 22px;

  &__heading {
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 34px;
    line-height: 44px;
    color: $black-text;
  }
  &__title-group {
    margin-bottom: 56px;
    color: $black-text;
  }
}
</style>
