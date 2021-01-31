<template>
  <div class="input-group">
    <span>Имя</span>
    <input
      name="name"
      type="text"
      placeholder="Введите Ваше имя"
      v-model.trim="name"
      @blur="handleInputName"
    />
    <small v-if="$v.name.$dirty && !$v.name.isName" class="helper-text">
      Введено не корректное значение
    </small>
  </div>
</template>

<script>
import { isName } from "@/validators";

export default {
  name: "CustomInputName",
  validations: {
    name: { isName }
  },
  data: () => ({
    name: ""
  }),
  methods: {
    handleInputName() {
      let name;

      if (this.$v.$invalid) {
        this.$v.$touch();
        name = "";
      } else {
        name = this.name;
      }

      this.$emit("handleInputName", name);
    }
  }
};
</script>
