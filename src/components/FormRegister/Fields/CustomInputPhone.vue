<template>
  <div class="input-group">
    <span>Номер телефона</span>
    <input
      name="phone"
      type="text"
      placeholder="Введите номер телефона"
      v-model.trim="phone"
      @blur="handleInputPhone"
      class="field"
    />
    <small v-if="$v.phone.$dirty && !$v.phone.isPhone" class="helper-text">
      Введено не корректное значение
    </small>
  </div>
</template>

<script>
import { isPhone } from "@/validators";

export default {
  name: "CustomInputPhone",
  validations: {
    phone: { isPhone }
  },
  data: () => ({
    phone: ""
  }),
  methods: {
    handleInputPhone() {
      let phone;

      if (this.$v.$invalid) {
        this.$v.$touch();
        phone = "";
      } else {
        phone = this.phone;
      }

      this.$emit("handleInputPhone", phone);
    }
  }
};
</script>
