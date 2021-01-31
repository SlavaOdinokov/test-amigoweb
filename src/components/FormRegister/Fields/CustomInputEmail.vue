<template>
  <div class="input-group">
    <span>Email</span>
    <input
      name="email"
      type="text"
      placeholder="Введите ваш email"
      v-model.trim="email"
      @blur="handleInputEmail"
    />
    <small v-if="$v.email.$dirty && !$v.email.email" class="helper-text">
      Введено не корректное значение
    </small>
  </div>
</template>

<script>
import { email } from "vuelidate/lib/validators";

export default {
  name: "CustomInputEmail",
  validations: {
    email: { email }
  },
  data: () => ({
    email: ""
  }),
  methods: {
    handleInputEmail() {
      let email;

      if (this.$v.$invalid) {
        this.$v.$touch();
        email = "";
      } else {
        email = this.email;
      }

      this.$emit("handleInputEmail", email);
    }
  }
};
</script>
